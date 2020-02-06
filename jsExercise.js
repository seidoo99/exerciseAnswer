// // #1. write a function hello with a given name 

// function hello(name) {

//     console.log("hello " + name + "!");
// }
// hello('seid');

// // #2. modify a program to return hello world

// function hello(name) {
//     if (name == null) {
//         console.log("hello world");
//     } else {
//         console.log("hello " + name + "!");
//     }

// }
// hello('seid');

// // #3. write madlib function

// function madlib(name, subject) {
//     var mad = name + "'s favourite subject in school is " + subject;
//     console.log(mad);
//     return mad;

// }
// madlib('seid', 'bio');

// //#4. write function for tip amount
// function tipAmount(bill, service) {
//     if (service === "good") {
//         return bill * 0.2;
//     } else if (service === "fair") {
//         return bill * 0.15;
//     } else if (service === "bad") {
//         return bill * 0.1;
//     }

// }
// var finalTip = tipAmount(100, "good")
// console.log(finalTip);
// // #5. write function for total amount after tip
// function totalAmount(bill, service) {
//     if (service === "good") {
//         return bill * 1.2;
//     } else if (service === "fair") {
//         return bill * 1.15;
//     } else if (service === "bad") {
//         return bill * 1.1;
//     }

// }
// var finalTip = totalAmount(100, "good")
// console.log(finalTip);
// // #6. split Amount calc 3
// function splitAmount(bill, service, pep) {

//     if (service === "good") {
//         return (bill * 1.2) / pep;
//     } else if (service === "fair") {
//         return (bill * 1.15) / pep;
//     } else if (service === "bad") {
//         return (bill * 1.1) / pep;
//     }
// }
// var finalAmount = splitAmount(100, "good", 5);
// console.log(finalAmount);

// // #7. print numbers start and end given
// //using for loop
// function printNum(start, end) {
//     for (i = start; i <= end; i++) {
//         console.log(i);
//     }
//     return i;
// }
// printNum(1, 10);

//using while loop
// function printNum1(start, end) {
//     while (start <= end) {
//         console.log(start);
//         start++;
//     }
// }
// printNum1(1, 10);

// #8. printSquare of size

// function PrintSquare(siz) {
//     var singleLine = "";
//     for (i = 0; i < siz; i++) {
//         singleLine += "*";
//     }
//     // var lineCount = singleLine.length;
//     for (j = 0; j < lineCount; j++) {
//         var lineCount = singleLine.length;
//         console.log(singleLine);

//     }
// }
// PrintSquare(5);

// #9. print box for width and height
function printBox(width, height) {
    for (var row = 1; row <= height; row++) {
        var rowString = "";
        for (var column = 1; column <= width; column++) {
            if (row == 1 || row == height) {
                rowString += "*";
            } else {
                if (column == 1 || column == width) {
                    rowString += "*";
                } else {
                    rowString += " ";
                }
            }
        }
        console.log(rowString);
    }
}
printBox(10, 5);