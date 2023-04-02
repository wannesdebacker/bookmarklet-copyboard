const { error } = console;

const initializeDarkmode = (darkmodeElement, labelElement) => {
  if (darkmodeElement && labelElement) {
    let darkmode = window.localStorage.getItem("theme");

    // if darkmode is not set before, listen to the prefers-color-scheme media query
    if (darkmode === null) {
      darkmode = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

      window.localStorage.setItem("theme", darkmode);
    }

    if (darkmode === "dark") {
      // Set a data attribute to the body element
      document.body.setAttribute("data-theme", "dark");
      darkmodeElement.checked = true;
    } else {
      document.body.setAttribute("data-theme", "light");
      darkmodeElement.checked = false;
    }

    labelElement.textContent = darkmode ? "dark" : "light";

    // Listen to the change event of the darkmode input checkbox
    darkmodeElement.addEventListener("change", ({ target }) => {
      const { checked } = target;
      const value = checked ? "dark" : "light";
      // Set a data attribute to the body element
      document.body.setAttribute("data-theme", value);

      // Save the darkmode setting in the localstorage
      window.localStorage.setItem("theme", value);

      labelElement.textContent = value;
    });
  } else {
    error("Element is not defined", darkmodeElement);
  }
};

export default initializeDarkmode;
