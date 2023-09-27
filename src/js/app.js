window.onkeydown = function(event) {
    const inputElement = document.getElementById('input');
    
    if (event.keyCode == 32) {
      event.preventDefault();
      
      if (inputElement) {
        let currentValue = inputElement.value;
        inputElement.value = currentValue.slice(0, -1);
      }
    }
    
     if (event.key === "Backspace") {
          event.preventDefault();
          inputElement.value += " ";
      }
  }