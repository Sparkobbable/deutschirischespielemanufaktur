import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import cover from "../../assets/cover.png";

export default function Home() {
	return (
		<div className="flex flex-col justify-between h-full">
			<div className="text-center">
				<p className="text-lg ml-2">
					Die Deutsch-Irische Spielemanufaktur präsentiert
				</p>
				<h1 className="text-2xl text-headline font-bold mt-10">
					"Dein Jahr - Die Magie der Erinnerung",
				</h1>
				<p className="mt-10 text-lg">
					ein Spiel bei dem alle gewinnen!
				</p>
				<p className="mt-10 text-lg">
					Ob Silvester, Geburtstag, ein anderer Jahrestag oder einfach
					nur so - dieses Spiel ermöglicht es Dir, Dein Jahr Revue
					passieren zu lassen, besondere Augenblicke in Erinnerung zu
					rufen und an Deinen Erfahrungen zu wachsen.
				</p>
				<p className="mt-10 text-lg">
					Einfach im Uhrzeigersinn jeweils eine Karte ziehen, Frage
					beantworten und die Magie der Erinnerung wirken lassen!
				</p>
			</div>
			<div className="flex justify-between mb-10">
				<img
					src={cover}
					alt="Cover"
					className="w-1/6 h-auto mb-10"
				></img>
				<img
					src={card1}
					alt="Karte"
					className="w-1/6 h-auto mt-10"
				></img>
				<img
					src={cover}
					alt="Cover"
					className="w-1/6 h-auto mb-10"
				></img>
				<img
					src={card2}
					alt="Karte"
					className="w-1/6 h-auto mt-10"
				></img>
			</div>
		</div>
	);
}
