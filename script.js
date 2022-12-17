const searchInput = document.getElementById('input');
const form = document.getElementById('input-container');
const clearButton = document.getElementById('clear-btn');
const inputWrapper = document.getElementById('input-wrapper');

// toggle animate classes when clicked on input text box
searchInput.onfocus = () => {
  inputWrapper.classList.add('animate-input');
  inputWrapper.classList.remove('animate-input-back');
};

//Display or Hide clear button based on input text change
searchInput.oninput = (e) => {
  if (searchInput.value) {
    clearButton.style.display = 'block';
  } else {
    clearButton.style.display = 'none';
  }
}

//Clear input text after clicking on clear button and hide clear button
clearButton.onclick = () => {
  searchInput.value = ''
  clearButton.style.display = 'none';
  inputWrapper.classList.remove('animate-input')
  inputWrapper.classList.add('animate-input-back')
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputText = searchInput.value;
  console.log("Form Submitted with ", inputText);

  fetch(`https://api.github.com/search/users?q=${inputText}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
})