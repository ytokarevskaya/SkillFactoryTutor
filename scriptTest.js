

function ElectricalAppliances(category, model, amperage) {
    this.category = category;
    this.model = model;
    this.amperage = amperage;
    statusOnOff = false;
    this.defectFactor = Math.floor(Math.random()*11)*10; //Добавим фактор брака: 10% вероятность, что техника не включится, или не будет работать одна из функций;
    this.switchOnOff = function() { 
        if(this.defectFactor != 100) {
            if(statusOnOff == false) {
                console.log(`${this.model} включен`);
                statusOnOff = true;
                console.log(`Потребляемая мощность ${this.amperage*220} ватт`);
            } else {
                console.log(`${this.model} выключен`);
                statusOnOff = false;
    
            } 
        } else {
            console.log(`${model} не работает...\n*Идёт дым*`);
        }
    }
}

let iron = new ElectricalAppliances("Товары для дома", "Утюг Zanussi", 4.5),
    washer = new ElectricalAppliances("Товары для дома", "Стиральная машина LG", 5),
    refrigerator = new ElectricalAppliances("Товары для кухни", "Холодильник Samsung", 2),
    microwave = new ElectricalAppliances("Товары для кухни", "Микроволновка Braun", 4.7);

function funcStorageApp () {

}

microwave.heatFood = function (time = 10) { //время подогрева пищи (в сек.)
    if(statusOnOff) {
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

microwave.switchOnOff()
microwave.heatFood(3);
