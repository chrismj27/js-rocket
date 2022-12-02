var timer = null;
var countdownNumber = 10;

//***Begin changeState function

var changeState = function(state){
	document.body.className = "body-state" + state; //set the value of the 'class' parameter in the BODY element of the HTML page.
	clearInterval(timer); //reset the countdown timer
	countdownNumber = 10; //set the countdown for 10
	document.getElementById('countdown').innerHTML=countdownNumber; //update the page with the current count

	//
	if (state==2) {
		timer = setInterval(function() {
			countdownNumber = countdownNumber - 1;
			document.getElementById('countdown').innerHTML=countdownNumber;
			
			if (countdownNumber<=0) {
				changeState(3);
			};
		}, 500);
		
	} else if (state == 3){
		var success = setTimeout(function () {
			var randomNumber = Math.round(Math.random() * 10);
			
			// display the random number in the console
			console.log('randomNumber: ', randomNumber);
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