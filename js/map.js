const mapLink = document.querySelector('.map');
const mapPopup = document.querySelector('.map-popup');
const mapClose = mapPopup.querySelector('.map-close');

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('map-show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.toggle('map-show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('map-show')) {
      evt.preventDefault();
      mapPopup.classList.remove('map-show');
    }
  }
});