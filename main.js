let isBlack = false;

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", function() {
    if(themeToggle.checked) {
        document.body.style.backgroundColor = '#1E1E1E'; // колір body
        document.querySelectorAll('.inputLine').forEach(function(input) {
          input.style.backgroundColor = '#1E1E1E'; // колір фону полей вводу
          input.style.color = '#fff'; // колір полей вводу
      });
      document.querySelectorAll('.tin1').forEach(function(label) {
        label.style.color = '#fff'; // колір полей підказок
      }); 
      document.querySelectorAll('.current2').forEach(function(a) {
        a.style.color = '#fff'; // колір реєстрація
      }); 
      document.querySelectorAll('.reg').forEach(function(h1) {
         h1.style.color = '#fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.submit-btn').forEach(function(button) {
        button.style.color = '#fff'; // колір тексту кнопки
        button.style.backgroundColor = 'gray'; // колір фону кнопки
      }); 
      document.querySelectorAll('.header').forEach(function(section) {
      section.style.background = 'linear-gradient(to right, #B7BDC2, #525557)'; // колір фону хедера
      }); 
      document.querySelectorAll('.description').forEach(function(div) {
        div.style.background = 'linear-gradient(to right, #B7BDC2, #525557)'; // колір фону середина
      });
      document.querySelectorAll('.foot').forEach(function(div) {
        div.style.background = 'linear-gradient(to right, #B7BDC2, #525557)'; // колір фону футтер
      });  
      document.querySelectorAll('.header__link').forEach(function(a) {
        a.style.color = '#fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.liked2').forEach(function(div) {
        div.style.color = '#fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.section-title').forEach(function(div) {
        div.style.color = '#fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.section-title1').forEach(function(div) {
        div.style.color = '#fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.v2').forEach(function(div) {
        div.style.color = '#fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.barHeader').forEach(function(div) {
        div.style.background = '#1E1E1E'; // колір реєстрація заголовок
      });
        isBlack = true;
        themeLabel.textContent = 'Темна версія';
    } else {
        document.body.style.backgroundColor = '#fff'; // колір body
        document.querySelectorAll('.inputLine').forEach(function(input) {
          input.style.backgroundColor = '#fff'; // колір фону полей вводу
          input.style.color = '#000'; // колір полей вводу
      });
      document.querySelectorAll('.tin1').forEach(function(label) {
        label.style.color = '#000'; // колір полей підказок
      }); 
      document.querySelectorAll('.current2').forEach(function(a) {
        a.style.color = '#000'; // колір реєстрація
      }); 
      document.querySelectorAll('.reg').forEach(function(h1) {
         h1.style.color = '#000'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.submit-btn').forEach(function(button) {
        button.style.color = '#000'; // колір тексту кнопки
        button.style.backgroundColor = 'lightgray'; // колір фону кнопки
      }); 
      document.querySelectorAll('.header').forEach(function(section) {
      section.style.background = 'linear-gradient(to right, #DADFE2, #787A7C)'; // колір фону хедера
      }); 
      document.querySelectorAll('.description').forEach(function(div) {
      div.style.background = 'linear-gradient(to right, #DADFE2, #787A7C)'; // колір фону хедера
      });
      document.querySelectorAll('.foot').forEach(function(div) {
        div.style.background = 'linear-gradient(to right, #DADFE2, #787A7C)'; // колір фону футтер
      });   
      document.querySelectorAll('.header__link').forEach(function(a) {
        a.style.color = '#000'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.liked2').forEach(function(div) {
        div.style.color = '#000'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.section-title').forEach(function(div) {
        div.style.color = '#000'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.section-title1').forEach(function(div) {
        div.style.color = '#000'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.v2').forEach(function(div) {
        div.style.color = '#fff'; // колір реєстрація заголовок
      }); 
      document.querySelectorAll('.barHeader').forEach(function(div) {
        div.style.background = 'darkgrey'; // колір реєстрація заголовок
      });
        themeLabel.textContent = 'Світла версія';
        isBlack = false;
    }
})








const trigger1 = document.getElementById("trigger1");
    const popup1 = document.getElementById("modalWindow1");
    const trigger2 = document.getElementById("trigger2");
    const popup2 = document.getElementById("modalWindow2");
    const triangle = document.getElementById("triangle");

    let mouseOverPopup = false;

    trigger1.addEventListener("mouseenter", () => {
      popup1.style.display = "block";
    });
    trigger2.addEventListener("mouseenter", () => {
      popup2.style.display = "block";
    });

    trigger1.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!mouseOverPopup) {
          popup1.style.display = "none";
        }
      }, 200);
    });
    trigger2.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!mouseOverPopup) {
          popup2.style.display = "none";
        }
      }, 200);
    });

    popup1.addEventListener("mouseenter", () => {
      mouseOverPopup = true;
    });
    popup2.addEventListener("mouseenter", () => {
      mouseOverPopup = true;
    });

    popup1.addEventListener("mouseleave", () => {
      mouseOverPopup = false;
      popup1.style.display = "none";
    });
    popup2.addEventListener("mouseleave", () => {
      mouseOverPopup = false;
      popup2.style.display = "none";
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