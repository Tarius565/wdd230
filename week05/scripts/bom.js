const scripture = document.querySelector("#favchap");
const button = document.getElementById("submit");
const list = document.querySelector("#list");

button.addEventListener('click', onClick);

function onClick () {
    if (!scripture.value == "") {
        addedScripture = scripture.value;
        scripture.value = "";

        const listChapter = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listChapter.appendChild(listText);
        listText.textContent = addedScripture;
        listChapter.appendChild(listBtn);
        listBtn.textContent = '✖';

        list.appendChild(listChapter);

        listBtn.addEventListener('click', () => {
            list.removeChild(listChapter);
        })

        scripture.focus();
        }
    }
