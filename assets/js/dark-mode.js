let darkImg  = "https://user-images.githubusercontent.com/62439381/188936579-0d3bcab8-26b9-40fa-ac98-7084037729fe.svg";
let lightImg = "https://user-images.githubusercontent.com/62439381/188938518-37e134bc-fd6b-4f10-b926-c9dcff60f4db.svg";


let primaryColor = "#9F221C";
let secondaryColor = "#801c17";

function changeMode() {
  const colorModeToggleButton = document.getElementById("icon-toggle-color");
  const element = document.body;  
  const colorMode = localStorage.getItem('colorMode')
  element.classList.toggle("dark-mode");
  element.classList.toggle("light-mode");
  
  colorModeToggleButton.classList.toggle("icon-darkmode");
  colorModeToggleButton.classList.toggle("icon-lightmode");
  const lightModeColors = {
    primary: "#9F221C",
    secondary: "#801c17"
  }
  
  const darkModeColors = {
    primary: "#00A3D4",
    secondary: "#00789c"
  }
  
  const bg = document.querySelector(':root');
  
  if (colorMode === 'dark-mode') {
    localStorage.setItem('colorMode', 'light-mode')
    primaryColor = lightModeColors.primary
    secondaryColor = lightModeColors.secondary
    colorModeToggleButton.src = lightImg
  } else {
    localStorage.setItem('colorMode', 'dark-mode')
    primaryColor = darkModeColors.primary
    secondaryColor = darkModeColors.secondary
    colorModeToggleButton.src = darkImg
  }
  
  bg.style.setProperty("--color-primary", primaryColor);
  bg.style.setProperty("--color-secondary", secondaryColor);
}
// document.documentElement.style.setProperty('--color-primary', '#00A3D4');
  // document.documentElement.style.setProperty('--color-secondary', '');
// Store

function initializeColorMode () {
  let colorMode = localStorage.getItem('colorMode')
  const bg = document.querySelector(':root');
  const colorModeToggleButton = document.getElementById('icon-toggle-color')
  
  const lightModeColors = {
    primary: "#9F221C",
    secondary: "#801c17"
  }
  
  const darkModeColors = {
    primary: "#00A3D4",
    secondary: "#00789c"
  }
  
  if (colorMode === 'dark-mode') {
    primaryColor = darkModeColors.primary
    secondaryColor = darkModeColors.secondary
    document.body.classList.add('dark-mode')
    document.body.classList.remove('light-mode')
    colorModeToggleButton.src = darkImg
    colorModeToggleButton.classList.add('icon-darkmode')
    colorModeToggleButton.classList.remove('icon-lightmode')
  } else {
    primaryColor = lightModeColors.primary
    secondaryColor = lightModeColors.secondary
    document.body.classList.add('light-mode')
    document.body.classList.remove('dark-mode')
    colorModeToggleButton.src = lightImg
    colorModeToggleButton.classList.add('icon-lightmode')
    colorModeToggleButton.classList.remove('icon-darkmode')
  }
  
  bg.style.setProperty("--color-primary", primaryColor);
  bg.style.setProperty("--color-secondary", secondaryColor);
}

initializeColorMode()