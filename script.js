
document.addEventListener("DOMContentLoaded", function() {
    var fadeText = document.getElementById("fade-text");
    var fadeInDelay = 500; 
    
    setTimeout(function() {
        fadeText.style.opacity = "1";
        fadeText.style.transform = "translateY(0)";
    }, fadeInDelay);
});