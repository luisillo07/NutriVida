const formulario = document.querySelector('#form-registro'); //se obtiene el formulario por su id

const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //patron simple para validar el correo

formulario.addEventListener('submit', function(e) { //se ejecuta cuando se envia el formulario

    e.preventDefault(); //evita que el formulario se envie inmediatamente

    //se obtienen los campos del formulario
    const nombre = document.querySelector('#nombre');
    const apellido = document.querySelector('#apellido');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confirmarPassword = document.querySelector('#confirmar-password');
    const mensajeError = document.querySelector('#mensaje-error');

    let formularioValido = true; //el formulario comienza siendo valido

    mensajeError.textContent = ''; //limpiamos mensajes anteriores


    //validamos que el nombre no este vacio
    if (nombre.value.trim() == '') {
        nombre.classList.add('campo-error');
        mensajeError.textContent = 'Por favor, ingresa tu nombre.';
        formularioValido = false;
    } else {
        nombre.classList.remove('campo-error');
    }


    //validamos que el apellido no este vacio
    if (apellido.value.trim() == '') {
        apellido.classList.add('campo-error');
        mensajeError.textContent = 'Por favor, ingresa tu apellido.';
        formularioValido = false;
    } else {
        apellido.classList.remove('campo-error');
    }


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
        mensajeError.textContent = 'Por favor, ingresa una contraseña.';
        formularioValido = false;
    } else {
        password.classList.remove('campo-error');
    }


    //validamos que las contraseñas sean iguales
    if (password.value != confirmarPassword.value) {
        confirmarPassword.classList.add('campo-error');
        mensajeError.textContent = 'Las contraseñas no coinciden.';
        formularioValido = false;
    } else {
        confirmarPassword.classList.remove('campo-error');
    }


    //si todos los campos son correctos
    if (formularioValido) {
        console.log('Formulario enviado correctamente');
    }

});