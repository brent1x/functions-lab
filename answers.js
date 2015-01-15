// EXERCISE 1

function maxOfTwoNumbers(a, b) {
	if(a > b) {
		console.log(a);
	}
	else {
		console.log(b);
	}
}

maxOfTwoNumbers(4, 6);

// EXERCISE 2

function maxOfThree(a, b, c) {
	if(a > b && a > c) {
		console.log(a);
	}
	else if (b > a && b > c) {
		console.log(b);
	}
	else {
		console.log(c);
	}
}

maxOfThree(25, 11, 9);

// EXERCISE 3

function isVowel(x) {
	if( x === "a" || x === "e" || x === "i" || x === "o" || x ==="u") {
		console.log(x + " is a vowel.");
	}
	else {
		console.log(x + " is not a vowel.");
	}
}

isVowel("b");

// EXERCISE 4

var arrayYo = [2, 3, 4, 5, 6];

function sumArray() {
    for (var i = 0, sum = 0; i < arrayYo.length; sum += arrayYo[i++]);
    console.log(sum);
}

function multiplyArray() {
    for (var i = 0, sum = 1; i < arrayYo.length; sum *= arrayYo[i++]);
    console.log(sum);
}

sumArray();
multiplyArray();

// EXERCISE 5

function reverseString(word) {
  console.log(word.split('').reverse().join(''));
}

reverseString("Taco master");





















