const carousel = document.querySelector(".carousel-inner");
const handle = document.querySelector(".carousel-handle");

const icons = document.querySelectorAll(".skill-icon");

const total = icons.length;
const radius = 350;

icons.forEach((icon, i) => {
    const angle = (360 / total) * i;
    icon.style.transform =
        `rotateY(${angle}deg) translateZ(${radius}px) translate(-50%, -50%)`;
});

let dragging = false;
let lastX = 0;
let rotation = 0;

const maxSpeed = 10;

handle.addEventListener("mousedown", e => {
    dragging = true;
    lastX = e.clientX;
});

carousel.addEventListener("mousedown", e => {
    dragging = true;
    lastX = e.clientX;
});

document.addEventListener("mouseup", () => dragging = false);

document.addEventListener("mousemove", e => {
    if (!dragging) return;

    let delta = e.clientX - lastX;

    // clamp speed
    delta = Math.max(-maxSpeed, Math.min(maxSpeed, delta));

    rotation += delta * 0.4;

    carousel.style.transform = `rotateY(${rotation}deg)`;

    lastX = e.clientX;
});