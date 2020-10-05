const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`;

const data = JSON.parse(jsonString);

const name1 = data.list[0].name,
   age1 = data.list[0].age,
   prof1 = data.list[0].prof;

const name2 = data.list[1].name,
   age2 = data.list[1].age,
   prof2 = data.list[1].prof;

const result = 
    [{name: name1, age: +age1, prof: prof1},
    {name: name2, age: +age2, prof: prof2}];

console.log(result);