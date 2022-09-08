var onImg  = "https://user-images.githubusercontent.com/62439381/188936579-0d3bcab8-26b9-40fa-ac98-7084037729fe.svg";
var offImg = "https://user-images.githubusercontent.com/62439381/188938518-37e134bc-fd6b-4f10-b926-c9dcff60f4db.svg";

function changeMode() {
  var Img = document.getElementById("icon-darkmode");
  var element = document.body;
  element.classList.toggle("dark-mode");
  element.classList.toggle("light-mode");
  Img.classList.toggle("icon-darkmode");
  Img.classList.toggle("icon-lightmode");
}
