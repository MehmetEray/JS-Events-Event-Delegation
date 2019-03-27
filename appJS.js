
const filterInput = document.getElementById("filter");
const toDoForm = document.getElementById("todo-form");

// filterInput.onfocus = function(){
//     console.log("text");
// }

filterInput.addEventListener("focus",function(e){
    console.log(e);
    console.log(e.target);
    console.log(e.type);
    console.log(e.target.placeholder);
    
});

toDoForm.addEventListener("submit",submitForm);
function submitForm(e){
    console.log("Submit event 1");
    e.preventDefault();
}

// Keyboard Events

// Keypress
document.addEventListener("keypress",run);
function run(e){
    console.log(e.which);
    
}
// keydown
document.addEventListener("keydown",run);
function run(e){
    console.log(e.key);
    
}
// keyup
document.addEventListener("KEYUP",run);
function run(e){
    console.log(e.key);
    
}

const header = document.querySelector(".card-header");
const toDoInput = document.querySelector("#todo");
toDoInput.addEventListener("keyup",changeText);
function changeText(e){
    header.textContent = e.target.value;
    console.log(e.target.value);
    console.log(e.target);
}

// Mouse Events

const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");
// Click Events

title.addEventListener("click",clicked);
function clicked(e){
    console.loge.type;
}

// Dcouble Click Event

title.addEventListener("dblclick",doubleClicked);
function doubleClicked(e){
    console.log(e.type);
}

// Mouse Down Event

title.addEventListener("mousedown",down);
function down(e){
    console.log(e.type);
}

// Mouse Up Event

title.addEventListener("mouseup",up);
function up(e){
    console.log(e.type);
}

// Mouse Over Event

title.addEventListener("mouseover",mouseOver);
function mouseOver(e){
    console.log(e.type);
}

// MouseOut Event

title.addEventListener("mouseout",mouseout);
function mouseout(e){
    console.log(e.type);
}

// Mouse enter ve mouse leave

title.addEventListener("mouseleave",mouseleave);
function mouseleave(e){
    console.log(e.type);
}

// Input Events

const filter = document.getElementById("filter");
//Focus

filter.addEventListener("focus",focus);
function focus(e){
    console.log(e.type);
}

// Blur

filter.addEventListener("blur",blur);
function blur(e){
    console.log(e.type);
}

// Paste

filter.addEventListener("paste",paste);
function paste(e){
    console.log(e.type);
}

// Cut

filter.addEventListener("cut",cut);
function cut(e){
    console.log(e.type);
}

// Select

filter.addEventListener("select",select);
function select(e){
    console.log(e.type);
}

// Event Delegation(Capturing)

const cardBody = document.querySelectorAll(".card-body")[1];
cardBody.addEventListener("click",run);
function run(e){
    if(e.target.className === "fa fa-remove");{
        console.log("Silme İşlemi");
    }
    if(e.target.id === "filter"){
        console.log("Filtreleme İşlemi");
    }
    if(e.target.id === "clear-todos"){
        console.log("Tüm taskları silme işlemi");
    }
}