import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Menu() {
	const navigate = useNavigate();

	function navigateTo(path) {
		navigate(path);
	}

	return (
		<>
			<div className="flex flex-col justify-between h-full">
				<div className="block h-3/4">
					<div className="font-bold h-1/10 border-b-2 border-grey mx-5 flex flex-col justify-center">
						<p className="text-center -translate-y-1/4">Menu</p>
					</div>
					<div
						onClick={() => navigateTo("/about")}
						className="hover:bg-bgdark hover:cursor-pointer h-1/10 border-b-2 border-grey mx-5 flex flex-col justify-center"
					>
						<p className="text-center -translate-y-1/4">Über uns</p>
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer h-1/10 border-b-2 border-grey mx-5 flex flex-col justify-center">
						<p className="text-center -translate-y-1/4">
							Spielidee
						</p>
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer h-1/10 border-b-2 border-grey mx-5 flex flex-col justify-center">
						<p className="text-center -translate-y-1/4">
							Regeln & Varianten
						</p>
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer h-1/10 border-b-2 border-grey mx-5 flex flex-col justify-center">
						<p className="text-center -translate-y-1/4">
							Bestellungen
						</p>
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer h-1/10 border-b-2 border-grey mx-5 flex flex-col justify-center">
						<p className="text-center -translate-y-1/4">
							Datenschutzerklärung
						</p>
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer h-1/10 border-b-2 border-grey mx-5 flex flex-col justify-center">
						<p className="text-center -translate-y-1/4">
							Impressum
						</p>
					</div>
					<div className="hover:bg-bgdark hover:cursor-pointer h-1/10 border-b-2 border-grey mx-5 flex flex-col justify-center">
						<p className="text-center -translate-y-1/4">Kontakt</p>
					</div>
				</div>
				<img src={logo} alt="Deutsch-Irische Spielemanufaktur"></img>
			</div>
		</>
	);
}
