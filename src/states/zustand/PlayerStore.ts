import { create } from "zustand";

interface PlayerStoreProps {
	teamA: number;
	teamB: number;

	increaseTeamAScore: () => void;
	decreaseTeamAScore: () => void;
	increaseTeamBScore: () => void;
	decreaseTeamBScore: () => void;
}

const usePlayerStore = create<PlayerStoreProps>()((set) => ({
	teamA: 0,
	teamB: 0,

	increaseTeamAScore: () =>
		set((baseState) => ({
			teamA: baseState.teamA + 1,
		})),
	decreaseTeamAScore: () =>
		set((baseState) => ({
			teamA: baseState.teamA - 1,
		})),
	increaseTeamBScore: () =>
		set((baseState) => ({
			teamB: baseState.teamB + 1,
		})),
	decreaseTeamBScore: () =>
		set((baseState) => ({
			teamB: baseState.teamB - 1,
		})),
}));

export default usePlayerStore;
