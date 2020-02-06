function multiple(number, n) {
    for (var i = 0; i < n; i++) {
        if (i % number == 0) {
            console.log(i)
        }
    }
}
multiple(2, 5);

//call back function
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function calc(num1, num2, operation) {
    return operation(num1, num2)
}
console.log(calc(1, 2, add));

var arr = [1, 2, 3, 4];
arr.forEach(function(element) {
    console.log(element + "!");
});

// //Array.map 
var arr = [1, 2, 3, 4];
var newArr = arr.map(function(element) {
    return element + 1;
});
console.log(newArr);

Array.filter()
var arr = [1, 1, 3, 4];
var newArr = arr.filter(function(element) {
    return element < 2;
});
console.log(newArr);

var arr = ["yohannes", "Messay", "Nico", "Seid"];
var newArr = arr.filter(function(element) {
    return -1 < element.indexOf("e", 0);
});
console.log(newArr);

//each
var arr = [1, 2, 3, 4];
//var newArr = arr.each(function(element) {
var newArr = arr.every(function(element) {
    return element < 2;
});
console.log(newArr);
var arr = [2, 2, 3, 4];
var newArr = arr.some(function(element) {
    return element < 2;
});
console.log(newArr);

function printSquare(length, height) {
    var square = [];
    for (i = 0; i < height; i++) {
        var singleLine = " ";
        for (var j = 0; j < length; j++) {
            if (i == 0 || i == height - 1) {
                singleLine += "*";


            } else {
                if (j == 0 || j == length - 1) {
                    singleLine += "*";

                } else {
                    singleLine += "*";

                }

            }

        }
        square.push(singleLine);

    }
    return square.join('\r\n');
}
//printSquare(4, 4);
console.log(printSquare(4, 4));

/*Write a function which takes an array of numbers as input and returns 
a new array containing only the positive numbers in the given array.*/

var arr = [-1, 2, -4, 5]
var num1;

function arrNum(num) {
    var num1 = num[i];
}
return arrNum[i];