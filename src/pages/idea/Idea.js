import "./Idea.css";
import { useLanguage } from "../../utils/LanguageContext";

export default function Idea() {
	const { language } = useLanguage();
	return (
		<> {language === 'de' ?
			<div className="w-full text-center">
				<h1 className="text-2xl font-bold">Spielidee</h1>
				<div className="mt-10">
					<p className="text-lg">
						„Dein Jahr – Die Magie der Erinnerung" ist ein Konversationsspiel. Es geht nicht ums Gewinnen,
						sondern um gute Gespräche: über die schönsten, lustigsten,
						aber auch nachdenklichsten Momente des vergangenen Jahres.
					</p>
					<div className="row">
						<ul className="word-diamonds">
							<li>Worüber hast du Tränen gelacht?</li>
							<li>Welcher Augenblick war unvergesslich?</li>
							<li>Welchen Tag würdest du am liebsten noch einmal erleben – oder vielleicht auch vergessen?</li>
							<li>Was möchtest du unbedingt ins nächste Jahr mitnehmen?</li>
						</ul>
					</div>
					<p className="text-lg mt-10">
						Dieses Spiel lädt dazu ein, Erinnerungen zu teilen, miteinander ins Gespräch zu kommen
						und gemeinsam das Jahr noch einmal lebendig werden zu lassen.
					</p>
					<p className="text-lg mt-10">
						Spielt mit und lasst die Magie der Erinnerung auf Euch wirken!
					</p>
				</div>
			</div>
			:
			<div className="w-full text-center">
				<h1 className="text-2xl font-bold">The Game</h1>
				<div className="mt-10">
					<p className="text-lg">
						„Celebrate Magical Memories“ is a conversation game. It‘s not about winning,
						it‘s about sharing stories, laughing together, and reflecting on the past year.
					</p>
					<div className="row">
						<ul className="word-diamonds">
							<li>What made you laugh until you cried?</li>
							<li>Which moment was unforgettable?</li>
							<li>Is there a day you would love to relive – or forget?</li>
							<li>What would you like to carry into the next year?</li>
						</ul>
					</div>
					<p className="text-lg mt-10">
						This game helps you share memories, connect with friends and family, and enjoy your year all over again.
					</p>
					<p className="text-lg mt-10">
						Play the game, and let the magic of memories unfold!
					</p>
				</div>
			</div>
		} </>
	);
}
