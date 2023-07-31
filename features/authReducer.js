import { createSlice } from "@reduxjs/toolkit";

const initialState = {                           // Je définie le state initial de l'authentification
	token: null,
};

export const authReducer = createSlice({         // Création du slice Redux qui va gérer l'authentification
	name: "auth",                                // je donne un nom à mon slice
	initialState,                                // Je récupere mon state initial
	reducers: {
		auth: (state, action) => {
			state.token = action.payload.token;  // Mise à jour du token avec le payload de l'action
		},
	},
});

export const { auth } = authReducer.actions;     // J' exporte les actions du slice

export default authReducer.reducer;              // J'exporte le reducer du slice
