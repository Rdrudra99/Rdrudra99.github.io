var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("darktheme");
  if (document.body.classList.contains("darktheme")) {
    icon.src = "images/sun.png"
    // profile.src = "images/rudra (1).jpg"
    // music.src = "audio/rudra.mp3"
  }
  else {
    icon.src = "images/moon.png"
    // profile.src = "images/Untitled (1080 × 1080 px).png"
  }
}
