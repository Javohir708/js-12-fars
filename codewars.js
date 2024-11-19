//1-This code does not execute properly. Try to figure out why.
{
    function multiply(a, b){
        return a * b
      }
}

// 2-Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
{
    function evenOrOdd(number) {
        if ( number % 2 === 0) {
        return "Even"
        } else {
        return "Odd"
        }
      }
}

//3- 123  --> "123", -100 --> "-100" We need a function that can transform a number (integer) into a string.
{
    function numberToString(num) {
        return String(num)
      }
}

//4- 'world'  =>  'dlrow', Complete the solution so that it reverses the string passed into it.
{
    function solution(str){
        return str.split('').reverse().join('')
    }
}

// 5-In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
{
    function makeNegative(num) {
        if (num > 0){
            return -num
        } else {
            return num 
        }
      }
}

//6-Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
// 1: -1
// 14: -14
// -34: 34
{
    function opposite(number) {
        return(-number);
      }
}

//7- Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
{
    function boolToWord( bool ){
        if (bool == true) {
          return 'Yes'
        }else {
          return 'No'
        }
      }
}

// 8- You get an array of numbers, return the sum of all of the positives ones. Example [1,-4,7,12] => 1 + 7 + 12 = 20, Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
    let sum = 0
    
    for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
    sum += arr[i]
    }
  }
    return sum
  }

  //9 -Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// 5, "Hello" -> "HelloHelloHelloHelloHello"
{
    function repeatStr (n, s) {
        return s.repeat(n)
      }
    console.log(repeatStr(5, 'hello'))
}

// 10 -It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
{
  function removeChar(str){
    let arr = str.split('')
    let boshHarf = arr.shift()
    let oxirgiHarf = arr.pop()
    let result = boshHarf + oxirgiHarf
    return arr.join('')
   };
   console.log(removeChar('salom'));
}