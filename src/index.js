import './style.css';
import Methods from './modules/storageMethods.js';
import Status from './modules/status.js';
import Functions from './modules/methods.js';

Methods.setIndex();
Methods.render();

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('#list');
const clear = document.querySelector('#clear');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = input.value;
  Methods.add(description);
  Methods.render();
  form.reset();
});

list.addEventListener('change', (e) => {
  if (e.target.classList.contains('check')) {
    const id = e.target.parentElement.id - 1;
    Status.complete(id);
    Methods.render();
  }
});

list.addEventListener('click', (e) => {
  const parent = e.target.parentElement;
  const nextSibling = e.target.nextElementSibling;
  const previousSibling = e.target.previousElementSibling;
  const id = parent.parentElement.id - 1;

  if (e.target.classList.contains('vertical-menu')) {
    Functions.hide(e.target);
    Functions.show(nextSibling);
    previousSibling.removeAttribute('disabled');
    previousSibling.focus();
  }

  if (e.target.textContent === 'Delete') {
    parent.parentElement.remove();
    Methods.remove(id);
  }

  if (e.target.textContent === 'Save') {
    Functions.hide(parent);
    parent.previousElementSibling.classList.add('show');
    parent.previousElementSibling.classList.remove('hide');
    parent.previousElementSibling.previousElementSibling.setAttribute('disabled', 'disabled');
    Methods.edit(parent.previousElementSibling.previousElementSibling.value, id);
  }
});

clear.addEventListener('click', () => {
  Status.clearCompleted();
  Methods.render();
});
