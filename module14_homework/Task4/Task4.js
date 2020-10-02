const btn = document.querySelector('.j-btn');
const resultNode = document.querySelector('.j-result');

let urlUse;

const useRequest = () => {
  return fetch(urlUse)
    .then((response) => {
      return response;
    })
    .catch(() => { console.log('error') });
};

btn.addEventListener('click', async () => {
  const value1 = +document.querySelector(".input1").value,
        value2 = +document.querySelector(".input2").value;

  urlUse = `https://picsum.photos/${value1}/${value2}`;
  const requestResult = await useRequest();

  if(value1 > 100 && value1 < 300 && value2 > 100 && value2 < 300) {
    resultNode.innerHTML = `<img src="${requestResult.url}"/>`;
  } else {
    resultNode.textContent = "Одно из чисел вне диапазона от 100 до 300";
  }
});


