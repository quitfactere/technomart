const buyButton = document.querySelector('.buy');
const goodInBasket = document.querySelector('.good-in-basket');
const goodInBasketClose = goodInBasket.querySelector('.map-close');

buyButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  goodInBasket.classList.add('good-in-basket-show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.toggle('map-show');
});

//Добавим обработчик события, который будет отлавливать нажатие кнопки Esc и в случае, если модальное окно открыто, закрывать его.

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('map-show')) {
      evt.preventDefault();
      mapPopup.classList.remove('map-show');
    }
  }
});