$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});
$.fn.clicktoggle = function(a,b){
    return this.each(function(){
        var clicked = false;
        $(this).bind("click",function(){
            if (clicked) {
                clicked = false;
                return b.apply(this,arguments);
            }
            clicked = true;
            return a.apply(this,arguments);
        });
    });// fixed typo here, was missing )
};
function animationChart(){
	$('.bolapre1').delay(200).velocity({ translateY: "0" }, {duration: 300,easing: "easeInQuart"})
	$('.boladip1').delay(400).velocity({ translateY: "0" }, {duration: 300,easing: "easeInQuart"})
	$('.bolasen1').delay(600).velocity({ translateY: "0" }, {duration: 300,easing: "easeInQuart"});

	$('.bolapre2').delay(800).velocity({ translateY: "0" }, {duration: 300,easing: "easeInQuart"});
	$('.boladip2').delay(1000).velocity({ translateY: "-7" }, {duration: 300,easing: "easeInQuart"});
	$('.bolasen2').delay(1200).velocity({ translateY: "-1" }, {duration: 300,easing: "easeInQuart"});

	$('.bolapre3').delay(1400).velocity({ translateY: "0" }, {duration: 300,easing: "easeInQuart"});
	$('.boladip3').delay(1600).velocity({ translateY: "0" }, {duration: 300,easing: "easeInQuart"});
	$('.bolasen3').delay(1800).velocity({ translateY: "0" }, {duration: 300,easing: "easeInQuart"});

	$('.bolaprincipal').delay(2000).velocity({ translateY: "0" }, {duration: 300,easing: "easeInQuart"});

	$('.lineapre').delay(2200).velocity({ 'stroke-dashoffset': 0 }, { duration: 1400, delay: 1200 });
	$('.lineadip').delay(2800).velocity({ 'stroke-dashoffset': 0 }, { duration: 1400, delay: 1200 });
	$('.lineasen').delay(3400).velocity({ 'stroke-dashoffset': 0 }, { duration: 1400, delay: 1200 });

	$('.textopre1').delay(300).velocity({ opacity: 1 }, {duration: 300,easing: "easeInQuart"});
	$('.textopre2').delay(900).velocity({ opacity: 1 }, {duration: 300,easing: "easeInQuart"});
	$('.textopre3').delay(1500).velocity({ opacity: 1 }, {duration: 300,easing: "easeInQuart"});

	$('.textodip1').delay(500).velocity({ opacity: 1 }, {duration: 300,easing: "easeInQuart"});
	$('.textodip2').delay(1100).velocity({ opacity: 1 }, {duration: 300,easing: "easeInQuart"});
	$('.textodip3').delay(1700).velocity({ opacity: 1 }, {duration: 300,easing: "easeInQuart"});

	$('.textosen1').delay(700).velocity({ opacity: 1 }, {duration: 300,easing: "easeInQuart"});
	$('.textosen2').delay(1300).velocity({ opacity: 1 }, {duration: 300,easing: "easeInQuart"});
	$('.textosen3').delay(1900).velocity({ opacity: 1 }, {duration: 300,easing: "easeInQuart"});

	$('.textometanac').delay(2100).velocity({ opacity: 1 }, {duration: 300,easing: "easeInQuart"});
	// $('.bola2')
	// 	.velocity({ translateY: "-75px" }, {duration: 300,easing: "easeInQuart"});
	// $('.bola2-fill')
	// 	.velocity({ translateY: "-75px" }, {duration: 300,easing: "easeInQuart"});
	// $('.bola3')
	// 	.delay(300)
	// 	.velocity({ translateY: "30px" }, {duration: 300,easing: "easeInQuart"});
	// $('.bola3-fill')
	// 	.delay(300)
	// 	.velocity({ translateY: "30px" }, {duration: 300,easing: "easeInQuart"});
	// $('.bola4')
	// 	.delay(600)
	// 	.velocity({ translateY: "-185px" }, {duration: 400,easing: "easeInQuart"});
	// $('.bola4-fill')
	// 	.delay(600)
	// 	.velocity({ translateY: "-185px" }, {duration: 400,easing: "easeInQuart"});
	// $('.text-graph1')
	// 	.delay(1800)
	// 	.velocity({ opacity: 1 }, {duration: 300,easing: "easeInQuart"});
	// $('.text-graph2')
	// 	.delay(2200)
	// 	.velocity({ opacity: 1 }, {duration: 300,easing: "easeInQuart"});
	// $('.text-graph3')
	// 	.delay(2600)
	// 	.velocity({ opacity: 1 }, {duration: 300,easing: "easeInQuart"});
	// $('.text-graph4')
	// 	.delay(3000)
	// 	.velocity({ opacity: 1 }, {duration: 300,easing: "easeInQuart"});
	// $('.linea-graph')
 //      .velocity({ 'stroke-dashoffset': 0 }, { duration: 1400, delay: 1200 });
}
function deanimationChart(){
	$('.bolapre1').velocity({ translateY: "250" }, {duration: 300,easing: "easeInQuart"});
	$('.boladip1').velocity({ translateY: "140" }, {duration: 300,easing: "easeInQuart"});
	$('.bolasen1').velocity({ translateY: "45" }, {duration: 300,easing: "easeInQuart"});

	$('.bolapre2').velocity({ translateY: "216" }, {duration: 300,easing: "easeInQuart"});
	$('.boladip2').velocity({ translateY: "191" }, {duration: 300,easing: "easeInQuart"});
	$('.bolasen2').velocity({ translateY: "-10" }, {duration: 300,easing: "easeInQuart"});

	$('.bolapre3').velocity({ translateY: "206" }, {duration: 300,easing: "easeInQuart"});
	$('.boladip3').velocity({ translateY: "120" }, {duration: 300,easing: "easeInQuart"});
	$('.bolasen3').velocity({ translateY: "76" }, {duration: 300,easing: "easeInQuart"});

	$('.bolaprincipal').velocity({ translateY: "230" }, {duration: 300,easing: "easeInQuart"});

	$('.lineapre').velocity({ 'stroke-dashoffset': 1000 }, 0);
	$('.lineadip').velocity({ 'stroke-dashoffset': 1000 }, 0);
	$('.lineasen').velocity({ 'stroke-dashoffset': 1000 }, 0);

	$('.textopre1').velocity({ opacity: 0 }, {duration: 300,easing: "easeInQuart"});
	$('.textopre2').velocity({ opacity: 0 }, {duration: 300,easing: "easeInQuart"});
	$('.textopre3').velocity({ opacity: 0 }, {duration: 300,easing: "easeInQuart"});

	$('.textodip1').velocity({ opacity: 0 }, {duration: 300,easing: "easeInQuart"});
	$('.textodip2').velocity({ opacity: 0 }, {duration: 300,easing: "easeInQuart"});
	$('.textodip3').velocity({ opacity: 0 }, {duration: 300,easing: "easeInQuart"});

	$('.textosen1').velocity({ opacity: 0 }, {duration: 300,easing: "easeInQuart"});
	$('.textosen2').velocity({ opacity: 0 }, {duration: 300,easing: "easeInQuart"});
	$('.textosen3').velocity({ opacity: 0 }, {duration: 300,easing: "easeInQuart"});

	$('.textometanac').velocity({ opacity: 0 }, {duration: 300,easing: "easeInQuart"});


	// $('.bola2')
	// 	.velocity({ translateY: "0" }, {duration: 300,easing: "easeInQuart"});
	// $('.bola2-fill')
	// 	.velocity({ translateY: "0" }, {duration: 300,easing: "easeInQuart"});
	// $('.bola3')
	// 	.velocity({ translateY: "0" }, {duration: 300,easing: "easeInQuart"});
	// $('.bola3-fill')
	// 	.velocity({ translateY: "0" }, {duration: 300,easing: "easeInQuart"});
	// $('.bola4')
	// 	.velocity({ translateY: "0" }, {duration: 300,easing: "easeInQuart"});
	// $('.bola4-fill')
	// 	.velocity({ translateY: "0" }, {duration: 300,easing: "easeInQuart"});
	// $('.text-graph1')
	// 	.velocity({ opacity: 0 }, {duration: 300,easing: "easeInQuart"});
	// $('.text-graph2')
	// 	.velocity({ opacity: 0 }, {duration: 300,easing: "easeInQuart"});
	// $('.text-graph3')
	// 	.velocity({ opacity: 0 }, {duration: 300,easing: "easeInQuart"});
	// $('.text-graph4')
	// 	.velocity({ opacity: 0 }, {duration: 300,easing: "easeInQuart"});
	// $('.linea-graph')
	//   .velocity({ 'stroke-dashoffset': 1000 }, 0);
}
function animation(){
	$(".titulo-animate").fadeIn(1000);
}

