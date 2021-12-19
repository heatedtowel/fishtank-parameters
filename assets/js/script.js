let buttonEL = document.getElementById('parameterBtn');
let parameterInputsEL = document.getElementById('parameterInputs');


function parameterCheck() {
    parameterInputsEL.classList.toggle('showHide');
};


buttonEL.addEventListener('click', (event) => {
    console.log('test');
    parameterCheck();
});