window.addEventListener('load', Events);

const buttonCreate = document.getElementById('create');
const buttonAdd = document.getElementById('add');
const buttonDelete = document.getElementById('delete');

buttonCreate.disabled = false;
buttonAdd.disabled = true;
buttonDelete.disabled = true;

let createTable = false;
let number1 = 3;
let number2 = 4;
let table;

function Events() {
  buttonCreate.addEventListener('click', crearTabla);
  buttonAdd.addEventListener('click', anadirFila);
  buttonDelete.addEventListener('click', borrarFila);

  function crearTabla() {
    table = document.createElement('table');
    for (let index = 0; index < number1; index++) {
      let row = document.createElement('tr');
      for (let indice = 0; indice < number2; indice++) {
        let column = document.createElement('td');
        column.innerHTML = 'celda';
        row.append(column);
      }
      table.append(row);
    }
    // column, row y table no llevan comillas porque son variables
    document.getElementById('myArticle').append(table);

    buttonCreate.disabled = true;
    buttonAdd.disabled = false;
    buttonDelete.disabled = false;
  }

  function anadirFila() {
    let row = document.createElement('tr');
    for (let indice = 0; indice < number2; indice++) {
      let column = document.createElement('td');
      column.innerHTML = 'celda';
      row.append(column);
    }
    table.append(row);
      
  }

  function borrarFila() {
    table.lastElementChild.remove();
  }
}