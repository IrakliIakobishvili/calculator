const Calculator = {
    outputTop    : document.querySelector("#outputTop"),
    outputBottom : document.querySelector("#outputBottom"),
    numbers      : document.querySelectorAll(".num"),
    operators    : ["division","multiplication","bracketOpen","bracketClose","subtraction","add"],
    sumBtn       : document.querySelector(".sum"),
    output       : "",
    numbersClick: function (e) {
        let num =  e.target.getAttribute("data-number");
        Calculator.output += num;
        Calculator.outputTop.innerHTML = Calculator.output;
    },
    operatorsClick: function (e) {
        let op =  e.target.getAttribute("data-operator");
        Calculator.output += op;
        Calculator.outputTop.innerHTML = Calculator.output;
    },
    calculation: function () {
       // eval(Calculator.output);
        Calculator.output = eval(Calculator.output);
        Calculator.outputTop.innerHTML = "";
        Calculator.outputBottom.innerHTML = Calculator.output;
    }
};







Calculator.numbers.forEach((element) => {
    element.addEventListener("click",Calculator.numbersClick);
});

Calculator.operators.forEach((element) => {
    element = document.querySelector(`.${element}`);
    element.addEventListener("click",Calculator.operatorsClick);
});

Calculator.sumBtn.addEventListener("click",Calculator.calculation);


