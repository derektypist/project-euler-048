# Project Euler 048 - Self Powers

The series, 1<sup>1</sup> + 2<sup>2</sup> + 3<sup>3</sup> + ... + 10<sup>10</sup> = 10405071317.

Find the last ten digits of the series, 1<sup>1</sup> + 2<sup>2</sup> + 3<sup>3</sup> + ... + 1000<sup>1000</sup>.

Information at [Project Euler 048](https://projecteuler.net/problem=48)

## UX

**Getting Started**

In the power field, enter a whole number between 10 and 1000 (without leading zeros).

In the number of last digits field, enter the number of last digits between 1 and 10 (without leading zeros).

Click on the Submit Button.  You will see the power and number of last digits required as well as the last digits of the series, unless you have made an invalid input.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of the following:

- Not enter anything in any or all of the input fields
- Entering text other than a number in any or all of the input fields
- Entering a number less than 10 or greater than 1000 in the power field
- Entering a number less than 1 or greater than 10 in the number of last digits field
- Including leading zeros in any or all of the input fields
- Entering a number but it is not an integer in any or all of the input fields

As a user, I can clear the information or start again.

As a user, I expect the function `selfPowers(10,3)` to return a number.

As a user, I expect the function `selfPowers(10,3)` to return 317.

As a user, I expect the function `selfPowers(150,6)` to return 29045.

As a user, I expect the function `selfPowers(673,7)` to return 2473989.

As a user, I expect the function `selfPowers(1000,10)` to return 9110846700.

User stories on the function `selfPowers(power,lastDigits)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 048](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-48-self-powers)

**Information Architecture**

The function `selfPowers(power,lastDigits)` returns a number, where `power` and `lastDigits` are numbers.

## Features

Allows the user to enter power and number of last digits in order to find the last digits of the series.  Performs checks on inputs.  If the inputs are not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.2 and Google Fonts.

## Testing

Ensure all user stories have been met.



