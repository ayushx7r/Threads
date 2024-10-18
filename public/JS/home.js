let input = document.querySelector('input');
let postBtn = document.querySelector('.uploadpost button');
let postThread = document.querySelector('.postThread');
let close = document.querySelector('.thread-heading span i');
let opts = document.querySelectorAll('.options');
let postin = document.querySelector('.content-add input');

let postThreads = () => {
    postThread.classList.add('open-thread');
    postin.focus();
}


let closeThread = () => {
    postThread.classList.remove('open-thread');
};

let showOptions = (e) => {
    e.stopPropagation();
    let edits = document.querySelectorAll('.edits');
    let editBanner = e.target.parentElement.nextElementSibling;
    if(editBanner.classList.contains('showedits')) {
        editBanner.classList.remove('showedits');
        return;
    }
    for(edit of edits) {
        edit.classList.remove('showedits');
    }
    
    editBanner.classList.toggle('showedits');
};

postBtn.addEventListener('click', postThreads);
input.addEventListener('click', postThreads);
close.addEventListener('click', closeThread);

for(opt of opts) {
    opt.addEventListener('click', showOptions);
}

const innerDiv = document.querySelector('.posts');

const outerDiv = document.querySelector('body');


const handleScroll = (event) => {
    innerDiv.scrollTop += event.deltaY;
};

outerDiv.addEventListener('click', (e) => {
    let edits = document.querySelectorAll('.edits');
    for(edit of edits) {
        edit.classList.remove('showedits');
    }
});

outerDiv.addEventListener('wheel', handleScroll);
