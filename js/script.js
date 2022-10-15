// Function to Get Information (including Invalid Input)
function getInfo() {
    // Set Up Variable
    let txt = "";
    // Get the values of the input fields
    let num1 = document.getElementById("mypower").value;
    let num2 = document.getElementById("mylastdigits").value;
    // Check if inputs are valid
    if (isNaN(num1) || isNaN(num2) || num1.length == 0 || num2.length == 0 || num1 < 10 || num1 > 1000 || num2 < 1 || num2 > 10 || (num1.length > 1 && num1[0] == "0") || (num2.length > 1 && num2[0] == "0") || !Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2))) {
        txt += `Invalid input(s) - `;

        // Set Condition for Not a Number
        if (isNaN(num1) || isNaN(num2)) {
            // Condition if first input (power) is not a number
            if (isNaN(num1)) txt += `Power must be a number.  `;
            // Condition if second input (number of last digits) is not a number
            if (isNaN(num2)) txt += `Number of Last Digits must be a number.  `;
        }

        // Set Condition for Empty Inputs
        if (num1.length == 0 || num2.length == 0) {
            // Condition if first input is empty
            if (num1.length == 0) txt += `Power not entered.  `;
            // Condition if second input is empty
            if (num2.length == 0) txt += `Number of Last Digits not entered.  `;
        }

        // Set Condition if first input is not in range
        if (num1 < 10 || num1 > 1000) txt += `Power must be between 10 and 1000.  `;

        // Set Condition if second input is not in range
        if (num2 < 1 || num2 > 10) txt += `Number of last digits must be between 1 and 10.  `;

        // Set Condition for Leading Zeros
        if ((num1.length > 1 && num1[0] == "0") || (num2.length > 1 && num2[0] == "0")) {
            // Condition if first input includes leading zeros
            if (num1.length > 1 && num1[0] == "0") txt += `Power must not include leading zeros.  `;
            // Condition if second input includes leading zeros
            if (num2.length > 1 && num2[0] == "0") txt += `Number of Last Digits must not include leading zeros.  `;
        }

        // Set Conditions for Number not an integer
        if (!Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2))) {
            // Condition if first input is a number, but not an integer
            if (!Number.isInteger(Number(num1))) txt += `Power is not a whole number.  `;
            // Condition if second input is a number, but not an integer
            if (!Number.isInteger(Number(num2))) txt += `Number of Last digits is not a whole number.  `;
        }
    } else {
        txt += `Your inputs: Power ${num1}, Number of Last Digits ${num2}. <p>`;
        txt += `Last ${num2} digits are ${selfPowers(num1, num2)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numbersinfo").innerHTML = txt;

}

// Function to get the last digits
function powerLastDigits(num,mask) {
    let lastDigits = 1;
    for (let i=0;i<num;i++) {
        lastDigits = (lastDigits * num) % mask;
    }
    return lastDigits;
}

/*
    Function to get the last digits of the series
    1**1 + 2**2 + 3**3 + ... + 1000**1000
    selfPowers(10,3)    returns 317
    selfPowers(150,6)   returns 29045
    selfPowers(673,7)   returns 2473989
    selfPowers(1000,10) returns 9110846700

*/
function selfPowers(power,lastDigits) {
    let total = 0;
    const mask = 10 ** lastDigits;
    for (let i=1;i<power;i++) {
        total = (total + powerLastDigits(i,mask)) % mask;
    }
    return total;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numbersinfo").innerHTML = txt;
}