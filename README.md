Cahier des charges:

Analyse des besoins 

Profil Utilisateur : Particulier souhaitant suivre et maîtriser sa consommation énergétique quotidienne (électricité, gaz, eau). 

Objectifs : Proposer une solution claire et pédagogique pour visualiser les dépenses et identifier des tendances d'évolution. 

Contraintes de temps : Projet à réaliser en autonomie complète sur un délai très court (4 jours au lieu des 3 prévus initialement). 

Spécifications fonctionnelles 

Gestion Utilisateur : Inscription et authentification sécurisées (obligatoire pour accéder aux données métier). 

Saisie des données : Formulaire permettant de saisir manuellement les consommations (ou import via CSV/API simulée). 

Visualisation : Consultation des données par périodes (jour, semaine, mois) via des tableaux et graphiques interactifs. 

Analyse : Comparaison entre différentes périodes pour identifier des économies possibles. 

 

Spécifications techniques 

Architecture : Séparation stricte entre le Front-end (UI) et le Back-end (API/Logique métier). 

Sécurité (Points critiques) : 

Hachage des mots de passe avant stockage en base de données. 

Validation et filtrage systématique de toutes les saisies utilisateur (prévention XSS/Injections). 

Protection des accès aux données : un utilisateur ne peut voir que ses propres consommations. 

 
