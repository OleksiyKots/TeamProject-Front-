let isBlack = false;

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", function () {
  if (themeToggle.checked) {
    applyDarkTheme();
  } else {
    applyLightTheme();
  }
});

function applyDarkTheme() {
  document.body.style.backgroundColor = '#1E1E1E'; // колір body

  document.querySelectorAll('.inputLine').forEach(function (input) {
    input.style.backgroundColor = '#1E1E1E'; // колір фону полей вводу
    input.style.color = '#fff'; // колір полей вводу
  });

  document.querySelectorAll('.tin1').forEach(function (label) {
    label.style.backgroundColor = '#1E1E1E'; // колір полей підказок
    label.style.color = '#fff';
  });

  document.querySelectorAll('.current1').forEach(function (a) {
    a.style.color = '#fff'; // колір "реєстрація"
  });

  document.querySelectorAll('.separator').forEach(function (span) {
    span.style.color = '#fff'; // колір розділювачів
  });

  document.querySelectorAll('.reg').forEach(function (h1) {
    h1.style.color = '#fff'; // колір заголовка
  });

  document.querySelectorAll('.submit-btn').forEach(function (button) {
    button.style.color = '#fff'; // текст кнопки
    button.style.backgroundColor = 'gray'; // фон кнопки
  });

  document.querySelectorAll('.header').forEach(function (section) {
    section.style.background = 'linear-gradient(to right, #B7BDC2, #525557)'; // фон хедера
  });

  document.querySelectorAll('.description').forEach(function (div) {
    div.style.background = 'linear-gradient(to right, #B7BDC2, #525557)'; // фон середньої частини
  });

  document.querySelectorAll('.foot').forEach(function (div) {
    div.style.background = 'linear-gradient(to right, #B7BDC2, #525557)'; // фон футера
  });

  document.querySelectorAll('.adress').forEach(function (div) {
    div.style.color = '#fff'; // колір тексту адреси
  });

  themeLabel.textContent = 'Темна версія';
  isBlack = true;
}

function applyLightTheme() {
  document.body.style.backgroundColor = '#fff'; // колір body

  document.querySelectorAll('.inputLine').forEach(function (input) {
    input.style.backgroundColor = '#fff'; // фон полей
    input.style.color = '#000'; // текст полей
  });

  document.querySelectorAll('.tin1').forEach(function (label) {
    label.style.backgroundColor = '#fff'; // підказки
    label.style.color = '#000';
  });

  document.querySelectorAll('.current1').forEach(function (a) {
    a.style.color = '#000'; // реєстрація
  });

  document.querySelectorAll('.separator').forEach(function (span) {
    span.style.color = '#000'; // розділювач
  });

  document.querySelectorAll('.reg').forEach(function (h1) {
    h1.style.color = '#000'; // заголовок
  });

  document.querySelectorAll('.submit-btn').forEach(function (button) {
    button.style.color = '#000'; // текст кнопки
    button.style.backgroundColor = 'lightgray'; // фон кнопки
  });

  document.querySelectorAll('.header').forEach(function (section) {
    section.style.background = 'linear-gradient(to right, #DADFE2, #787A7C)'; // фон хедера
  });

  document.querySelectorAll('.description').forEach(function (div) {
    div.style.background = 'linear-gradient(to right, #DADFE2, #787A7C)'; // фон середини
  });

  document.querySelectorAll('.foot').forEach(function (div) {
    div.style.background = 'linear-gradient(to right, #DADFE2, #787A7C)'; // фон футера
  });

  document.querySelectorAll('.adress').forEach(function (div) {
    div.style.color = '#000'; // текст адреси
  });

  themeLabel.textContent = 'Світла версія';
  isBlack = false;
}



document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".email-input");
  const emailInput = form.querySelector("input[type='email']");
  const submitButton = document.querySelector(".submit-btn");

  // Створюємо контейнер для повідомлень під input'ом
  const messageBox = document.createElement("div");
  messageBox.classList.add("message-box");
  messageBox.style.marginTop = "6px";
  messageBox.style.fontSize = "14px";
  messageBox.style.fontWeight = "500";
  form.appendChild(messageBox);

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
      showMessage("Введіть коректну електронну адресу.", "error");
      return;
    }

    simulateSend(email)
      .then(() => {
        showMessage("Посилання для відновлення пароля надіслано!", "success");
        emailInput.value = "";
      })
      .catch(() => {
        showMessage("Виникла помилка при надсиланні. Спробуйте пізніше.", "error");
      });
  });

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function simulateSend(email) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        email.includes("fail") ? reject() : resolve();
      }, 1000);
    });
  }

  function showMessage(text, type) {
    messageBox.textContent = text;

    if (type === "success") {
      messageBox.style.color = "#155724";
    } else {
      messageBox.style.color = "#721c24";
    }
  }
});































let currentLanguage = 'ua'; // Початкова мова

// Завантаження JSON файлу з перекладами
function loadLanguage(language) {
  fetch(`lang/${language}.json`)
    .then(response => response.json())
    .then(data => {
      // Заміна тексту для кожного елемента з атрибутом data-i18n
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (data[key]) {
          if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
            element.placeholder = data[key]; // Заміна placeholder
          } else {
            element.innerText = data[key]; // Заміна тексту
          }
        }
      });
    })
    .catch(error => console.log('Error loading language file:', error));
}

// Функція для зміни мови
function changeLanguage(language) {
  currentLanguage = language; // Оновлюємо поточну мову
  loadLanguage(language); // Завантажуємо відповідний JSON файл
}

// Завантажуємо мову при старті сторінки
window.onload = () => {
  loadLanguage(currentLanguage);
};