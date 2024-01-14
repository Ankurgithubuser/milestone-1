const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculator() {
  rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the operator (+, -, *, /): ', (operator) => {
      rl.question('Enter the second number: ', (num2) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
          console.log('Invalid input. Please enter valid numbers.');
          rl.close();
          return;
        }

        let result;
        switch (operator) {
          case '+':
            result = number1 + number2;
            break;
          case '-':
            result = number1 - number2;
            break;
          case '*':
            result = number1 * number2;
            break;
          case '/':
            if (number2 === 0) {
              console.log("Division by zero is not allowed.");
              rl.close();
              return;
            }
            result = number1 / number2;
            break;
          default:
            console.log('Invalid operator. Please use +, -, *, or /');
            rl.close();
            return;
        }

        console.log(`Result: ${result}`);
        rl.close();
      });
    });
  });
}

calculator();
