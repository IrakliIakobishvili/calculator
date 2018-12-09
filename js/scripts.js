const Calculator = {
    outputTop    : document.querySelector("#outputTop"),
    outputBottom : document.querySelector("#outputBottom"),
    numbers      : document.querySelectorAll(".num"),
    operators    : ["division","multiplication","bracketOpen","bracketClose","subtraction","add"],
    sumBtn       : document.querySelector(".sum"),
    output       : "",
    // info         : {a:0,b:0,op:""},
    // result       : 0,
    numbersClick: function (e) {
        Calculator.output += e.target.getAttribute("data-number");
        Calculator.outputTop.innerHTML = Calculator.output;
    },
    operatorsClick: function (e) {
        Calculator.output += e.target.getAttribute("data-operator");
        Calculator.outputTop.innerHTML = Calculator.output;
    },
    calculation: function () {
        // let left = 0;
        // let right = 0;

        //Multiplication
        while(Calculator.output.indexOf("*") > 0) {
            let index = Calculator.output.indexOf("*");
            let indexRight = index+1;
            let indexLeft = index-1;
            let leftSum = 0;
            let rightSum = 0;
            let totalSum = 0;
            let startIndex = 0;
            let endIndex = 0;

            while (Calculator.output.charCodeAt(indexRight) >= 48 && Calculator.output.charCodeAt(indexRight) <= 57) {
                console.log(Calculator.output.charAt(indexRight) +" right")
                rightSum += Calculator.output.charAt(indexRight);
                endIndex = indexRight;
                indexRight++;
            }
            while (Calculator.output.charCodeAt(indexLeft) >= 48 && Calculator.output.charCodeAt(indexLeft) <= 57) {
                console.log(Calculator.output.charAt(indexLeft) +" left")
                leftSum += Calculator.output.charAt(indexLeft);
                startIndex = indexLeft;
                indexLeft--;
            }
            leftSum = leftSum.toString().split("").reverse().join("").slice(0,-1);

            totalSum = Number(leftSum) * Number(rightSum);
            let tempOutputArr = Calculator.output.split("");
            tempOutputArr[endIndex] = totalSum;
            tempOutputArr.splice(startIndex,endIndex);
            let joinTempArr = tempOutputArr.join("");
            Calculator.output = joinTempArr;
            console.log(totalSum)
            Calculator.outputBottom.innerHTML = totalSum;
            console.log(endIndex +" endindex")
            console.log(startIndex + " startindex")

            leftSum = 0;
            rightSum = 0;
            totalSum = 0;
            startIndex = 0;
            endIndex = 0;
        }



        //Division
        while(Calculator.output.indexOf("/") > 0) {
            let index = Calculator.output.indexOf("/");
            let indexRight = index+1;
            let indexLeft = index-1;
            let leftSum = 0;
            let rightSum = 0;
            let totalSum = 0;
            let startIndex = 0;
            let endIndex = 0;

            while (Calculator.output.charCodeAt(indexRight) >= 48 && Calculator.output.charCodeAt(indexRight) <= 57) {
                console.log(Calculator.output.charAt(indexRight) +" right")
                rightSum += Calculator.output.charAt(indexRight);
                endIndex = indexRight;
                indexRight++;
            }
            while (Calculator.output.charCodeAt(indexLeft) >= 48 && Calculator.output.charCodeAt(indexLeft) <= 57) {
                console.log(Calculator.output.charAt(indexLeft) +" left")
                leftSum += Calculator.output.charAt(indexLeft);
                startIndex = indexLeft;
                indexLeft--;
            }
            leftSum = leftSum.toString().split("").reverse().join("").slice(0,-1);

            totalSum = Number(leftSum) / Number(rightSum);
            let tempOutputArr = Calculator.output.split("");
            tempOutputArr[endIndex] = totalSum;
            tempOutputArr.splice(startIndex,endIndex);
            let joinTempArr = tempOutputArr.join("");
            Calculator.output = joinTempArr;
            console.log(totalSum)
            // (totalSum.toString().length > 13) ? (totalSum.toString().toFixed(13), totalSum = Number(totalSum.toString())) : true;
            if(totalSum.toString().length > 13) {
                totalSum = totalSum.toFixed(13);
            }
            Calculator.outputBottom.innerHTML = totalSum;
            console.log(endIndex +" endindex")
            console.log(startIndex + " startindex")

            leftSum = 0;
            rightSum = 0;
            totalSum = 0;
            startIndex = 0;
            endIndex = 0;
        }



        //Adding
        while(Calculator.output.indexOf("+") > 0) {
            let index = Calculator.output.indexOf("+");
            let indexRight = index+1;
            let indexLeft = index-1;
            let leftSum = 0;
            let rightSum = 0;
            let totalSum = 0;
            let startIndex = 0;
            let endIndex = 0;

            while (Calculator.output.charCodeAt(indexRight) >= 48 && Calculator.output.charCodeAt(indexRight) <= 57) {
                console.log(Calculator.output.charAt(indexRight) +" right")
                rightSum += Calculator.output.charAt(indexRight);
                endIndex = indexRight;
                indexRight++;
            }
            while (Calculator.output.charCodeAt(indexLeft) >= 48 && Calculator.output.charCodeAt(indexLeft) <= 57) {
                console.log(Calculator.output.charAt(indexLeft) +" left")
                leftSum += Calculator.output.charAt(indexLeft);
                startIndex = indexLeft;
                indexLeft--;
            }
            leftSum = leftSum.toString().split("").reverse().join("").slice(0,-1);

            totalSum = Number(leftSum) + Number(rightSum);
            let tempOutputArr = Calculator.output.split("");
            tempOutputArr[endIndex] = totalSum;
            tempOutputArr.splice(startIndex,endIndex);
            let joinTempArr = tempOutputArr.join("");
            Calculator.output = joinTempArr;
            console.log(totalSum)
            Calculator.outputBottom.innerHTML = totalSum;
            console.log(endIndex +" endindex")
            console.log(startIndex + " startindex")

            leftSum = 0;
            rightSum = 0;
            totalSum = 0;
            startIndex = 0;
            endIndex = 0;
        }


        //Subtraction
        while(Calculator.output.indexOf("-") > 0) {
            let index = Calculator.output.indexOf("-");
            let indexRight = index+1;
            let indexLeft = index-1;
            let leftSum = 0;
            let rightSum = 0;
            let totalSum = 0;
            let startIndex = 0;
            let endIndex = 0;

            while (Calculator.output.charCodeAt(indexRight) >= 48 && Calculator.output.charCodeAt(indexRight) <= 57) {
                console.log(Calculator.output.charAt(indexRight) +" right")
                rightSum += Calculator.output.charAt(indexRight);
                endIndex = indexRight;
                indexRight++;
            }
            while (Calculator.output.charCodeAt(indexLeft) >= 48 && Calculator.output.charCodeAt(indexLeft) <= 57) {
                console.log(Calculator.output.charAt(indexLeft) +" left")
                leftSum += Calculator.output.charAt(indexLeft);
                startIndex = indexLeft;
                indexLeft--;
            }
            leftSum = leftSum.toString().split("").reverse().join("").slice(0,-1);

            totalSum = Number(leftSum) - Number(rightSum);
            let tempOutputArr = Calculator.output.split("");
            tempOutputArr[endIndex] = totalSum;
            tempOutputArr.splice(startIndex,endIndex);
            let joinTempArr = tempOutputArr.join("");
            Calculator.output = joinTempArr;
            console.log(totalSum)
            Calculator.outputBottom.innerHTML = totalSum;
            console.log(endIndex +" endindex")
            console.log(startIndex + " startindex")

            leftSum = 0;
            rightSum = 0;
            totalSum = 0;
            startIndex = 0;
            endIndex = 0;
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

Calculator.sumBtn.addEventListener("click",Calculator.calculation);


