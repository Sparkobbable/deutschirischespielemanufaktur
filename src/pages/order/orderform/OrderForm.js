import {createRef, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {EMAIL_REGEX} from "../../../utils/constants";
import {ApiService} from "../../../utils/ApiService";
import {useNavigate} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import {useLanguage} from "../../../utils/LanguageContext";

export default function OrderForm() {
    const [searchParams] = useSearchParams();
    const [quantity] = useState(searchParams.get("quantity"));
    const [item] = useState(searchParams.get("item"));

    const navigate = useNavigate();

    const recaptchaRef = createRef();

    const {language} = useLanguage();

    const apiService = new ApiService();

    const [countrys, setCountrys] = useState(
        ["Deutschland", "Irland", "Österreich", "Niederlande"].sort()
    );

    const [countrysEng, setCountrysEng] = useState(
        ["Germany", "Ireland", "Austria", "Netherlands"].sort()
    );

    const [sources, setSources] = useState(
        [
            "Ich kenne euch persönlich",
            "Ich kenne eure Berater",
            "Empfehlung durch Freunde",
            "Durch Euren Flyer",
            "Per Websuche",
            "Über Instagram",
            "Über Etsy",
            "Über Amazon Marketplace",
        ].sort()
    );

    const [sourcesEng, setSourcesEng] = useState(
        [
            "I know you personally",
            "I know your consultants",
            "Recommendation by friends",
            "Through your flyer",
            "Via web search",
            "Via Instagram",
            "Via Etsy",
            "Via Amazon Marketplace",
        ].sort()
    );

    const [foundBy, setFoundBy] = useState();

    const [customer, setCustomer] = useState({});
    const [gender, setGender] = useState();
    const [country, setCountry] = useState();

    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    const [formErrors, setFormErrors] = useState([]);

    const [orderId, setOrderId] = useState();

    function validateForm() {
        setFormErrors([]);
        const errors = [];
        if (!customer.gender) {
            errors.push("gender");
        }
        if (!customer.firstName) {
            errors.push("firstName");
        }
        if (!customer.surename) {
            errors.push("surename");
        }
        if (!customer.adressline) {
            errors.push("adressline");
        }
        if (!customer.postalCode) {
            errors.push("postalCode");
        }
        if (!customer.city) {
            errors.push("city");
        }
        if (!customer.country) {
            errors.push("country");
        }
        if (!customer.email || !EMAIL_REGEX.test(customer.email)) {
            errors.push("email");
        }

        if (!privacyAccepted) {
            errors.push("privacy");
        }
        setFormErrors(errors);
        return errors;
    }

    async function order() {
        const errors = validateForm();
        if (errors.length > 0) {
            return;
        }
        const token = await recaptchaRef.current.executeAsync();

        const request = {
            ...customer,
            itemId: item,
            quantity: quantity,
            foundBy: foundBy,
            captchaToken: token,
        };
        document.getElementById("loading").showModal();
        apiService
            .createOrder(request)
            .then((res) => {
                if (res.status === 201) {
                    setOrderId(res.data);
                    document.getElementById("loading").close();
                    document.getElementById("orderreturn").showModal();
                }
            })
            .catch((e) => {
                document.getElementById("loading").close();
                document.getElementById("ordererror").showModal();
            });
    }

    return (
        <>{language === 'de' ? <>
            <div className="w-full text-center -mt-7">
                <h1 className="text-headline text-2xl font-bold">
                    Bestellformular
                </h1>
            </div>
            <form className="mt-5 w-full text-center">
                <div className="lg:w-1/2  flex justify-between mx-auto">
                    <p className="translate-y-2">Anrede: </p>
                    <select
                        className={`select ${
                            formErrors.includes("gender")
                                ? "select-error"
                                : "select-bordered"
                        } w-1/2`}
                        value={gender}
                        onChange={(e) => {
                            setCustomer({
                                ...customer,
                                gender: e.target.options[
                                    e.target.selectedIndex
                                    ].getAttribute("data-key"),
                            });
                            setGender(e.target.value);
                        }}
                        aria-label="Anrede des Kunden"
                    >
                        <option disabled selected>
                            Anrede
                        </option>
                        <option key="W" data-key="W">
                            Frau
                        </option>
                        <option key="M" data-key="M">
                            Herr
                        </option>
                        <option key="D" data-key="D">
                            Neutrale Anrede
                        </option>
                        <option key="U" data-key="U">
                            Keine Angabe
                        </option>
                    </select>
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">Vorname: </p>
                    <input
                        type="text"
                        className={`input ${
                            formErrors.includes("firstName")
                                ? "input-error"
                                : "input-bordered"
                        } w-1/2`}
                        placeholder="Vorname"
                        value={customer.firstName}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                firstName: e.target.value,
                            })
                        }
                        aria-label="Vorname des Kunden"
                    />
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">Nachname: </p>
                    <input
                        type="text"
                        className={`input ${
                            formErrors.includes("surename")
                                ? "input-error"
                                : "input-bordered"
                        } w-1/2`}
                        placeholder="Nachname"
                        value={customer.surename}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                surename: e.target.value,
                            })
                        }
                        aria-label="Nachname des Kunden"
                    />
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">Unternehmen: </p>
                    <input
                        type="text"
                        className="input input-bordered w-1/2"
                        placeholder="Unternehmen (optional)"
                        value={customer.company}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                company: e.target.value,
                            })
                        }
                        aria-label="Unternehmen des Kunden (optional)"
                    />
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">Straße + Haus-Nr.: </p>
                    <input
                        type="text"
                        className={`input ${
                            formErrors.includes("adressline")
                                ? "input-error"
                                : "input-bordered"
                        } w-1/2`}
                        placeholder="Adresse"
                        value={customer.adressline}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                adressline: e.target.value,
                            })
                        }
                        aria-label="Adresse des Kunden"
                    />
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">PLZ: </p>
                    <input
                        type="text"
                        className={`input ${
                            formErrors.includes("postalCode")
                                ? "input-error"
                                : "input-bordered"
                        } w-1/2`}
                        placeholder="Postleitzahl"
                        value={customer.postalCode}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                postalCode: e.target.value,
                            })
                        }
                        aria-label="Postleitzahl des Kunden"
                    />
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">Stadt: </p>
                    <input
                        type="text"
                        className={`input ${
                            formErrors.includes("city")
                                ? "input-error"
                                : "input-bordered"
                        } w-1/2`}
                        placeholder="Stadt"
                        value={customer.city}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                city: e.target.value,
                            })
                        }
                        aria-label="Stadt des Kunden"
                    />
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">Land: </p>
                    <select
                        className={`select ${
                            formErrors.includes("country")
                                ? "select-error"
                                : "select-bordered"
                        } w-1/2`}
                        value={country}
                        onChange={(e) => {
                            setCustomer({
                                ...customer,
                                country:
                                    e.target.options[
                                        e.target.selectedIndex
                                        ].getAttribute("data-key"),
                            });
                            setCountry(e.target.value);
                        }}
                    >
                        <option disabled selected>
                            Land
                        </option>
                        {countrys.map((c) => (
                            <option key={c} data-key={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">E-Mail: </p>
                    <input
                        type="email"
                        className={`input ${
                            formErrors.includes("email")
                                ? "input-error"
                                : "input-bordered"
                        } w-1/2`}
                        placeholder="E-Mail Adresse"
                        value={customer.email}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                email: e.target.value,
                            })
                        }
                        aria-label="E-Mail Adresse des Kunden"
                    />
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">Telefonnummer: </p>
                    <input
                        type="text"
                        className="input input-bordered w-1/2"
                        placeholder="Telefonnummer (optional)"
                        value={customer.phoneNumber}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                phoneNumber: e.target.value,
                            })
                        }
                        aria-label="Telefonnummer des Kunden (optional)"
                    />
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">Bemerkung: </p>
                    <textarea
                        className="textarea textarea-bordered w-1/2"
                        placeholder="Bemerkung (optional)"
                        value={customer.comment}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                comment: e.target.value,
                            })
                        }
                        aria-label="Bemerkung des Kunden (optional)"
                    />
                </div>
                <div className="lg:w-1/2 mt-3 flex justify-between mx-auto">
                    <p className="w-1/2 text-start">
                        Wie bist du auf uns aufmerksam geworden? (optional):{" "}
                    </p>
                    <select
                        className="select select-bordered w-1/2"
                        value={foundBy}
                        onChange={(e) => {
                            setFoundBy(e.target.value);
                        }}
                    >
                        <option disabled selected>
                            Keine Angabe
                        </option>
                        {sources.map((s) => (
                            <option key={s}>{s}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control lg:w-1/2 mx-auto mt-3">
                    <label className="label cursor-pointer justify-start">
                        <input
                            type="checkbox"
                            checked={privacyAccepted}
                            className={`checkbox ${
                                formErrors.includes("privacy")
                                    ? "checkbox-error"
                                    : ""
                            }`}
                            onChange={() =>
                                setPrivacyAccepted(!privacyAccepted)
                            }
                        />
                        <span className="label-text ml-2">
							Es gilt die{" "}
                            <span
                                className="label-text text-href cursor-pointer"
                                onClick={() => navigate("/privacy")}
                            >
								Datenschutzerklärung
							</span>
							.
						</span>
                    </label>
                    <p className="text-xs text-start">
                        Mit dem Häkchen zur Datenschutzerklärung erklärst Du
                        Dich einverstanden, dass Dein Name, Deine Adresse und
                        Deine E-Mail für die Abwicklung der Bestellung
                        gespeichert und genutzt werden darf.
                    </p>
                </div>
                {formErrors.length > 0 && (
                    <label className="label w-1/2 mx-auto -mb-5">
						<span className="label-text-alt text-error">
							Es sind nicht alle Pflichtfelder korrekt befüllt!
						</span>
                    </label>
                )}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        order();
                    }}
                    className="btn bg-headline w-1/2 mx-auto mt-5 border-none"
                >
                    Jetzt verbindlich bestellen
                </button>
            </form>
            <ReCAPTCHA
                sitekey="6LfWBDUpAAAAAD0sCMmmyjsiAW8xtTgEf1njMndI"
                size="invisible"
                ref={recaptchaRef}
                onErrored={(e) => console.error(e)}
            />
            <label htmlFor="g-recaptcha-response-1" aria-label="Sicherheitsüberprüfung Captcha"></label>
            <dialog id="orderreturn" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Bestellung erfolgreich!
                    </h3>
                    <p className="py-4">
                        Bestellung mit der Bestellnummer #{orderId} erfolgreich
                        aufgegeben.
                    </p>
                    <p className="py-4">
                        Wir werden Sie über die angegebene E-Mail kontaktieren.
                        Auf diesem Weg erhalten Sie die Rechnung und
                        Informationen zur Bestellung. Bitte prüfen Sie auch
                        Ihren Spam-Ordner.
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Schließen</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <dialog id="ordererror" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-error">Fehler!</h3>
                    <p className="py-4">
                        Bei der Bestellung ist ein Fehler aufgetreten. Bitte
                        kontaktieren Sie uns.
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Schließen</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </> : <>
            <div className="w-full text-center -mt-7">
                <h1 className="text-headline text-2xl font-bold">
                    Order form
                </h1>
            </div>
            <form className="mt-5 w-full text-center">
                <div className="lg:w-1/2  flex justify-between mx-auto">
                    <p className="translate-y-2">Title: </p>
                    <select
                        className={`select ${
                            formErrors.includes("gender")
                                ? "select-error"
                                : "select-bordered"
                        } w-1/2`}
                        value={gender}
                        onChange={(e) => {
                            setCustomer({
                                ...customer,
                                gender: e.target.options[
                                    e.target.selectedIndex
                                    ].getAttribute("data-key"),
                            });
                            setGender(e.target.value);
                        }}
                        aria-label="Title of the customer"
                    >
                        <option disabled selected>
                            Title
                        </option>
                        <option key="W" data-key="W">
                            Mrs.
                        </option>
                        <option key="M" data-key="M">
                            Mr.
                        </option>
                        <option key="D" data-key="D">
                            Neutral Title
                        </option>
                        <option key="U" data-key="U">
                            None
                        </option>
                    </select>
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">Firstname: </p>
                    <input
                        type="text"
                        className={`input ${
                            formErrors.includes("firstName")
                                ? "input-error"
                                : "input-bordered"
                        } w-1/2`}
                        placeholder="Firstname"
                        value={customer.firstName}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                firstName: e.target.value,
                            })
                        }
                        aria-label="Firstname of the customer"
                    />
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">Surname: </p>
                    <input
                        type="text"
                        className={`input ${
                            formErrors.includes("surename")
                                ? "input-error"
                                : "input-bordered"
                        } w-1/2`}
                        placeholder="Surname"
                        value={customer.surename}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                surename: e.target.value,
                            })
                        }
                        aria-label="Surname of the customer"
                    />
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">Company: </p>
                    <input
                        type="text"
                        className="input input-bordered w-1/2"
                        placeholder="Company (optional)"
                        value={customer.company}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                company: e.target.value,
                            })
                        }
                        aria-label="Company of the customer (optional)"
                    />
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">Street + Number: </p>
                    <input
                        type="text"
                        className={`input ${
                            formErrors.includes("adressline")
                                ? "input-error"
                                : "input-bordered"
                        } w-1/2`}
                        placeholder="Address"
                        value={customer.adressline}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                adressline: e.target.value,
                            })
                        }
                        aria-label="Address of the customer"
                    />
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">Postal code: </p>
                    <input
                        type="text"
                        className={`input ${
                            formErrors.includes("postalCode")
                                ? "input-error"
                                : "input-bordered"
                        } w-1/2`}
                        placeholder="Postal code"
                        value={customer.postalCode}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                postalCode: e.target.value,
                            })
                        }
                        aria-label="Postal code of the customer"
                    />
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">City: </p>
                    <input
                        type="text"
                        className={`input ${
                            formErrors.includes("city")
                                ? "input-error"
                                : "input-bordered"
                        } w-1/2`}
                        placeholder="City"
                        value={customer.city}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                city: e.target.value,
                            })
                        }
                        aria-label="City of the customer"
                    />
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">Country: </p>
                    <select
                        className={`select ${
                            formErrors.includes("country")
                                ? "select-error"
                                : "select-bordered"
                        } w-1/2`}
                        value={country}
                        onChange={(e) => {
                            setCustomer({
                                ...customer,
                                country:
                                    e.target.options[
                                        e.target.selectedIndex
                                        ].getAttribute("data-key"),
                            });
                            setCountry(e.target.value);
                        }}
                    >
                        <option disabled selected>
                            Country
                        </option>
                        {countrysEng.map((c) => (
                            <option key={c} data-key={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">E-Mail: </p>
                    <input
                        type="email"
                        className={`input ${
                            formErrors.includes("email")
                                ? "input-error"
                                : "input-bordered"
                        } w-1/2`}
                        placeholder="E-Mail Address"
                        value={customer.email}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                email: e.target.value,
                            })
                        }
                        aria-label="E-Mail Address of the customer"
                    />
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">Phone number: </p>
                    <input
                        type="text"
                        className="input input-bordered w-1/2"
                        placeholder="Phone number (optional)"
                        value={customer.phoneNumber}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                phoneNumber: e.target.value,
                            })
                        }
                        aria-label="Phone number of the customer (optional)"
                    />
                </div>
                <div className="lg:w-1/2  flex justify-between mx-auto mt-3">
                    <p className="translate-y-2">Comment: </p>
                    <textarea
                        className="textarea textarea-bordered w-1/2"
                        placeholder="Comment (optional)"
                        value={customer.comment}
                        onChange={(e) =>
                            setCustomer({
                                ...customer,
                                comment: e.target.value,
                            })
                        }
                        aria-label="Comment of the customer (optional)"
                    />
                </div>
                <div className="lg:w-1/2 mt-3 flex justify-between mx-auto">
                    <p className="w-1/2 text-start">
                        How did you discover us? (optional):{" "}
                    </p>
                    <select
                        className="select select-bordered w-1/2"
                        value={foundBy}
                        onChange={(e) => {
                            setFoundBy(e.target.value);
                        }}
                    >
                        <option disabled selected>
                            No answer
                        </option>
                        {sourcesEng.map((s) => (
                            <option key={s}>{s}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control lg:w-1/2 mx-auto mt-3">
                    <label className="label cursor-pointer justify-start">
                        <input
                            type="checkbox"
                            checked={privacyAccepted}
                            className={`checkbox ${
                                formErrors.includes("privacy")
                                    ? "checkbox-error"
                                    : ""
                            }`}
                            onChange={() =>
                                setPrivacyAccepted(!privacyAccepted)
                            }
                        />
                        <span className="label-text ml-2">
							I agree to the{" "}
                            <span
                                className="label-text text-href cursor-pointer"
                                onClick={() => navigate("/privacy")}
                            >
								privacy policy
							</span>
							.
						</span>
                    </label>
                    <p className="text-xs text-start">
                        By checking the box for the privacy policy, you agree
                        that your name, address, and e-mail may be stored and
                        used for processing the order.
                    </p>
                </div>
                {formErrors.length > 0 && (
                    <label className="label w-1/2 mx-auto -mb-5">
						<span className="label-text-alt text-error">
							Not all required fields are filled out correctly!
						</span>
                    </label>
                )}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        order();
                    }}
                    className="btn bg-headline w-1/2 mx-auto mt-5 border-none"
                >
                    Order now
                </button>
            </form>
            <ReCAPTCHA
                sitekey="6LfWBDUpAAAAAD0sCMmmyjsiAW8xtTgEf1njMndI"
                size="invisible"
                ref={recaptchaRef}
                onErrored={(e) => console.error(e)}
            />
            <label htmlFor="g-recaptcha-response-1" aria-label="Security Captcha"></label>
            <dialog id="orderreturn" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Order successful!
                    </h3>
                    <p className="py-4">
                        Order with the order number #{orderId} has been placed
                        successfully.
                    </p>
                    <p className="py-4">
                        We will contact you via the provided e-mail. You will
                        receive the invoice and information about your order
                        this way. Please also check your spam folder.
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <dialog id="ordererror" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-error">Error!</h3>
                    <p className="py-4">
                        An error occurred while placing the order. Please
                        contact us.
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>}
        </>
    );
}
