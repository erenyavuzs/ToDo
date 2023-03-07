let addButtonB = document.getElementById('addButton');
let listField = document.getElementById('listField');
let inputText = document.getElementById('inputText');
let clearButtonB = document.getElementById('clearButton');

inputText.value = "";

addButtonB.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    listField.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick',function(){
        listField.removeChild(paragraph);
    });

    clearButtonB.addEventListener('click', function(){
        paragraph.style.display = 'none';
    })

})