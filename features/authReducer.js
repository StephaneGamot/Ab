import { createSlice } from "@reduxjs/toolkit";  // J'importe cette fonction qui génére automatiquement les actions et les réducteurs

const initialState = {                           // Je définie le state initial de l'authentification
	token: null,
};

export const authReducer = createSlice({         // Création du slice Redux qui va gérer l'authentification
	name: "auth",                                // je donne un nom à mon slice
	initialState,                                // Je récupere mon state initial
	reducers: {                                  // Définit les reducers pour ce slice
		auth: (state, action) => {
			state.token = action.payload.token;  // Mise à jour du token avec le payload de l'action
		},
	},
});

export const { auth } = authReducer.actions;     // J' exporte les actions du slice

export default authReducer.reducer;              // J'exporte le reducer du slice

/*
state.token = action.payload.token; 
state : C'est l'état actuel de la slice. Dans le cas présent, il s'agit de l'état "auth" qui est un objet avec une propriété token.
token : C'est une propriété de l'état "auth". Le reducer est en train de mettre à jour cette propriété.
action : C'est l'action qui a été dispatchée. Elle a été créée automatiquement par la fonction createSlice.
payload : C'est une propriété de l'action. Elle contient les données que l'action porte. Ces données ont été fournies lors de la dispatch de l'action.
token : C'est une propriété de payload. C'est la nouvelle valeur que state.token doit prendre.
Donc, state.token = action.payload.token; signifie "Mettre à jour la propriété token de l'état avec la valeur de token dans le payload de l'action".
*/