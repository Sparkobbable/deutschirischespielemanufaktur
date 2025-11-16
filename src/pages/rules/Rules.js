import { useLanguage } from "../../utils/LanguageContext";

export default function Rules() {
	const { language } = useLanguage();
	return (
		<> {language === 'de' ?
			<div className="w-full text-center">
				<h1 className="text-2xl font-bold">
					Regeln & Varianten
				</h1>
				<div className="mt-10">
					<p className="text-lg font-bold">Grundidee </p>
					<p className="text-lg">
						Mische die Karten. Wer zuletzt Geburtstag hatte, zieht die erste Karte, liest sie laut vor und beantwortet die Frage.
						Manchmal fällt dir sofort etwas ein, manchmal braucht es ein Gespräch, bis die Erinnerung zurückkehrt.
						Beides ist erlaubt – und macht den Reiz des Spiels aus.

					</p>
					<p className="text-lg mt-10 font-bold">Variante 1 (beliebt in unserem Freundeskreis) </p>
					<p className="text-lg">
						Nachdem der aktive Spieler geantwortet hat, erzählen auch die Mitspieler ihre Erinnerungen zur Frage.
					</p>
					<p className="text-lg mt-10 font-bold">Weitere Varianten</p>
					<p className="text-lg">
						Seid kreativ! Das Spiel lebt von euren Ideen – ganz ohne Konkurrenzdruck.
						Erzählt uns gerne per Mail, wie ihr „Dein Jahr – Die Magie der Erinnerung" erlebt habt.
					</p>
				</div>
			</div>
			:
			<div className="w-full text-center">
				<h1 className="text-2xl font-bold">
					How to Play & Variations
				</h1>
				<div className="mt-10">
					<p className="text-lg font-bold">Basic Idea</p>
					<p className="text-lg">
						Shuffle the cards. The player who most recently had a birthday draws a card, reads it aloud, and answers the question.
						Sometimes answers come immediately, sometimes they emerge as the conversation unfolds – and that‘s all part of the fun.
					</p>
					<p className="text-lg mt-10 font-bold">Variation 1 (our favourite)</p>
					<p className="text-lg">
						After the active player answers, the others share their thoughts and memories about the question.
					</p>
					<p className="text-lg mt-10 font-bold">Other Variations</p>
					<p className="text-lg">
						Be creative! The game is non-competitive, so rules can be adapted however you like.
						We‘d love to hear how you played and experienced „Celebrate Magical Memories“.
					</p>
				</div>
			</div>
		} </>
	);
}
