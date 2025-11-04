function multiply(x, y, z){
    if (x === y || y === z || x === z){
        return ("values must be different");
    }
    return x * y * z;
}

let result = multiply(6, 4, 8);
console.log("the product is " + result);

const convertToSeconds = function(minutes){
    return minutes * 60;
}

let seconds = convertToSeconds(32);
console.log("32 minutes is equivalent to " + seconds + " seconds");

function fahrenheitToCelsius(farenheit){
    const celsius = (farenheit - 32) * 5 / 9;
    return celsius.toFixed(2);
}

let temp = fahrenheitToCelsius(82.4);
console.log("32 degree celsius is equivalent to " + temp + " degrees in farenheit");

function reverseString(str){
    return str.split("").reverse().join("");
}

let reversed = reverseString("RaceCar");
console.log("the reverse string is " + reversed);

function countVowels(str){
    const vowels = "aeiou";
    let count = 0;

    for (let char of str){
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
}

let num_vowels = countVowels("a beautiful audience enjoys a movie in a unique, amazing area.");
console.log("the number of vowels in the string is " + num_vowels);

function isPrime(num){
    if (num <= 1) return false;
    for (let x = 2; x < num; x++){
        if (num % x === 0){
            return false;
        }
    }
    return true;
}

console.log("is 67 a prime number? " + isPrime(67));
console.log("is 35 a prime number? " + isPrime(35));