function animationBody(){
	$(".page-animation").fadeIn(1000);
}
function animationTexto(){
	// $(".page-1 .element1").animateCss("fadeInUp");
	$(".numero-slides").fadeIn(1000);
}

function animationLogo(){
	$(".logo").fadeIn(1000);
}

function accion(){
	$('.menu').animate({width: 'toggle'});
	
	$(".pages").css("transition","-webkit-transform 0s")
}
function outIntro(){
	$(".intro-text").fadeOut(1000);
}
function intro2(){
	$(".intro-text2").fadeIn(1000);
}
function outIntro2(){
	$(".intro-text2").fadeOut(1000);
}
function outIntroContainer(){
	$("#intro").fadeOut(1000);
}
function introContainer2(){
	$(".intro-container").fadeIn(1000);
}
function taskAjax(e){
	var estadoJson = $(this).attr("data-estado");
	console.log(e);
	$.ajax({
		type : 'GET',
	 	url: "data/data.json",
	 	dataType : 'json' 
	}).done(function(data) {
		var trs=$("#tabla tr").length;
		$("#estados tbody").html("");
		$("#estadosGrafica tbody").html("");
		var nuevaFila="<tr>";
		var nuevaFilaGrafica="<tr>";
		for(var i = 0; i < data.length; i++){
			if(data[i].estado == estadoJson || data[i].estado == e ){

			// Tabla Grafica
			nuevaFilaGrafica+="<td>" + data[i].responsable.estatal +  "</td>";
			nuevaFilaGrafica+="<td>" + data[i].responsable.regional +  "</td>";
			nuevaFilaGrafica+="<td>" + data[i].responsable.municipal +  "</td>";
			nuevaFilaGrafica+="<td>" + data[i].responsable.estatal +  "</td>";
			nuevaFilaGrafica+="<td>" + data[i].responsable.zona +  "</td>";

			$("#clasificacionA").html(data[i].clasificacionA)
			$("#clasificacionB").html(data[i].clasificacionB)
			$("#clasificacionC").html(data[i].clasificacionC)
			$("#distritos").html(data[i].totalDistritos)
			$(".nameEstado").html(data[i].estado)
			$("#ante").html(data[i].ante)
			$("#estadosImg").attr("src",data[i].url[0].estado);
			$("#estadosImg").attr("src",data[i].url[0].estado);
			$("#estadosImg").attr("src",data[i].url[0].estado);
			$("#estadosImgEstruc1").attr("src",data[i].url[0].estructura1);
			$("#estadosImgEstruc2").attr("src",data[i].url[0].estructura2);
			$("#estadosImgEstruc3").attr("src",data[i].url[0].estructura3);


			for(var a = 0; a < data[i].tabla.length; a++){
				

				nuevaFila+="<td>" + data[i].tabla[a].estado +  "</td>";
				nuevaFila+="<td>" + data[i].tabla[a].numero +  "</td>";
				nuevaFila+="<td>" + data[i].tabla[a].distrito +  "</td>";
				nuevaFila+="<td>" + data[i].tabla[a].cabecera +  "</td>";
				nuevaFila+="<td>" + data[i].tabla[a].prioridad +  "</td>";
				nuevaFila+="<td>" + data[i].tabla[a].escenario1 +  "</td>";
				nuevaFila+="<td>" + data[i].tabla[a].escenario2 +  "</td>";
				nuevaFila+="<td>" + data[i].tabla[a].votacionMinima +  "</td>";
				nuevaFila+="<td>" + data[i].tabla[a].votacionMaxima +  "</td>";
				nuevaFila+="<td>" + data[i].tabla[a].listaNominal +  "</td>";
				nuevaFila+="<td>" + data[i].tabla[a].totalCasillas +  "</td>";
				nuevaFila+="<td>" + data[i].tabla[a].proyeccionParticipacion[1].voto +  "</td>";
				nuevaFila+="<td>" + data[i].tabla[a].metaTecho[1].voto +  "</td>";
				nuevaFila+="</tr>";
			}
		}


		 }
		 $("#estados").append(nuevaFila);
		 $("#estadosGrafica").append(nuevaFilaGrafica);
	});
}
function taskAjaxNacional(e){
	console.log('soy nacional')

	$.ajax({
		type : 'GET',
	 	url: "data/nacional.json",
	 	dataType : 'json' 
	}).done(function(data) {
		// console.log(data);
		var trs=$("#tabla tr").length;
		$("#pais-tabla tbody").html("");
		var nuevaFila="<tr>";

		//Mapa
		$("#modalPaisImg").attr("src", data[0].url[0].estado);

		//Gráficas
		$("#paisImgEstruc1").attr("src",data[0].url[0].estructura1);
		$("#paisImgEstruc2").attr("src",data[0].url[0].estructura2);
		$("#paisImgEstruc3").attr("src",data[0].url[0].estructura3);
		
		for(var a = 0; a < data[0].tabla.length; a++){
			
			nuevaFila+="<td>" + data[0].tabla[a].prioridad +  "</td>";
			nuevaFila+="<td>" + data[0].tabla[a].estado +  "</td>";
			nuevaFila+="<td>" + data[0].tabla[a].numero +  "</td>";
			nuevaFila+="<td>" + data[0].tabla[a].distrito +  "</td>";
			nuevaFila+="<td>" + data[0].tabla[a].cabecera +  "</td>";
			nuevaFila+="<td>" + data[0].tabla[a].escenario1 +  "</td>";
			nuevaFila+="<td>" + data[0].tabla[a].escenario2 +  "</td>";
			nuevaFila+="<td>" + data[0].tabla[a].votacionMinima +  "</td>";
			nuevaFila+="<td>" + data[0].tabla[a].votacionMaxima +  "</td>";
			nuevaFila+="<td>" + data[0].tabla[a].listaNominal +  "</td>";
			nuevaFila+="<td>" + data[0].tabla[a].totalCasillas +  "</td>";
			nuevaFila+="<td>" + data[0].tabla[a].proyeccionParticipacion[0].porciento +  "</td>";
			nuevaFila+="<td>" + data[0].tabla[a].proyeccionParticipacion[1].voto +  "</td>";
			// nuevaFila+="<td>" + data[0].tabla[a].metaPiso[0].porciento +  "</td>";
			// nuevaFila+="<td>" + data[0].tabla[a].metaPiso[1].voto +  "</td>";
			nuevaFila+="<td>" + data[0].tabla[a].metaTecho[0].porciento +  "</td>";
			nuevaFila+="<td>" + data[0].tabla[a].metaTecho[1].voto +  "</td>";
			nuevaFila+="</tr>";
		}

		$("#pais-tabla").append(nuevaFila);
	});
}

