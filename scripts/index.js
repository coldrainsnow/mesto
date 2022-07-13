popupFormAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  const cardImg = document.getElementById("place-link").value;
  const cardText = document.getElementById("place-name").value;
  renderCard(addCard(cardImg, cardText))
  popupFormAdd.reset();
  popupClose(popupAddPost);
});

function openCard(e) {
  const cardImg = e.target.src;
  popupCardImg.src = cardImg;
  const cardText = e.target.parentNode.querySelector(".card__text").textContent;
  document.querySelector(".popup-card__img").alt = cardText;
  popupCardText.textContent = cardText;
  openPopup(popupCard);
}

function addCard(cardImg, cardText) {
  const cardTemplate = document.querySelector("#card-template").content;
  const card = cardTemplate.cloneNode(true);

  card.querySelector(".card__text").textContent = cardText;
  card.querySelector(".card__img").src = cardImg;

  card.querySelector(".card__img").alt = cardText;

  card.querySelector(".card__img").addEventListener("click", openCard);
  card
    .querySelector(".card__close-button")
    .addEventListener("click", function (e) {
      const cardItem = e.target.closest(".card");
      cardItem.remove();
    });
  card
    .querySelector(".card__like-button")
    .addEventListener("click", function (e) {
      e.target.classList.toggle("card__like-button_active");
    });
  return card;
}

function renderCard(card) {
  cardsContainer.prepend(card);
}

cardClose.addEventListener("click", function () {
  popupClose(popupCard);
});

function insertName(profileName) {
  inputProfileName.value = profileName;
}
function insertText(profileText) {
  inputProfileText.value = profileText;
}

function renderEdition() {
  popup.classList.add("popup_active");
}

function editName(evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileText.textContent = inputProfileText.value;
  popupClose(popupProfile);
}

for (let i = 0; i < initialCards.length; i++) {
  renderCard(addCard(initialCards[i].link, initialCards[i].name))
}

const openPopup = function (popup) {
  popup.classList.add("popup_active");
};
const popupClose = function (popup) {
  popup.classList.remove("popup_active");
};

profileEditButton.addEventListener("click", function () {
    insertName(profileName.textContent);
    insertText(profileText.textContent);
    openPopup(popupProfile);
  
});
buttonClose.addEventListener("click", function () {
  popupClose(popupProfile);
});
popupFormProfile.addEventListener("submit", editName);

popupAddPostOpenBtn.addEventListener("click", function () {
  openPopup(popupAddPost);
});

popupAddPostClose.addEventListener("click", function () {
  popupClose(popupAddPost);
});