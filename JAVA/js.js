function guardarRegistro() {
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const porcentaje1 = document.getElementById('porcentaje1').value;
    const porcentaje2 = document.getElementById('porcentaje2').value;
    const porcentaje3 = document.getElementById('porcentaje3').value;
    const porcentaje4 = document.getElementById('porcentaje4').value;

    const table = document.getElementById('estudiantes').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = codigo;
    newRow.insertCell(1).textContent = nombre;
    newRow.insertCell(2).textContent = porcentaje1;
    newRow.insertCell(3).textContent = porcentaje2;
    newRow.insertCell(4).textContent = porcentaje3;
    newRow.insertCell(5).textContent = porcentaje4;

    // Limpiar los campos del formulario
    document.getElementById('registro').reset();
}