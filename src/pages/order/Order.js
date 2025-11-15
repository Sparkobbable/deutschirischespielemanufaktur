import { useEffect, useState } from "react";
import cover from "../../assets/cover.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ApiService } from "../../utils/ApiService";

export default function Order() {
	const [quantity, setQuantity] = useState(1);
	const navigate = useNavigate();

	const [item, setItem] = useState({});

	const apiService = new ApiService();

	useEffect(() => {
		apiService.getLatestItem().then((resp) => setItem(resp.data));
	}, []);

	return (
		<>
			<div className="w-full text-center">
				<h1 className="text-2xl font-bold">
					Bestellen
				</h1>
			</div>
			<div className="mt-5">
				<p className="text-lg">
					„Dein Jahr – Die Magie der Erinnerung“ ist das perfekte Geschenk zum Wichteln,
					zu Weihnachten oder als Mitbringsel zur Silvesterfeier – oder einfach ein Geschenk an Dich selbst.
				</p>
				<p className="text-lg">
					<span className="font-bold">Preis: </span>{" "}€{item.price} zzgl. Versand.
				</p>
				<p className="text-lg mt-3">
					Nach Deiner Bestellung erhältst du umgehend alle Infos, und das Spiel macht sich direkt nach
					Zahlungseingang auf den Weg zu dir.

				</p>
				<p className="text-lg mt-3">
					Eine Abholung in <span className="font-bold"> Bad Soden</span> oder <span className="font-bold">Kelkheim</span> ist nach Absprache ebenfalls möglich –
					bitte im Bestellformular angeben.
				</p>
				<div className="overflow-x-auto w-full lg:w-1/4 mr-auto bg-background mt-5">
					<table className="table border border-solid border-1 border-grey">
						<thead className="bg-headline">
							<tr className=" border border-solid border-1 border-grey">
								<th>Bestellmenge</th>
								<th>Versandkosten</th>
							</tr>
						</thead>
						<tbody>
							<tr className=" border border-solid border-1 border-grey">
								<td>1-5 Spiele</td>
								<td>2,00 €</td>
							</tr>
							<tr className=" border border-solid border-1 border-grey">
								<td>6-10 Spiele</td>
								<td>3,10 €</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p className="text-xs">
					Bitte kontaktier uns unter spielemanufaktur@outlook.com zu den Versandkosten
					bei größeren Bestellmengen oder ins EU-Ausland.
				</p>
			</div>
			<div className="mt-5 w-full text-center">
				<span className="text-headline text-lg">
					“{item.displayName}”
				</span>
				<img
					className="lg:w-1/3 w-3/4 h-auto mx-auto"
					src={cover}
					alt="Cover"
				></img>
				<div className="flex mx-auto lg:w-1/3 w-3/4 mt-5 justify-between">
					<p className="mr-4 translate-y-2">Preis: </p>
					<span className="text-headline text-lg">
						{item.price} €
					</span>
				</div>
				<div className="flex mx-auto lg:w-1/3 w-3/4 mt-5 justify-between">
					<p className="mr-4 translate-y-2">Anzahl: </p>
					<input
						type="number"
						placeholder="Anzahl"
						className="input input-bordered w-4/5"
						aria-label="Anzahl der Spiele"
						value={quantity}
						onChange={(e) => setQuantity(e.target.valueAsNumber)}
						min={1}
					/>
				</div>
				<button
					onClick={() =>
						navigate(
							`/order/new?item=${item.id}&quantity=${quantity}`
						)
					}
					className="btn bg-headline w-1/3 mt-10 border-none"
				>
					Bestellen
				</button>
				<h1 className="text-headline text-2xl font-bold">
					Spiele, erinnere Dich, teile Deine Geschichten – und lass die Magie der Erinnerung wirken!
				</h1>
			</div>
		</>
	);
}
