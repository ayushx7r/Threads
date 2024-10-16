let input = document.querySelector('input');
let postBtn = document.querySelector('.uploadpost button');
let postThread = document.querySelector('.postThread');
let close = document.querySelector('.thread-heading span i');

let postThreads = () => {
    postThread.classList.add('open-thread');
}


let closeThread = () => {
    postThread.classList.remove('open-thread');
    console.log('closed');
};
postBtn.addEventListener('click', postThreads);
input.addEventListener('click', postThreads);
close.addEventListener('click', closeThread);