import { createSlice } from "@reduxjs/toolkit";
const initialState = { firstName: "", lastName: "" };      // On créer le state initial (sa valeur de départ)

export const userReducer = createSlice({
	name: "user",                                          // je lui donne un nom
	initialState,
	reducers: {
		user: (state, action) => {                         // 1er cas du reducer => methode (il peut y en avoir +++ )
			state.firstName = action.payload.firstName;    // Ce qui va enclencher l'action de changer le "firstName"
			state.lastName = action.payload.lastName;      // ce qui permet qu'une fois l'avoir trouvé de changer le "lastName"
		},
	},
});

export const { user } = userReducer.actions;               // on exporte les créateurs d'actions celui de "user: (state, action)"

export default userReducer.reducer;                        // on va creer un reducer qui prend les action et qui mofifie le state
