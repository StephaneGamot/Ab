import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/page.module.css";
import { useState, useEffect } from "react";
import { setUser } from "../features/userReducer";
import FetchName from "@/api/fetchName";

export default function Welcome() {
	const dispatch = useDispatch();                                  // Initialisation du dispatch pour pouvoir envoyer des actions à notre store Redux.
	const token = useSelector((state) => state.auth.token);          // Accès au token du store Redux avec 'useSelector'
	const firstName = useSelector((state) => state.user.firstName);  // Accès au prénom de l'utilisateur dans le store Redux avec 'useSelector'.
	const lastName = useSelector((state) => state.user.lastName);    // Accès au nom de l'utilisateur dans le store Redux avec 'useSelector'.
	const [firstNameInput, setFirstNameInput] = useState(firstName); // Création d'un état local pour le prénom de l'utilisateur et sa fonction de modification.
	const [lastNameInput, setLastNameInput] = useState(lastName);    // Création d'un état local pour le nom de l'utilisateur et sa fonction de modification.
                                
	                                                                 // useEffect met à jour les états locaux 'firstNameInput' et 'lastNameInput'
	useEffect(() => {                                                // à chaque fois que les valeurs correspondantes dans le store Redux sont modifiées 
		setFirstNameInput(firstName);
		setLastNameInput(lastName);
	}, [firstName, lastName]);

	const [error, setError] = useState(false);                       // Création d'un état local pour gérer les erreurs.
	const [isUserFormShown, setIsUserFormShown] = useState(false);   // Création d'un état local qui détermine si le formulaire doit être affiché ou pas.

	const toggleUserForm = () => {                                   // Fonction qui permet de basculer l'affichage du formulaire.
		setIsUserFormShown(!isUserFormShown);
	};

	const handleSubmit = (event) => {                                // A la soumission du formulaire.
		event.preventDefault();
		const userData = {                                           // Les arguments pris en compte lors de la soumission
			firstName: firstNameInput,
			lastName: lastNameInput,
		};

		fetch("http://localhost:3001/api/v1/user/profile", {         // Requête fetch pour envoyer les données de l'utilisateur au serveur
			method: "PUT",                                           // le verbe 'PUT' me permet de mettre à jour mes données actuelles
			headers: {
				"Content-Type": "application/json",                  // Je spécifie que l'on envoie des données au format JSON
				Authorization: `Bearer ${token}`,                    // Inclusion du token d'authentification
			},
			body: JSON.stringify(userData),                          //Le 'body' avec JSON.stringify(userData) convertit l'objet userData en une chaîne JSON.
		})
			.then((response) => {                                    // Une fois que la requête a été envoyée, on reçoit une réponse du serveur.
				return response.json();                              // Le "body" de la réponse sera convertit au format Json
			})
			.then((data) => {                                        // Ici sous sa forme data
				if (data.status !== 200) {                           // Si le code de réponse n'est pas 200 alors j'envoie ERROR
					setError(true);
					return;
				} else {
					dispatch(                                        // Je 'dispatche' une action à Redux pour mettre à jour l'état du prénom et du nom
						setUser({
							firstName: data.body.firstName,
							lastName: data.body.lastName,
						})
					);
				}
			})
			.catch((error) => {                                      // Si il y a une erreur elle sera attapée ici 
				console.error("Erreur lors de la requête :", error);
			});

		setIsUserFormShown(false);
	};

	return (
		<>
			<section className={styles.welcomeContainer}>
				<h1 className={styles.welcomeH1}>
					Welcome back &ensp; <FetchName /> 
				</h1>

				{!isUserFormShown && (
					<button className={styles.userWelcomeButton} onClick={toggleUserForm}>
						Edit your name
					</button>
				)}
			</section>

			{isUserFormShown && (
				<form className={styles.usersWelcomeInputAndButton} onSubmit={handleSubmit}>
					<div className={styles.usersWelcomeInput}>
						<input type="text" value={firstNameInput} onChange={(e) => setFirstNameInput(e.target.value)} className={styles.userPageInput} />
						<input type="text" value={lastNameInput}  onChange={(e) => setLastNameInput (e.target.value)} className={styles.userPageInput} />
					</div>{" "}
					<div className={styles.usersWelcomeSave}>
						<button type="submit" className={styles.userWelcomeButton}>
							Save
						</button>
						<button type="button" className={styles.userWelcomeButton} onClick={toggleUserForm} >
							Cancel
						</button>
					</div>
				</form>
			)}
		</>
	);
}
