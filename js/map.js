const mapLink = document.querySelector('.map');
const mapPopup = document.querySelector('.map-popup');
const mapClose = mapPopup.querySelector('.map-close');

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('map-show');
});
