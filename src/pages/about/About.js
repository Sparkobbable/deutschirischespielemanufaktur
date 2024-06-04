import astridjutta from "../../assets/astridjutta.JPG";
import badsoden from "../../assets/badsoden.jpeg";
import dublin from "../../assets/dublin.JPG";

export default function About() {
	return (
		<>
			<div className="w-full text-center">
				<h1 className="lg:w-2/3 text-headline text-2xl font-bold">
					Über uns
				</h1>
				<div className="lg:flex mt-10">
					<div className="lg:w-2/3 block text-center">
						<p className="text-lg">
							Wir haben uns vor 30 Jahren bei der Arbeit in
							Frankfurt kennengelernt und die Freundschaft trotz
							langjähriger Entfernung von mehr als 1000 km
							aufrechterhalten. Wir treffen uns jedes Jahr mit
							unseren Freunden vom “Frankfurter Kranz” in Domburg
							und separat noch an Silvester, und Spielen steht
							immer mit auf der Tagesordnung! Silvester 2021
							entstand auch die Idee für{" "}
							<span className="text-headline text-lg">
								“Dein Jahr - Magie der Erinnerung”
							</span>
							!
						</p>
						<p className="text-lg mt-10">
							<span className="text-headline text-lg">
								Astrid{" "}
							</span>
							ist im Taunus zu Hause und ein bekennender
							Spiele-Nerd mit einer umfangreichen Spielesammlung
							in einem eigens hierfür konzipierten Schrank.
						</p>
						<p className="text-lg mt-10">
							<span className="text-headline text-lg">Jutta</span>{" "}
							wohnt seit 1999 in Dublin und liebt den Irish craic,
							ist aber ihrer deutschen Heimat treugeblieben und
							regelmäßig in Bad Soden oder Paderborn anzutreffen.
						</p>
						<p className="text-lg mt-10">
							Unsere Wohnorte haben uns die Inspiration für
							unseren Firmennamen gegeben -{" "}
							<span className="text-headline text-lg">
								Deutsch-Irische Spielemanufaktur
							</span>
							.
						</p>
					</div>
					<div className="h-full lg:w-1/3 flex lg:flex-col justify-between sm:mt-10 lg:-mt-20">
						<img
							src={astridjutta}
							alt="Astrid und Jutta"
							className="w-1/4 lg:w-3/4 h-auto lg:mb-10 lg:ml-10"
						></img>
						<img
							src={badsoden}
							alt="Bad Soden"
							className="w-1/4 lg:w-3/5  h-auto lg:mb-10 ml-10"
						></img>
						<img
							src={dublin}
							alt="Dublin"
							className="w-1/4 lg:w-3/5  h-auto lg:mb-10 ml-10"
						></img>
					</div>
				</div>
				<p className="text-lg mt-20">
					Bei unserem Projekt haben uns viele liebe Menschen
					unterstützt, denen wir ein herzliches Dankeschön sagen -
					ganz besonders Astrids Patenkind{" "}
					<span className="text-headline text-lg">Veline</span> mit
					ihrem künstlerischen Talent, Juttas Patenkind{" "}
					<span className="text-headline text-lg">Jakob</span> mit
					seinen IT-Kenntnissen und unserer Freundin{" "}
					<span className="text-headline text-lg">Erika</span>, die
					uns nicht nur mit ihrer Expertise in der Druckindustrie,
					sondern auch mit vielen großartigen Ideen stets zur Seite
					stand und ohne die dieses Spiel nur eine schöne Idee
					geblieben wäre.
				</p>
				<p className="text-lg mt-10">
					Ein besonderes Dankeschön gilt auch dem{" "}
					<span className="text-headline text-lg">
						"Frankfurter Kranz"
					</span>{" "}
					für die Inspiration und vielen schönen Spielstunden in über
					20 Jahren!
				</p>
			</div>
		</>
	);
}
