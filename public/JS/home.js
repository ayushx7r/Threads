let input = document.querySelector('input');
let postBtn = document.querySelector('.uploadpost button');
let postThread = document.querySelector('.postThread');
let close = document.querySelector('.thread-heading span i');
let opt = document.querySelector('.options');
let edits = document.querySelector('.edits');
let postin = document.querySelector('.content-add input');

let postThreads = () => {
    postThread.classList.add('open-thread');
    postin.focus();
}


let closeThread = () => {
    postThread.classList.remove('open-thread');
};

let showOptions = () => {
    edits.classList.toggle('showedits');
};

postBtn.addEventListener('click', postThreads);
input.addEventListener('click', postThreads);
close.addEventListener('click', closeThread);
opt.addEventListener('click', showOptions);