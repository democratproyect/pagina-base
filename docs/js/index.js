$(document).ready(function() {
  var numero;
  var $half = $(".circle .half"),
      halfLen = $half[0].getTotalLength(),
      $nav = $(".circle .active-nav"),
      navLen = $nav[0].getTotalLength(),
      $pages = $(".pages"),
      scrolling  = false,
      curPage = 1,
      numOfPages = $(".page").length,
      headingH = $(".heading").height(),
      SPHASE1 = 500,
      SPHASE2 = 300,
      SPHASE3 = 900,
      SDELAY = SPHASE1 + SPHASE2 + SPHASE3,
      SDUR = 600,
      SDOTS = SDELAY + SDUR,
      DOTTRANSTIME = 300,
      SDOTSRDY = SDOTS + DOTTRANSTIME + (numOfPages - 2) * 100,
      PAGETRANSITION = 700,
      navigation = window.location.hash.split('#')[1];
  // console.log(navigation);
  if(navigation > 0 ){
    curPage = navigation;
    pagination(curPage);
  }
  $half.velocity({strokeDasharray: halfLen, strokeDashoffset: halfLen}, {duration: 0});
  $nav.velocity({strokeDasharray: navLen, strokeDashoffset: navLen}, {duration: 0});
  $(".circle").css("opacity", 1);
  $(".rotater").addClass("phase1");
  setTimeout(function() {
    $(".rotater").removeClass("phase1").addClass("phase2");
    setTimeout(function() {
      $(".rotater").removeClass("phase2").addClass("phase3");
    }, SPHASE2);
  }, SPHASE1);
  $half.delay(SDELAY).velocity({strokeDashoffset: 0}, {duration: SDUR, easing: "ease-in"});
  setTimeout(function() {
    $(".nav-el").addClass("showing visible");
  }, SDOTS);
  setTimeout(function() {
    $(".nav-el").removeClass("showing").addClass("white");
    $(".nav-el-1").addClass("active");
    $(".heading").removeClass("invisible");
    $pages.removeClass("removed");
    setTimeout(function() {
      activateHandlers();
    }, PAGETRANSITION + 300);
  }, SDOTSRDY);
  //Reiniciar animaciones
  function animationsStart(page){
    //Limpiar clases agregadas
    $(".pages .page:nth-child(" + (page - 1) + ") .element1").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page - 1) + ") .element2").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page - 1) + ") .element3").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page - 1) + ") .delay-map").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page - 1) + ") .element-timing-1").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page - 1) + ") .element-timing-2").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page - 1) + ") .element-timing-3").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page - 1) + ") .element-timing-4").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page - 1) + ") .element-timing-5").animateCss("fadeOut");


    $(".pages .page:nth-child(" + (page + 1) + ") .element1").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page + 1) + ") .element2").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page + 1) + ") .element3").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page + 1) + ") .delay-map").animateCss("fadeOut");

    $(".pages .page:nth-child(" + (page + 1) + ") .element-people-1").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page + 1) + ") .element-people-2").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page + 1) + ") .element-people-3").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page + 1) + ") .element-people-4").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page + 1) + ") .element-people-5").animateCss("fadeOut");

    $(".pages .page:nth-child(" + (page - 1) + ") .element-people-1").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page - 1) + ") .element-people-2").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page - 1) + ") .element-people-3").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page - 1) + ") .element-people-4").animateCss("fadeOut");
    $(".pages .page:nth-child(" + (page - 1) + ") .element-people-5").animateCss("fadeOut");

    //Animar elementos
    $(".pages .page:nth-child(" + page + ") .element1").animateCss("fadeInUp");
    $(".pages .page:nth-child(" + page + ") .element2").animateCss("fadeInUp");
    $(".pages .page:nth-child(" + page + ") .element3").animateCss("fadeInUp");
    $(".pages .page:nth-child(" + page + ") .delay-map").animateCss("fadeInUp");

    $(".pages .page:nth-child(" + page + ") .element-timing-1").animateCss("fadeInUp");
    $(".pages .page:nth-child(" + page + ") .element-timing-2").animateCss("fadeInUp");
    $(".pages .page:nth-child(" + page + ") .element-timing-3").animateCss("fadeInUp");
    $(".pages .page:nth-child(" + page + ") .element-timing-4").animateCss("fadeInUp");
    $(".pages .page:nth-child(" + page + ") .element-timing-5").animateCss("fadeInUp");

    $(".pages .page:nth-child(" + page + ") .element-people-1").animateCss("fadeIn");
    $(".pages .page:nth-child(" + page + ") .element-people-2").animateCss("fadeIn");
    $(".pages .page:nth-child(" + page + ") .element-people-3").animateCss("fadeIn");
    $(".pages .page:nth-child(" + page + ") .element-people-4").animateCss("fadeIn");
    $(".pages .page:nth-child(" + page + ") .element-people-5").animateCss("fadeIn");

  }
  function pagination(page) {
    console.log(page)
    if(page == 1 || page == 2 || page == 3){
      $(" .section2, .section3, .section4, .section5, .section6, .section7,.section8, .section9, .section10, .section11, .section12, .section13, .section14, .section15  ").css("background","white");      
      $(".section1").css("background","#f5f5f5");
      $("#sections").html("1")
      numero = -1250 / 3;
    }
     else if(page == 4 ){
      $(" .section1, .section3, .section4, .section5, .section6, .section7,.section8, .section9, .section10, .section11, .section12, .section13, .section14, .section15  ").css("background","white");      
      $(".section2").css("background","#f5f5f5");
       $("#sections").html("2")
      numero = -1250 /  1;
    }
    else if(page == 5 || page == 6 || page == 7 ){
      $(" .section2, .section1, .section4, .section5, .section6, .section7,.section8, .section9, .section10, .section11, .section12, .section13, .section14, .section15  ").css("background","white");      
      $(".section3").css("background","#f5f5f5");
      $("#sections").html("3")
     numero = -1250 /  3;
    }else if(page == 8){
      $(" .section2, .section3, .section1, .section5, .section6, .section7,.section8, .section9, .section10, .section11, .section12, .section13, .section14, .section15  ").css("background","white");      
      $(".section4").css("background","#f5f5f5");  
      $("#sections").html("4")
      numero = -1250 /  1;
    }
    else if(page == 9){
      $(" .section2, .section3, .section4, .section1, .section6, .section7,.section8, .section9, .section10, .section11, .section12, .section13, .section14, .section15  ").css("background","white");      
      $(".section5").css("background","#f5f5f5");  
      $("#sections").html("5")
      numero = -1250 /  1;
    }
    else if(page == 10 || page == 11){
      $(" .section2, .section3, .section4, .section5, .section1, .section7,.section8, .section9, .section10, .section11, .section12, .section13, .section14, .section15  ").css("background","white");      
      $(".section6").css("background","#f5f5f5");  
      $("#sections").html("6")
      numero = -1250 /  2;
    }
    else if(page == 12 || page == 13 || page == 14){
      $(" .section2, .section3, .section4, .section5, .section6, .section1,.section8, .section9, .section10, .section11, .section12, .section13, .section14, .section15  ").css("background","white");      
      $(".section7").css("background","#f5f5f5");
      $("#sections").html("7")
      numero = -1250 /  3;
    }
    else if ( page == 15 || page == 16 || page == 17 || page == 18 || page == 19 || page == 20 || page == 21 || page == 22 || page ==  23 ){
      $(" .section2, .section3, .section4, .section5, .section6, .section7,.section1, .section9, .section10, .section11, .section12, .section13, .section14, .section15  ").css("background","white");      
      $(".section8").css("background","#f5f5f5");
      $("#sections").html("8")
      numero = -1250 /  9;
    }
    else if ( page == 24 || page == 25 || page == 26 || page == 27  ){
      $(" .section2, .section3, .section4, .section5, .section6, .section7,.section8, .section1, .section10, .section11, .section12, .section13, .section14, .section15  ").css("background","white");      
      $(".section9").css("background","#f5f5f5");
      $("#sections").html("9")
      numero = -1250 /  4;
    }
    else if ( page == 28 || page == 29 ){     
      $(" .section2, .section3, .section4, .section5, .section6, .section7,.section8, .section9, .section1, .section11, .section12, .section13, .section14, .section15  ").css("background","white");      
      $(".section10").css("background","#f5f5f5");
      $("#sections").html("10")
      numero = -1250 /  2;
    }
    else if ( page == 30 ){     
      $(" .section2, .section3, .section4, .section5, .section6, .section7,.section8, .section9, .section10, .section1, .section12, .section13, .section14, .section15  ").css("background","white");      
      $(".section11").css("background","#f5f5f5");
      $("#sections").html("11")
      numero = -1250 /  1;
    }
    else if (  page == 31 || page == 32 || page == 33 || page == 34 || page == 35 || page == 36 ){
      $(" .section2, .section3, .section4, .section5, .section6, .section7,.section8, .section9, .section10, .section11, .section1, .section13, .section14, .section15  ").css("background","white");      
      $(".section12").css("background","#f5f5f5");
      $("#sections").html("12")
      numero = -1250 /  6;
    }
    else if (  page == 37  ){
      $(" .section2, .section3, .section4, .section5, .section6, .section7,.section8, .section9, .section10, .section11, .section12, .section1, .section14, .section15  ").css("background","white");      
      $(".section13").css("background","#f5f5f5");
      $("#sections").html("13")
      numero = -1250 /  1;
    }
    else if (   page == 38 ||  page == 39 ||  page == 40  || page == 41){
      $(" .section2, .section3, .section4, .section5, .section6, .section7,.section8, .section9, .section10, .section11, .section12, .section13, .section1, .section15  ").css("background","white");      
      $(".section14").css("background","#f5f5f5");
      $("#sections").html("14")
      numero = -1250 /  4;
    }
    else if (page == 42){
      $(" .section2, .section3, .section4, .section5, .section6, .section7,.section8, .section9, .section10, .section11, .section12, .section13, .section14, .section1  ").css("background","white");      
      $(".section15").css("background","#f5f5f5");
      $("#sections").html("15")
      numero = -1250 /  1;
    }
    
    if(page != 14){
        document.getElementById("text").innerHTML = "";
        document.getElementById("text2").innerHTML = "";
        document.getElementById("text3").innerHTML = "";
        document.getElementById("text4").innerHTML = "";
    }else{
      setTimeout(function(){ frameLooper() }, 1000);
       
    }
    switch (page)
    {
      case 2: 
        animationsStart(page);
        $('#videoMadero').get(0).play();
        // $(".page-2 .element1").animateCss("fadeInUp");
        break;
      case 3: 
        animationsStart(page);
        $('#videoMadero').get(0).pause();
        // $(".page-3 .element1").animateCss("fadeInUp");
        // $(".page-3 .element2").animateCss("fadeInUp");
        break;
      case 4: 
        break;
      case 8:
        $('progress').each(function() {
            var max = $(this).val();
            $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
        });
        break;
      case 9:
        deanimationChart();
        break;
      case 10:
        setTimeout(function() {
          animationChart();
        }, 500);
        break;
      case 11:
        $('#planeta-video').get(0).play();
        deanimationChart();
        // var lineChart = new Chart(graphCanvas, {
        //   type: 'line',
        //   data: graphData,
        //   options: chartOptions
        // });
        break;
      case 12:
      
        // frameLooper();      
      
        break;
      case 29: 
        //Activar selector de estados
        $('#map-selector').hide();
        break;
      case 30: 
        //Activar selector de estados
        $('#map-selector').show().animateCss("fadeInLeft");
        break;
      case 31: 
        //Activar selector de estados
        $('#map-selector').hide();
        break;
      case 32:
        // $(".page-3 .element1").animateCss("fadeInUp");
        // $(".page-3 .element2").animateCss("fadeInUp");
        break;
    }
  

    scrolling = true;
    curPage = page;
    $(".nav-el").removeClass("active");
    $(".nav-el-" + page).addClass("active");
    var newNavLen = -1250;
    if(page == 1 || page == 4 || page == 5 || page == 8 || page == 9 || page == 10 || page == 12 || page == 15 || page == 24 || page == 28 || page == 30 || page == 31 || page == 37 || page == 38 || page == 42){
      numero2 = 1
    }
    if(page == 2 || page == 6  || page == 11 || page == 13 || page == 16 || page == 25 || page == 29 || page == 32 || page == 39){
      numero2 = 2
    }
    if(page == 3 || page == 7 || page == 14 || page == 17 || page == 26 || page == 33 || page == 40){
      numero2 = 3
    }
    if(page == 18 || page == 27 || page == 34 || page == 41){
      numero2 = 4
    }

    if(page == 19 || page == 35 ){
      numero2 = 5
    }

    if(page == 20 || page == 36 ){
      numero2 = 6
    }

    if(page == 21 ){
      numero2 = 7
    }

    if(page == 22){
      numero2 = 8
    }
    if(page == 23){
      numero2 = 9
    }
    // if(page == 44){
    //   numero2 = 10
    // }

    newNavLen =  numero * numero2;
    if(page == 1 || page == 4  || page == 5 || page == 8  || page == 9 || page == 10 || page == 12 || page == 15  || page == 24 || page == 28 || page == 30 || page == 31 || page == 37 || page == 38 || page == 42 ){
      var newNavLen = 0;
    }
  
    $nav.velocity({strokeDashoffset: newNavLen}, {duration: PAGETRANSITION});
    $(".numbers").css("transform", "translateY("+ (0 - (page - 1) * headingH) +"px)");
    $pages.css("transform", "translate3D(0,"+ (0 - (page - 1) * 100) +"%,0)");
    setTimeout(function() {
      scrolling = false;
    }, PAGETRANSITION);
    //Inicializador de animaciones de entrada
  }

  function navigateUp() {
    if (curPage > 1) {
      curPage--;
      pagination(curPage);
      animationsStart(curPage);
    }
  }

  function navigateDown() {
    if (curPage < numOfPages) {
      curPage++;
      pagination(curPage);
      animationsStart(curPage);
    }
  }
  function activateHandlers() {
    $('.pages').on("mousewheel DOMMouseScroll", function(e) {
      $(".pages").css("transition","-webkit-transform 0.7s")
      if (!scrolling) {
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
          navigateUp();
        } else { 
          navigateDown();
        }
      }
    });
    $(document).on("click", ".nav-el", function() {
      console.log("click");
      var pg = +$(this).attr("data-page");
      pagination(pg);
      if(pg != 14){
        $('#map-selector').hide();
      }
    });
    $(document).on("keydown", function(e) {
      if (scrolling) return;
      if (e.which === 38) {
        navigateUp();
      } else if (e.which === 40) {
        navigateDown();
      }
    });
    $(window).resize(function() {
      headingH = $(".heading").height();
    });
  }
  var diff = 0;
  $(document).on("touchstart", ".page", function(e) {
    var startY = e.originalEvent.touches[0].pageY;
    $pages.addClass("instant");
    $(document).on("touchmove", function(e) {
      var y = e.originalEvent.touches[0].pageY;
      diff = (y - startY) / $(".page").height();
      $pages.css("transform", "translate3D(0,"+ (0 - (curPage - 1 - diff) * 100) +"%,0)");
    });
  });
  $(document).on("touchend", function(e) {
    $pages.removeClass("instant");
    $(document).off("touchmove");
    if (diff > 0.05) {
      if (curPage === 1) {
        pagination(1);
        diff = 0;
        return;
      }
      navigateUp();
    } else if (diff < -0.05) {
      if (curPage === numOfPages) {
        pagination(numOfPages);
        diff = 0;
        return;
      }
      navigateDown();
    } else if (!diff) {
      return;
    } else {
      $pages.css("transform", "translate3D(0,"+ (0 - (curPage - 1) * 100) +"%,0)");
    }
    diff = 0;
  });

  //Animaciones de graficas de barras al abrir modal
  $( ".modalDiputadosyAyuntamiento" ).click(function() {
      $("#modalTabla9").modal();
      $('progress').each(function() {
            var max = $(this).val();
            $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
      });
  });

  $( ".modalDiputados" ).click(function() {
      $("#modalDiputados").modal();
      $('progress').each(function() {
            var max = $(this).val();
            $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
      });
  });

  $( ".modalAyuntamientos" ).click(function() {
      $("#modalAyuntamientos").modal();
      $('progress').each(function() {
            var max = $(this).val();
            $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
      });
  });

  $( ".modalDistritos" ).click(function() {
      setTimeout(function() {
        $('div.bar.one').addClass("active");
        $('div.bar.two').addClass("active");
        $('div.bar.three').addClass("active");
        $('div.bar.four').addClass("active");  
      }, 400);
      $("#modalDistritos").modal();
      $('#modalDistritos').on('hidden.bs.modal', function (e) {
        $('div.bar.one').removeClass("active");
        $('div.bar.two').removeClass("active");
        $('div.bar.three').removeClass("active");
        $('div.bar.four').removeClass("active");
      });
  });

  $( ".modalDistritosB" ).click(function() {
     setTimeout(function() {
        $('div.bar.five').addClass("active");
        $('div.bar.six').addClass("active");
        $('div.bar.seven').addClass("active");
        $('div.bar.eight').addClass("active");  
      }, 400);
      $("#modalDistritosB").modal();
      $('#modalDistritosB').on('hidden.bs.modal', function (e) {
        $('div.bar.five').removeClass("active");
        $('div.bar.six').removeClass("active");
        $('div.bar.seven').removeClass("active");
        $('div.bar.eight').removeClass("active");
      });
  });

  $( ".modalDistritosC" ).click(function() {
      setTimeout(function() {
        $('div.bar.nine').addClass("active");
        $('div.bar.ten').addClass("active");
        $('div.bar.eleven').addClass("active");
        $('div.bar.twelve').addClass("active");  
      }, 400);
      $("#modalDistritosC").modal();
      $('#modalDistritosC').on('hidden.bs.modal', function (e) {
        $('div.bar.nine').removeClass("active");
        $('div.bar.ten').removeClass("active");
        $('div.bar.eleven').removeClass("active");
        $('div.bar.twelve').removeClass("active");
      });
  });
  //Animación de gráfica
  var dataChart = [
    {
      numero  : '12,765,789',
      anio : "2009",
      titulo: "Elección a Diputados"
    },
    {
      numero  : '15,893,130',
      anio : "2012",
      titulo: "asdf"
    },
    {
      numero  : '11,638,671',
      anio : "2015",
      titulo: "Elección a Diputados"
    },
    {
      numero  : '20,649,051',
      anio : "2018",
      titulo: "asdf"
    }
  ];

  // var graphCanvas = document.getElementById("animatedChart");

  // // Chart.defaults.global.defaultFontFamily = "Lato";
  // Chart.defaults.global.defaultFontSize = 18;

  // var graphData = {
  //   labels: ["2009", "2012", "2015", "2018"],
  //   datasets: [{
  //     //label: "Car Speed",
  //     data: [12765789, 15893130, 11638671, 20649051],
  //     lineTension: 0.4,
  //     fill: false,
  //     borderColor: 'orange',
  //     backgroundColor: 'transparent',
  //     pointBorderColor: 'orange',
  //     pointBackgroundColor: 'rgba(255,150,0,0.5)',
  //     pointRadius: 10,
  //     pointHoverRadius: 10,
  //     pointHitRadius: 30,
  //     pointBorderWidth: 2
  //   }]
  // };

  // var chartOptions = {
  //   legend: {
  //     display: false,
  //     position: 'top',
  //     labels: {
  //       boxWidth: 80,
  //       fontColor: 'white'
  //     }
  //   },
  //   layout: {
  //     padding: {
  //       left: 100,
  //       right: 100,
  //       top: 0,
  //       bottom: 100
  //     }
  //   },
  //   tooltips: {
  //     enabled: false
  //   },
  //   hover: {
  //     mode: false
  //   },
  //   animation: {
  //     duration: 2000
  //   },
  //   plugins: {
  //     datalabels: {
  //       backgroundColor: function(context) {
  //         return context.dataset.backgroundColor;
  //       },
  //       borderRadius: 4,
  //       color: 'white',
  //       font: {
  //         size: 32,
  //         weight: 'bold'
  //       },
  //       formatter:  function(value) {
  //         return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //       },
  //       align: 'end',
  //       offset: 20
  //       // padding:{
  //       //   bottom: 10
  //       // }
  //     }
  //   },
  //   scales: {
  //     xAxes: [{
  //       gridLines: {
  //           display:false
  //       },
  //       ticks: {
  //         display: false
  //       }
  //     }],
  //     yAxes: [{
  //       gridLines: {
  //           display:false
  //       },
  //       ticks: {
  //         display: false,
  //         stepSize:2500000
  //       }
  //     }]
  //   }
  // };

  // var lineChart = new Chart(graphCanvas, {
  //   type: 'line',
  //   data: graphData,
  //   options: chartOptions
  // });
  //Animacion de numeritos
  // $('.radio-linea').on('mouseenter mouseleave', function () {
  //   $('.boxe, .linea-r').toggleClass('open');
  // });
  // animateChart();
});