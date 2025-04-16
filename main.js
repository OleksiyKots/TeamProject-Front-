themeToggle.addEventListener("change", function () {
  if (themeToggle.checked) {
      applyDarkTheme();
  } else {
      applyLightTheme();
  }
});

function applyDarkTheme() {
  document.body.style.backgroundColor = '#000';
  document.querySelectorAll('.tin1').forEach(label => label.style.backgroundColor = '#000');
  document.querySelectorAll('.tin1').forEach(label => label.style.color = '#fff');
  document.querySelectorAll('.inputLine').forEach(input => {
    input.style.backgroundColor = '#000';
    input.style.borderColor = '#fff';
});
  document.querySelectorAll('.current2').forEach(a => a.style.color = '#fff');
  document.querySelectorAll('.reg').forEach(h1 => h1.style.color = '#fff');
  document.querySelectorAll('.submit-btn').forEach(button => {
      button.style.color = '#fff';
      button.style.backgroundColor = 'gray';
  });
  document.querySelectorAll('.header').forEach(section => {
      section.style.background = 'linear-gradient(to right, #B7BDC2, #525557)';
  });
  document.querySelectorAll('.description').forEach(div => {
      div.style.background = 'linear-gradient(to right, #B7BDC2, #525557)';
  });
  document.querySelectorAll('.foot').forEach(div => {
      div.style.background = 'linear-gradient(to right, #B7BDC2, #525557)';
  });
  document.querySelectorAll('.adress').forEach(div => {
      div.style.color = '#fff';
  });
  themeLabel.textContent = 'Темна версія';
  isBlack = true;
}

function applyLightTheme() {
  document.body.style.backgroundColor = '#fff';
  document.querySelectorAll('.tin1').forEach(label => label.style.backgroundColor = '#fff');
  document.querySelectorAll('.tin1').forEach(label => label.style.color = '#000');
  document.querySelectorAll('.inputLine').forEach(input => {
    input.style.backgroundColor = '#fff';
    input.style.borderColor = '#000';
});
  document.querySelectorAll('.current2').forEach(a => a.style.color = '#000');
  document.querySelectorAll('.reg').forEach(h1 => h1.style.color = '#000');
  document.querySelectorAll('.submit-btn').forEach(button => {
      button.style.color = '#000';
      button.style.backgroundColor = 'lightgray';
  });
  document.querySelectorAll('.header').forEach(section => {
      section.style.background = 'linear-gradient(to right, #DADFE2, #787A7C)';
  });
  document.querySelectorAll('.description').forEach(div => {
      div.style.background = 'linear-gradient(to right, #DADFE2, #787A7C)';
  });
  document.querySelectorAll('.foot').forEach(div => {
      div.style.background = 'linear-gradient(to right, #DADFE2, #787A7C)';
  });
  document.querySelectorAll('.adress').forEach(div => {
      div.style.color = '#000';
  });
  themeLabel.textContent = 'Світла версія';
  isBlack = false;
}




























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