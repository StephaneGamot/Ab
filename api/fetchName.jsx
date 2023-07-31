import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../features/userReducer"; 

export default function FetchName() {
  const dispatch = useDispatch();                                    // Initialisation du dispatch pour pouvoir envoyer des actions à notre store Redux.
  const token = useSelector((state) => state.auth.token);            // Accès au token du store Redux avec 'useSelector'.
  const firstName = useSelector((state) => state.user.firstName);    // Accès au prénom de l'utilisateur dans le store Redux avec 'useSelector'.
  const lastName = useSelector((state) => state.user.lastName);      // Accès au nom de l'utilisateur dans le store Redux avec 'useSelector'.

  useEffect(() => {                                                  // Chaque fois que le token change ou si la ronse est ok ... alors
    if (token) {                                                     // si le token existe 
      const fetchData = async () => {
        try {
          const response = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
              method: "POST",                                        // le verbe 'POST' me permet d'envoyer de nouvelles données vers le serveur
              headers: {
                "Content-Type": "application/json",                  // Je spécifie que l'on envoie des données au format JSON
                Authorization: `Bearer ${token}`,                    // Inclusion du token d'authentification
              },
            }
          );

          if (response.ok) {
            const data = await response.json();                      // Le "body" de la réponse sera convertit au format Json

            dispatch(                                                // Je 'dispatche' une action à Redux pour mettre à jour l'état du prénom et du nom
              user({
                firstName: data.body.firstName,
                lastName: data.body.lastName,
              })
            );
          } else {
            console.error(
              "Erreur lors de la tentative pour récuperer le nom et le prénom"
            );
          }
        } catch (error) {                                            // Une erreur est relevée dans le bloc try, le bloc catch l'attrape.
          console.error(
            "Erreur lors de la tentative pour récuperer le nom et le prénom",
            error
          );
        }
        
      };

      fetchData();
    }
  }, [dispatch, token]);                                             // fermeture de useEffect. Avec le tableau de mes dépendances [dispatch, token] 

  return <div> {firstName} {lastName}</div>;
}


