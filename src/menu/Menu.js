import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import buttonBg from "../assets/button_bg.png";
import { useEffect, useState } from "react";
import { useLanguage } from "../utils/LanguageContext";

export default function Menu() {
	const { pathname } = useLocation();
	const { language, toggleLanguage } = useLanguage();

	const [isHome, setIsHome] = useState(true);

	useEffect(() => {
		setIsHome(pathname === "/");
	}, [pathname]);

	function scrollToSection(section) {
		window.scrollToSection(section);
		// Close the drawer after clicking a menu item
		document.getElementById('my-drawer-2').checked = false;
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
						onClick={() => scrollToSection("home")}
					>
						<p className="text-center -translate-y-1/4">
							Home
						</p>
					</div>
					<div
						onClick={() => scrollToSection("about")}
						className="hover:cursor-pointer h-1/10 m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center -translate-y-1/4">{language === 'de' ? 'Über uns' : 'About'}</p>
					</div>
					<div
						onClick={() => scrollToSection("idea")}
						className="hover:cursor-pointer h-1/10 m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center -translate-y-1/4">
							{language === 'de' ? 'Spielidee' : 'Game idea'}
						</p>
					</div>
					<div
						onClick={() => scrollToSection("rules")}
						className="hover:cursor-pointer h-1/10 m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center -translate-y-1/4">
							{language === 'de' ? 'Regeln und Varianten' : 'Rules and Variants'}
						</p>
					</div>
					<div
						onClick={() => scrollToSection("order")}
						className="hover:cursor-pointer h-1/10 m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center -translate-y-1/4">
							{language === 'de' ? 'Bestellungen' : 'Orders'}
						</p>
					</div>
					<div
						onClick={() => scrollToSection("privacy")}
						className="hover:cursor-pointer h-1/10 m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center -translate-y-1/4">
							{language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
						</p>
					</div>
					<div
						onClick={() => scrollToSection("impressum")}
						className="hover:cursor-pointer h-1/10 m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center -translate-y-1/4">
							{language === 'de' ? 'Impressum' : 'Imprint'}
						</p>
					</div>
					<div
						onClick={() => scrollToSection("contact")}
						className="hover:cursor-pointer h-1/10 m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center -translate-y-1/4">{language === 'de' ? 'Kontakt' : 'Contact'}</p>
					</div>
					<div
						onClick={toggleLanguage}
						className="hover:cursor-pointer h-1/10 m-2 border-2 border-black rounded-lg text-black flex flex-col justify-center"
						style={menuButtonStyle}
					>
						<p className="text-center -translate-y-1/4">
							{language === 'de' ? 'English' : 'Deutsch'}
						</p>
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
