let string1 = 123;
let obj1 = {ccc:123, 123: 234, ccc:"sdsd"}
/*
function funcHasProperty (str,obj) {
    for(var key in obj) {
        return key == str ? console.log(true) : console.log(false);
    }    
}
*/

funcHasProperty = (str,obj) => {
    for(var key in obj) {
        return key == str ? console.log(true) : console.log(false);
    }    
};

funcHasProperty(string1,obj1);