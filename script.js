// A simple script to add a brutalist digital clock effect and maybe some random character glitching

document.addEventListener("DOMContentLoaded", () => {
  const clockElement = document.getElementById("clock");

  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    
    // Add raw brutalist milliseconds occasionally or just a blinking colon
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }

  setInterval(updateClock, 1000);
  updateClock();

  // Add random border weights on hover to simulate instability
  const brutalBorders = document.querySelectorAll('.brutal-border, .section-border, .brutal-list li');
  
  brutalBorders.forEach(el => {
    el.addEventListener('mouseenter', () => {
      const randomWeight = Math.floor(Math.random() * 8) + 2; // 2px to 9px
      el.style.borderWidth = `${randomWeight}px`;
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.borderWidth = ''; // Reset to CSS default
    });
  });
});
