import usePlayerStore from "../states/zustand/PlayerStore";
import Player from "../components/Player";

const Winner = () => {
	const scoreTeamA = usePlayerStore((state) => state.teamA);
	const scoreTeamB = usePlayerStore((state) => state.teamB);

	let winner = "DRAW";

	if (scoreTeamA > scoreTeamB) {
		winner = "TEAM A";
	} else if (scoreTeamA < scoreTeamB) {
		winner = "TEAM B";
	}

	return (
		<div className="d-flex flex-column justify-content-center align-items-center mt-5 border-solid-sm container-lg">
			<h1>Winner</h1>
			<h4>{winner}</h4>
		</div>
	);
};

const PlayerA = () => {
	const score = usePlayerStore((state) => state.teamA);
	const increaseTeamAScore = usePlayerStore(
		(state) => state.increaseTeamAScore,
	);
	const decreaseTeamAScore = usePlayerStore(
		(state) => state.decreaseTeamAScore,
	);

	return (
		<Player
			label={"Team A"}
			score={score}
			onDecrease={decreaseTeamAScore}
			onIncrease={increaseTeamAScore}
		/>
	);
};

const PlayerB = () => {
	const score = usePlayerStore((state) => state.teamB);
	const increaseTeamBScore = usePlayerStore(
		(state) => state.increaseTeamBScore,
	);
	const decreaseTeamBScore = usePlayerStore(
		(state) => state.decreaseTeamBScore,
	);

	return (
		<Player
			label={"Team B"}
			score={score}
			onDecrease={decreaseTeamBScore}
			onIncrease={increaseTeamBScore}
		/>
	);
};

const Players = () => {
	return (
		<div className="container-md border-solid-sm mt-5 d-flex flex-column align-items-center ">
			<h3>Players</h3>
			<div className="d-flex justify-content-between">
				<PlayerA />
				<PlayerB />
			</div>
		</div>
	);
};

export default function ZustandPlayers() {
	return (
		<div className="container-lg d-flex justify-content-center">
			<main>
				<Winner />
				<Players />
			</main>
		</div>
	);
}
