function countdown(id){
    var fecha=new Date('2018','6','1','00','00','00')
    var hoy=new Date()
    var dias=0
    var horas=0
    var minutos=0
    var segundos=0

    if (fecha>hoy){
        var diferencia=(fecha.getTime()-hoy.getTime())/1000
        dias=Math.floor(diferencia/86400)
        diferencia=diferencia-(86400*dias)
        horas=Math.floor(diferencia/3600)
        diferencia=diferencia-(3600*horas)
        minutos=Math.floor(diferencia/60)
        diferencia=diferencia-(60*minutos)
        segundos=Math.floor(diferencia)

        // document.getElementById(id).innerHTML= dias + ' : ' + horas + ' : ' + minutos + ' : ' + segundos
        
        document.getElementById( 'dias' ).innerHTML = dias
        document.getElementById( 'horas' ).innerHTML = horas
        document.getElementById( 'minutos' ).innerHTML = minutos
        document.getElementById( 'segundos' ).innerHTML = segundos
        if (dias>0 || horas>0 || minutos>0 || segundos>0){
            setTimeout("countdown(\"" + id + "\")",1000)
        }
    }
    else{
        document.getElementById('restante').innerHTML= dias + ' : ' + horas + ' : ' + minutos + ' : ' + segundos
    }
}

$('#contador').ready(function(e){
    // console.log('Empezar a correr')
    // console.log(this)
    // console.log(e)
    countdown('contador');
    // countdown('contador2');
})