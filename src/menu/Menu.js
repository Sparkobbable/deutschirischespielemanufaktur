import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import buttonBg from "../assets/button_bg.png";
import { useEffect, useState } from "react";

export default function Menu() {
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
			<div className="flex flex-col justify-between h-full">
				<div className="block h-3/4">
					<div
						className={
							!isHome
								? "hover:cursor-pointer h-1/10 m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
								: "font-bold h-1/10 m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						}
						style={menuButtonStyle}
						onClick={() => navigateTo("/")}
					>
						<p className="text-center -translate-y-1/4">
							{isHome ? "Menu" : "Home"}
						</p>
					</div>
					<div
						onClick={() => navigateTo("/about")}
						className="hover:cursor-pointer h-1/10 m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center -translate-y-1/4">Über uns</p>
					</div>
					<div
						onClick={() => navigateTo("/idea")}
						className="hover:cursor-pointer h-1/10 m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center -translate-y-1/4">
							Spielidee
						</p>
					</div>
					<div
						onClick={() => navigateTo("/rules")}
						className="hover:cursor-pointer h-1/10 m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center -translate-y-1/4">
							Regeln & Varianten
						</p>
					</div>
					<div
						onClick={() => navigateTo("/order")}
						className="hover:cursor-pointer h-1/10 m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center -translate-y-1/4">
							Bestellungen
						</p>
					</div>
					<div
						onClick={() => navigateTo("/privacy")}
						className="hover:cursor-pointer h-1/10 m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center -translate-y-1/4">
							Datenschutzerklärung
						</p>
					</div>
					<div
						onClick={() => navigateTo("/impressum")}
						className="hover:cursor-pointer h-1/10 m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center -translate-y-1/4">
							Impressum
						</p>
					</div>
					<div
						onClick={() => navigateTo("/contact")}
						className="hover:cursor-pointer h-1/10 m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center -translate-y-1/4">Kontakt</p>
					</div>
				</div>
				<img
					src={logo}
					width="268px"
					alt="Deutsch-Irische Spielemanufaktur"
				></img>
			</div>
		</>
	);
}
