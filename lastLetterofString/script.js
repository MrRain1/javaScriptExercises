const stringInput = "I leik pIZZ";

function lastLetter(string){
    console.log(string.length);
    return string.charAt(string.length-1);
}

console.log(`The last letter is: ${lastLetter(stringInput)}`);
