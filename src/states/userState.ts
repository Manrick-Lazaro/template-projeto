import { produce } from "immer";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IUserState {
	name: string;
	email: string;
}

interface IUserAction {
	updateName: (name: string) => void;
	updateEmail: (email: string) => void;
}

export const useUserStore = create<IUserState & IUserAction>()(
	persist(
		(set) => ({
			name: "",
			email: "",

			updateEmail: (email) =>
				set((baseState) => ({
					...baseState,
					email: email,
				})),

			updateName: (name) =>
				set(
					produce((baseState) => {
						baseState.name = name;
					}),
				),
		}),
		{
			name: "user",
			storage: createJSONStorage(() => localStorage),
		},
	),
);
