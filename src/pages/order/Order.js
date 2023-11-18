import { useState } from "react";
import cover from "../../assets/cover.png";
import angle_left from "../../assets/icons/angle-left.svg";
import angle_right from "../../assets/icons/angle-right.svg";
import { useNavigate } from "react-router-dom";

export default function Order() {
	const [quantity, setQuantity] = useState(1);
	const navigate = useNavigate();

	return (
		<>
			<div className="w-full text-center">
				<h1 className="text-headline text-2xl font-bold">
					Bestellungen
				</h1>
			</div>
			<div className="mt-10 w-full text-center">
				<span className="text-headline text-lg">
					“Dein Jahr - Magie der Erinnerung”
				</span>
				<img
					className="w-1/3 h-auto mx-auto"
					src={cover}
					alt="Cover"
				></img>
				<div className="flex mx-auto w-1/3 mt-5 justify-between">
					<p className="mr-4 translate-y-2">Anzahl: </p>
					<input
						type="number"
						placeholder="Anzahl"
						className="input input-bordered"
						value={quantity}
						onChange={(e) => setQuantity(e.target.valueAsNumber)}
						min={1}
					/>
				</div>
				<button
					onClick={() => navigate(`/order/new?quantity=${quantity}`)}
					className="btn bg-headline w-1/3 mt-10 border-none"
				>
					Bestellen
				</button>
			</div>
		</>
	);
}
