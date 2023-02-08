let addtodobutton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');

addtodobutton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph.styling');
    paragraph.innertext = inputfield.value;
    todocontainerappendchild(paragraph);
    inputfield.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textdecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        todocontainer.removechild(paragraph);
    })
})