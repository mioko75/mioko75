/** created by Sophie Bergeron **/

/** 4.	Calculer le salaire brut d’un employé. Il est payé à l’heure et les données concernant le taux horaire et le nombre
    d’heures travaillées sont fournies en entrée. **/


//Etape 1 trouver les variables
var heures;
var taux;
var salairebrut;

//Etape 2 Lecture(demander a l'usager des données)
heures=Number(prompt("Combien d'heure avez-vous travaillé cette semaine ? :"));
taux=Number(prompt("Quel est votre taux horaire ? :"));

//Etapes 3 Les calcules
salairebrut=heures*taux;

//Etape 4 Afficher les résultats
console.log("Votre salaire pour "+heures +" heures est de: " +salairebrut);
