const todoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //key / value 값으로 저장하되 자바스크립트의 값을 문자열로 돌림
}


function deleteTodo(event){
    const li = event.target.parentElement   //삭제 버튼이 클릭되면 버튼의 부모요소인 <li>를 가져온다.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)) //자료형을 Number로 변경 -> 이유 li.id가 String형이기 때문, 자료형 변경후 값을 삭제
    li.remove();            //<li> 삭제
    saveToDos();            //값을 삭제한 후 다시 저장                                                     
}

function paintTodo(newTodo){        //input 태그 안의 값을 받아옴
    const li = document.createElement("li");        //li태그 추가
    li.id = newTodo.id;
    const span = document.createElement("span");    //span태그 추가
    span.innerText = newTodo.text                        //span태그안의 텍스트에input태그 안의 값을 넣음
    const btn = document.createElement("button");   //button태그 추가
    btn.innerText = "❌";                           //button안의 텍스트에 X추가
    btn.addEventListener("click", deleteTodo)       //버튼이 눌리면 deleteToDO함수 호출
    li.appendChild(span);                           //li는 span이라는 자식을 가진다
    li.appendChild(btn);                            //li의 자식으로 btn을 가짐
    todoList.appendChild(li)                        //Html에 만들어둔 ul태그의 자식으로 li태그를 추가한다.
}

function handleTodoSubmit(event){   //submit이 일어났을때(엔터 입력을 받았을때)
    event.preventDefault();         //기본 함수 실행을 막고
    const newTodo = toDoInput.value;    //input태그 안의 값을 가져오고
    toDoInput.value = ""                //input태그의 값을 빈값으로 설정
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj)                 //input 태그의 값을 배열안에 넣는다.
    paintTodo(newTodoObj);                 //paintTodo함수를 호출하고 input태그의 값을 보낸다
    saveToDos()
}

todoForm.addEventListener("submit", handleTodoSubmit)   //폼 안에서 submit을 읽는 대기중, submit 발생시 handleTodoSubmit을 실행


const savedToDos = localStorage.getItem(TODOS_KEY);     //로컬스토리지에 있는 Key / value 값을 받아와서 savedToDos에 저장
// console.log(savedToDos)                                 //savedToDos 확인
if(savedToDos !== null){                                //로컬스토리지가 비어있지 않다면 실행
    const parsedToDos = JSON.parse(savedToDos)          //로컬스토리지에서 받아온 값을 parsedToDos에 오브젝트로 저장
    toDos = parsedToDos;                                //toDos라는 배열에 parsedToDos를 저장
    parsedToDos.forEach(paintTodo)                      //요소를 읽으면서 paintToDo실행
        //arrow function 을 사용해서 forEach를 돌리고 돌리는 함수가 forEach에 들어가서 각각의 요소의 함수를 실행       console.log("This is turn off", item)
}