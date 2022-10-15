# Project Euler 048 - Self Powers

The series, 1<sup>1</sup> + 2<sup>2</sup> + 3<sup>3</sup> + ... + 10<sup>10</sup> = 10405071317.

Find the last ten digits of the series, 1<sup>1</sup> + 2<sup>2</sup> + 3<sup>3</sup> + ... + 1000<sup>1000</sup>.

Information at [Project Euler 048](https://projecteuler.net/problem=48)

## UX

**User Stories**

As a user, I expect the function `selfPowers(10,3)` to return a number.

As a user, I expect the function `selfPowers(10,3)` to return 317.

As a user, I expect the function `selfPowers(150,6)` to return 29045.

As a user, I expect the function `selfPowers(673,7)` to return 2473989.

As a user, I expect the function `selfPowers(1000,10)` to return 9110846700.

User stories on the function `selfPowers(power,lastDigits)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 048](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-48-self-powers)

**Information Architecture**

The function `selfPowers(power,lastDigits)` returns a number, where `power` and `lastDigits` are numbers.

