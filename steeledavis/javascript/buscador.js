// dando vida al buscador 

$("#input-search").keyup(function () {

    _this = this;

        $.each($("tbody tr"), function () {

    
            if ($(this).text().toLowerCase().indexOf($(_this).val()) == -1) {
    
                $(this).hide();
    
             } else {
                $(this).show();
                $('.div-tabla').css({
                    "height": "160px"})
    
        }});

});


$('#button-search').on('click', function() {

    var $text = $('#table td').textContent;

    if ($('#input-search').text != $text) {

        alert('Parece que tu busqueda no coincide con nuestros resultados, prueba con alguna de las sugerencias!')
        
    } 
})

/*

$('#button-search').on('click', function() {

    const posibles = ['drones','contacto','mail','informacion','consejos']

    var $text = $('#table td').textContent;

    if ($('#input-search').text == posibles[0] || posibles[1] || posibles[2] || posibles[3] || posibles[4] ) {

        alert('Parece que tu busqueda no coincide con nuestros resultados, prueba con algunas de nuestras sgugerencias!')
        
    } else {

        alert('no funciona')
    }

}) */
