const formulario = document.querySelector('#form-login'); //se obtiene el formulario por su id

const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //patron para validar el correo

formulario.addEventListener('submit', function(e) { //se ejecuta cuando se envia el formulario

    e.preventDefault(); //evita que el formulario se envie antes de validar

    //se obtienen los campos del formulario
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const mensajeError = document.querySelector('#mensaje-error');

    let formularioValido = true; //el formulario comienza siendo valido

    mensajeError.textContent = ''; //limpiamos mensajes anteriores


    //validamos que el correo tenga un formato correcto
    if (!patronCorreo.test(email.value.trim())) {
        email.classList.add('campo-error');
        mensajeError.textContent = 'Por favor, ingresa un correo válido.';
        formularioValido = false;
    } else {
        email.classList.remove('campo-error');
    }


    //validamos que la contraseña no este vacia
    if (password.value.trim() == '') {
        password.classList.add('campo-error');
        mensajeError.textContent = 'Por favor, ingresa tu contraseña.';
        formularioValido = false;
    } else {
        password.classList.remove('campo-error');
    }


    //si todo esta correcto
    if (formularioValido) {
        console.log('Formulario enviado correctamente');
    }

});