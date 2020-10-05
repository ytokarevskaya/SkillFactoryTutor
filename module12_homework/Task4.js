function ElectricalAppliances(category, model, amperage, color) {
    this.category = category;
    this.model = model;
    this.amperage = amperage;
    this.color = color;
    this.statusOnOff = false;
    this.open = false;
}

ElectricalAppliances.prototype.switchOnOff = function () { //вкл/выкл и показатель потребляемой мощности
    if(this.statusOnOff == false) {
        console.log(`${this.model} включен`);
        this.statusOnOff = true;
        console.log(`Потребляемая мощность ${this.amperage*220} ватт`);
    } else {
        this.statusOnOff = false;
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


function Refrigerator(category, model, amperage, color) {
    this.category = category;
    this.model = model;
    this.amperage = amperage;
    this.color = color;
    this.statusOnOff = false;
    this.open = false;
    this.storageForFood = 100; //Холодильник пуст на 100%
    this.food = new Map(); //Массив продуктов в холодильнике
}

Refrigerator.prototype = new ElectricalAppliances(); // в этой строчке как создаем делегирующую связь между родительской и дочерней функцией

//Добавить продукты в холодильник
Refrigerator.prototype.addFood = function (food) {
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
};

//Взять продукты из холодильника
Refrigerator.prototype.takeFood = function (food)  {
     this.food.forEach((sizeFood,name) => {
        if(name == food) {
            this.food.delete(name);
            console.log(`Из холодильника взято "${name}"`);
            this.storageForFood += sizeFood;
        } 
    });
};

function Microwave(category, model, amperage, color, bookOfRecipes) {
    this.category = category;
    this.model = model;
    this.amperage = amperage;
    this.color = color;
    this.statusOnOff = false;
    this.open = false;
    this.bookOfRecipes = bookOfRecipes;
}

Microwave.prototype = new ElectricalAppliances();

Microwave.prototype.heatFood = function (time, food = "Пустая микроволновка") { //время подогрева пищи (в сек.)
    if(this.statusOnOff) {
        if(this.open) {
            function timeOut() {
                time -= 1;
                time*1000-1000 >= 0 ? console.log(time,`Потребляемая мощность ≈ 1300 ватт`) : console.log(`*Дзыынь* Блюдо "${food}" готово!`);
            }
            let intId = setInterval(timeOut,1000);
            setTimeout(clearInterval,time*1000,intId);
        }
    } 
};

const refrigerator = new Refrigerator("Товары для кухни", "Холодильник Samsung", 2, "white"),
    microwave = new Microwave("Товары для кухни", "Микроволновка Braun", 0, "black", true);

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

//Тест микроволновки

// microwave.switchOnOff();
// microwave.openDoors();
// microwave.heatFood(10); //на 10 сек
// setTimeout(clearInterval,3000,intId); //но вдруг кое-что замечаем
// setTimeout(console.log,3500,"Стоп! Микроволновка же пуста");
// setTimeout(microwave.heatFood,4000,10,"Макароны с курицей");//вот так-то лучше
// setTimeout(() => {microwave.switchOnOff()}, 15000);


// Хорошая работа, плюс за креативность ;) но есть несколько серьёзных недочётов:
// 1. В ElectricalAppliances свойство statusOnOff не присваивается объекту, а просто объявляется отдельной переменной. Т.к. перед переменной нет ключевого слова (var/let/const), она ещё и становится глобальной. Т.е. у вас одно свойство вкл./выкл для всех объектов, грубо говоря, выключив холодильник, у вас бы выключились заодно и все остальные приборы, что является довольно странным поведением :) Кроме того, использовать глобальные переменные в принципе не рекомендуется (за исключением случаев, когда это действительно необходимо), т.к. вы можете случайно переписать какие-то важные системные параметры на странице.
// 2. По заданию нужно было создать делегирующую связь между родительской функцией-конструкторами (ElectricalAppliances) и дочерними. У вас не определены дочерние конструкторы, приборы холодильник и микроволновка являются просто экземплярами родительской функции, что не совсем правильно. Те методы и свойства, которые вы задали для этих приборов (addFood, heatFood, takeFood и т.д.) существуют только в этих 2-х созданных экземплярах. Если вы захотите создать например ещё один холодильник, вам придётся заново присваивать ему эти же самые свойства и методы, что не очень удобно. Для этого и нужно создать конструктор, чтобы свойства и методы, присущие каким-то типичным объектам присваивались им по умолчанию при создании.

// В коде постаралась исправить вышеперечисленные проблемы, сохранив суть.