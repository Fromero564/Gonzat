
document.addEventListener("DOMContentLoaded", function() {
    var fadeText = document.getElementById("fade-text");
    var fadeInDelay = 500; // Cambiado a 500ms para una aparición más rápida
    
    setTimeout(function() {
        fadeText.style.opacity = "1";
        fadeText.style.transform = "translateY(0)";
    }, fadeInDelay);
});