
export const updateProfile = async (token, userData) => {                           // 2 paramètres: token & userData (objet contenant les nouvelles données utilisateur).
	try {
		const response = await fetch("http://localhost:3001/api/v1/user/profile", { // Requête fetch pour envoyer les données de l'utilisateur au serveur
			method: "PUT",                                                          // Le verbe 'PUT' me permet de mettre à jour mes données actuelles
			headers: {                                                              // Les en-têtes de la requête
				"Content-Type": "application/json",                                 // Je spécifie que l'on envoie des données au format JSON
				Authorization: `Bearer ${token}`,                                   // Inclusion du token d'authentification
			},
			body: JSON.stringify(userData),                                         // Le 'body' avec JSON.stringify(userData) convertit l'objet userData en une chaîne JSON.
		});

		if (!response.ok) {
			throw new Error("Erreur, le profil ne s'est pas adapté");               // Si pas ok alors j'envoie une erreur
		}

		const data = await response.json();                                         // Alors on rencoie le body de la réponse au format Json
		return data;                                                                // je renvoi ensuite les données
	} catch (error) {                                                               // Si il y a une erreur elle sera attapée ici 
		throw error;
	}
};
