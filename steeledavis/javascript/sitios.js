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




