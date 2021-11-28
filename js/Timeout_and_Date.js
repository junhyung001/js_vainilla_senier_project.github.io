const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();    //날짜를 읽을수 있는 함수 생성
    const Hours =  String(date.getHours()).padStart(2, "0");    //시간 받아옴
    const Minutes = String(date.getMinutes()).padStart(2, "0")  //
    const Seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${Hours} : ${Minutes} : ${Seconds}`    //00:00:00으로 시간 생성  
}

getClock();
setInterval(getClock, 1000);    //1초마다 getClock호출

