
setInterval(setTime,1000);
function setTime(){

let time=new Date;
let hours=time.getHours();
let mintutes=time.getMinutes();
let seconds=time.getSeconds();
let am_pm="AM";
if(hours>12){
  hours-=12; 
  am_pm="PM"
}
if(hours >= 0){
  am_pm="AM";
}
if(hours<10){
  hours="0"+hours.toString();
}
if(mintutes<10){
  mintutes="0"+mintutes.toString();
}
if(seconds<10){
 seconds="0"+seconds.toString();
}
let finalTime=hours+":"+mintutes+":"+seconds+" "+am_pm;
document.getElementById("demo").innerHTML=finalTime;

}
setTime();

