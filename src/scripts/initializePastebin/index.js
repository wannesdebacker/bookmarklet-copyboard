const { error } = console;

const initializePastebin = (element) => {
  // get value of input from localstorage and set it as value of input, don't trigger the input-eventlistener
  if (element) {
    element.value = localStorage.getItem("input") || "";

    // element is an inputfield
    element.addEventListener("input", (event) => {
      // push value of input in a localstorage variable, maintain all symbols like spaces, newlines, etc.
      localStorage.setItem("input", event.target.value);
    });
  } else {
    // element is not an inputfield
    error("Element is not defined", element);
  }
};

export default initializePastebin;
