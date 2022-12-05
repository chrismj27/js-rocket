var timer = null;
var countdownNumber = 10;
var timerBlink = null

//Blink function (to be passed to timerBlink for setInterval)
function myBlinker() {
	$("#countdown").fadeToggle(100);
};

//Start the blinker for the countdown
$(document).ready(function() {
	clearInterval(timerBlink);
	//timerBlink = setInterval(myBlinker, 100);
});


//***Begin changeState function

var changeState = function(state){
	document.body.className = "body-state" + state; //set the value of the 'class' parameter in the BODY element of the HTML page.
	clearInterval(timer); //reset the countdown timer
	clearInterval(timerBlink);
	countdownNumber = 10; //set the countdown for 10
	document.getElementById('countdown').innerHTML=countdownNumber; //update the page with the current count
	$("#countdown").css({"color": "", "display": "block"});

	if(state==1){
		document.getElementById('nervous').className = 'nervous';
		document.getElementById('cant-wait').className = 'cant-wait';
		$("#countdown").css({"color": "", "display": "block"});
	}

	//
	if (state==2) {
		timer = setInterval(function() {
			countdownNumber = countdownNumber - 1;
			document.getElementById('countdown').innerHTML=countdownNumber;
			
			clearInterval(timerBlink);
			if (countdownNumber <= 5) {
				$("#countdown").css({"color": "red"});
				timerBlink = setInterval(myBlinker, 50);
			}
			
			if (countdownNumber > 4 && countdownNumber <= 7){
				//fart in the suit
				document.getElementById('nervous').className = 'nervous show';
			} else{
				document.getElementById('nervous').className = 'nervous';
			} //

			if (countdownNumber > 1 && countdownNumber <= 4){
				//ask if it will be a problem
				document.getElementById('cant-wait').className = 'cant-wait show';
			} else{
				document.getElementById('cant-wait').className = 'cant-wait';
			}

			if (countdownNumber<=0) {
				changeState(3);
			};
		}, 500);
		
	} else if (state == 3){
		var success = setTimeout(function () {
			var randomNumber = Math.round(Math.random() * 10);
			
			// display the random number in the console
			// console.log('randomNumber: ', randomNumber);
			// success
			if (randomNumber > 5) {
				changeState(4);
			}	
			// fail
			else {
				changeState(5);
			}
		}, 2000);
	} 
}





