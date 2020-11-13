// *Number two*

function showMultiplicationTable(input){
    for (var i = 1; i <= 10;i++){
        console.log(input + " x " + i + " = " +(input * i));
    }
}
showMultiplicationTable(7)



// *Number three*

//Use a for loop to generate 10 random numbers between 20-200
// and output to the console whether each number is even or odd.
for(var i = 0; i <10; i++){
    var random = Math.floor( (Math.random() * 180 + 20));
    if(random % 2 === 0) {
        console.log(random + " Is Even!");
    } else {
        console.log(random + "is Odd!");
    }
}

//Number 4
for(var j =1; j<10; j++){
    var string = j.toString();
    console.log (Number(string.repeat(j)));
}
for (var k = 100; k>0; k--){
    if (k % 5 === 0){
        console.log(k);
    }
}

//Number 5

for (var i = 1; i< 10; i++){
    console.log(i.toString().repeat(i))
}

for (var i = 100; i >= 5; i -= 5){
    console.log(i);
}