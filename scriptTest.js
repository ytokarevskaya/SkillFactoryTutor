function ElectricalAppliances(category, model, amperage, color) {
    this.category = category;
    this.model = model;
    this.amperage = amperage;
    this.color = color;
    statusOnOff = false;
    this.open = false;
}

ElectricalAppliances.prototype.switchOnOff = function () { //вкл/выкл и показатель потребляемой мощности
    if(statusOnOff == false) {
        console.log(`${this.model} включен`);
        statusOnOff = true;
        console.log(`Потребляемая мощность ${this.amperage*220} ватт`);
    } else {
        statusOnOff = false;
        console.log(`${this.model} выключен`);
        console.log(`Потребляемая мощность 0 ватт`);
    }
};

ElectricalAppliances.prototype.openDoors = function () {
    if(this.open == false) {
        console.log(`${this.model} открыт`);
        this.open = true;
    } else {
        console.log(`${this.model} закрыт`);
        this.open = false;
    }
};

const refrigerator = new ElectricalAppliances("Товары для кухни", "Холодильник Samsung", 2, "white"),
    microwave = new ElectricalAppliances("Товары для кухни", "Микроволновка Braun", 0, "black");

refrigerator.storageForFood = 100; //Холодильник пуст на 100%
refrigerator.food = new Map(); //Массив продуктов в холодильнике

//Добавить продукты в холодильник
refrigerator.addFood = function (food) {
    if(refrigerator.open) {
        if(refrigerator.storageForFood >= 0) {
            let sizeFood = Math.round((Math.random(1)+0.1)*30); //Размер пищи, допустим, произвольный
            refrigerator.food.set(food,sizeFood);
            refrigerator.storageForFood -= sizeFood;
            console.log(`В ${refrigerator.model} добавлено "${food}"`);
        } else {
            console.log(`${refrigerator.model} переполнен`);
        }
    } else {
        console.log(`${refrigerator.model} сначала бы не помешало открыть`);
    }
};

//Взять продукты из холодильника
refrigerator.takeFood = function (food)  {
     refrigerator.food.forEach((sizeFood,name) => {
        if(name == food) {
            refrigerator.food.delete(name);
            console.log(`Из холодильника взято "${name}"`);
            refrigerator.storageForFood += sizeFood;
        } 
    });
};

//Тест холодильника

// refrigerator.switchOnOff();
// refrigerator.addFood("Макароны с курицей");
// refrigerator.openDoors();
// refrigerator.addFood("Макароны с курицей");
// refrigerator.addFood("Фондю");
// refrigerator.addFood("Дхансак с ягнёнком");
// refrigerator.addFood("Оливье");
// refrigerator.takeFood("Макароны с курицей");
// refrigerator.addFood("Салат под шубой");
// refrigerator.addFood("Борщ");
// refrigerator.addFood("Картофель");
// refrigerator.addFood("Ананасы");
// refrigerator.switchOnOff();


let intId;
microwave.bookOfRecipes = true;
microwave.heatFood = function (time, food = "Пустая микроволновка") { //время подогрева пищи (в сек.)
    if(statusOnOff) {
        if(microwave.open) {
        function timeOut() {
            time -= 1;
            time*1000-1000 >= 0 ? console.log(time,`Потребляемая мощность ≈ 1300 ватт`) : console.log(`*Дзыынь* Блюдо "${food}" готово!`);
        }
        intId = setInterval(timeOut,1000);
        setTimeout(clearInterval,time*1000,intId);
    }
} 
};

//Тест микроволновки
let goMicro = function() {
    microwave.switchOnOff();
    microwave.openDoors();
    console.log("dddd")
};
goMicro();

microwave.heatFood(10); //на 10 сек
setTimeout(clearInterval,3000,intId); //но вдруг кое-что замечаем
setTimeout(console.log,3500,"Стоп! Микроволновка же пуста");
setTimeout(microwave.heatFood,4000,10,"Макароны с курицей");//вот так-то лучше
setTimeout(() => {microwave.switchOnOff()}, 15000);


