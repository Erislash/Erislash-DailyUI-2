window.addEventListener('load', StartApp);


function StartApp() {
    const fieldsInput = {
        name: document.querySelector('#holder'),
        number: document.querySelector('#number'),
        month: document.querySelector('#expiresMonth'),
        year: document.querySelector('#expiresYear'),
        CVV: document.querySelector('#cvv')
    }

    for (field in fieldsInput) {
        fieldsInput[field].addEventListener('input', HandleChage)
    }
}


function HandleChage(e) {
    e.preventDefault();
    const id = e.target.id;
    let val = e.target.value;
    const lastChar = val && val[val.length - 1].charCodeAt(0);

    switch(id) {
        case 'holder':
        if(!((lastChar > 64 && lastChar < 91) || (lastChar > 96 && lastChar < 123))) {
            e.target.value = val.slice(0, val.length - 1);
        }
        document.querySelector(`#${id}Card`).textContent = val || 'Need your name';
        break;

        case 'number':
        if(!( lastChar > 47 && lastChar < 58 ) || val.length > 17 ) {
            e.target.value = val.slice(0, val.length - 1);
        }
        document.querySelector(`#${id}Card`).textContent = val || 'Need your Credit Card Number';
        break;
    }
}