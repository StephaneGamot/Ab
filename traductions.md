                                         ARGENT BANK traduction

Page d'Accueil
L'utilisateur peut voir la page d'accueil
Un utilisateur doit pouvoir :
•	Naviguer vers la page d'accueil (/)
•	Voir toutes les données de la maquette

Exigence de connexion
L'utilisateur peut se connecter au système
Un utilisateur doit pouvoir :
•	naviguer jusqu'à la page de connexion (/login)
•	Remplir les informations d'identification
•	Se connecter à l'API back-end avec des jetons JWT pour l'authentification
•	Naviguer avec succès vers une page de profil (/profile)

Exigence de déconnexion
L'utilisateur peut se déconnecter du système
Un utilisateur doit pouvoir :
•	voir le bouton de déconnexion lorsqu'il est connecté
•	cliquer sur le bouton de déconnexion
•	revenir à la page d'accueil (/)

Exigences en matière de protection de la vie privée
L'utilisateur ne peut voir que son propre profil
Après s'être connecté avec succès, un utilisateur doit pouvoir
•	Voir sa page de profil
•	Voir son prénom sur la page de profil
•	Voir les informations relatives à son compte bancaire.

Fonctionnalité de mise à jour du profil
L'utilisateur peut mettre à jour son profil
Un utilisateur doit pouvoir :
•	modifier son profil (nom et prénom). - Ces données doivent être conservées dans la base de données.

Exigence Redux
La gestion de l'état est effectuée par Redux
L'application React contient une implémentation de Redux pour la gestion de l'état qui :
•	un magasin pour gérer toutes les données
•	une (des) action(s) pour envoyer des informations
•	un (des) réducteur(s) pour gérer les changements d'état de l'application

