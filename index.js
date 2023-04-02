// Initiallize styling
import "./src/styles/index.js";

// Initiallize scripts
import initializePastebin from "./src/scripts/initializePastebin/index.js";
import initializeDarkmode from "./src/scripts/initializeDarkmode/index.js";

(() => {
  // Initialize pastebin functionality
  const inputElement = document.querySelector(".js-textarea");

  initializePastebin(inputElement);

  // Initialize darkmode functionality
  const darkmodeElement = document.querySelector(".js-darkmode-input");
  const labelElement = document.querySelector(".js-darkmode-value-label");

  initializeDarkmode(darkmodeElement, labelElement);
})();
