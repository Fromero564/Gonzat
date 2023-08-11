
document.addEventListener("DOMContentLoaded", function() {
    var fadeText = document.getElementById("fade-text");
    var fadeInDelay = 500; 
    
    setTimeout(function() {
        fadeText.style.opacity = "1";
        fadeText.style.transform = "translateY(0)";
    }, fadeInDelay);
});


var carousels = document.getElementsByClassName("proyecto-carousel");

function collapseCarousel(carousel) {
    carousel.classList.remove("proyecto-expanded");
    document.removeEventListener("keydown", handleKeyPress);
}

function handleKeyPress(event) {
    if (event.key === "Escape") {
        var expandedCarousel = document.querySelector(".proyecto-carousel.proyecto-expanded");
        if (expandedCarousel) {
            collapseCarousel(expandedCarousel);
        }
    }
}

document.addEventListener("click", function (event) {
    var target = event.target;
    var isImage = target.tagName === "IMG";


    if (isImage) {
        var carousel = target.closest(".proyecto-carousel");
        if (carousel) {
            carousel.classList.toggle("proyecto-expanded");
            if (carousel.classList.contains("proyecto-expanded")) {
                document.addEventListener("keydown", handleKeyPress);
            } else {
                collapseCarousel(carousel);
            }
        }
    }
});

