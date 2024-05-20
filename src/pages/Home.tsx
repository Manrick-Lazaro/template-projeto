import { useEffect, useState } from "react";
import DisneyService from "../services/DisneyService";
import Header from "../components/Header";

export default function Home() {
	const [disney, setDisney] = useState([]);

	useEffect(() => {
		handleDisney();
	}, []);

	async function handleDisney() {
		try {
			const response = await DisneyService.allCharacters();
			setDisney(response.data);
			console.log("response", response.data);
		} catch (error) {
			console.log("Erro", error);
		}
		0;
	}

	return (
		<>
			<Header />
			<div className="row m-5">
				{disney.map((character: any, index: number) => (
					<div
						key={index}
						className="col-sm-6 col-md-4 col-lg-3"
						style={{ width: "15rem", height: "25rem" }}
					>
						<div className="br-card">
							<div className="card-content d-flex justify-content-center">
								<img
									src={
										character.imageUrl
											? character.imageUrl
											: "https://images.impresa.pt/sicnot/2023-10-17-DISNEY-100.png-5ad30ef6/original/mw-1920"
									}
									alt={character.name}
									style={{
										height: "10rem",
									}}
								/>
							</div>
							<h2 className="d-flex justify-content-center">
								{character.name}
							</h2>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
