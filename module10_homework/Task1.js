let userValue = prompt("");

if(isNaN(userValue)) {
    console.log("Упс, кажется, вы ошиблись");
} else if(typeof(+userValue == "number") && userValue != ""){
    userValue % 2 == 0 ? console.log("Число чётное") : console.log("Число нечётное");
} else {
    console.log("Упс, кажется, вы ошиблись");
}