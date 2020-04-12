/**
 * Projet Final - Photociti
 * Programmé par Sophie B *
 * 3 avril 2020
 * pas réussis a le terminer ... trop fatigué, pas de concentration, trop a gérer :( */

let nomLettres;

//demander mot / usager et go
$("#userName").keydown(function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        $("#boutonGo").click();
    }
});

//Afficher les lettres de facon aléatoire
$( "#boutonGo" ).click(function() {
    $("#boiteLettre").removeClass("d-none");
    $(".removeClass").remove();

    nomLettres = $("#userName").val().split('');
    let nombCol = Math.floor(12/nomLettres.length);

    if(nomLettres.length<3 || nomLettres.length>12){
        alert("Vous devez entrer un mot entre 3 et 12 lettres");
        $('#PhotoForm').trigger("reset");
        $("#boiteLettre").addClass("d-none");
        {return;}
    }

    for(let i=0; i<nomLettres.length; i++){

        //lettre aléatoire

        let nbAleatoire = Math.floor(Math.random() * 5+1);
        nomLettres[i] = nomLettres[i].toUpperCase();

        //Gerer les caractères spéciaux

        if(nomLettres[i] === "*"){
            nomLettres[i] = "CS";
        }
        else if(nomLettres[i] === "À"){
            nomLettres[i] = "A";
        }
        else if(nomLettres[i] === "É" || nomLettres[i] === "È" || nomLettres[i] === "Ê" || nomLettres[i] === "Ë"){
            nomLettres[i] = "E";
        }
        else if(nomLettres[i] === "Ï" ){
            nomLettres[i] = "I"; //Ma fille s'appel Eloïse... je ne pouvais pas passer a côté du I lol
        }
        else if(nomLettres[i] === "Ö" || nomLettres[i] === "Ô"){
            nomLettres[i] = "O";
        }
        else if(nomLettres[i] === "Ù"){
            nomLettres[i] = "U";
        }

        //Gerer les lettres

        let images = $("<img/>",{
            id:"lettreImage"+i,
            class:"img-fluid ",
            src: "images/Letters/"+nomLettres[i]+"/"+nomLettres[i]+nbAleatoire+".jpg",
            onclick: "Modal("+i+",'"+nomLettres[i]+"')"
        });

        let imageDiv = $("<div>",{
            id:"imageNom"+i,
            class:"col-"+nombCol+" removeClass"
        });

        images.appendTo(imageDiv);
        imageDiv.appendTo("#boiteLettre");
        }
        //survol image

        $('.img-fluid').hover(function () {
        $('.img-fluid').css("cursor", "pointer");
        });
});

//Modal pour changement de lettre lettre position

function Modal(LettreP,Lettre){
    for(let p=1; p<6; p++){
        $("#image"+p).attr("src", "images/Letters/"+Lettre+"/"+Lettre+p+".jpg");
        $("#image"+p).attr("alt", LettreP);
    }
    $("#modalLettre").modal("show");
}

$('#imageSwitch').click(function(){

});

//Choix de la couleur de fond
$( ".carre" ).click(function() {
    let BG = $(this).css( "background-image" );
    $( ".BGChoisis" ).css("background-image", BG);
});

