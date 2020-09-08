/*
let person = {
    age : 27,
    city : "orsk",
    name : "George"
};

const student = Object.create(person);

student.heigth = 30;

for (let prop in student) {
    if(student.hasOwnProperty(prop)) {
        console.log(prop, student[prop]);
    }
}
*/

let userValue = prompt("");


if(isNaN(userValue) || userValue == null) {
    console.log("Упс, кажется, вы ошиблись");
} else if(typeof(+userValue == "number") && userValue != ""){
    userValue % 2 == 0 ? console.log("Число чётное") : console.log("Число нечётное");
} else {
    console.log("Упс, кажется, вы ошиблись");
}
2
