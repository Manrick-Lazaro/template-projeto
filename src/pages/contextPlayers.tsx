import { Link } from "react-router-dom";
import Player from "../components/Player";
import Winner from "../components/Winner";
import PlayersProvider, {
	usePlayersContext,
} from "../states/context/usePlayersStore";

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
				<div className="d-flex justify-content-center align-items-center mt-5 border-solid-sm">
					<Link
						to={"/"}
						className="br-item d-flex justify-content-center"
					>
						Voltar
					</Link>
				</div>
			</main>
		</div>
	);
}
