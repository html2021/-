var timer    = null,
    textObj  = null,
    execBtn  = null,
    clearBtn = null,
    n        = 0;

var startIntervalFunc = function() {
	if (!timer) timer = setInterval(execIntervalFunc, 1000);
};

var execIntervalFunc = function() {
	n++;
	textObj.value = n;
};

var clearIntervalFunc = function() {
	// setIntervalの停止
	clearInterval(timer);
	time = null;
	n = 0;
	textObj.value = n;
};

textObj  = document.getElementById('text');
execBtn  = document.getElementById('exec');
clearBtn = document.getElementById('clear');

execBtn.onclick  = startIntervalFunc;
clearBtn.onclick = clearIntervalFunc;
function start(){
  document.getElementById("time").innerText = "変更しました";
  timee134();
}
function stop() {
	document.getElementById("time").innerText = n;
	timegame = false;
}
