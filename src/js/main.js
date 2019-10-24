const listElement = document.querySelector('.container ul');
const inputElement = document.querySelector('.container input');
const buttonElement = document.querySelector('.container button');

const tarefas = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderElements() {
  listElement.innerHTML = '';
  for (const tarefa of tarefas) {
    const tarefaElement = document.createElement('li');
    const tarefaNome = document.createTextNode(tarefa);

    const buttonElement = document.createElement('button');
    buttonElement.setAttribute('class', 'btn-remove');
    buttonElement.innerText = 'Excluir';
    buttonElement.setAttribute('title', 'Ecluir esta tarefa.');

    const pos = tarefas.indexOf(tarefa);
    buttonElement.setAttribute('onclick', `removeTarefa(${pos})`);

    tarefaElement.appendChild(tarefaNome);
    tarefaElement.appendChild(buttonElement);

    listElement.appendChild(tarefaElement);
  }
}

renderElements();

function addTarefas() {
  const nomeTarefa = inputElement.value;

  if (!nomeTarefa) return; // checa se o campo está em branco

  tarefas.push(nomeTarefa);
  inputElement.value = '';
  renderElements();
  saveToStorage();
}

buttonElement.onclick = addTarefas;

/**
 * Esta função é necessária para captura o pressionar da
 * tecla 'Enter' e adicionar uma nova tarefa.
 */

inputElement.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    // KeyCode do Enter
    if (!inputElement) {
      return;
    } else {
      addTarefas();
    }
  }
});

function removeTarefa(pos) {
  tarefas.splice(pos, 1);
  renderElements();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(tarefas));
}
