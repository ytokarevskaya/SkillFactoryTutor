'use string';

let choose = 0;

document.querySelector(".right-slider").onclick = function () {
    if(choose < 14) {
        choose += 1;
        document.querySelector(".photo").src = "/Slider/asset/DSC_" + (4886 + choose) + ".JPG";
    } else {
        choose = 0;
    }

};

document.querySelector(".left-slider").onclick = function () {
    choose -= 1;
    document.querySelector(".photo").src = "/Slider/asset/DSC_" + (4886 + choose) + ".JPG";
};



document.querySelector(".photo").onload = function(){
    console.log("ok");
};
