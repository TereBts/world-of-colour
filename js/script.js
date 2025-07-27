// Handle colour selection
// Update colour palette preview
// Interact with world map

document.addEventListener("DOMContentLoaded", () => {

  // Brazil
  const brazil = ["BR"];

  brazil.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", () => {
        alert("You clicked Brazil!");
      });
    } else {
      console.warn("Brazil element not found:", id);
    }
  });
});

// Show meaning on hover
// Reset or clear selections

