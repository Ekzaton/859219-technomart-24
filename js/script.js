/*Карта*/

var map = document.querySelector(".modal-map");

if (map) {
  var linkMap = document.querySelector(".contacts .map");
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
}

/*Обратная связь*/

var feedback = document.querySelector(".modal-feedback");

if (feedback) {
  var linkFeedback = document.querySelector(".contacts .button");
  var closeFeedback = feedback.querySelector(".modal-close");

  var form = feedback.querySelector(".feedback-form");
  var username = feedback.querySelector("[name=name]");
  var email = feedback.querySelector("[name=email]");
  var comment = feedback.querySelector("[name=comment]");

  var isStorageSupport = true;
  var storedName = "";
  var storedEmail = "";

  try {
    storedName = localStorage.getItem("name");
    storedEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

  linkFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("modal-show");

    if (storedName) {
      username.value = storedName;
    }
    if (storedEmail) {
      email.value = storedEmail;
    }
    if (storedName && storedEmail) {
      comment.focus();
    } else if (storedName) {
      email.focus();
    } else {
      username.focus();
    }
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
}

/*Товар добавлен*/

var linkAdded = document.querySelectorAll(".buy");
var added = document.querySelector(".modal-item-added");
var closeAdded = added.querySelector(".modal-close");
var closeAddedButton = added.querySelector(".catalog-button");

for (var i=0; i<linkAdded.length; i++)
{
  linkAdded[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    added.classList.add("modal-show");
  })
};

closeAdded.addEventListener("click", function (evt) {
  evt.preventDefault();
  added.classList.remove("modal-show");
});

closeAddedButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  added.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (added.classList.contains("modal-show")) {
      added.classList.remove("modal-show");
    }
  }
});

/*Слайдеры*/

var slider1 = document.querySelector(".input-slider-1");
var slider2 = document.querySelector(".input-slider-2");

if (slider1 && slider2) {
  var rightArrow = document.querySelector(".slider-right-arrow");
  var leftArrow = document.querySelector(".slider-left-arrow");

  leftArrow.addEventListener("focus", function (evt) {
    slider1.checked = true;
  })

  rightArrow.addEventListener("focus", function (evt) {
    slider2.checked = true;
  })

  var sliderRadio1 = document.querySelector(".slider-radio-slide-1");
  var sliderRadio2 = document.querySelector(".slider-radio-slide-2");

  sliderRadio1.addEventListener("focus", function (evt) {
    slider1.checked = true;
  })

  sliderRadio2.addEventListener("focus", function (evt) {
    slider2.checked = true;
  })
}

var service1 = document.querySelector(".input-service-1");
var service2 = document.querySelector(".input-service-2");
var service3 = document.querySelector(".input-service-3");

if (service1 && service2 && service3) {
  var button1 = document.querySelector(".service-button-1");
  var button2 = document.querySelector(".service-button-2");
  var button3 = document.querySelector(".service-button-3");

  button1.addEventListener("focus", function (evt) {
    service1.checked = true;
  })

  button2.addEventListener("focus", function (evt) {
    service2.checked = true;;
  })

  button3.addEventListener("focus", function (evt) {
    service3.checked = true;
  })
}
