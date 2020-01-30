function getPersonsAge() {
    var age = 67;
    return age;
}
//var duaneAge = getPersonsAge();
//console.log(duaneAge);
getPersonsAge();

// var myObject = {};
// var object = {
//     adam: "hello",
//     zach: 4,
// }
// object.firstKey == "hello";
// if else
var loggedIn = true;

if (!loggedIn) {
    var page = "profile";
} else {
    var page = "loggedIn"
}
// for loop

var array = ["ball", "car", "doll"];

for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}

var class = [student, student, student];
for (var i = 0; i < 10; i++) {
    console.log(class[i].givenAnA());
}
//unstopped loop
var x = 0;
while (x < 10) {
    console.log(x);
    x = +2;
}
var x = 0;
while (x < 10) {
    console.log(x);
    x += 2;
}