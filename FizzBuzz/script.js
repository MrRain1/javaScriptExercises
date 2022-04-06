let answer = parseInt(prompt("Plese enter the number you want the FizzBuzz to end: "));

function FizzBuzz(end){
    for(let i=1; i <= end; i++){
        if((i%3 === 0) && (i%5 === 0)){ console.log("FizzBuzz"); }
        else if((i%5) === 0){ console.log("Buzz"); }
        else if((i%3) === 0){ console.log("Fizz"); }
        else{ console.log(`${i}\n`); } 
    } 
}

FizzBuzz(answer);


