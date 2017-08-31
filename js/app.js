var $imagenActual = 0;

var cargarPagina = function() {
  // Llamanos los elementos del DOM
  var $botones = $(".unidad");
  var $anterior = $(".anterior");
  var $siguiente = $(".siguiente");
	var $video = $("#video");

  // Se agrega eventos para imagen específica

  $($botones).click(cambiarImagen);
  $($anterior).click(anteriorImagen);
  $($siguiente).click(siguienteImagen);
};
//Funcion para realizar el cambio de imagenes especificas
var cambiarImagen = function() {
  $imagenActual = $(this).data("target");
  mostrarImagen($imagenActual);
};

//Funcion para realizar el pintado de la nueva imagen a mostrar
var mostrarImagen = function($imagenActual) {
	console.log($imagenActual);
  var $lastSlide = $("div.active");
	var $iframe = $("div iframe");
  var $slide = $("div[data-slide='" + $imagenActual + "']");
	console.log($slide);
  $lastSlide.removeClass("active");

  $slide.addClass("active");

	if($imagenActual == 0){
		$('#video').html("").append($("<iframe></iframe>", {
        src: "https://www.youtube.com/embed/4h3m7B4v6Zc?autoplay=1",
			  css: { "width": "100%", "height": "100%" }
}));

	}
	else{
		$lastSlide.addClass("video1");
		$iframe.remove();

	}
};
//funcion para mostrar la imagen anterior
var anteriorImagen = function(e) {
  e.preventDefault();
  $imagenActual = $imagenActual - 1;
  $imagenActual = ($imagenActual < 0) ? 4 : $imagenActual;
  mostrarImagen($imagenActual);
};
// función para mostrar la imagen consecutiva
var siguienteImagen = function(e) {
  e.preventDefault();
  $imagenActual = $imagenActual + 1;
  $imagenActual = ($imagenActual > 4) ? 0 : $imagenActual;
  mostrarImagen($imagenActual);
};





$(document).ready(cargarPagina);
