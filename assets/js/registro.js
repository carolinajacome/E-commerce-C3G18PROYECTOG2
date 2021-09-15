const form = document.getElementById('reg-form');
const inputs = document.querySelectorAll('#reg-form input');

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
    password: false
}

const validarForm = (e) => {
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
            validarConPassword();
        break;
        case "con_password":
            validarConPassword();
        break;
    }
}

const validarCampo = (expresion, input, campo, campo1) => {
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

const validarConPassword = () => {
	const inputPassword = document.getElementById('password');
	const inputConPassword = document.getElementById('con_password');

	if(inputPassword.value !== inputConPassword.value){
        document.getElementById(`group__con_password`).classList.remove('form-box__group_correct');
        document.getElementById(`group__con_password`).classList.add('form-box__group_incorrect');
        document.querySelector(`#group__con_password .paragraph_input-error`).classList.remove('paragraph_input-error-active');
		campos['password'] = false;
	} else {
		document.getElementById(`group__con_password`).classList.remove('form-box__group_incorrect');
        document.getElementById(`group__con_pasword`).classList.add('form-box__group_correct');
        document.querySelector(`#group__con_password .paragraph_input-error`).classList.add('paragraph_input-error-active');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const terms = document.getElementById('checkbox');
    if (campos.nombre && campos.apellido && campos.password && campos.email && terms.checked ) {
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