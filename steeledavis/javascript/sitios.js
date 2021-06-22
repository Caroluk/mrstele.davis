/* carga por a defecto*/

$('main').load("inicio.html")



/* acceso a links de menu*/

$('a').on('click', function(evento) {

    evento.preventDefault()

    var $link = $(evento.target)
    var url = $link.prop('href')

    $.get(url,function(contenido) {
        $('main').html(contenido)
    })

})

$('aside a').on('click', function(evento) {

    evento.preventDefault()

    var $link = $(evento.target)
    var url = $link.prop('href')

    $.get(url,function(contenido) {
        $('main').html(contenido)
    })

})

/* mostrar y no mostrar menu*/

    $(".menu-para-abrir").on('click',function() {

        if($('nav').css(display)=="none") {
            $(nav).show() 
        } else {
            $('nav').hide()
        }
    }
    
    )
