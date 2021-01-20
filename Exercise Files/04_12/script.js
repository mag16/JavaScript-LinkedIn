function doSomeMath() {
	var a = 5;
	var b = 4;
	var sum = a + b;

	return sum;
}

var theResult = doSomeMath();

console.log("The result: ", theResult);


// Closures example

function giveMeEms(pixels) {
	let baseValue = 16;

	function doTheMath() {
		return pixels/baseValue;
	}
	return doTheMath;
}

let smallSize = giveMeEms(12);
let mediumSize = giveMeEms(18);
let largeSize = giveMeEms(24);
let extraLargeSize = giveMeEms(32);

console.log("Small size: ", smallSize());
console.log("Medium size: ", mediumSize());
console.log("Large size: ", largeSize());
console.log("Extra Large size: ", extraLargeSize());