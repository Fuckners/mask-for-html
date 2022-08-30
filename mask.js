 function mask(selector, mask, regex) {
    /* regex is optional */
    if (regex) {
        // adding the regex in the pattern
        document.querySelector(selector).setAttribute('pattern', regex);
    }
  
    document.querySelector(selector)
    .addEventListener('keypress', () => {
        const text = document.querySelector(selector);

        // checking if in the current position there is a special character
        if (mask[text.value.length] && mask[text.value.length] != '0') {
            text.value += mask[text.value.length];
        }
    });
}
