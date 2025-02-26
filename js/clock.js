const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${minutes}:${second}`;
}

//웹사이트가 로드되고 바로 getClock을 실행하고 싶다면
getClock();
setInterval(getClock, 1000);
