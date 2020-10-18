const parser = new DOMParser();

const xmlString = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentNodes = xmlDOM.querySelectorAll('student');
const result = {
  list: []
};

studentNodes.forEach(student => {
  const firstName = xmlDOM.querySelectorAll('first')[0].textContent,
    secondName = xmlDOM.querySelectorAll('second')[0].textContent,
    age = xmlDOM.querySelectorAll('age')[0].textContent,
    prof =  xmlDOM.querySelectorAll('prof')[0].textContent,
    lang = xmlDOM.querySelectorAll('name')[0].getAttribute("lang");

  result.list.push({name: `${firstName} ${secondName}`, age: +age, prof: prof, lang: lang});
});

console.log(result);

// Решение верное в условиях данной конкретной задачи, но не универсальное. В большинстве реальных задач вы не будете знать точное количество узлов, которые нужно обработать, поэтому лучше было бы использовать метод querySelectorAll и цикл, чтобы обработать все доступные узлы вне зависимости от их количества.
// Выше исправила на более правильный вариант