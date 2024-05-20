import { usePlayersContext } from "../../states/contexts/usePlayersContextStore";

const Winner = () => {
	const { teamA, teamB } = usePlayersContext();

	let winner = "DRAW";

	if (teamA > teamB) {
		winner = "TEAM A";
	} else if (teamA < teamB) {
		winner = "TEAM B";
	}

	return (
		<div className="d-flex flex-column justify-content-center align-items-center mt-5 border-solid-sm container-lg">
			<h1>Winner</h1>
			<h4>{winner}</h4>
		</div>
	);
};

export default Winner;
