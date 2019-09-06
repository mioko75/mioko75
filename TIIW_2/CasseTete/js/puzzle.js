/**
 * TP-3 Puzzle created by Sophie on 2019-08-31.
 */

var premierClic = 1;


$('img').hover(function () {
    $('img').css("cursor","pointer");
})

var id1;
var src1;
var id2;
var src2;

$( ".img-fluid" ).click(function() {

    if (premierClic === 1){
        src1 = this.src;
        id1 = this.id;
        $(this).css({display: "none"});
        premierClic = 2;
    }
    else {
        src2 = this.src;
        id2 = this.id;
        $('#' + id1).attr("src", src2 );
        $('#' + id1).show();
        $(this).css({display: "none"});
        premierClic = 1;
    }
});

//bouton recommencer

$( "#recommencer" ).click(function() {
    $("#image1").attr("src", "images/image7.jpg");
    $("#image2").attr("src", "images/image5.jpg");
    $("#image3").attr("src", "images/image3.jpg");
    $("#image4").attr("src", "images/image2.jpg");
    $("#image5").attr("src", "images/image4.jpg");
    $("#image6").attr("src", "images/image9.jpg");
    $("#image7").attr("src", "images/image8.jpg");
    $("#image8").attr("src", "images/image1.jpg");
    $("#image9").attr("src", "images/image6.jpg");
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
    $("#image9").attr("src", "images/image9.jpg");
});




// victoire
/**

if ($('#image1').attr('src') === ("images/image1.jpg")) ; {
    if ($('#image2').attr('src') === ("images/image2.jpg")) ; {
        if ($('#image3').attr('src') === ("images/image3.jpg")) ; {
            if ($('#image4').attr('src') === ("images/image4.jpg")) ; {
                if ($('#image5').attr('src') === ("images/image5.jpg")) ; {
                    if ($('#image6').attr('src') === ("images/image6.jpg")) ; {
                        if ($('#image7').attr('src') === ("images/image7.jpg")) ; {
                            if ($('#image8').attr('src') === ("images/image8.jpg")) ; {
                                if ($('#image9').attr('src') === ("images/image9.jpg")) ;

                                $( "#puzzle" ).hide();
                                $( "body" ).append( "<img src=\"images/felicitations.jpg\" alt=\"felicitation\" title=\"félicitation\">" );
                            }
                        }
                    }
                }
            }
        }
    }
}
*/

