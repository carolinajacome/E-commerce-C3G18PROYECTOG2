const form = document.getElementById('reg-form');
const inputs = document.querySelectorAll('#reg-form input');
const btn1 = document.getElementById('pass-button');
const btn2 = document.getElementById('con_pass-button');
const iput1 = document.querySelector('#reg-form .password');
const iput2 = document.querySelector('#reg-form .con_password');
const inputPassword = document.getElementById('password');
const inputConPassword = document.getElementById('con_password');
var contador1 = 0;
var contador2 = 0;

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,16}$/, // 4 a 16 caracteres.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    nombre: false,
    apellido: false,
    email: false,
    password: false,
    con_password: false
}

function validarForm(e) {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre', 'paragraphNombre_Apellido');
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido', 'paragraphNombre_Apellido');
        break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email', 'paragraphEmail');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password', 'paragraphPassword');
        break;
        case "con_password":
            validarConPassword();
        break;
    }
}

function validarCampo(expresion, input, campo, campo1) {
    if (expresion.test(input.value)) {
        document.getElementById(`group__${campo}`).classList.remove('form-box__group_incorrect');
        document.getElementById(`group__${campo}`).classList.add('form-box__group_correct');
        document.querySelector(`#group__${campo1} .paragraph_input-error`).classList.remove('paragraph_input-error-active');
        campos[campo] = true;
    } else {
        document.getElementById(`group__${campo}`).classList.remove('form-box__group_correct');
        document.getElementById(`group__${campo}`).classList.add('form-box__group_incorrect');
        document.querySelector(`#group__${campo1} .paragraph_input-error`).classList.add('paragraph_input-error-active');
        campos[campo] = false;
    }
}

function validarConPassword() {
	const inputPassword = document.getElementById('password');
	const inputConPassword = document.getElementById('con_password');

	if(inputPassword.value != inputConPassword.value){
        console.log('No son iguales');
        document.getElementById(`group__con_password`).classList.remove('form-box__group_correct');
        document.getElementById(`group__con_password`).classList.add('form-box__group_incorrect');
        document.querySelector(`#group__paragraphConPassword .paragraph_input-error`).classList.add('paragraph_input-error-active');
		campos['con_password'] = false;
	} else if (inputPassword.value === inputConPassword.value && inputPassword.value != "" && inputConPassword.value != "") {
        console.log('Sí son iguales');
        document.getElementById(`group__con_password`).classList.remove('form-box__group_incorrect');
        document.getElementById(`group__con_password`).classList.add('form-box__group_correct');
        document.querySelector(`#group__paragraphConPassword .paragraph_input-error`).classList.remove('paragraph_input-error-active');
		campos['con_password'] = true;
    }
}

btn1.addEventListener('click', tipoInput1, false);
btn2.addEventListener('click', tipoInput2, false);

function tipoInput1() {
    if (inputPassword) {
        if (contador1 != 0) {
            console.log('funciona1');
            document.getElementById(`group__password`).classList.remove('form-box__group-button-view');
            document.getElementById(`group__password`).classList.remove('input-group__width')
            contador1 = 0;
        } else {
            console.log('funciona2');
            document.getElementById(`group__password`).classList.add('form-box__group-button-view');
            document.getElementById(`group__password`).classList.add('input-group__width')
            contador1 = 1;
        }
    }
    if (iput1.type == "password") {
        iput1.type = "text";
    } else {
        iput1.type = "password";
    }
}

function tipoInput2() {
    if (inputConPassword) {
        if (contador2 != 0) {
            console.log('funciona3');
            document.getElementById(`group__con_password`).classList.remove('form-box__group-button-view');
            document.getElementById(`group__con_password`).classList.remove('input-group__width')
            contador2 = 0;
        } else {
            console.log('funciona4');
            document.getElementById(`group__con_password`).classList.add('form-box__group-button-view');
            document.getElementById(`group__con_password`).classList.add('input-group__width')
            contador2 = 1;
        }
    }
    if (iput2.type == "password") {
        iput2.type = "text";
    } else {
        iput2.type = "password";
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const terms = document.getElementById('checkbox');
    if (campos.nombre && campos.apellido && campos.password && campos.email && terms.checked) {
        form.reset();

        document.getElementById('form__successful-message').classList.add('form__successful-message-active');
        setTimeout(() => {
            document.getElementById('form__successful-message').classList.remove('form__successful-message-active');     
        }, 5000);
    } else {
        document.getElementById('form__message').classList.add('form__message-active');
        setTimeout(() => {
            document.getElementById('form__message').classList.remove('form__message-active');         
        }, 5000);
    }
});

