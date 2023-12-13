const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const searchbutton = document.getElementsByTagName("button");

searchbutton[0].addEventListener("click" , () => {
    if(inputBox.value===''){
        alert("You must write a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";

    savedata();
})

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false)

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showtasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showtasks();