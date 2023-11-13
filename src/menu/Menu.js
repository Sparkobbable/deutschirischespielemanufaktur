import logo from "../assets/logo.png";

export default function Menu() {
	return (
		<>
			<div className="flex flex-col justify-between h-full">
				<div className="block h-3/4">
					<div className="font-bold h-1/10 border-b-2 border-grey mx-5">
						<p className="text-center translate-y-3/4">Menu</p>
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer h-1/10 border-b-2 border-grey mx-5">
						<p className="text-center translate-y-3/4">Über uns</p>
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer h-1/10 border-b-2 border-grey mx-5">
						<p className="text-center translate-y-3/4">Spielidee</p>
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer h-1/10 border-b-2 border-grey mx-5">
						<p className="text-center translate-y-3/4">
							Regeln & Varianten
						</p>
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer h-1/10 border-b-2 border-grey mx-5">
						<p className="text-center translate-y-3/4">
							Bestellungen
						</p>
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer h-1/10 border-b-2 border-grey mx-5">
						<p className="text-center translate-y-3/4">
							Datenschutzerklärung
						</p>
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer h-1/10 border-b-2 border-grey mx-5">
						<p className="text-center translate-y-3/4">Impressum</p>
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer h-1/10 border-b-2 border-grey mx-5">
						<p className="text-center translate-y-3/4">Kontakt</p>
					</div>
				</div>
				<img src={logo} alt="Deutsch-Irische Spielemanufaktur"></img>
			</div>
		</>
	);
}
