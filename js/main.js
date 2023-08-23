let firstSquare = document.querySelector('.first_square');
let secondSquare = document.querySelector('.second_square');

let activateBtn = document.querySelector('.activate');
let changeBtn = document.querySelector('.change');

let lastActiveSquare = null;
let randomIndex = null;

activateBtn.addEventListener('click', (ev) => {
    randomIndex = Math.floor(Math.random() * 2);
    console.log('перша кнопочка');
    
    if (lastActiveSquare) {
        lastActiveSquare.style.backgroundImage = '';
    }
    
    if (randomIndex === 1) {
        console.log('1');
        firstSquare.style.transform = 'scale(1.1)';
        secondSquare.style.transform = '';
        lastActiveSquare = firstSquare;
    } else {
        console.log('2');
        secondSquare.style.transform = 'scale(1.1)';
        firstSquare.style.transform = '';
        lastActiveSquare = secondSquare;
    }
});

changeBtn.addEventListener('click', (ev) => {
    console.log('друга кнопочка');
    
    if (lastActiveSquare) {
        if (randomIndex === 1) {
            console.log('1');
            lastActiveSquare.style.backgroundImage = "url('./img/1.gif')";
        } else {
            console.log('2');
            lastActiveSquare.style.backgroundImage = "url('./img/1.gif')";
        }
    }
});
