import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

export default function DesktopMenu() {
	const navigate = useNavigate();

	const { pathname } = useLocation();

	const [isHome, setIsHome] = useState(true);

	useEffect(() => {
		setIsHome(pathname === "/");
	}, [pathname]);

	function navigateTo(path) {
		navigate(path);
	}

	return (
		<>
			<div className="flex flex-row justify-between w-full bg-grey opacity-90">
				<div className="flex flex-row justify-between w-3/4 pl-5">
					<div
						className={
							!isHome
								? "hover:cursor-pointer w-auto border-b-2 border-grey flex flex-col justify-center"
								: "font-bold border-b-2 border-grey flex flex-col justify-center"
						}
						onClick={() => navigateTo("/")}
					>
						<p className="text-center
">
							{isHome ? "Menu" : "Home"}
						</p>
					</div>
					<div
						onClick={() => navigateTo("/about")}
						className="hover:cursor-pointer border-b-2 border-grey flex flex-col justify-center"
					>
						<p className="text-center
">Über uns</p>
					</div>
					<div
						onClick={() => navigateTo("/idea")}
						className="hover:cursor-pointer border-b-2 border-grey flex flex-col justify-center"
					>
						<p className="text-center
">
							Spielidee
						</p>
					</div>
					<div
						onClick={() => navigateTo("/rules")}
						className="hover:cursor-pointer border-b-2 border-grey flex flex-col justify-center"
					>
						<p className="text-center
">
							Regeln & Varianten
						</p>
					</div>
					<div
						onClick={() => navigateTo("/order")}
						className="hover:cursor-pointer border-b-2 border-grey flex flex-col justify-center"
					>
						<p className="text-center
">
							Bestellungen
						</p>
					</div>
					<div
						onClick={() => navigateTo("/privacy")}
						className="hover:cursor-pointer border-b-2 border-grey flex flex-col justify-center"
					>
						<p className="text-center
">
							Datenschutzerklärung
						</p>
					</div>
					<div
						onClick={() => navigateTo("/impressum")}
						className="hover:cursor-pointer border-b-2 border-grey flex flex-col justify-center"
					>
						<p className="text-center
">
							Impressum
						</p>
					</div>
					<div
						onClick={() => navigateTo("/contact")}
						className="hover:cursor-pointer border-b-2 border-grey flex flex-col justify-center"
					>
						<p className="text-center">Kontakt</p>
					</div>
				</div>
				<img
					src={logo}
					width="150px"
					alt="Deutsch-Irische Spielemanufaktur"
				></img>
			</div>
		</>
	);
}
