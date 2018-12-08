const Calculator = {
    outputTop    : document.querySelector("#outputTop"),
    outputBottom : document.querySelector("#outputBottom"),
    numbers      : document.querySelectorAll(".num"),
    operators    : ["division","multiplication","bracketOpen","bracketClose","subtraction","add"],
    outputArray  : ["0"],
    defaultZero  : true,
    calculation: function (e) {
        (Calculator.defaultZero) ? (Calculator.outputBottom.innerHTML = "", Calculator.defaultZero = false) : true;
        // this.outputBottom.innerHTML = 0;
        let clickedNumber = e.target.getAttribute("data-number");
        // console.log(clickedNumber)
        Calculator.outputBottom.innerHTML += clickedNumber;
        Calculator.outputArray.push(clickedNumber);
        console.log(Calculator.outputArray)
    }
};

Calculator.numbers.forEach((element) => {
    element.addEventListener("click",Calculator.calculation);
});

Calculator.operators.forEach((element) => {
    
});

