const buttonEL = document.getElementById('parameterBtn');
const parameterInputsEL = document.getElementById('parameterInputs');
const submitParamsEL = document.getElementById('submitParams');
const ph = document.querySelector('#ph');
const alk = document.querySelector('#alk');
const mag = document.querySelector('#mag');
const calc = document.querySelector('#calc');
const amm = document.querySelector('#amm');
const phos = document.querySelector('#phos');
const nit = document.querySelector('#nit');

const parameterCheck = () => {
    parameterInputsEL.classList.toggle('showHide');
};

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





buttonEL.addEventListener('click', parameterCheck);

submitParamsEL.addEventListener('click', enterParams);