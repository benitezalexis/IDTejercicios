$(document).ready(function(){


    $('#ejerNueve').click(function(){
        $(location).attr('href','./ejercicio2.html');
    });

    $('#ejerNueve1').click(function(){
        $(location).attr('href','./ejercicio1.html');
    });

    $('#btnAtras').click(function(){
        $(location).attr('href','../index.html');
    });


    $('#Ejercicio2').click(function(){
        $(location).attr('href','./ejercicio2.html');
    });


    $('#Ejercicio1').click(function(){
        $(location).attr('href','./ejercicio1.html');
    });
    $('#btnCambiarEj1').click(function(){
        
        $(location).attr('href','./ejercicio1.html');
    });

    $('#btnCambiarEj2').click(function(){
      $(location).attr('href','./ejercicio2.html');
    });
    $('#btnCambiarEj3').click(function(){
      $(location).attr('href','./ejercicio3.html');
    });

});