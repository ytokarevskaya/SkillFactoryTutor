class ElectricalAppliances {
    constructor(category, model, amperage) {
        this.category = category;
        this.model = model;
        this.amperage = amperage;
        this.statusOnOff = false;
        this.open = false;
    }
    switchOnOff() {
        if(this.statusOnOff == false) {
            console.log(`${this.model} включен`);
            this.statusOnOff = true;
            console.log(`Потребляемая мощность ${this.amperage*220} ватт`);
        } else {
            this.statusOnOff = false;
            console.log(`${this.model} выключен`);
            console.log(`Потребляемая мощность 0 ватт`);
        }
    }
    openDoors() {
        if(this.open == false) {
            console.log(`${this.model} открыт`);
            this.open = true;
        } else {
            console.log(`${this.model} закрыт`);
            this.open = false;
        }
    }
}

class Refrigerators extends ElectricalAppliances {
    constructor(category,model,amperage) {
        super(category,model,amperage);
        this.storageForFood = 100; //Холодильник пуст на 100%
        this.food = new Map(); //Массив продуктов в холодильнике
    }
    addFood(food) { //Добавить продукты в холодильник
        if(this.open) {
            if(this.storageForFood >= 0) {
                let sizeFood = Math.round((Math.random(1)+0.1)*30); //Размер пищи, допустим, произвольный
                this.food.set(food,sizeFood);
                this.storageForFood -= sizeFood;
                console.log(`В ${this.model} добавлено "${food}"`);
            } else {
                console.log(`${this.model} переполнен`);
            }
        } else {
            console.log(`${this.model} сначала бы не помешало открыть`);
        }
    }
    takeFood(food) { //Взять продукты из холодильника
        this.food.forEach((sizeFood,name) => {
            if(name == food) {
                this.food.delete(name);
                console.log(`Из холодильника взято "${name}"`);
                this.storageForFood += sizeFood;
            } 
        });
    }
}

let intId;

class Microwaves extends ElectricalAppliances {
    constructor(bookOfRecipes,category,model,amperage) {
        super(category,model,amperage);
        this.bookOfRecipes = bookOfRecipes;
    }
    heatFood(time, food="Пустая микроволновка") {
        if(microwave.statusOnOff) {
            if(microwave.open) {
            function timeOut() {
                time -= 1;
                time*1000-1000 >= 0 ? console.log(time,`Потребляемая мощность ≈ 1300 ватт`) : console.log(`*Дзыынь* Блюдо "${food}" готово!`);
            }
            intId = setInterval(timeOut,1000);
            setTimeout(clearInterval,time*1000,intId);
        }
    } 
    }
}

const refrigerator = new Refrigerators("Товары для кухни", "Холодильник Samsung", 2),
    microwave = new Microwaves(true,"Товары для кухни", "Микроволновка Braun", 0);

//Тест холодильника
/*
refrigerator.switchOnOff();
refrigerator.addFood("Макароны с курицей");
refrigerator.openDoors();
refrigerator.addFood("Макароны с курицей");
refrigerator.addFood("Фондю");
refrigerator.addFood("Дхансак с ягнёнком");
refrigerator.addFood("Оливье");
refrigerator.takeFood("Макароны с курицей");
refrigerator.addFood("Салат под шубой");
refrigerator.addFood("Борщ");
refrigerator.addFood("Картофель");
refrigerator.addFood("Ананасы");
refrigerator.switchOnOff();
*/

//Тест микроволновки
/*
microwave.switchOnOff();
microwave.openDoors();
microwave.heatFood(10); //на 10 сек
setTimeout(clearInterval,3000,intId); //но вдруг кое-что замечаем
setTimeout(console.log,3500,"Стоп! Микроволновка же пуста");
setTimeout(microwave.heatFood,4000,10,"Макароны с курицей");//вот так-то лучше
setTimeout(() => {microwave.switchOnOff()}, 15000);
*/


