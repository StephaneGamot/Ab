import { configureStore } from "@reduxjs/toolkit"; // On importe la fonction configureStore depuis la bibliothèque Redux Toolkit.
import user from "../features/userReducer";
import auth from "../features/authReducer"; 

// Cette fonction permet de créer facilement un store Redux en fournissant simplement un objet de configuration.
export const store = configureStore({
    reducer:{
        user,
        auth
    }
})

// Un reducer est une fonction qui prend en compte l'état actuel de l'application et une action, 
// puis renvoie un nouvel état basé sur cette action.

// Crée et exporte le store Redux en utilisant la fonction configureStore. 
// L'objet de configuration passé à cette fonction spécifie que l'état de l'application 
// doit être divisé en deux sous-états 'user' et 'auth', chacun étant géré par son propre reducer.