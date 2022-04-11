const feedbackLink = document.querySelector('.adress-button');
const feedbackPopup = document.querySelector('.modal-feedback');
const feedbackClose = feedbackPopup.querySelector('.feedback-close');
const feedbackForm = feedbackPopup.querySelector('.feedback-form');
const feedbackName = feedbackPopup.querySelector('#modal-feedback-name');
const feedbackEmail = feedbackPopup.querySelector('.email-group input');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.toggle('feedback-show');
  //Если в локальном хранилище есть значение логина, то при открытии модального окна сразу запишем его в поле логина.
  if (storage) {
    feedbackName.value = storage;
    //Сместим фокус на поле с email.
    feedbackEmail.focus();
  } else {
    feedbackName.focus();    
  }
});

feedbackClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.toggle('feedback-show');
  feedbackPopup.classList.remove('feedback-error');
});

//Повесим обработчик отправки данных на форму и отменим его.
feedbackForm.addEventListener('submit', function(evt) {
  //Если какое-то из двух полей не заполнено, то отменим отправку формы.
  if (!feedbackName.value || !feedbackEmail.value) {
  evt.preventDefault();
  //Добавим класс modal-error, если данные не проходят валидацию в форме.
  feedbackPopup.classList.remove('feedback-error');
  feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
  feedbackPopup.classList.add('feedback-error');
  } //В случае заполнение всех полей ввода запишем имя пользователя в локальное хранилище.
  else {
    if (isStorageSupport) {
    localStorage.setItem('name', feedbackName.value);
    }
  };
});

//Добавим обработчик события, который будет отлавливать нажатие кнопки Esc и в случае, если модальное окно открыто, закрывать его.

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains('feedback-show')) {
      evt.preventDefault();
      feedbackPopup.classList.remove('feedback-show');
      feedbackPopup.classList.remove('feedback-error');
    }
  }
});