import "./Idea.css";

export default function Idea() {
	return (
		<div className="w-full text-center">
			<h1 className="text-2xl font-bold">Spielidee</h1>
			<div className="mt-10">
				<p className="text-lg">
					„Dein Jahr – Die Magie der Erinnerung“ ist ein Konversationsspiel. Es geht nicht ums Gewinnen,
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
	);
}
