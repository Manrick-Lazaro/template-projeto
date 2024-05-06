import { useEffect, useState } from "react";

import Header from "../components/Header";
import DisneyService from "../services/DisneyService";

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
		</>
	);
}
