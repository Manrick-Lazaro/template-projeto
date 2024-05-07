import PlayersProvider, {
	usePlayersContext,
} from "../states/context/usePlayersStore";

const Winner = () => {
	const { teamA, teamB } = usePlayersContext();

	let winner;

	if (teamA === teamB) winner = "DRAW";
	else if (teamA > teamB) winner = "TEAM A";
	else winner = "TEAM B";

	return (
		<div className="d-flex flex-column justify-content-center align-items-center mt-5 border-solid-sm container-lg">
			<h1>Winner</h1>
			<h4>{winner}</h4>
		</div>
	);
};

const Player = ({ label, score, onIncrease, onDecrease }) => (
	<div className="pl-6 pr-6 pb-3 border-solid-sm m-4 d-flex flex-column align-items-center justify-content-center">
		<h3>{label}</h3>
		<h4>{score}</h4>

		<div>
			<button
				className="m-2 pl-4 pr-4 pt-2 pb-2"
				onClick={onDecrease}
			>
				-
			</button>
			<button
				className="m-2 pl-4 pr-4 pt-2 pb-2"
				onClick={onIncrease}
			>
				+
			</button>
		</div>
	</div>
);

const PlayerA = () => {
	const { teamA, increaseTeamAScore, decreaseTeamAScore } =
		usePlayersContext();

	return (
		<Player
			label={"Team A"}
			score={teamA}
			onDecrease={decreaseTeamAScore}
			onIncrease={increaseTeamAScore}
		/>
	);
};

const PlayerB = () => {
	const { teamB, increaseTeamBScore, decreaseTeamBScore } =
		usePlayersContext();

	return (
		<Player
			label={"Team B"}
			score={teamB}
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

export default function ContextPlayers() {
	return (
		<div className="container-lg d-flex justify-content-center">
			<main>
				<PlayersProvider>
					<Winner />
					<Players />
				</PlayersProvider>
			</main>
		</div>
	);
}
