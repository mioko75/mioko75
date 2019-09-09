/**
 * TP-3 Puzzle created by Sophie on 2019-08-31.
 */

//image de victoire en attente d'une victoire
$('#bravo').hide();

//Souris pointeur sur image
$('img').hover(function () {
    $('img').css("cursor","pointer");
});

var premierClic = 1;
var id1;
var src1;
var id2;
var src2;

$( ".img-fluid" ).click(function() {

    if (premierClic === 1){
        src1 = this.src; // enregistre le src de l'image du premier clic
        id1 = this.id; // enregistre le id de l'image du premier clic
        $(this).css({display: "none"}); // cache l'image du premier clic
        premierClic = 2; // On passe au 2e clic
    }
    else {
        src2 = this.src;  // enregistre le src de l'image du deuxieme clic
        id2 = this.id;  // enregistre le id de l'image du deuxieme clic
        $('#' + id1).attr("src", src2 ); // transfert le le src de la premier image sur la 2e
        $('#' + id2).attr("src", src1 );  // transfert le le src de la deuxieme image sur la 1ere
        $('#' + id1).show(); // Affiche l'image
        VerifierVictoire ();
        premierClic = 1;
    }
});

// victoire

function VerifierVictoire(){
    var victoire = true;
    var images ;
    for (i = 1; i < 10; i++) {

        var check = $('#image'+i).attr('src').split('/').pop();
        if(check != "image"+i+".jpg"){
            victoire = false;
        }
    }
    if(victoire){
        $('#puzzle').prepend("<p class='text-center' id='bravo'> Vous avez gagné <br> <img src=\"images/felicitations.jpg\" alt=\"felicitation\" title=\"Félicitation\" id=\"bravo\" class=\"m-5\"> </p>");
        //$('#bravo').show();
    }
}

//bouton recommencer

$( "#recommencer" ).click(function() {
    $('#puzzle').show();
    $('#bravo').hide();
    $("#image1").attr("src", "images/image7.jpg");
    $("#image2").attr("src", "images/image5.jpg");
    $("#image3").attr("src", "images/image3.jpg");
    $("#image4").attr("src", "images/image2.jpg");
    $("#image5").attr("src", "images/image4.jpg");
    $("#image6").attr("src", "images/image9.jpg");
    $("#image7").attr("src", "images/image8.jpg");
    $("#image8").attr("src", "images/image1.jpg");
    $("#image9").attr("src", "images/image6.jpg");{
        $('bravo').remove();
    }

});

// bouton réponse

$( "#reponse" ).click(function() {
    $("#image1").attr("src", "images/image1.jpg");
    $("#image2").attr("src", "images/image2.jpg");
    $("#image3").attr("src", "images/image3.jpg");
    $("#image4").attr("src", "images/image4.jpg");
    $("#image5").attr("src", "images/image5.jpg");
    $("#image6").attr("src", "images/image6.jpg");
    $("#image7").attr("src", "images/image7.jpg");
    $("#image8").attr("src", "images/image8.jpg");
    $("#image9").attr("src", "images/image9.jpg");{
       $('#puzzle').prepend("<p class='text-center' id='bravo'> Vous avez gagné <br> <img src=\"images/felicitations.jpg\" alt=\"felicitation\" title=\"Félicitation\" id=\"bravo\" class=\"m-5\"> </p>");
    }
});


