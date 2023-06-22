function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function calculate(operator, a, b) {
    switch (operator) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
      default:
        return 'Invalid operator';
    }
  }
  
  
  console.log(calculate('+', 5, 3));
  console.log(calculate('-', 5, 3));
  console.log(calculate('*', 5, 3));
  console.log(calculate('/', 5, 3));