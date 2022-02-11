/*Create a simple calculator using an HTML form. 
The form should have two text inputs to enter the two operands and a radio button to select the operator. 
Four types of operations should be possible (add, subtract, multiply and divide). 
The calculator should include an HTML element to provide the result of the operation. 
There should be submit button that would trigger a calculate function. 
 Use a loop to access each of the operands as part of a NodeList.
  Use conditions in your JavaScript to check that the operands are both positive numbers and provide an appropriate message otherwise in the result.
 Finally, use a switch statement to carry out the appropriate operation based on the ‘value’ of the radio button */

 const submit = document.querySelector('#submit')
 const firstnum = document.querySelector('#first-number')
 const secondnum = document.querySelector('#second-number')
 const ans = document.querySelector('#ans')
 
 
 //submit.addEventListener('submit', e => {
 //  e.preventDefault()
 
 function calc() {
   const operator = document.querySelector('input[name="operator"]:checked')
   console.log("op: " + operator)
   var numOne = parseInt(firstnum.value)
   var numTwo = parseInt(secondnum.value)
 
   if (numOne < 0 || numTwo < 0) {
 
     alert("Number must be positive")
   } else {
     var answer;
     switch (operator) {
       case "+":
         answer = numOne + numTwo
         ans.textContent = answer
         //lastCalc.textContent = 
         break;
       case "-":
         answer = numOne - numTwo
         ans.textContent = answer
         break;
 
       case "/":
         answer = numOne / numTwo
         ans.textContent = answer
         break;
       case "*":
         answer = numOne * numTwo
         ans.textContent = answer
         break;
 
     }
     console.log("an: " + answer)
   }
 
 }
 //);
 