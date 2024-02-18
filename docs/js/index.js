const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const header = document.getElementById('header');

function addTask() {
    if(inputBox.value == ''){
        alert("Please enter a Task");
        return;
    } else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    } else if(e.target.tagName == 'SPAN') {
        e.target.parentElement.remove()
        saveData();
    }
});

function updateHeader() {
    let headerText = header.innerText.trim();
    header.innerText = headerText;
    saveHeader();
}

function saveHeader() {
    localStorage.setItem("headerText", header.innerText);
}

function showHeader() {
    const storedHeader = localStorage.getItem("headerText");
    if (storedHeader) {
        header.innerText = storedHeader;
    }
}

function saveData() {
    localStorage.setItem("data" , listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showHeader();
showTask();
