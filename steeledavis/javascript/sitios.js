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

        if ($(this).text().toUpperCase().indexOf($(_this).val().toUpperCase()) === -1)
            $(this).hide();
        else
            $(this).show();
    });
});

/* 
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario)

var buscador = $('#table').DataTable();

$('#input-search').keyup(function() {

    buscador.search($(this).val()).draw();

    if ($('#input-search').val() == "") {

        $('.div-busquedas').fadeOut;

    } else {

        $('.div-busquedas').fadeIn;

    }

})




/*function buscador_interno(){
    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }
                }else{
                    li[i].style.display = "none";
                }

        }

} 


var buscador = $("#input-buscar");
var listaResultados = $("#busquedas");
var resultados = $(".resultado");

$("#input-buscar").keyup(buscador_interno);

function buscador_interno() {
    filtro = buscador.value.toUpeerCase();
    li = listaResultados.$("li"); 

    for(i = 0;i < li.length; i ++){
        a = li[i].$("a"[0]);
        textValor = a.textContent || a.innerText;

        if(textValor.toUpeerCase().indexOf(filtro) > -1){

            li[i].style.display = "block";

            if(buscador.value === "") {
                listaResultados.style.display ="none";
            } 
        } else { 

            li[i].style.display="none";

        }

    }

}





var buscador = $("#input-buscar");
var listaResultados = $("#busquedas");
var resultados = $(".resultado");

for(i = 0;i < li.length; i ++) {

    if (buscador.value = resultados[0] || resultados[1]) {

        var $link = $(evento.target)
        var url = $link.prop('href')
    
        $.get(url,function(contenido) {
            $('main').html(contenido)
        })


}

}
*/