function documentos(){
	$('.documentos').animate({width: 'toggle'});
}

function close(){
	$('.menu').animate({width: 'hide'});
}

$(document).ready(function() {
	// $(".documentos").hide(0);
	// $(".menu").hide(0);
	$(".titulo-animate").fadeOut(0);
	$(".intro-text2").fadeOut(0);
	$(".intro-container").fadeOut(0);
	$(".page-animation").fadeOut(0);
	$(".texto-animate").fadeOut(0);
	$(".logo").fadeOut(0);
	$(".numero-slides").fadeOut(0);
	$(".section0").css("background","#f5f5f5");
	
	
	setTimeout(animation,1500);
	setTimeout(animationBody,300);
	setTimeout(animationTexto,2500);
	setTimeout(animationLogo,3000);
	// Activar para intro
	setTimeout(outIntro,6000);
	setTimeout(intro2,7000);
	setTimeout(outIntro2,10000);
	setTimeout(outIntroContainer,12000);
	setTimeout(introContainer2,14000);
	$(".json").on("click" , taskAjax);
	$("#nacionalJson").on("click" , taskAjaxNacional);

	$(".circle, .nav-el").on("click" , accion);
	$(".pages").on("click" , close);
	
	$("#criterios").on("click" , documentos);
	$("#close-documentos").on("click" , function(){ $('.documentos').animate({width: 'toggle'}); });
	$("#sections-total").html($(".nav-el").length)

	//slideUp Intro on icon click
	$( ".icon-down-intro" ).click(function() {
	  // $("#intro2").slideUp("slow");
	  $('#video-bg').get(0).pause();
	  $('#videoMadero').get(0).play();
	  $( "#intro2" ).animate({
	    top: "-1500"
	  }, 1000, function() {
	    // Animation complete.
	  });
	  // $( "#video-bg" ).animate({
	  //   top: "-1000"
	  // }, 1000, function() {
	  //   // Animation complete.
	  // });
	});

	// //Map Swichter
	// $( "#map-switcher" ).click(function() {
	//   $( "#map-container" ).addClass("animate bounceOut");
	//   $('#map-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	//   	$( "#map-container" ).css("display", "none");
	//   });
	//   $( "#district-map-container" ).css("display", "block");
	//   $( "#district-map-container" ).addClass("animate bounceIn");
	//   console.log("sitching")
	// });
	$( "#map-switcher" ).clicktoggle(function() {
		$("#map-container").attr('class', '');
		$("#district-map-container").attr('class', '');
		//Alejar mapa
		if (estadoActual != undefined){
			clicked("null");
			setTimeout(function() {
			    	$( "#map-container" ).addClass("animate bounceOut");
			    	$( "#map-container" ).css("display", "none");
			      	// $("#map-container").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			      	// 	$( "#map-container" ).css("display", "none");
			      	// });
			      	$("#district-map-container").css("display", "block");
			      	$("#district-map-container").addClass("animate bounceIn");
			}, 1100);
		}else{
			$( "#map-container" ).addClass("animate bounceOut");
			$( "#map-container" ).css("display", "none");
		  	// $("#map-container").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		  	// 	$( "#map-container" ).css("display", "none");
		  	// });
		  	$("#district-map-container").css("display", "block");
		  	$("#district-map-container").addClass("animate bounceIn");
		}
		
	}, function() {
		$("#map-container").attr('class', '');
		$("#district-map-container").attr('class', '');
	  	$("#district-map-container").addClass("animate bounceOut");
	  	$("#district-map-container").css("display", "none");
	  	// $("#district-map-container").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	  	// 	$("#district-map-container").css("display", "none");
	  	// });
	  	$("#map-container").css("display", "block");
	  	$("#map-container").addClass("animate bounceIn");
	});
	// //Execute json click
	// $(".json").on("click" , taskAjax);

	$('button').on('click',function(e){

		
		if( this.dataset.calendario ){
			var Calendarios = {
				'diputados':  {
					'title': 'Diputaciones Federales',
					'imagen': 'imgs/calendarios/linea-Diputados-2.png'
				},
				'presidencia': {
					'title': 'Presidencia de la República',
					'imagen': 'imgs/calendarios/linea-Presidencia-2.png'
				},
				'senadores': {
					'title': 'Senadurías',
					'imagen': 'imgs/calendarios/linea-Senadores-2.png'
				}
			}

			// $("#contenedorCalendarioImg").animate({height: "150px"},0);
			// $("#contenedorCalendarioImg").animate({ 
				// 	height: '830px'
				// }, 5000)
			// console.log( $("#contenedorCalendarioImg").css('height') )
			
			$("#contenedorCalendarioImg")
				.animate({
					height: "170px"
				},0)
				.animate({ 
					height: '830px'
				}, 5000)


			$('#modalCalendarioImg').attr('src', Calendarios[ this.dataset.calendario ].imagen )
			$('#titleCalendario').html( Calendarios[ this.dataset.calendario ].title )
			console.log(  Calendarios[ this.dataset.calendario ] )
			console.log('Si es calendario')
		}

		// if( this.dataset.slide ){

		// 	const contenido = {
		// 		'potenciales':{
		// 			'title': 'Una vision 360° del ciudadano',
		// 			'contenido': '<p>Se consolida en un tablero inteligente toda la información que los ciudadanos generan a través de diferentes canales como páginas web, eventos, dinámicas y experiencias. </p><p>Utilizando diferentes filtros como edad, sexo, número de amigos, relevancia, nivel de lealtad y otras variables de interés se pueden crear y analizar distintas audiencias, generar reportes de tendencias y de inteligencia que ayudan en la toma de decisiones y a mejorar las estrategias de comunicación y marketing político.</p><p>Aunado a esto, con sistemas de inteligencia artificial se podrá automatizar la pauta para eficientar los canales, segmentos y horarios de los mensajes.</p>',
		// 			'imagen':'imgs/animaciones/hombre-traje.gif'
		// 		}
		// 	}

		// 	$('#modalResponsablesTitle').html( contenido[ this.dataset.slide ].title )
		// 	$('#modalResponsablesText').html( contenido[ this.dataset.slide ].contenido )
		// 	$('#modalResponsablesImg')[0].attributes.src.value = contenido[ this.dataset.slide ].imagen 
		// 	// console.log( $('#modalResponsablesImg')[0].attributes.src.value )
		// }
	})

})