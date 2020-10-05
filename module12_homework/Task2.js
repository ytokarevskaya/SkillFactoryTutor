funcHasProperty = (str,obj) => {
    for(var key in obj) {
        return key === str ? console.log(true) : console.log(false);
    }    
};

// Задание выполнено верно, но есть более простой способ проверить наличие свойства в объекте, без перебора всех ключей (ведь их может быть очень много). Более оптимальный способ решения такой:

function checkPropInObj (str, obj) {
  return (str in obj); // возвращает true или false
}