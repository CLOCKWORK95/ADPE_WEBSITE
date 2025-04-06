document.addEventListener("DOMContentLoaded", function () {
  const splash = document.getElementById("splash");
  const button = document.getElementById("enter-site");

  if (document.body.classList.contains("home-page") && splash && button) {
    button.addEventListener("click", function () {
      splash.classList.add("splash-hidden");
      setTimeout(() => {
        window.location.href = "portfolio/";
      }, 800); // Tempo per completare l'animazione
    });
  }
});
