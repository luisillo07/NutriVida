const formulario = document.querySelector('#form-contacto');
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre');
    const correo = document.querySelector('#correo');
    const telefono = document.querySelector('#telefono');
    const mensaje = document.querySelector('#mensaje');
    let formularioValido = true;

    if (nombre.value.trim() === '') {
        nombre.classList.add('campo-error');
        formularioValido = false;
        errorNombre.textContent = 'Por favor, ingresa un nombre valido.';
    } else {
        nombre.classList.remove('campo-error');
        errorNombre.textContent = '';
    }

    if (!patronCorreo.test(correo.value.trim())) {
        correo.classList.add('campo-error');
        formularioValido = false;
        errorCorreo.textContent = 'Por favor, ingresa un correo electrónico válido.';
    } else {
        correo.classList.remove('campo-error');
        errorCorreo.textContent = '';
    }

    if (telefono.value.trim() == '') {
        telefono.classList.add('campo-error');
        formularioValido = false;
        errorTelefono.textContent = 'Por favor, ingresa un número de teléfono válido.';
    } else {
        telefono.classList.remove('campo-error');
        errorTelefono.textContent = '';
    }

    if (mensaje.value.trim() == '') {
        mensaje.classList.add('campo-error');
        formularioValido = false;
        errorMensaje.textContent = 'El mensaje no puede estar vacio.';
    } else {
        mensaje.classList.remove('campo-error');
        errorMensaje.textContent = '';
    }

    const mensajeConfirmacion = document.querySelector('#mensaje-confirmacion');
    if (formularioValido) {
        mensajeConfirmacion.textContent = '¡Pedido enviado correctamente!';
    } else {
        mensajeConfirmacion.textContent = '';
    }
});