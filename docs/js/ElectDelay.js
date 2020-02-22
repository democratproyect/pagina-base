"use strict";
var valor;
var valor2;
var marker;
$("#nameestadoClasi").hide();
$(".datos-clasi").hide();

$(".clasi").mouseover(function(e){
    if(e.target.src != undefined){
        marker = e.target.src;
        e.target.src = "imgs/hover.png"
    }
});
$(".clasi").mouseout(function(e){
    console.log("quito mouse")
    e.target.src = marker;
});


$(".clasi").on("click", stepClick);
function stepClick (e) {
    $("#nameestadoClasi").slideDown(100);
    $(".datos-clasi").slideDown(100);

    loadChart('dots1', e);
    loadChart2('dots2' ,e);


    $('#dots1 i').each(function(i) {
        
        setTimeout( function(){
            $("#dots1 i").eq(i).css("background-image", "url('https://d30y9cdsu7xlg0.cloudfront.net/png/44909-200.png')");
        },i * 70);
    });
    $('#dots2 i').each(function(i) {
        setTimeout( function(){
            $("#dots2 i").eq(i).css("background-image", "url('https://d30y9cdsu7xlg0.cloudfront.net/png/44909-200.png')");
               },i * 30);
    });

    $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration:2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
};


function loadChart ( elementId , e ) {
    switch(e.target.id) {
        case 'clasificacioncdmx':
            $("#nameestadoClasi").html("CDMX");
            valor = 33;  valor2 = 16;
            $(".titulo-ayuntamientos").html("Alcaldías");
            $("#dipu").html("33");
            $("#ayunt").html("16");
            break;
        case 'cdmxInicial':
            $("#nameestadoClasi").html("CDMX");
            valor = 33;  valor2 = 16;
            $("#dipu").html("33");
            $("#ayunt").html("16");
            $(".titulo-ayuntamientos").html("Alcaldías");
            break;
        case 'clasificacionjalisco':
            $("#nameestadoClasi").html("Jalisco");
          $("#dipu").html("20");
            $("#ayunt").html("125");
            valor = 20; valor2 = 125; 
            $(".titulo-ayuntamientos").html("Ayuntamientos");
             break;
        case 'clasificacionveracruz':
        $("#nameestadoClasi").html("Veracruz");
            $(".titulo-ayuntamientos").html("Ayuntamientos");
            $("#dipu").html("30");
            $("#ayunt").html("0");
            valor = 30; valor2 = 0;
            break;
        case 'clasificacionpuebla':
            $("#nameestadoClasi").html("Puebla");
            $(".titulo-ayuntamientos").html("Ayuntamientos");
            $("#dipu").html("26");
            $("#ayunt").html("217");
            valor = 26; valor2 = 217;
            break;
        case 'clasificacionguanajuato':
            $("#nameestadoClasi").html("Guanajuato");
            $(".titulo-ayuntamientos").html("Ayuntamientos");
            $("#dipu").html("22");
            $("#ayunt").html("46");
            valor = 22;  valor2 = 46;
            break;
        case 'clasificacionchiapas':
        $("#nameestadoClasi").html("Chiapas");
            $(".titulo-ayuntamientos").html("Ayuntamientos");
            $("#dipu").html("24");
            $("#ayunt").html("122");
            valor = 24;  valor2 = 122;
            break;
        case 'clasificaciontabasco':
        $("#nameestadoClasi").html("Tabasco");
            $(".titulo-ayuntamientos").html("Ayuntamientos");
            $("#dipu").html("21");
            $("#ayunt").html("17");
            valor = 21;  valor2 = 17;
            break;
        case 'clasificacionyucatan':
            $("#nameestadoClasi").html("Yucatán");
            $(".titulo-ayuntamientos").html("Ayuntamientos");
            $("#dipu").html("15");
            $("#ayunt").html("106");
            valor = 15; valor2 = 106;
            break;
        case 'clasificacionmorelos':
            $("#nameestadoClasi").html("Morelos");
            $(".titulo-ayuntamientos").html("Ayuntamientos");
            $("#dipu").html("18");
            $("#ayunt").html("33");
            valor = 18; valor2 = 33;
            break;
       
    } 

  const container = document.getElementById(elementId);
  const percentage = parseFloat(container.getAttribute("percentage"));
  const columns = parseInt(container.getAttribute("columns"), 10);
  const rows = parseInt(container.getAttribute("rows"), 10);
  const total = valor;
  let fill = Math.round((total * percentage) / 100);

  container.innerHTML = '';
  
  for (let i = 0; i < total; i++) {
    // const line = document.createElement('span');
    // line.className = 'line'
    // for (let j = 0; j < columns; j++) {
      const dot = document.createElement('i');
      dot.className = 'dot' + ((0 < fill--) ? ' fill' : ' empty');
    //   line.appendChild(dot);
    // }
    container.appendChild(dot);
}

}

function loadChart2 ( elementId2 ) {
    const container = document.getElementById(elementId2);
    const percentage = parseFloat(container.getAttribute("percentage"));
    const columns = parseInt(container.getAttribute("columns"), 10);
    const rows = parseInt(container.getAttribute("rows"), 10);
    const total = valor2;
    let fill = Math.round((total * percentage) / 100);
    
    console.log('rows', rows);
    console.log('columns', columns);
    console.log('total', total);
  
    
    container.innerHTML = '';
    
    for (let i = 0; i < total; i++) {
    //   const line = document.createElement('span');
    //   line.className = 'line'
      // for (let j = 0; j < columns; j++) {
        const dot = document.createElement('i');
        dot.className = 'dot' + ((0 < fill--) ? ' empty' : ' fill');
        // line.appendChild(dot);
      // }
      container.appendChild(dot);
    }

  }