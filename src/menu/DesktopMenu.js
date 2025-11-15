import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import buttonBg from "../assets/button_bg.png";
import { useEffect, useState } from "react";
import { useLanguage } from "../utils/LanguageContext";

export default function DesktopMenu() {
	const { pathname } = useLocation();
	const { language, toggleLanguage } = useLanguage();

	const [isHome, setIsHome] = useState(true);

	useEffect(() => {
		setIsHome(pathname === "/");
	}, [pathname]);

	function scrollToSection(section) {
		window.scrollToSection(section);
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
						onClick={() => scrollToSection("home")}
					>
						<p className="text-center">Home
						</p>
					</div>
					<div
						onClick={() => scrollToSection("about")}
						className="hover:cursor-pointer flex-grow m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center">{language === 'de' ? 'Über uns' : 'About'}</p>
					</div>
					<div
						onClick={() => scrollToSection("idea")}
						className="hover:cursor-pointer flex-grow m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center">
							{language === 'de' ? 'Spielidee' : 'Game idea'}
						</p>
					</div>
					<div
						onClick={() => scrollToSection("rules")}
						className="hover:cursor-pointer flex-grow m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center">
							{language === 'de' ? 'Regeln und Varianten' : 'Rules and Variants'}
						</p>
					</div>
					<div
						onClick={() => scrollToSection("order")}
						className="hover:cursor-pointer flex-grow m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center">
							{language === 'de' ? 'Bestellungen' : 'Orders'}
						</p>
					</div>
					<div
						onClick={() => scrollToSection("privacy")}
						className="hover:cursor-pointer flex-grow m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center">
							{language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
						</p>
					</div>
					<div
						onClick={() => scrollToSection("impressum")}
						className="hover:cursor-pointer flex-grow m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center">
							{language === 'de' ? 'Impressum' : 'Imprint'}
						</p>
					</div>
					<div
						onClick={() => scrollToSection("contact")}
						className="hover:cursor-pointer flex-grow m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center">{language === 'de' ? 'Kontakt' : 'Contact'}</p>
					</div>
					<div
						onClick={toggleLanguage}
						className="hover:cursor-pointer flex-grow m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center">
							{language === 'de' ? 'English' : 'Deutsch'}
						</p>
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
