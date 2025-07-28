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

//Add country .class to SVG elements
document.querySelectorAll("#colour-map svg path").forEach(el => {
  el.classList.add("country");
});

// Log total number of countries with class "country"
//const allCountries = document.querySelectorAll(".country");
//console.log("Total countries with class:", allCountries.length);
//allCountries.forEach(el => console.log(el.id));

// Handle colour selection
document.getElementById("colour-select").addEventListener("change", function (e) {
  const selectedColour = e.target.value;

// Update colour palette preview
// Remove existing highlight classes from all countries
document.querySelectorAll("#colour-map .country").forEach(el => {
    el.classList.remove("red-highlight", "green-highlight", "yellow-highlight", "blue-highlight");
});

if (!selectedColour) return; // Do nothing if default option is selected

  // Apply highlight to the countries for the selected colour
const colourGroup = countryData[selectedColour];
if (colourGroup) {
    Object.keys(colourGroup).forEach(countryId => {
      const countryEl = document.getElementById(countryId);
      if (countryEl) {
        countryEl.classList.add(`${selectedColour}-highlight`);
      }
    });
  }
});

// Interact with world map



// Show meaning on hover
// Show detailed information on click
// Reset or clear selections

