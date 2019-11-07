/** created by Sophie Bergeron **/

/** 5.	Lire le nom et l’âge d’un individu, puis convertir son âge en jours (approximatif). Imprimer un message
        incluant son nom pour l’informer du nombre de jours vécus. **/


//Etape 1 trouver les variables
var nom;
var age;
var nombrejours;

//Etape 2 Lecture(demander a l'usager des données)

nom=prompt("Quel est votre nom ? :");
age=Number(prompt("Quel est votre âge ? :"));

//Etape 3 Les calcules

nombrejours=age*365;

//Etape 4 Afficher les résultats

alert(nom + "voici le nombre de jours à votre actif" +nombrejours);
