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

document.getElementById('cerrarError').addEventListener('click', function() {
    const modalError = document.getElementById('msg'); 
    modalError.style.display = 'none'; 
});

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

    const table = document.getElementById('estudiantes').getElementsByTagName('tbody')[0];
    const nuevaFila = table.insertRow();

    const celdaEliminar = nuevaFila.insertCell(0);
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = function() { mostrarModal(nuevaFila); };
    celdaEliminar.appendChild(botonEliminar);

    nuevaFila.insertCell(1).textContent = codigo;
    nuevaFila.insertCell(2).textContent = nombre;
    nuevaFila.insertCell(3).textContent = nota1;
    nuevaFila.insertCell(4).textContent = nota2;
    nuevaFila.insertCell(5).textContent = nota3;
    nuevaFila.insertCell(6).textContent = nota4;

    document.getElementById('registro').reset();
}


