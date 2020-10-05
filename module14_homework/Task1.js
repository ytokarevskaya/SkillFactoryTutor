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

const firstName1 = xmlDOM.querySelectorAll('first')[0].textContent,
    secondName1 = xmlDOM.querySelectorAll('second')[0].textContent,
    age1 = xmlDOM.querySelectorAll('age')[0].textContent,
    prof1 =  xmlDOM.querySelectorAll('prof')[0].textContent,
    lang1 = xmlDOM.querySelectorAll('name')[0].getAttribute("lang");

const firstName2 = xmlDOM.querySelectorAll('first')[1].textContent,
    secondName2 = xmlDOM.querySelectorAll('second')[1].textContent,
    age2 = xmlDOM.querySelectorAll('age')[1].textContent,
    prof2 =  xmlDOM.querySelectorAll('prof')[1].textContent,
    lang2 = xmlDOM.querySelectorAll('name')[1].getAttribute("lang");

const result = {
    list: [
        {name: `${firstName1} ${secondName1}`, age: +age1, prof: prof1, lang: lang1},
        {name: `${firstName2} ${secondName2}`, age: +age2, prof: prof2, lang: lang2},
    ]
};

console.log(result);