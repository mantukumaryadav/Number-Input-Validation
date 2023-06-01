
    const numberInput = document.getElementById('numberInput');
    const message = document.getElementById('message');

    numberInput.addEventListener('input', handleInput);

    function handleInput() {
      const value = parseInt(numberInput.value);

      if (isNaN(value)) {
        message.innerText = 'Please enter a valid number.';
        return;
      }

      if (value < 0) {
        message.innerText = 'Please enter a positive value.';
        return;
      }

      message.innerText = '';

      if (value % 2 === 0) {
        showNextEvenNumbers(value);
      } else {
        showNextOddNumbers(value);
      }
    }

    function showNextEvenNumbers(value) {
      let nextEvenNumbers = [];
      for (let i = 1; i <= 3; i++) {
        nextEvenNumbers.push(value + 2 * i);
      }

      message.innerText = 'Next 3 even numbers: ' + nextEvenNumbers.join(', ');
    }

    function showNextOddNumbers(value) {
      let nextOddNumbers = [];
      for (let i = 1; i <= 3; i++) {
        nextOddNumbers.push(value + 2 * i - 1);
      }

      message.innerText = 'Next 3 odd numbers: ' + nextOddNumbers.join(', ');
    }
 