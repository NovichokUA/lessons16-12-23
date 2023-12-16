/**
 * Створи список справ.
 * На сторінці є два інпути які має вводиться назва і текст задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
 *
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 * У кожної картки має бути кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */

// <header class="header">
// <div class="container header-container">
//  <form class="header-form" id="task-form">
// <input class="header-form-input" type="text" name="taskName" />
//<input class="header-form-input" type="text" name="taskText" />
//<button class="header-form-btn" type="submit">Добавить</button>
//</form>
//</div>
//</header>

const dataForm = document.querySelector('#task-form');

const taskList = document.getElementById('task-list');

const deleteBtn = document.querySelector('.task-list-item-btn');

const MY_KEY_DATAFORM = 'key-data-form';

dataForm.addEventListener('submit', submitHandler);
taskList.addEventListener('click', deleteItemTaskList);

// const inputTaskName = dataForm.elements.taskName;
// const inputTaskText = dataForm.elements.taskText;

function createMarkupListItem(title, description) {
  return `<li class="task-list-item">
     <button class="task-list-item-btn">Удалить</button>
     <h3>${title}</h3>
     <p>${description}</p>
  </li>`;
}

function submitHandler(event) {
  event.preventDefault();
  // const { taskName, taskText } = event.target.elements;
  const taskNameValue = event.target.elements.taskName.value;
  const taskTextValue = event.target.elements.taskText.value;

  const objValue = {
    taskNameValue,
    taskTextValue,
    id: Math.random(),
  };
  addToLoccal(objValue);

  taskList.insertAdjacentHTML(
    'beforeend',
    createMarkupListItem(taskNameValue, taskTextValue)
  );
}

function addToLoccal(task) {
  const arrayTasks = localStorage.getItem(MY_KEY_DATAFORM)
    ? JSON.parse(localStorage.getItem(MY_KEY_DATAFORM))
    : [];
  arrayTasks.push(task);
  localStorage.setItem(MY_KEY_DATAFORM, JSON.stringify(arrayTasks));
}

// function deleteItemTaskList(event) {
//   event.preventDefault();
//   dataForm.reset();
//   return (taskList.innerHTML = '');
// }
