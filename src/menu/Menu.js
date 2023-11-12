import logo from "../assets/logo.png";

export default function Menu() {
	return (
		<>
			<div className="flex flex-col justify-between">
				<div className="block">
					<div className="font-bold">Menu</div>
					<div className="hover:bg-bgdark hover:cursor-pointer">
						Über uns
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer">
						Spielidee
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer">
						Regeln & Varianten
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer">
						Bestellungen
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer">
						Datenschutzerklärung
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer">
						Impressum
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer">
						Kontakt
					</div>
				</div>
				<img src={logo} alt="Menu"></img>
			</div>
		</>
	);
}
