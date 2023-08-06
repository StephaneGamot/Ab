import React, { useState, useEffect } from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/page.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { auth as setAuthToken } from "../features/authReducer";

export default function SignIn() {
	const dispatch = useDispatch();                        // Initialisation du dispatch pour pouvoir envoyer des actions à notre store Redux.
	const token = useSelector((state) => state.auth.token);// Accès au token du store Redux avec 'useSelector'.
	const [username, setUsername] = useState("");          // Création d'un état local pour le nom d'utilisateur et sa fonction de modification.
	const [password, setPassword] = useState("");          // Création d'un état local pour le mot de passe et sa fonction de modification.
	const [error, setError] = useState("");                // Création d'un état local pour gérer les erreurs.
	const router = useRouter();                            // Initialisation de l'objet router qui permet de naviguer entre les pages.

	const updateUsername = (event) => {                    // Pour la mise à jour du nom d'utilisateur
		setUsername(event.target.value);
	};

	const updatePassword = (event) => {                    // Fonction pour mettre à jour le mot de passe
		setPassword(event.target.value);
	};

	const onSignInSubmit = (event) => {                    // Fonction pour gérer la connexion
		event.preventDefault();
		const userData = {                                 // Préparation des données de l'utilisateur à envoyer.
			email: username,
			password: password,
		};

		fetch("http://localhost:3001/api/v1/user/login", { // Requête fetch pour envoyer les données de l'utilisateur au serveur
			method: "POST",                                // le verbe 'POST' me permet d'envoyer de nouvelles données vers le serveur
			headers: {                                     // Les en-têtes de la requête
				"Content-Type": "application/json",        // Je spécifie que l'on envoie des données au format JSON
			},
			body: JSON.stringify(userData),                // Le 'body' avec JSON.stringify(userData) convertit l'objet userData en une chaîne JSON.
		})
			.then((response) => response.json())           // Convertion de la réponse de l'API en JSON.
			.then((data) => {
				console.log(data);
				if (data.status !== 200) {
					console.log(data);
					setError(true);                        // J'affiche une erreur si la connexion échoue
					return;
				} else {                                   // Elle va dospatcher une action pour mettre à jour le token dan sle store de Redux et ...
					dispatch(setAuthToken({ token: data.body.token })); // Si la connexion réussit, on met à jour le token dans le store Redux
					router.push("/user");                  // Et on redirige vers la page utilisateur
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	useEffect(() => {                                      // A chaque fois que Token ou router aura un changement alors ...
		if (token) {
			router.push("/user");
		}
	}, [token, router]);                                   // Fermeture de useEffect. Avec le tableau de mes dépendances [router, token]

	return (
		<div>
			<Head>
				<title>Argent Bank - Sign In</title>
			</Head>

			<main className={`${styles.main} ${styles.bgDark}`}>
				<section className={styles.signInContent}>
					<div className={styles.signInHeadCard}>
						<FontAwesomeIcon className={styles.signInIcon} icon={faUserCircle} />

						<h1 className={styles.centerH1}>Sign In</h1>
					</div>
					<form onSubmit={onSignInSubmit}>
						<div className={styles.inputWrapper}>
							<label htmlFor="username">Username</label>
							<input className={error ? styles.signUpErrorBorder : ""} type="email" id="username" value={username} onChange={updateUsername} required />
						</div>
						<div className={styles.inputWrapper}>
							<label htmlFor="password">Password</label>
							<input className={error ? styles.signUpErrorBorder : ""} type="password" id="password" value={password} onChange={updatePassword} required />
						</div>
						{error && <p className={styles.signUpErrorBorder}>Username or / and password are incorrect, please retry</p>}
						<div className={styles.inputRemember}>
							<input type="checkbox" id="remember-me" />
							<label htmlFor="remember-me">Remember me</label>
						</div>
						<button className={styles.signInButton} type="submit">
							Sign In
						</button>
					</form>
				</section>
			</main>
		</div>
	);
}
