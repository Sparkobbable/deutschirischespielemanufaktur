import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import cover from "../../assets/cover.png";

export default function Home() {
	return (
		<div className="flex flex-col justify-between h-full">
			<div className="text-center">
				<p className="text-lg w-1/2 mx-auto font-bold">
					Die Deutsch-Irische Spielemanufaktur präsentiert
				</p>
				<h1 className="text-2xl text-headline font-bold mt-10">
					"Dein Jahr - Die Magie der Erinnerung",
				</h1>
				<p className="mt-10 text-lg">
					Ein Spiel, das Erinnerungen lebendig macht – und bei dem alle gewinnen!
				</p>
				<p className="mt-10 text-lg">
					Ob Silvester, Geburtstag, Jahrestag oder einfach zwischendurch:
					Mit diesem Spiel lässt du Dein Jahr Revue passieren, rufst besondere Momente ins Gedächtnis und entdeckst,
					wie viel Schönes, Lustiges und Bewegendes darin steckt.

				</p>
				<p className="mt-10 text-lg">
					Zieh einfach im Uhrzeigersinn eine Karte, beantworte die Frage –
					und lass die Magie der Erinnerung wirken!
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
