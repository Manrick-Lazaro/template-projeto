import { createContext, useState, useContext } from "react";

interface PlayersContextProps {
	teamA: number;
	teamB: number;
	increaseTeamAScore: () => void;
	decreaseTeamAScore: () => void;
	increaseTeamBScore: () => void;
	decreaseTeamBScore: () => void;
}

const PlayersContext = createContext<PlayersContextProps>(
	{} as PlayersContextProps,
);

const PlayersStore = () => {
	const [teamA, setTeamA] = useState(0);
	const [teamB, setTeamB] = useState(0);
	return {
		teamA, // Team A's score
		teamB, // Team B's score
		increaseTeamAScore: () => setTeamA((v) => v + 1),
		decreaseTeamAScore: () => setTeamA((v) => v - 1),

		increaseTeamBScore: () => setTeamB((v) => v + 1),
		decreaseTeamBScore: () => setTeamB((v) => v - 1),
	};
};

const PlayersProvider = ({ children }: any) => {
	return (
		<PlayersContext.Provider value={PlayersStore()}>
			{children}
		</PlayersContext.Provider>
	);
};

export const usePlayersContext = () => useContext(PlayersContext);

export default PlayersProvider;
