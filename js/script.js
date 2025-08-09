// Country data
const countryData = {
  red: [
    {
      country: "China",
      ids: ["CN-1", "CN-2"],
      meaning: "Happiness, luck, prosperity",
      context: "Used in weddings and Lunar New Year; a highly auspicious colour."
    },
    {
      country: "India",
      ids: ["IN"],
      meaning: "Purity, power, fertility",
      context: "Brides traditionally wear red; used in festivals like Holi."
    },
    {
      country: "South Africa",
      ids: ["ZA"],
      meaning: "Mourning",
      context: "Associated with grief and remembrance in funerals."
    },
    {
      country: "Japan",
      ids: ["JP-1", "JP-2", "JP-3"],
      meaning: "Life, passion, protection",
      context: "The red sun is central to the flag; red is protective in charms."
    },
    {
      country: "United States",
      ids: ["US-1", "US-2", "US-3", "US-4", "US-5", "US-6", "US-7", "US-8", "US-9", "US-10"],
      meaning: "Love, anger, danger",
      context: "Seen in stop signs, Valentine's Day, and warning signs."
    },
    {
      country: "UK",
      ids: ["UK-1", "UK-2"],
      meaning: "Bravery and sacrifice",
      context: "Seen in the poppy worn for Remembrance Day to honour fallen soldiers; also present in the Union Jack, symbolising England and courage."
    }
  ],
  green: [
    {
      country: "Ireland",
      ids: ["IE"],
      meaning: "Luck, national identity",
      context: "Strongly tied to St. Patrick's Day and Celtic culture."
    },
    {
      country: "Mexico",
      ids: ["MX"],
      meaning: "Hope and independence",
      context: "Green on the flag represents hope and prosperity."
    },
    {
      country: "Egypt",
      ids: ["EG"],
      meaning: "Fertility and rebirth",
      context: "Associated with the Nile and agriculture; Osiris was depicted green."
    },
    {
      country: "China",
      ids: ["CN-1", "CN-2"],
      meaning: "Health and prosperity, but also infidelity (green hat)",
      context: "Wearing a green hat implies your partner is unfaithful."
    },
    {
      country: "Saudi Arabia",
      ids: ["SA"],
      meaning: "Islam, peace, and paradise",
      context: "Green is deeply tied to Islamic tradition and identity."
    }
  ],
  yellow: [
    {
      country: "China",
      ids: ["CN-1", "CN-2"],
      meaning: "Royalty, power, honour",
      context: "Historically reserved for the emperor."
    },
    {
      country: "Brazil",
      ids: ["BR"],
      meaning: "Wealth, joy",
      context: "Yellow symbolizes gold and is featured on the flag."
    },
    {
      country: "India",
      ids: ["IN"],
      meaning: "Knowledge, learning, happiness",
      context: "Worn during religious festivals like Vasant Panchami."
    },
    {
      country: "Germany",
      ids: ["DE"],
      meaning: "Jealousy",
      context: "Also sometimes associated with cowardice, similar to English idioms."
    },
    {
      country: "Japan",
      ids: ["JP-1", "JP-2"],
      meaning: "Courage, refinement",
      context: "Once a sacred colour worn by warriors and those of high rank."
    }
  ],
  blue: [
    {
      country: "Greece",
      ids: ["GR-1", "GR-2"],
      meaning: "Protection from evil",
      context: 'Blue eyes or beads ("mati") ward off the evil eye.'
    },
    {
      country: "India",
      ids: ["IN"],
      meaning: "Krishna, divinity, calmness",
      context: "Blue represents the divine (Krishna is often depicted with blue skin)."
    },
    {
      country: "Iran",
      ids: ["IR"],
      meaning: "Heaven, spirituality",
      context: "Islamic art and mosques use a lot of blue tiles."
    },
    {
      country: "United States",
      ids: ["US-1", "US-2", "US-3", "US-4", "US-5", "US-6", "US-7", "US-8", "US-9", "US-10"],
      meaning: "Trust, authority",
      context: "Common in uniforms (police, business suits), and corporate branding."
    },
    {
      country: "Mexico",
      ids: ["MX"],
      meaning: "Mourning (pre-colonial era)",
      context: "Blue was used in rituals and symbols related to death."
    },
    {
      country: "Somalia",
      ids: ["SO"],
      meaning: "Peace and unity",
      context: "The national flag is entirely blue with a white star."
    },
    {
      country: "UK",
      ids: ["UK-1","UK-2"],
      meaning: "Loyalty and trust",
      context: "Found in the Union Jack representing Scotland and monarchy; often seen in uniforms and official branding."
    }
  ]
};
// Helper: Get country info by SVG ID
function getCountryInfoById(id) {
  for (const colour in countryData) {
    for (const country of countryData[colour]) {
      if (country.ids.includes(id)) {
        return {
          name: country.country,
          meaning: country.meaning,
          history: country.context
        };
      }
    }
  }
  return null; // Return null if no country found
}

// Add country class to SVG elements
document.querySelectorAll("#colour-map svg path").forEach(el => {
  el.classList.add("country");
});

