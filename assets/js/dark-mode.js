let onImg  = "https://user-images.githubusercontent.com/62439381/188936579-0d3bcab8-26b9-40fa-ac98-7084037729fe.svg";
let offImg = "https://user-images.githubusercontent.com/62439381/188938518-37e134bc-fd6b-4f10-b926-c9dcff60f4db.svg";


let color = "#9F221C";
let color2 = "#801c17";

function changeMode() {
  let Img = document.getElementById("icon-darkmode");
  let element = document.body;  
  let darkMode = false;
  element.classList.toggle("dark-mode");
  element.classList.toggle("light-mode");
  Img.classList.toggle("icon-darkmode");
  Img.classList.toggle("icon-lightmode");
  
  let bg = document.querySelector(':root');
  let bg2 = document.querySelector(':root');

  if (color === "#9F221C") { 
    color = "#00A3D4"; 
  } else if (color === "#00A3D4") {  
    color = "#9F221C"; 
  }
  
  if (color2 === "#801c17") { 
    color2 = "#00789c"; 
  } else if (color2 === "#00789c") {  
    color2 = "#801c17"; 
  }
  bg.style.setProperty("--color-primary", color);
  bg2.style.setProperty("--color-secondary", color);
  
  // na entrada, obtenha o valor e salve-o como 'storedValue'
  let userColor = document.getElementsByClassName('button-dk').value;
  localStorage.setItem('storedValue', document.body.style.backgroundColor = userColor);
  
  if(localStorage.storedValue) {
    document.getElementsByClassName('button-dk').value = localStorage.storedValue;
    document.body.style.backgroundColor = localStorage.storedValue;
  }
}

// document.documentElement.style.setProperty('--color-primary', '#00A3D4');
  // document.documentElement.style.setProperty('--color-secondary', '');
  
