const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
// const link = document.querySelector("a")     //<a>태그 찾기 필요 X
const greeting = document.querySelector("#greeting")    //H1태그 넣어서 결과값 출력

const HIDDEN_CLASSNAME = "hidden"   //hidden 쿨래스를 오타방지용
const USRERNAME_KEY = "username"    //username을 키값으로 설정

function onLoginSumbit(event){  //이 이벤트는 submit기본 이벤트를 받아옴, 
    event.preventDefault();    //Default 함수가 실행되지 않게 막는 함수, 기본 이벤트를 막음
    const username = loginInput.value;  //input값 가져오고
    loginForm.classList.add(HIDDEN_CLASSNAME)   //login폼 숨기고
    // greeting.innerText = "Hello " + username //h1태그에 Hello+username 추가
    paintGreeting(username);
    localStorage.setItem(USRERNAME_KEY, username);
}

function handleLinkClick(event){        //이벤트값을 받아옴
    event.preventDefault();             //이벤트기본 함수를 막음 
    console.log(event)                  // event를 찍어줌
}   //현재 사용하지 않음.

function paintGreeting(username){
    greeting.innerText = `Hello ${username}` //h1태그에 Hello+username 추가 `(백틱 사용)
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

// link.addEventListener("click", handleLinkClick)      // 클릭 이벤트가 인식되면 마우스 이벤트를 반환값으로 보냄
const savedUsername = localStorage.getItem(USRERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSumbit)     //submit을 감지해서 submit이 감지되면 함수 실행, 여기서 함수에 이벤트를 보냄
    //show the form
}else{
    paintGreeting(savedUsername);
    //show the greeting
}