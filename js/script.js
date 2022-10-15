// Function to Get Information (including Invalid Input)
function getInfo() {
    // Set Up Variable
    let txt = "";
    // Get the values of the input fields
    let num1 = document.getElementById("mypower").value;
    let num2 = document.getElementById("mylastdigits").value;
    // Check if inputs are valid
    if (isNaN(num1) || isNaN(num2) || num1.length==0 || num2.length==0 || num1<10 || num1>1000 || num2<1 || num2>10 || (num1.length>1 && num1[0]=="0") || (num2.length>1 && num2[0]=="0") || !Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2))) {
        txt += `Invalid input(s) - `;

        // Set 
    } else {
        txt += `Your inputs: Power ${num1}, Number of Last Digits ${num2}. <p>`;
        txt += `Last ${num2} digits are ${selfPowers(num1,num2)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numbersinfo").innerHTML = txt;

}