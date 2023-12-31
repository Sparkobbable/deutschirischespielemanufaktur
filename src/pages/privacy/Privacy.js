import privacyPdf from "../../assets/privacy.pdf";

export default function Privacy() {
	return (
		<>
			<div className="w-full text-center">
				<h1 className="text-headline text-2xl font-bold mb-4">
					Datenschutzerklärung
				</h1>
			</div>
			<a className="text-href text-start" href={privacyPdf} download>
				Klicken zum Herunterladen der Datenschutzerklärung
			</a>
		</>
	);
}
