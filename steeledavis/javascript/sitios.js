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

$('textarea').on('keyup', function(clear) {

    console.log('hola')

})




// dando vida al buscador 

$("#input-search").keyup(function () {

    _this = this;

    
    $.each($("tbody tr"), function () {

        if ($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1) {
            $(this).hide();
            $(this).css('color: blue');
         } else {
            $(this).show();

    }});
});
