import astridjutta from "../../assets/astridjutta.JPG";
import badsoden from "../../assets/badsoden.jpeg";
import dublin from "../../assets/dublin.JPG";
import {useLanguage} from "../../utils/LanguageContext";

export default function About() {
    const {language} = useLanguage();
    return (<> {language === 'de' ?
        <>
            <div className="w-full text-center">
                <h1 className="lg:w-2/3 text-2xl font-bold">
                    Über uns
                </h1>
                <div className="lg:flex mt-10">
                    <div className="lg:w-2/3 block text-center">
                        <p className="text-lg">
                            Wir – Astrid und Jutta – haben uns vor über 30 Jahren bei der Arbeit in Frankfurt
                            kennengelernt.
                            Trotz mehr als 1.000 km Entfernung ist unsere Freundschaft geblieben.
                            Jedes Jahr treffen wir uns mit unseren Freunden vom „Frankfurter Kranz“ in Domburg und
                            zusätzlich an
                            Silvester – und Spielen gehört dabei einfach dazu.
                        </p>
                        <p className="text-lg mt-10">
                            An Silvester 2021 entstand die Idee zu „Dein Jahr – Die Magie der Erinnerung“.
                        </p>
                        <p className="text-lg mt-10">
							<span className="text-headline text-lg">
								Astrid{" "}
							</span>
                            lebt im Taunus, ist bekennender Spiele-Nerd und hat eine beeindruckende Sammlung in einem
                            eigens dafür konzipierten Schrank.
                        </p>
                        <p className="text-lg mt-10">
                            <span className="text-headline text-lg">Jutta</span>{" "}
                            hat 25 Jahre in Dublin gelebt, liebt den Irish craic und brachte den internationalen Funken
                            ins Projekt. Seit 2025 wohnt sie wieder im Taunus.
                        </p>
                        <p className="text-lg mt-10">
                            So entstand unser Name:{" "}
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
            </div>
        </>
        :
        <>
            <div className="w-full text-center">
                <h1 className="lg:w-2/3 text-2xl font-bold">
                    About us
                </h1>
                <div className="lg:flex mt-10">
                    <div className="lg:w-2/3 block text-center">
                        <p className="text-lg">
                            We – Astrid and Jutta – met over 30 years ago while working together in Frankfurt.
                            Despite years of living more than 1,000 km apart, our friendship stayed strong.
                            Every year, we meet with our friends from the “Frankfurter Kranz” in Domburg
                            and also gather for New Year’s Eve – and playing games is always part of the fun.
                        </p>
                        <p className="text-lg mt-10">
                            The idea for „Celebrate Magical Memories“ was born on New Year‘s Eve 2021.
                        </p>
                        <p className="text-lg mt-10">
							<span className="text-headline text-lg">
								Astrid{" "}
							</span>
                            lives in the Taunus region and is a passionate board game enthusiast with a
                            dedicated game cabinet.
                        </p>
                        <p className="text-lg mt-10">
                            <span className="text-headline text-lg">Jutta</span>{" "}
                            lived in Dublin for 25 years and loves the Irish craic.
                            She brought the international spark to the game, and since 2025 she’s back in the
                            beautiful Taunus region.
                        </p>
                        <p className="text-lg mt-10">
                            Our homes and experiences inspired our name:{" "}
                            <span className="text-headline text-lg">
								Deutsch-Irische Spielemanufaktur
							</span>
                            .
                        </p>
                    </div>
                    <div className="h-full lg:w-1/3 flex lg:flex-col justify-between sm:mt-10 lg:-mt-20">
                        <img
                            src={astridjutta}
                            alt="Astrid and Jutta"
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
            </div>
        </> }</>);
}
