//FizzBuzz
function fizzBuzz (limite){
    for (let i = 1; i <= limite; i++){
        if ( (i % 3 === 0) && ( i % 5 === 0)){
        console.log("FizzBuzz")
        }
        else if ( i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0){
        console.log("Buzz");
        }
        else
        console.log(i);
    }
}

fizzBuzz (100);

// Another way
/*
if ( (i % 15 === 0)){
        console.log("FizzBuzz")
}
*/
