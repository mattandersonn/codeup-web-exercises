/*Basic JavaScript: Storing Values with the Assignment Operator
In JavaScript, you can store a value in a variable with the assignment operator (=).

    myVariable = 5;

This assigns the Number value 5 to myVariable.

    If there are any calculations to the right of the = operator, those are performed before the value is assigned to the variable on the left of the operator.

    var myVar;
myVar = 5;
First, this code creates a variable named myVar. Then, the code assigns 5 to myVar. Now, if myVar appears again in the code, the program will treat it as if it is 5.

Assign the value 7 to variable a. */

     var= a;
        a= 7;

/* After a value is assigned to a variable using the assignment operator, you can assign the value of that variable to another variable using the assignment operator.

var myVar;
myVar = 5;
var myNum;
myNum = myVar;
The above declares a myVar variable with no value, then assigns it the value 5. Next, a variable named myNum is declared with no value. Then, the contents of myVar (which is 5) is assigned to the variable myNum. Now, myNum also has the value of 5.
Assign the contents of a to variable b. */
     var a;
     a = 7;
     var b;
     b = a

/* When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of "undefined".

Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.*/

var a = 5;
var b = 10;
var c = "I am a";
