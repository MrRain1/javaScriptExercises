const stringToConvert = "i Don't lIke PEas";

function firstUpperCase(string){
    console.log(string);
    string = string.toLowerCase();
    console.log(string);
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
}

let convertedString = firstUpperCase(stringToConvert);
console.log(convertedString);
