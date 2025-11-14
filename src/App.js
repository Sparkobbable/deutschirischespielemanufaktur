import { Outlet } from "react-router-dom";
import "./App.css";
import Menu from "./menu/Menu";
import menu from "./assets/icons/menu.svg";
import { useEffect } from "react";
import { ApiService } from "./utils/ApiService";
import DesktopMenu from "./menu/DesktopMenu";

function App() {
	const api = new ApiService();

	useEffect(() => {
		api.ping()
			.then(() => {})
			.catch((e) => {
				document.getElementById("systemerror").showModal();
			});
	}, []);

	return (
		<>
			{/* Mobile View */}
			<div className="flex flex-col bg-background w-full h-full lg:hidden">
				<div className="drawer">
					<input
						id="my-drawer-2"
						type="checkbox"
						className="drawer-toggle"
						aria-label="Menü umschalten"
					/>
					<div className="drawer-content flex flex-col">
						<div className="fixed top-0 left-0 w-full z-30">
							<label
								htmlFor="my-drawer-2"
								className="btn border-none drawer-button w-14 h-14 m-3 bg-headline lg:hidden"
							>
								<img className="w-14 h-14" src={menu} alt="Menü" />
							</label>
						</div>
						<div className="mt-20 p-10 overflow-auto">
							<Outlet />
						</div>
					</div>
					<div className="drawer-side z-40">
						<div
							onClick={() => document.getElementById('my-drawer-2').checked = false}
							className="drawer-overlay"
						></div>
						<Menu />
					</div>
				</div>
			</div>
			{/* Desktop View */}
			<div className="hidden flex-col bg-background w-full h-full lg:flex">
				<div className="sticky top-0 z-30 bg-background">
					<DesktopMenu />
				</div>
				<div className="p-10 overflow-auto">
					<Outlet />
				</div>
			</div>
			<dialog id="systemerror" className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg text-error">Fehler!</h3>
					<p className="py-4">
						Die Anwendung ist derzeit nicht verfügbar. Probieren Sie
						es später erneut.
					</p>
				</div>
			</dialog>
			<dialog id="loading" className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Bitte warten...</h3>
					<div className="w-full flex justify-center">
						<span className="loading loading-spinner loading-lg "></span>
					</div>
				</div>
			</dialog>
		</>
	);
}

export default App;
