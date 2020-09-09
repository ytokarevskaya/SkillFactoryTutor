function ElectricalAppliances(type, model, amperage) {
    this.type = type;
    this.model = model;
    this.amperage = amperage;
    statusOnOff = false;
    this.defectFactor = +Math.random(); //Фактор брака. Если defectFactor > 1, то техника неисправна; 0.1 - один щёлчок Вкл/Выкл;
    this.switchOnOff = function() {
        if(this.defectFactor < 1) {
            if(statusOnOff == false) {
                console.log(`${model} включен`);
                statusOnOff = true;
                this.defectFactor += 0.1;
                console.log(`Потребляемая мощность ${amperage*220} ватт`);
            } else {
                console.log(`${model} выключен`);
                statusOnOff = false;
                this.defectFactor += 0.1;
            } 
        } else {
            console.log(`${model} не работает...\n*Идёт дым*`);
        }
        console.log(this.defectFactor.toFixed(1));
    };
}

let iron = new ElectricalAppliances("Товары для дома", "Утюг Zanussi", 4.5),
    washer = new ElectricalAppliances("Товары для дома", "Стиральная машина LG", 5),
    //refrigerator = new ElectricalAppliances("Товары для кухни", "Холодильник Samsung", 2),
    microwave = new ElectricalAppliances("Товары для кухни", "Микроволновка Braun", 4.7);

let refrigerator = new iron()

console.log(refrigerator)

microwave.heatFood = function (time = 15) { //время подогрева пищи (в сек.)
    if(statusOnOff && this.defectFactor < 0.9) {
        function timeOut() {
            time -= 1;
            time*1000-1000 >= 0 ? console.log(time) : console.log("*Дзыынь* Еда готова!");
        }
        intId = setInterval(timeOut,1000);
        setTimeout(clearInterval,time*1000,intId);
    } 
};

//Тест на работоспособность техники
console.log(microwave);

microwave.switchOnOff();
microwave.switchOnOff();
microwave.switchOnOff();
microwave.heatFood(3);


