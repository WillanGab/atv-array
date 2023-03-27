const input = document.getElementById('input')
const adicionar = document.getElementById('adicionar')
const ordenar = document.getElementById('ordenar')
let array = []

adicionar.addEventListener('click', function(){
    var objetos = array('Cadeira', 'Impressora', 'Garfo');

    
    if(input.value == "") {
        alert("Informe um valor válido")
    }
    array.push(input.value);
    console.log(array);
});