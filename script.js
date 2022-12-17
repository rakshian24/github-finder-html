const searchInput = document.getElementById('input');
const inputContainer = document.getElementById('input-container');

// add animate class when clicked on input text box
searchInput.onclick = () => inputContainer.classList.add('animate-input');