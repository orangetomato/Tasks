(function() {

  const input = document.getElementById('name_input');
  const initialState = input.value;

  const changeColor = () => {
    if (input.value !== initialState) {
      input.classList.add('red');
    } else {
      input.classList.remove('red');
    }
  }

  input.addEventListener('input', changeColor);

})();