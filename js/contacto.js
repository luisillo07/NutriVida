const formulario = document.querySelector('#form-contacto');
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const patronTelefono = /^(\+?56)?\s?9\s?[0-9]{8}$/;

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre');
    const correo = document.querySelector('#correo');
    const telefono = document.querySelector('#telefono');
    const mensaje = document.querySelector('#mensaje');
    let formularioValido = true;

    if (nombre.value.trim() === '') {
        nombre.classList.remove('campo-correcto');
        nombre.classList.add('campo-error');
        formularioValido = false;
        errorNombre.textContent = 'Por favor, el nombre no puede estar vacío.';
    } else {
        nombre.classList.remove('campo-error');
        nombre.classList.add('campo-correcto');
        errorNombre.textContent = '';
    }

    if (!patronCorreo.test(correo.value.trim())) {
        correo.classList.remove('campo-correcto');
        correo.classList.add('campo-error');
        formularioValido = false;
        errorCorreo.textContent = 'Por favor, ingresa un correo electrónico válido. Ej: "usuario@dominio.com"';
    } else {
        correo.classList.remove('campo-error');
        correo.classList.add('campo-correcto');
        errorCorreo.textContent = '';
    }

    if (!patronTelefono.test(telefono.value.trim())) {
        telefono.classList.remove('campo-correcto');
        telefono.classList.add('campo-error');
        formularioValido = false;
        errorTelefono.textContent = 'Por favor, ingresa un número de teléfono válido. Ej: "+56912345678" o "912345678"';
    } else {
        telefono.classList.remove('campo-error');
        telefono.classList.add('campo-correcto');
        errorTelefono.textContent = '';
    }

    if (mensaje.value.trim() == '') {
        mensaje.classList.remove('campo-correcto');
        mensaje.classList.add('campo-error');
        formularioValido = false;
        errorMensaje.textContent = 'El mensaje no puede estar vacio.';
    } else {
        mensaje.classList.remove('campo-error');
        mensaje.classList.add('campo-correcto');
        errorMensaje.textContent = '';
    }

    const mensajeConfirmacion = document.querySelector('#mensaje-confirmacion');
    if (formularioValido) {
        mensajeConfirmacion.textContent = '¡Formulario enviado correctamente!';
    } else {
        mensajeConfirmacion.textContent = '';
    }
});