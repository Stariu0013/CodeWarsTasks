const timer_element = document.getElementById('timer');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');
let timer;
let sec = 0;
let min = 0;
let hour = 0;

displayTime();
start_btn.addEventListener('click', function(){
	if (timer) {
    	clearInterval(timer);
	}
	timer = setInterval(timerHandler, 1000);
	start_btn.disabled = true;
});
stop_btn.addEventListener('click', function(){
	clearInterval(timer);
	timer = undefined;
	start_btn.disabled = false;
});
reset_btn.addEventListener('click', function(){
	clearInterval(timer);
	timer = undefined;
	sec = 0;
	min = 0;
	hour = 0;
	displayTime();
	reset_btn.disabled = true;
})


function timerHandler(){
	sec++;
	if(sec == 60){
		sec = 0;
		min++;
	}
	if(min == 60){
		min = 0;
		hour++;
	}


	displayTime();
}


function displayTime(){

	let sec_pretty = sec;
	let min_pretty = min;
	let hour_pretty = hour;

	if(sec < 10){
		sec_pretty = "0" + sec;
	}

	if(min < 10){
		min_pretty = "0" + min;
	}

	if(hour < 10){
		hour_pretty = "0" + hour;
	}

	timer_element.innerHTML = hour_pretty + " : " + min_pretty +" : " + sec_pretty;
}

