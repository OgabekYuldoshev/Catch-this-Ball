const start = document.getElementById('start');
const place = document.getElementById('place');
const gamePage1 = document.getElementById('game1');
const point = document.getElementById('point');
const ref = document.getElementById('refresh');
const time = document.getElementById('time');
const off = document.querySelector('.off');
const text = document.getElementById('textContent');
secs = 100000000000;

window.addEventListener('load', timeColor)

function timeColor(){


function color(){
    secs--;
  text.style.color = "#" + Math.floor(Math.random() * 16345452).toString(16);
  
  }
  setInterval(color, 1000);
}







var sec = 30;

start.addEventListener("click", starts);
start.addEventListener("click", main);
 
function starts(){
  place.style.height = "50vh";
  point.style.opacity = "1";
  start.style.display = "none";
  ref.style.display = "inline-block";
}
  
function main(){

function timer(){
    sec--;
    time.innerHTML = '00:'+("0" + sec).slice(-2);

    if(sec<=3){
      time.style.color = 'red';
    }


    if(sec==0){
        clearInterval(setTime);
        var gameOver = document.createElement('h2');
        gameOver.textContent = "GAME OVER";
        place.appendChild(gameOver);
        off.textContent= 'Time Off:';
        point.removeEventListener('mouseover', action);
        point.removeEventListener('click', win);
       
     }};
     
     point.addEventListener('click', win);

     function win(){

        var win = document.createElement('h2');
      win.textContent = 'You WIN !!!';
      place.appendChild(win);
      clearInterval(setTime);
      point.removeEventListener('mouseover', action);
      
  
    
  }


     var setTime = setInterval(timer,1000);
}


 



ref.addEventListener("click", rest) 

function rest(){

    location.reload();
}

point.addEventListener('mouseover', action );

function action(){
  var top =  (Math.random()*100).toFixed(1);
  var left =  (Math.random()*100).toFixed(1);
point.style.top = top + "%" ; 
point.style.left = left + "%" ;};


