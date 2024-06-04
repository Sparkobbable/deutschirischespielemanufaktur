import { createRef, useState } from "react";
import { ApiService } from "../../utils/ApiService";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

export default function Contact() {
	const recaptchaRef = createRef();

	const api = new ApiService();

	const navigate = useNavigate();

	const [title, setTitle] = useState();

	const [content, setContent] = useState();

	const [email, setEmail] = useState();

	const [privacyAccepted, setPrivacyAccepted] = useState(false);

	const [formErrors, setFormErrors] = useState([]);

	const [messageId, setMessageId] = useState();

	function validateForm() {
		setFormErrors([]);
		const errors = [];
		if (!title) {
			errors.push("title");
		}
		if (!email) {
			errors.push("email");
		}

		if (!privacyAccepted) {
			errors.push("privacy");
		}
		setFormErrors(errors);
		return errors;
	}

	async function send() {
		const errors = validateForm();
		if (errors.length > 0) {
			return;
		}
		const token = await recaptchaRef.current.executeAsync();

		const request = {
			title: title,
			content: content,
			email: email,
			captchaToken: token,
		};
		document.getElementById("loading").showModal();
		api.sendMessage(request)
			.then((res) => {
				if (res.status === 200) {
					setMessageId(res.data);
					document.getElementById("loading").close();
					document.getElementById("messagereturn").showModal();
				}
			})
			.catch((e) => {
				document.getElementById("loading").close();
				document.getElementById("messageerror").showModal();
			});
	}

	return (
		<>
			<div className="w-full text-center">
				<h1 className="text-headline text-2xl font-bold">Kontakt</h1>
			</div>
			<p className="mt-5 w-1/2 mx-auto">
				Für Anfragen, Anregungen und Feedback bitte das Formular nutzen:
			</p>
			<form className="mt-5 w-full text-center">
				<div className="lg:w-1/2  flex justify-between mx-auto">
					<p className="translate-y-2">E-Mail: </p>
					<input
						type="email"
						className={`input ${
							formErrors.includes("email")
								? "input-error"
								: "input-bordered"
						} w-1/2`}
						placeholder="E-Mail Adresse"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="lg:w-1/2  flex justify-between mx-auto mt-3">
					<p className="translate-y-2">Titel der Nachricht: </p>
					<input
						type="text"
						className={`input ${
							formErrors.includes("title")
								? "input-error"
								: "input-bordered"
						} w-1/2`}
						placeholder="Titel"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="lg:w-1/2  flex justify-between mx-auto mt-3">
					<p className="translate-y-2">Nachricht: </p>
					<textarea
						className="textarea textarea-bordered w-1/2"
						placeholder="Nachricht"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
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
						Dich einverstanden, dass Deine E-Mail für die Abwicklung
						der Nachricht gespeichert und genutzt werden darf.
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
						send();
					}}
					className="btn bg-headline w-1/2 mx-auto mt-5 border-none"
				>
					Nachricht senden
				</button>
			</form>
			<ReCAPTCHA
				sitekey="6LfWBDUpAAAAAD0sCMmmyjsiAW8xtTgEf1njMndI"
				size="invisible"
				ref={recaptchaRef}
				onErrored={(e) => console.error(e)}
			/>
			<dialog id="messagereturn" className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Nachricht versendet!</h3>
					<p className="py-4">
						Nachricht mit der Nummer #{messageId} erfolgreich
						verschickt.
					</p>
					<p className="py-4">
						Wir werden Sie über die angegebene E-Mail kontaktieren.
					</p>
					<div className="modal-action">
						<form method="dialog">
							<button className="btn">Schließen</button>
						</form>
					</div>
				</div>
			</dialog>
			<dialog id="messageerror" className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg text-error">Fehler!</h3>
					<p className="py-4">
						Bei der Versendung der Nachricht ist ein Fehler
						aufgetreten. Bitte kontaktieren Sie uns per E-Mail an
						spielemanufaktur@outlook.com
					</p>
					<div className="modal-action">
						<form method="dialog">
							<button className="btn">Schließen</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
}
