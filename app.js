n = 0;
funtion time() {
n++;
}
setlnterval("time()", 1000)
function start(){
  document.getElementById("time").innerText = "変更しました";
  timee134();
}
function stop() {
	document.getElementById("time").innerText = n;
	timegame = false;
}
