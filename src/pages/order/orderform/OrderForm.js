import { createRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EMAIL_REGEX } from "../../../utils/constants";
import { ApiService } from "../../../utils/ApiService";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

export default function OrderForm() {
	const [searchParams] = useSearchParams();
	const [quantity] = useState(searchParams.get("quantity"));
	const [item] = useState(searchParams.get("item"));

	// const recaptchaRef = createRef();

	const navigate = useNavigate();

	const apiService = new ApiService();

	const [countrys, setCountrys] = useState(
		[
			"Deutschland",
			"Irland",
			"Österreich",
			"Schweiz",
			"Großbritannien",
		].sort()
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

	const [foundBy, setFoundBy] = useState();

	const [customer, setCustomer] = useState({});
	const [gender, setGender] = useState();
	const [country, setCountry] = useState();

	const [privacyAccepted, setPrivacyAccepted] = useState(false);

	const [formErrors, setFormErrors] = useState([]);

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
		// const token = await recaptchaRef.current.executeAsync();

		// console.log(token);
		const request = {
			...customer,
			itemId: item,
			quantity: quantity,
			foundBy: foundBy,
			// captchaToken: token,
		};
		apiService.createOrder(request).then(() => navigate("/order"));
	}

	return (
		<>
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
							className={
								"checkbox" + formErrors.includes("privacy")
									? " checkbox-error"
									: ""
							}
							onChange={() =>
								setPrivacyAccepted(!privacyAccepted)
							}
						/>
						<span
							className="label-text cursor-pointer ml-2"
							onClick={() => navigate("/privacy")}
						>
							Es gilt die Datenschutzerklärung.
						</span>
					</label>
					<p className="text-xs text-start">
						Mit dem Häkchen zur Datenschutzerklärung erklärst Du
						Dich einverstanden, dass Dein Name, Deine Adresse und
						Dein E-Mail für die Abwicklung der Bestellung
						gespeichert und genutzt werden darf.
					</p>
				</div>
				{formErrors.length > 0 && (
					<label className="label w-1/2 mx-auto -mb-8">
						<span className="label-text-alt text-error">
							Es sind nicht alle Pflichtfelder korrekt befüllt!
						</span>
					</label>
				)}
				<button
					onClick={() => order()}
					className="btn bg-headline w-1/2 mx-auto mt-5 border-none"
				>
					Jetzt verbindlich bestellen
				</button>
			</form>
			{/* <ReCAPTCHA
				sitekey="6LfWBDUpAAAAAD0sCMmmyjsiAW8xtTgEf1njMndI"
				size="invisible"
				ref={recaptchaRef}
				onErrored={(e) => console.error(e)}
			/> */}
		</>
	);
}
