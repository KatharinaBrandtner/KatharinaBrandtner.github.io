const canvas = document.getElementById('lineCanvas');
const ctx = canvas.getContext('2d');

// Canvas-Größe anpassen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variablen für das Zeichnen
let drawing = false;

// Event Listener für das Zeichnen
canvas.addEventListener('mousedown', (event) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(event.clientX, event.clientY);
});

canvas.addEventListener('mousemove', (event) => {
    if (drawing) {
        ctx.lineTo(event.clientX, event.clientY);
        ctx.strokeStyle = '#ef233c'; // Linienfarbe
        ctx.lineWidth = 2; // Linienstärke
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.closePath();
});

// Canvas-Größe anpassen, wenn das Fenster geändert wird
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas leeren, um Zeichnung zu löschen
});

// Optional: Blurr-Effekt beim Scrollen
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const blurAmount = Math.min(scrollY / 100, 10); // Maximaler Blur-Effekt
    canvas.style.filter = `blur(${blurAmount}px)`;
});