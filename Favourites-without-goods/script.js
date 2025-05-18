let isBlack = false;

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", function() {
    if(themeToggle.checked) {
        document.body.style.backgroundColor = '#1E1E1E'; // колір body
        document.querySelectorAll('.inputLine').forEach(function(input) {
          input.style.backgroundColor = '#000'; // колір фону полей вводу
          input.style.color = '#fff'; // колір полей вводу
      });
      
      document.querySelectorAll('.current1').forEach(function(a) {
        a.style.color = '#fff'; // колір реєстрація
      }); 
      document.querySelectorAll('.separator').forEach(function(a) {
        a.style.color = '#fff'; // колір реєстрація
      }); 
      
      document.querySelectorAll('.current2').forEach(function(a) {
        a.style.color = '#787A7C'; // колір реєстрація
      }); 
      document.querySelectorAll('.aboutText').forEach(function(a) {
        a.style.color = '#fff'; // колір реєстрація
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
        isBlack = true;
        themeLabel.textContent = 'Темна версія';
    } 
    
    
    else {
      document.body.style.backgroundColor = '#fff'; // колір body
      document.querySelectorAll('.inputLine').forEach(function(input) {
        input.style.backgroundColor = '#000'; // колір фону полей вводу
        input.style.color = '#fff'; // колір полей вводу
    });
    
    document.querySelectorAll('.ch1').forEach(function(a) {
        a.style.color = '#000'; // колір реєстрація
      }); 
    document.querySelectorAll('.current1').forEach(function(a) {
      a.style.color = '#000'; // колір реєстрація
    }); 
    document.querySelectorAll('.separator').forEach(function(a) {
      a.style.color = '#000'; // колір реєстрація
    }); 
    
    document.querySelectorAll('.current2').forEach(function(a) {
      a.style.color = '#787A7C'; // колір реєстрація
    }); 
    document.querySelectorAll('.aboutText').forEach(function(a) {
        a.style.color = '#000'; // колір реєстрація
      }); 
      document.querySelectorAll('.ch1').forEach(function(a) {
        a.style.color = '#000'; // колір реєстрація
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
    

    