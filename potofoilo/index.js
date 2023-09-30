const nameContainer = document.getElementById('name');
const nameLetters = nameContainer.querySelectorAll('span');


nameLetters.forEach((letter, index) => {
    letter.style.setProperty('--index', index);
});


nameContainer.classList.add('animate');