// Store the selected colour globally
let selectedColour = '';

// Handle colour selection
document.querySelectorAll('#colour-select input[name="colour"]').forEach(radio => {
  radio.addEventListener('change', function() {
    selectedColour = this.value;

    // Remove previous highlights and hover functionality
    document.querySelectorAll("#colour-map .country").forEach((el) => {
      el.classList.remove("highlight-red", "highlight-green", "highlight-yellow", "highlight-blue");
      el.classList.remove('disabled-hover');
    });

    // Get the countries for the selected colour
    const countriesForColour = countryData[selectedColour];
    if (!countriesForColour) return;

    // Highlight relevant countries
    countriesForColour.forEach((countryObj) => {
      countryObj.ids.forEach((id) => {
        const svgElement = document.getElementById(id);
        if (svgElement) {
          svgElement.classList.add(`highlight-${selectedColour}`);
        }
      });
    });

    // Enable hover only on countries of the selected colour
    document.querySelectorAll('.country').forEach(country => {
      const isInColour = countriesForColour.some(c => c.ids.includes(country.id));
      if (!isInColour) {
        country.classList.add('disabled-hover');
      }
    });
  });
});


// Interact with the world map
document.querySelectorAll('.country').forEach(country => {
  // Hover (desktop only)
  if (!('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    country.addEventListener('mousemove', function (e) {
      if (!selectedColour) return;
      const info = getCountryInfoById(this.id);
      if (info) {
        document.getElementById('hover-country-name').textContent = info.name;
        document.getElementById('hover-country-meaning').textContent = info.meaning;
        const hoverBox = document.getElementById('hover-info');
        hoverBox.classList.remove('hover-hidden');
        hoverBox.style.left = e.pageX + 10 + 'px';
        hoverBox.style.top = e.pageY + 10 + 'px';
      }
    });

    country.addEventListener('mouseleave', () => {
      if (!selectedColour) return;
      document.getElementById('hover-info').classList.add('hover-hidden');
    });
  }

  // Click (desktop)
  country.addEventListener('click', function (event) {
    if (!selectedColour) return;
    event.stopPropagation();
    const info = getCountryInfoById(this.id);
    if (info) {
      document.getElementById('country-name').textContent = info.name;
      document.getElementById('country-meaning').textContent = info.meaning;
      document.getElementById('country-history').textContent = info.history;
      document.getElementById('info-module').classList.remove('info-hidden');
    }
  });

  // Tap (mobile)
  country.addEventListener('touchstart', function (e) {
    if (!selectedColour) return;
    const info = getCountryInfoById(this.id);
    if (info) {
      document.getElementById('country-name').textContent = info.name;
      document.getElementById('country-meaning').textContent = info.meaning;
      document.getElementById('country-history').textContent = info.history;
      document.getElementById('info-module').classList.remove('info-hidden');
    }

    // Hide hover box if it was visible
    document.getElementById('hover-info').classList.add('hover-hidden');
    e.stopPropagation();
  });
});


// Close the info module when clicking outside
//desktop
window.addEventListener('click', function (e) {
  const modal = document.getElementById('info-module');
  if (!modal.contains(e.target) && !modal.classList.contains('info-hidden')) {
    modal.classList.add('info-hidden');
  }
});
//mobile
window.addEventListener('touchstart', function (e) {
  setTimeout(() => {
    const modal = document.getElementById('info-module');
    const isModal = modal.contains(e.target);
    const isCountry = e.target.classList.contains('country');

    if (!isModal && !isCountry && !modal.classList.contains('info-hidden')) {
      modal.classList.add('info-hidden');
    }
  }, 100);
});

// Prevent closing module when clicking inside it
document.getElementById('info-module').addEventListener('click', function (event) {
  event.stopPropagation(); // Stop propagation to prevent closing
});

// Make world map responsive (with zoom functionality)
// Check if the device is mobile 
const isMobile = window.innerWidth <= 768;

// Initialize panZoom with mobile pinch-to-zoom and desktop zoom controls
window.addEventListener('DOMContentLoaded', () => {
  if (typeof svgPanZoom === 'function') {
    const panZoomTiger = svgPanZoom('#demo-tiger', {
      zoomEnabled: true,
      controlIconsEnabled: true, 
      fit: true,
      center: true,
      minZoom: 0.9,
      maxZoom: 5,  // Adjust max zoom for mobile as needed
      zoomScaleSensitivity: 0.2,
      panEnabled: true,
      contain: true,
      mouseWheelZoomEnabled: false, // Disable mouse wheel zoom 

    });
  } else {
    console.error('svgPanZoom is not available');
  }
});

// Display a message for landscape orientation on mobile
function checkOrientation() {
    const msg = document.getElementById('landscape-message');
    if (window.innerWidth < 768 && window.innerHeight > window.innerWidth) {
      msg.classList.add('show');  // slide in
    } else {
      msg.classList.remove('show'); // slide out
    }
  }

  window.addEventListener('resize', checkOrientation);
  window.addEventListener('orientationchange', checkOrientation);
  document.addEventListener('DOMContentLoaded', checkOrientation);

