import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import buttonBg from "../assets/button_bg.png";
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

	const menuButtonStyle = {
		backgroundImage: `url(${buttonBg})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};

	return (
		<>
			<div className="flex flex-row justify-between w-full">
				<div className="flex flex-row justify-between w-11/12 pl-5">
					<div
						className={
							!isHome
								? "hover:cursor-pointer flex-grow m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
								: "font-bold flex-grow m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						}
						style={menuButtonStyle}
						onClick={() => navigateTo("/")}
					>
						<p className="text-center">
							{isHome ? "Menu" : "Home"}
						</p>
					</div>
					<div
						onClick={() => navigateTo("/about")}
						className="hover:cursor-pointer flex-grow m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center">Über uns</p>
					</div>
					<div
						onClick={() => navigateTo("/idea")}
						className="hover:cursor-pointer flex-grow m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center">
							Spielidee
						</p>
					</div>
					<div
						onClick={() => navigateTo("/rules")}
						className="hover:cursor-pointer flex-grow m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center">
							Regeln & Varianten
						</p>
					</div>
					<div
						onClick={() => navigateTo("/order")}
						className="hover:cursor-pointer flex-grow m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center">
							Bestellungen
						</p>
					</div>
					<div
						onClick={() => navigateTo("/privacy")}
						className="hover:cursor-pointer flex-grow m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center">
							Datenschutzerklärung
						</p>
					</div>
					<div
						onClick={() => navigateTo("/impressum")}
						className="hover:cursor-pointer flex-grow m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center">
							Impressum
						</p>
					</div>
					<div
						onClick={() => navigateTo("/contact")}
						className="hover:cursor-pointer flex-grow m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
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
