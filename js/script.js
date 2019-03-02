/*Товар добавлен*/

var linkAdded = document.querySelectorAll(".buy");
var addded = document.querySelector(".modal-item-added");
var closeAdded = addded.querySelector(".modal-close");
var closeAddedButton = addded.querySelector(".catalog-button");

for (var i=0; i<linkAdded.length; i++)
{
  linkAdded[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    addded.classList.add("modal-show");
  })
};

closeAdded.addEventListener("click", function (evt) {
  evt.preventDefault();
  addded.classList.remove("modal-show");
});

closeAddedButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  addded.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (addded.classList.contains("modal-show")) {
      addded.classList.remove("modal-show");
    }
  }
});

/*Обратная связь*/

var linkFeedback = document.querySelector(".contacts .button");
var feedback = document.querySelector(".modal-feedback");
var closeFeedback = feedback.querySelector(".modal-close");
var form = feedback.querySelector(".feedback-form");
var username = feedback.querySelector("[name=name]");
var email = feedback.querySelector("[name=email]");
var comment = feedback.querySelector("[name=comment]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("username");
}
catch (err) {
  isStorageSupport = false;
}

linkFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("modal-show");
});

closeFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("modal-show");
  feedback.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedback.classList.contains("modal-show")) {
      feedback.classList.remove("modal-show");
      feedback.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !comment.value) {
    evt.preventDefault();
    feedback.classList.remove("modal-error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("modal-error");
  }
  else
  {
    if (isStorageSupport) {
      localStorage.setItem("username", username.value);
    }
  }
});

/*Карта*/

var linkMap = document.querySelector(".contacts .map");
var map = document.querySelector(".modal-map");
var closeMap = map.querySelector(".modal-close");

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map.classList.contains("modal-show")) {
      map.classList.remove("modal-show");
    }
  }
});
