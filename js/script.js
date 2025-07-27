// Handle colour selection
// Update colour palette preview
// Interact with world map

const angolaParts = ["AO-1", "AO-2"];

angolaParts.forEach(id => {
  document.getElementById(id).addEventListener("click", () => {
    alert("You clicked Angola!");
  });
});

const brazil = ["BR"];

brazil.forEach(id => {
    document.getElementById(id).addEventListener("click", () => {
        alert("You clicked Brazil!");
    });
});


// Show meaning on hover
// Reset or clear selections

