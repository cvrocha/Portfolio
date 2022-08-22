function changeToDarkMode(settings) {
   var element = document.body;
   element.classList.toggle("dark-mode");
   if (settings && settings.smooth_transition) {
   element.classList.toggle("smooth-transition");
   }
}

const modeSwitch = body.querySelector(".toggle-switch");
modeSwitch.addEventListener("click", () => {
   body.classList.toggle("dark");

   if (body.classList.contains("dark")) {
      modeText.innerText = "Light mode";
   } else {
      modeText.innerText = "Dark mode";
   }
});