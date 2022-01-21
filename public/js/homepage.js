const buttonEL = document.getElementById('parameterBtn');
const parameterInputsEL = document.getElementById('parameterInputs');
const submitParamsEL = document.getElementById('submitParams');
const ph = document.querySelector('#PH');
const alk = document.querySelector('#Alkalinity');
const mag = document.querySelector('#Magnesium');
const calc = document.querySelector('#Calcium');
const amm = document.querySelector('#Ammonia');
const phos = document.querySelector('#Phosphate');
const nit = document.querySelector('#Nitrate');

/* const parameterCheck = () => {
    parameterInputsEL.classList.toggle('showHide');
}; */

const enterParams = async (event) => {
    event.preventDefault();

    const params = [
        {
            "ph": ph.value,
            "alk": alk.value,
            "mag": mag.value,
            "calc": calc.value,
            "amm": amm.value,
            "phos": phos.value,
            "nit": nit.value,
        }
    ];

    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: JSON.stringify({ params }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            await response.json();
            document.location.replace('/myParameters');
        } else {
            alert('Could not redirect');
        }
    } catch (err) {
        console.log(err);
    };
}




/* 
buttonEL.addEventListener('click', parameterCheck); */

submitParamsEL.addEventListener('click', enterParams);