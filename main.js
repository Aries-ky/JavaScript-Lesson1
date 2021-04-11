
let timer = document.getElementById("timer");
let startstop = document.getElementById("start-stop");
let reset = document.getElementById("reset");

let timerOn = 0;
let startTime;
let elapsedTime = 0;
let timeAdd = 0;
let m = 0;
let s = 0;
let ms = 0;
let timerid = 0;

function stopWatch(){ //タイマー表示
  m = ('0' + Math.floor(elapsedTime / 60000)).slice(-2); 
  s = ('0' + Math.floor(elapsedTime % 60000 / 1000)).slice(-2); 
  ms = ('0' + elapsedTime % 1000).slice(-3); 
  timer.innerHTML = m + ':' + s + ':' + ms;
}

function countUp(){ //カウントアップ
  elapsedTime = Date.now() - startTime + timeAdd;
  stopWatch();
  countUp;
  timerid = setTimeout("countUp()",10);
}

startstop.addEventListener('click',function(){  //スタート & ストップ
  if(timerOn == 0){
    startTime = Date.now();
    countUp();
    startstop.innerHTML = "Stop";
    timerOn++;
  } else {
    clearTimeout(timerid);
    timeAdd += Date.now() - startTime;
    startstop.innerHTML = "Start";
    timerOn = 0;
  }
});

reset.addEventListener('click',function(){  //リセット
  elapsedTime = 0;
  timeAdd = 0;
  stopWatch();
});