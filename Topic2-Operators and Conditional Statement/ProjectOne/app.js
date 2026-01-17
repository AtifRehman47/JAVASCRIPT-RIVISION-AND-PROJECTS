let numone = document.querySelector('.numone');
let numtwo = document.querySelector('.numtwo');

let show = document.querySelector('.show');

let operation = document.querySelector('.operation');

function calculate() {
           let num1 = parseFloat(numone.value);
           let num2 = parseFloat(numtwo.value);
           let op = operation.value;
           
           if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid number');
        return;
    }

    let result;
    if(op === '+'){
        result = num1 + num2;
    } else if(op === '-'){
        result = num1 - num2;
    } else if(op === '*'){
        result = num1 * num2;
    } else if(op === '/'){
        result = num1 / num2;
    }

    show.innerHTML = `The value is: ${result}`;
}
