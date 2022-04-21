const buyButtons = document.querySelectorAll('.buy');
const goodInBasket = document.querySelector('.good-in-basket');
const goodInBasketClose = goodInBasket.querySelector('.modal-close');

for (var i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener('click', function() {
    goodInBasket.classList.add('good-in-basket-show');
  });
}

goodInBasketClose.onclick = function () {
    goodInBasket.classList.remove('good-in-basket-show');
};

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (goodInBasket.classList.contains('good-in-basket-show')) {
        evt.preventDefault();
        goodInBasket.classList.remove('good-in-basket-show');
      }
    }
  });