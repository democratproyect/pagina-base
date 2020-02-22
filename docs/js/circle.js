var path = $('svg').find('path');
var pathLength = path[0].getTotalLength();
var speed = 1.5;
var percent = 0.60;

path.css({
	'stroke-dasharray':pathLength + ' ' + pathLength,
	'stroke-dashoffset':pathLength
});

if( !isIE() ) {
  $('.path').velocity({
    'stroke-dashoffset': pathLength * (1 - percent)
  },{
    duration:speed * 200,
    progress: function() {
      var percentText = 100 - Math.round(parseFloat($(this).css('stroke-dashoffset'))/pathLength * 100);
      $('.figure p').html(percentText + '%');
    }
  });
  
  /*$('#Layer_1').velocity({
    'transform':'rotateX(-' + (.5 * percent * 360) + 'deg)'
  },{
    duration:speed * 1000,
    progress:function() {
      console.log($(this).css('transform'));
    }
  });*/
}
else {
  var currentPathLength = pathLength;
  var requestAnimationFrameID = requestAnimationFrame(doAnim);
  function doAnim() {
    if (currentPathLength <= pathLength * (1 - percent)) {
      cancelAnimationFrame(requestAnimationFrameID); 
      return; 
    }
    
    var percentText = 100 - Math.round(parseFloat(currentPathLength)/pathLength * 100);
    $('.figure p').html(percentText + '%');
    
    $('.path').css({
      'stroke-dashoffset': currentPathLength
    });
    currentPathLength -= 2;
    requestAnimationFrameID = requestAnimationFrame(doAnim);
  }
}

function isIE(userAgent) {
  userAgent = userAgent || navigator.userAgent;
  return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1;
}