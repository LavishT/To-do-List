// MAIN SELECTOROS
let userinput = document.querySelector('input');
let add = document.querySelector('button');
let form = document.querySelector('form');
let button = document.querySelector('button');
let li = document.querySelector('li');
// adding event listeners
button.addEventListener('click', createli);
button.addEventListener('click', deletebut);

// creating functions

function createli() {
    let div = document.createElement('div');
    let li = document.createElement('li');
    li.type = 'checkbox';
    let textval = userinput.value;
    let textinside = document.createTextNode(textval);
    li.append(textinside);
    div.appendChild(li);
    form.appendChild(div);
    userinput.focus();
    userinput.select();
}
// function to create delete button 
function deletebut() {

    let delbut = document.createElement('button');
    let txt = document.createTextNode('DELETE');
    delbut.appendChild(txt);
    form.appendChild(delbut);

    delbut.addEventListener('click', deleteelement);

    function deleteelement(e) {
        let delli = e.target.closet();
        delli.remove();
    }
}


//let div = document.querySelector('div');
// functions
/*add.addEventListener('click', addtext);
function addtext() {
    let div = document.createElement('div');
    let li = document.createElement('li');
    let textval = userinput.value;
    let textinside = document.createTextNode(textval);
    li.append(textinside);
    div.appendChild(li);
    form.appendChild(div);
    userinput.focus();
    userinput.select();
    li = document.querySelector('li');
} 
add.addEventListener('click',deletebutton);
function deletebutton() {
    let delbutton = document.createElement('button');
    delbutton.className = 'delete';
let textinside = document.createTextNode('Delete');
delbutton.appendChild(textinside);
form.append(delbutton);
deletebutton.addEventListener('click',deltext);
function deltext(e) {
    e.preventDefault();
    let tex = e.target.nextElementSibling;
    tex.remove();
    }
}
button.addEventListener('click', changecolor);
function changecolor(e){
    let li = e.target;
    li.style.backgroundColor='red';
}
/*
// main selectors
let input = document.querySelector('input#inputbutton');
let button = document.querySelector('button#submitbtn');
let form = document.querySelector('form');
let body = document.querySelector('body');
let ul = document.querySelector('ul');
let li = document.querySelector('li');
let button2 = document.querySelector('#deletebutton');
// actions

button.addEventListener('click', inputval);
function inputval(){ 
    let div = document.createElement('div');
let li = document.createElement('li');
li_user.type = 'checkbox';
li.appendChild(li_user);
let user_text = input.value;
console.log(user_text);
let txt = document.createTextNode(user_text);
div.appendChild(li_user);
li_user.append(txt);
form.append(li_user);

li = document.querySelector('li');

}
button2.addEventListener('click', deletebutton);
function deletebutton() {
    let delbutton = document.createElement('button');
    delbutton.id = 'deletebutton';
let textinside = document.createTextNode('Delete');
delbutton.appendChild(textinside);
form.append(delbutton);
}
button2.onclick = this.remove;
*/