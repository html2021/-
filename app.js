timegame = true;
time = 0;
function d12456() {
	time++;
}
function timee134() {
	while (timegame) {
		window.setTimeout(d12456, 1000);
	}
}
function start(){
  document.getElementById("time").innerText = "変更しました";
  timee134();
}
function stop() {
	document.getElementById("time").innerText = time;
	timegame = false;
}
