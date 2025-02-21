let offset = -50;
function animateText() {
    offset += 0.25; // Increase offset
    if (offset > 110) offset = 0; // Loop back after full path

    document.getElementById("text-path").setAttribute("startOffset", offset + "%");

    requestAnimationFrame(animateText);
}
animateText();