const Calculator = {
    outputTop    : document.querySelector("#outputTop"),
    outputBottom : document.querySelector("#outputBottom"),
    numbers      : document.querySelectorAll(".num"),
    operators    : ["division","multiplication","bracketOpen","bracketClose","subtraction","add"],
    sumBtn       : document.querySelector(".sum"),
    // defaultZero  : true,
    output       : "",
    calculation: function () {

    },
    numbersClick: function (e) {
        // (Calculator.defaultZero) ? (Calculator.outputBottom.innerHTML = "", Calculator.defaultZero = false) : true;
        let clickedNumber = e.target.getAttribute("data-number");
        Calculator.output += clickedNumber;
        Calculator.outputBottom.innerHTML = Calculator.output;
    },
    operatorsClick: function (e) {
        let clickedOperator = e.target.getAttribute("data-operator");
        Calculator.output += clickedOperator;
        Calculator.outputBottom.innerHTML = Calculator.output;
        // console.log(clickedOperator)
        // switch (clickedOperator) {
        //     case "+":
        //
        // }
        for(let i = 0; i < Calculator.output.length; i++) {
            if(Calculator.output.charAt(i) == "+" || Calculator.output.charAt(i) == "-" || Calculator.output.charAt(i) == "*" || Calculator.output.charAt(i) == "/") {
                // console.log(Calculator.output.charAt(i));
                let tempArr = Calculator.output.split(`${Calculator.output.charAt(i)}`);
                if(tempArr[0].length > 0 && tempArr[1].length > 0) {
                    switch (Calculator.output.charAt(i)) {
                        case "+":
                            Calculator.output = Number(tempArr[0]) + Number(tempArr[1].substr(0,tempArr[1].length-1));
                            // Calculator.output += clickedOperator;
                            Calculator.outputBottom.innerHTML = Calculator.output.toFixed(4);
                            break;
                        case "-":
                            Calculator.output = Number(tempArr[0]) - Number(tempArr[1].substr(0,tempArr[1].length-1));
                            Calculator.outputBottom.innerHTML = Calculator.output.toFixed(4);
                            break;
                        case "*":
                            if(tempArr[1].indexOf("-") > 0 || tempArr[1].indexOf("+") > 0) {
                                Calculator.output = Number(tempArr[0]) * Number(tempArr[1].substr(0,tempArr[1].length-1));
                            }else {
                                Calculator.output = (Number(tempArr[0]) * Number(tempArr[1])).toFixed(4);;
                            }
                            // Calculator.output = Number(tempArr[0]) * Number(tempArr[1].substr(0,tempArr[1].length-1));
                            Calculator.outputBottom.innerHTML = Calculator.output.toFixed(4);
                            break;
                        case "/":
                            if(tempArr[1].indexOf("-") > 0 || tempArr[1].indexOf("+") > 0) {
                                Calculator.output = Number(tempArr[0]) / Number(tempArr[1].substr(0,tempArr[1].length-1));
                            }else {
                                Calculator.output = Number(tempArr[0]) / Number(tempArr[1]);
                            }
                            Calculator.outputBottom.innerHTML = Calculator.output.toFixed(4);
                            break;
                    }
                }
            }
        }
    }
};


Calculator.numbers.forEach((element) => {
    element.addEventListener("click",Calculator.numbersClick);
});

Calculator.operators.forEach((element) => {
    element = document.querySelector(`.${element}`);
    element.addEventListener("click",Calculator.operatorsClick);
});

Calculator.sumBtn.addEventListener("click",Calculator.operatorsClick);


