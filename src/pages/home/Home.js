import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import cover from "../../assets/cover.png";
import { useLanguage } from "../../utils/LanguageContext";

export default function Home() {
	const { language } = useLanguage();
	return (
		<div className="flex flex-col justify-between h-full">
			<div className="text-center">
				<p className="text-lg w-1/2 mx-auto font-bold">
					{language === 'de' ? 
						'Die Deutsch-Irische Spielemanufaktur präsentiert' : 
						'The Deutsch-Irische Spielemanufaktur presents'}
				</p>
				<h1 className="text-2xl text-headline font-bold mt-10">
					{language === 'de' ? 
						'"Dein Jahr - Die Magie der Erinnerung"' :
						'"Celebrate Magical Memories"'}
				</h1>
				<p className="mt-10 text-lg">
					{language === 'de' ? 
						'Ein Spiel, das Erinnerungen lebendig macht – und bei dem alle gewinnen!' : 
						'A game that brings your memories to life – and everyone is a winner!'}
				</p>
				<p className="mt-10 text-lg">
					{language === 'de' ? 
						'Ob Silvester, Geburtstag, Jahrestag oder einfach zwischendurch: Mit diesem Spiel lässt du Dein Jahr Revue passieren, rufst besondere Momente ins Gedächtnis und entdeckst, wie viel Schönes, Lustiges und Bewegendes darin steckt.' : 
						'Whether it’s New Year’s Eve, a birthday, an anniversary, or just because, this game lets you reflect on your year, recall special moments, and celebrate the experiences that made it unique.'}
				</p>
				<p className="mt-10 text-lg">
					{language === 'de' ? 
						'Zieh einfach im Uhrzeigersinn eine Karte, beantworte die Frage – und lass die Magie der Erinnerung wirken!' : 
						'Take turns drawing a card, answer the question, and let the magic of memories do its work!'}
				</p>
			</div>
			<div className="flex justify-between mb-10">
				<img
					src={cover}
					alt={language === 'de' ? "Cover" : "Cover"}
					className="w-1/6 h-auto mb-10"
				></img>
				<img
					src={card1}
					alt={language === 'de' ? "Karte" : "Card"}
					className="w-1/6 h-auto mt-10"
				></img>
				<img
					src={cover}
					alt={language === 'de' ? "Cover" : "Cover"}
					className="w-1/6 h-auto mb-10"
				></img>
				<img
					src={card2}
					alt={language === 'de' ? "Karte" : "Card"}
					className="w-1/6 h-auto mt-10"
				></img>
			</div>
		</div>
	);
}
