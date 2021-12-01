import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const textArea = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
textArea.addEventListener('input', throttle(onTextAreaInput, 500));

fillInTextarea();


// Отправляем сообщение, очищаем форму, очищаем localStorage

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

}

// Сохраняем введенные данные в localStorage

function onTextAreaInput(evt) {
    const message = evt.target.value;

    localStorage.setItem(STORAGE_KEY, message);
}

// Заполнить поле формы из localStorage

function fillInTextarea(evt) {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        textArea.value = savedMessage
    };
}