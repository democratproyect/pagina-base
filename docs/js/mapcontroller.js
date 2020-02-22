var width = window.innerWidth,
    height = window.innerHeight,
    estadoActual = undefined,
    centered;

 //define projection
 var projection = d3.geo.mercator()
 .center([-100, 22])
 .translate([ width/1.7, height/1.7])
 .scale([ width/.9 ]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#map-container").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "bg-map")
    .attr("width", width)
    .attr("height", height)
    .on("click", clicked);

var g = svg.append("g");

d3.json("./states.json", function(error, mx) {
  if (error) throw error;
  var a = 0;
  console.log(topojson.feature(mx, mx.objects.states).features);
  g.append("g")
      .attr("id", "states")
    .selectAll("path")
    // console.log(mx.objects.states.geometries[0].id)
      .data(topojson.feature(mx, mx.objects.states).features)
    .enter().append("path")
      .attr("d", path)
      .attr("data-estado", function(d) { return d.id; })
      // .attr("id", mx.objects.states.geometries[0].id)
      .on("click", clicked);
  g.append("path")
      .datum(topojson.mesh(mx, mx.objects.states, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path);
});

function clicked(d) {
  var x, y, k;
  console.log(d);

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 4;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");

  if (d.id != undefined){
    var estado = d.id;
    estadoActual = d.id;
    taskAjax(estado)
    setTimeout(function() {
      $('#modalEstado').modal();
    }, 1300);
  }else{
    estadoActual = undefined;
  }
}

//Inicializador de clicks en menu izquierdo
$('.map-link').on("click",function(e) {
  e.preventDefault();
  setTimeout(function() {
    $('#modalEstado').modal();
  }, 1300);
  estado = $(this).attr('data-state');
  nameEstado = $(this).attr('data-estado');
  elementEstado = $(estado);
  estadoActual = nameEstado;
  // pathlink.addClass('active');
  console.log('El estado es:' + estado);
  // console.log('el path es:' + pathlink)
  // $(estado).addClass('active');
  d3.json("./states.json", function(error, mx) {
    clicked(topojson.feature(mx, mx.objects.states).features[estado]);
    $("path[data-estado='" + nameEstado + "']").attr("class", "active");
  });
});

// $('.map-state').on("click",function(e) {
//   setTimeout(function() {
//     $('#modalEstado').modal();
//   }, 1300);
// });

// $('#map-selector').on( 'mousewheel DOMMouseScroll', function ( e ) {
//     var event = e.originalEvent,
//         d = event.wheelDelta || -event.detail;
//     e.preventDefault();
//     this.scrollTop += ( d < 0 ? 1 : -1 ) * 30;
// });



//Delay en modal de estados
// window.setTimeout(function() {
//   $('#modalEstado').on('show.bs.modal', function (e) {

//   });
// }, 5000)