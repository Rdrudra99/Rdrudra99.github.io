var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("darktheme");
  if (document.body.classList.contains("darktheme")) {
    icon.src = "images/sun.png"
    profile.src = "images/red1.jpg"
  }
  else {
    icon.src = "images/moon.png"
    profile.src = "images/blue1.jpg"
  }
}