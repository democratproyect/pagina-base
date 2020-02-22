
var string = "Clara"; /* type your text here */
var array = string.split("");
var timer;


var string2 = "Concreta"; /* type your text here */
var array2 = string2.split("");
var timer2;

var string3 = "Concisa"; /* type your text here */
var array3 = string3.split("");
var timer3;

var string4 = "Alcanzable"; /* type your text here */
var array4 = string4.split("");
var timer4;


function frameLooper () {
	
   
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
		
        loopTimer = setTimeout('frameLooper()',20); /* change 50 for speed */
	} else {
		clearTimeout(timer);
		if(array.length == 0){
            string = "Clara"; /* type your text here */
            array = string.split("");
			frameLooper2()
		}
			
	}
	
}
// frameLooper();


function frameLooper2 () {
	if (array2.length > 0) {
		document.getElementById("text2").innerHTML += array2.shift();
        loopTimer = setTimeout('frameLooper2()',20); /* change 50 for speed */
	} else {
		clearTimeout(timer2);
		if(array2.length == 0){
            string2 = "Concreta"; /* type your text here */
            array2 = string2.split("");
			frameLooper3()
		}
	}

}

function frameLooper3 () {
	if (array3.length > 0) {
        document.getElementById("text3").innerHTML += array3.shift();
        loopTimer = setTimeout('frameLooper3()',20); /* change 70 for speed */
	} else {
        clearTimeout(timer3);
        if(array3.length == 0){
            string3 = "Concisa"; /* type your text here */
            array3 = string3.split("");
			frameLooper4()
		}
	}

}


function frameLooper4 () {
	if (array4.length > 0) {
		document.getElementById("text4").innerHTML += array4.shift();
        loopTimer = setTimeout('frameLooper4()',20); /* change 50 for speed */
	} else {
        clearTimeout(timer4);
        if(array4.length == 0){
            string4 = "Alcanzable"; /* type your text here */
            array4 = string4.split("");
         
        }
        
    }
    
}


function clear(){
	document.getElementById("text").innerHTML = "";
	document.getElementById("text2").innerHTML = "";
	document.getElementById("text3").innerHTML = "";
	document.getElementById("text4").innerHTML = "";
}