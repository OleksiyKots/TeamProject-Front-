themeToggle.addEventListener("change", function () {
  if (themeToggle.checked) {
      applyDarkTheme();
  } else {
      applyLightTheme();
  }
});

function applyDarkTheme() {
  document.body.style.backgroundColor = '#1E1E1E';
  document.querySelectorAll('.current1').forEach(div => div.style.color = '#fff');
  document.querySelectorAll('.product-image').forEach(div => div.style.border = '2px solid #fff');
  document.querySelectorAll('.separator').forEach(span => span.style.color = '#fff');
  document.querySelectorAll('.tr').forEach(div => div.style.backgroundColor = '#525557');
  document.querySelectorAll('.ch').forEach(div => div.style.color = '#fff');
  document.querySelectorAll('.product-list').forEach(div => div.style.color = '#fff');
  document.querySelectorAll('.wishlist').forEach(div => div.style.color = '#fff');
  document.querySelectorAll('.utw').forEach(a => a.style.color = '#fff');
  document.querySelectorAll('.theme').forEach(img => {
    img.src = img.src.replace('black1.png', 'whiteCh.png');
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
  themeLabel.textContent = 'Темна версія';
  isBlack = true;
}

function applyLightTheme() {
  document.body.style.backgroundColor = '#fff';
  document.querySelectorAll('.current1').forEach(div => div.style.color = '#000');
  document.querySelectorAll('.product-image').forEach(div => div.style.border = '2px solid #000');
  document.querySelectorAll('.separator').forEach(span => span.style.color = '#000');
  document.querySelectorAll('.tr').forEach(div => div.style.backgroundColor = '#D5DADD');
  document.querySelectorAll('.ch').forEach(div => div.style.color = '#000');
  document.querySelectorAll('.product-list').forEach(div => div.style.color = '#000');
  document.querySelectorAll('.wishlist').forEach(div => div.style.color = '#000');
  document.querySelectorAll('.utw').forEach(a => a.style.color = '#000');
  document.querySelectorAll('.theme').forEach(img => {
    img.src = img.src.replace('whiteCh.png', 'black1.png')
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