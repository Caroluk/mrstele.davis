/* carga por a defecto*/

$('main').load("inicio.html")


/* mostrar y no mostrar menu*/


function imagenMenu() {

    if($('aside nav').css('display')=="none") {
        $('aside nav').show() 
    } else {
        $('aside nav').hide()
    }
}

$(".imagen-burger").on('click', imagenMenu);


/* acceso a links de menu*/

$('a').on('click', function(evento) {

    evento.preventDefault()

    var $link = $(evento.target)
    var url = $link.prop('href')

    $.get(url,function(contenido) {
        $('main').html(contenido)
    })

    imagenMenu()
    
})

// dando vida al buscador 

$("#input-search").keyup(function () {

    _this = this;

    $.each($("tbody tr"), function () {


        if ($(this).text().toLowerCase().indexOf($(_this).val()) == -1) {

            $(this).hide();

         } else {
            $(this).show(); 

    }});

});


$('#button-search').on('click', function() {

    var $text = $('#table td').textContent;

    if ($('#input-search').text != $text ) {

        alert('Parece que tu busqueda no coincide con nuestros resultados, prueba con algunos de los resultados sugeridos!')
        
    } else {

        alert('no funciona')
    }

})

/* 


-----------------


            if($('#input-search').getText() != $("#table").tableDate){
                console.log("hola");
            }
             else{
                console.log("chau");
               }    

-------------------------------

        if ($(this) != $(this).hide || $(this).show) {

            $('main').load("error.html")
            
        } else {
            console.log('hola')
     */ 