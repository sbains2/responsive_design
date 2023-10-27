window.addEventListener("load", function() {
    var content = document.querySelector(".content");
    content.style.opacity = 0;

    var fadeIn = function() {
        var opacity = parseFloat(content.style.opacity);
        if (opacity < 1) {
            opacity += 0.05;
            content.style.opacity = opacity;
            requestAnimationFrame(fadeIn);
        }
    };

    fadeIn();
});
