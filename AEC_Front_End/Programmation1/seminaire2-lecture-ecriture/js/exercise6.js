/** created by Sophie Bergeron **/

/** 5.	6.	Faites un programme qui lit le nom d’un article et son prix de détail. Votre programme doit afficher le prix
     de gros (66% du prix de détail) ainsi que le profit attendu.**/


//Etape 1 trouver les variables
var nom;
var prix;
var profit;
var detail;

//Etape 2 Lecture(demander a l'usager des données)

nom=prompt("Quel est le nom de l'article ? :");
prix=Number(prompt("Quel est son prix ? :"));

//Etape 3 Les calcules

profit=prix-(prix*(66/100));
detail=prix-profit;

//Etape 4 Afficher les résultats

console.log("vous faites " +profit+ "$ sur chaque " +nom + " vendu que vous avez acheter à: " +detail + " $" );
