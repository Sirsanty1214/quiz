let filaSeleccionada = null;

function codigoRepetido(codigo) {
    const table = document.getElementById('estudiantes').getElementsByTagName('tbody')[0];
    for (let i = 0; i < table.rows.length; i++) {
        const fila = table.rows[i];
        if (fila.cells[1].textContent === codigo) {
            mostrarError();
            return true;
        }
    }
    return false;
}

function mostrarError() {
    const modalError = document.getElementById('msg');
    modalError.style.display = 'flex';
}

document.getElementById('cerrarError').addEventListener('click', function () {
    const modalError = document.getElementById('msg');
    modalError.style.display = 'none';
});

function mostrarModal(fila) {
    filaSeleccionada = fila;
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}

document.getElementById('modalSi').addEventListener('click', function () {
    if (filaSeleccionada) {
        filaSeleccionada.remove();
        filaSeleccionada = null;
    }
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
});

document.getElementById('modalNo').addEventListener('click', function () {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
});

// Nueva función para calcular la nota definitiva
function definitiva(nota1, nota2, nota3, nota4) {
    return (nota1 * 0.2) + (nota2 * 0.2) + (nota3 * 0.2) + (nota4 * 0.4);
}

// Función para validar las notas
function validarNota(nota) {
    const regex = /^\d+(\.\d{1,2})?$/; // Permite hasta dos decimales
    return regex.test(nota) && parseFloat(nota) >= 0 && parseFloat(nota) <= 5;
}

function guardarRegistro() {
    const codigo = document.getElementById('codigo').value;

    if (codigoRepetido(codigo)) {
        return;
    }

    const nombre = document.getElementById('nombre').value;
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const nota3 = document.getElementById('nota3').value;
    const nota4 = document.getElementById('nota4').value;

    // Validar cada nota
    if (![nota1, nota2, nota3, nota4].every(validarNota)) {
        mostrarError(); // Mostrar mensaje de error si hay una nota inválida
        return;
    }

    const notaDefinitiva = definitiva(parseFloat(nota1), parseFloat(nota2), parseFloat(nota3), parseFloat(nota4));
    const resultadoAprobacion = notaDefinitiva >= 3.00 ? 'A' : 'NA'; // Determinar si aprobó o no

    const table = document.getElementById('estudiantes').getElementsByTagName('tbody')[0];
    const nuevaFila = table.insertRow();

    const celdaEliminar = nuevaFila.insertCell(0);
    const botonEliminar = document.createElement('button');
    botonEliminar.innerHTML = '<img src="recursos/cancel_39dp_8B1A10_FILL0_wght400_GRAD0_opsz40.png" alt="Eliminar" width="20" height="20" class=¨"icono-eliminar">';
    botonEliminar.onclick = function () { mostrarModal(nuevaFila); };
    celdaEliminar.appendChild(botonEliminar);

    nuevaFila.insertCell(1).textContent = codigo;
    nuevaFila.insertCell(2).textContent = nombre;
    nuevaFila.insertCell(3).textContent = nota1;
    nuevaFila.insertCell(4).textContent = nota2;
    nuevaFila.insertCell(5).textContent = nota3;
    nuevaFila.insertCell(6).textContent = nota4;
    nuevaFila.insertCell(7).textContent = notaDefinitiva.toFixed(2); // Mostrar nota definitiva en la tabla
    nuevaFila.insertCell(8).textContent = resultadoAprobacion; // Mostrar resultado de aprobación

    document.getElementById('registro').reset();
}
