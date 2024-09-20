function guardarRegistro() {
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const nota3 = document.getElementById('nota3').value;
    const nota4 = document.getElementById('nota4').value;

    const table = document.getElementById('estudiantes').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = codigo;
    newRow.insertCell(1).textContent = nombre;
    newRow.insertCell(2).textContent = nota1;
    newRow.insertCell(3).textContent = nota2;
    newRow.insertCell(4).textContent = nota3;
    newRow.insertCell(5).textContent = nota4;
    
    document.getElementById('registro').reset();
}