//examples of codes from course material
var name = ['seid', 'gasahw', 'mele'];

function accumulate(arr) {
    var count = 0;
    for (var i = 0; i <= arr.length; i++) {
        var currentItem = arr[i];
        count += currentItem;
    }
    return count;
}
console.log(accumulate(name));
accumulate(i);
console.log(accumulate(i));

function search(hystack, needle) {
    var foundIndex = -1;
    for (var i = 0; i < hystack.length; i++) {
        var currentItem = i;
        if (currentItem == needle) {
            foundIndex = i;
        }
    }
    return foundIndex;
}

// problem1: given an array of people's names ['lachaln','kim','Moria']
var names = ['lachalm', 'kim', 'moria']

function name(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log('hi, ' + names[i] + '!');
    }
    return names
}
name(names);
//problem2: given an array of a first, middle, and last name ['Adma', 'Micheal', 'Szaruga']
var people = ['adam', 'Micheal', 'Szaruga'];

function initialize(pep) {
    //var initials = [];
    for (let i = 0; i < pep.length; i++) {
        console.log(pep[i].charAt(0));
    }
    return people;
}
initialize(people);

/*problem3: given a list of 0's and 1's ,[0,1,0,1,1,1,0,0], write a function 
returns the index of the last one */

//     var arrayOfNums = [0, 1, 0, 1, 1, 1, 1, 0, 0];
// function returnIndex (numberArray){
//    numberArray.lastIndexOf(1)
// }
// returnIndex(numbers)

var numbers = [0, 1, 0, 1, 1, 1, 1, 0, 0];

function search(arrayOfNums) {

    var lastIndex;
    for (var i = 0; i < arrayOfNums.length; i++) {
        // var = arr[i];
        if (arrayOfNums[i] == 1) {
            lastIndex = i;
        }
    }
    return lastIndex;
}
search(numbers);
console.log(search(numbers));
//output : 6

/*problem4: given a list of positive numbers ,[1,5,25,3,99,20],
write a function that returns the biggest number */
var numbers = [1, 5, 25, 3, 99, 20];

function largeNumber(myArray) {
    var previousNum;
    var largeNum;
    for (var i = 0; i < myArray.length; i++) {
        previousNum = myArray[i];
        if (previousNum < myArray[i + 1]) {
            largeNum = myArray[i + 1];
        }
    }
    return largeNum;
}
largeNumber(numbers);
console.log(largeNumber(numbers));

var birthYears = [1991, 1984, 1984, 1989];

function mostCommon(common) {
    var occurence = {};
    var commonYear = common[0];
    //var currentYear;
    for (i = 0; i < common.length; i++) {
        var currentYear = common[i];
        if (occurence[currentYear] == null) {
            occurence[currentYear] = 1;
            //console.log(commonYear);
        } else {
            occurence[currentYear]++;
            if (occurence[currentYear] > occurence[commonYear]) {
                commonYear = currentYear;
            }
        }
    }
    return commonYear;
}
console.log(mostCommon(birthYears));
//console.log(mostCommon(student));
//given a list of numbers [-1,5,-25,-3,99,20], write a function that returns 
raceResults = [
    { country: "USA", time: 222 },
    { country: "USA", time: 199 },
    { country: "USA", time: 001 },
    { country: "Russia", time: 998 },
    { country: "Kenya", time: 202 },
    { country: "Brazil", time: 555 }
];

function bestTimeForCountry(times) {
    var bestTimes = {};

    for (var i = 0; i < times.length; i++) {
        var currentTime = times[i];
        var currentCountrysBestTime = bestTimes[currentTime.country];
        var currentCountryTime = currentTime.time;

        if (!bestTimes[currentTime.country]) {
            bestTimes[currentTime.country] = currentTime.time;
        } else if (currentCountryTime < bestTimes[currentTime.country]) {
            bestTimes[currentTime.country] = currentTime.time;
        }
    }

    console.log(bestTimes);
}

bestTimeForCountry(raceResults);

var numCount = [-1, 5, -25, -3, 99, 20];

function foundNum(countNum) {
    var positveCount = 0;
    var negativeCount = 0;

    for (i = 0; i < countNum.length; i++) {
        if (countNum[i] > 0) {
            positveCount++;
        } else if (countNum[i] < 0) {
            negativeCount++;
        } else {
            console.log('value is zer');
        } // return countNum;
    }
    console.log("the positive nums are " + positveCount)
    console.log("the negative nums are " + negativeCount)
}

foundNum(numCount);