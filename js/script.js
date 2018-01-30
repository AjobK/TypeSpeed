"use strict";

var textfield = "";
var textspot = 0;
var speed = 100;
var speedlist = [];

function speedLeverage(check) {
	switch (textfield[check]) {
		case ".":
		case "!":
		case "?":
			speed = 300;
			break;
		case ",":
			speed = 140;
			break;
		case " ":
			speed = 0;
			break;
		default:
			speed = 50;
			break;
	}
	
	speedlist.push(speed);
}

function timeOut() {
	setTimeout(function() {
		/* Code block 		*/
		
		speedLeverage(textspot);
		
		document.querySelectorAll("main h1")[1].innerHTML += textfield[textspot];
		document.querySelectorAll("main p")[0].innerHTML = "Textspeed: " + speed / 1000 + " Seconds (" + speed + " ms)";
		textspot++;
		
		/* End code block 	*/
		if (textspot < textfield.length) {
			timeOut();
		} else {
			let avgspeed = 0;
			
			for (let i = 0; i < speedlist.length; i++) {
				avgspeed += speedlist[i];
			}
			
			avgspeed = avgspeed / speedlist.length;
			
			document.getElementsByTagName("p")[0].innerHTML = "<b> Finished: </b> <br />" + "Average speed is approximately " + (avgspeed / 1000).toFixed(2) + " Seconds per character (" + avgspeed.toFixed(2) + " ms)";
		}
	}, speed);
}

function content() {
	textspot = 0;
	speed = 0;
	document.querySelectorAll("main h1")[1].innerHTML = "";
	console.log(document.querySelectorAll("main textarea")[0].value);
	textfield = document.querySelectorAll("main textarea")[0].value;
	timeOut();
}

window.onload = function(e) {
	document.querySelectorAll("main button")[0].addEventListener("click", content);
}