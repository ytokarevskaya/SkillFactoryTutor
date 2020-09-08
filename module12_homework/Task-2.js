funcHasProperty = (str,obj) => {
    for(var key in obj) {
        return key === str ? console.log(true) : console.log(false);
    }    
};