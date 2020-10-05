const btn = document.querySelector('.j-btn');
      resultNode = document.querySelector('.j-result'),
      resultPage = document.querySelector(".page-result"),
      resultLimit = document.querySelector(".limit-result");

  if(localStorage.getItem("urlsDefaultTrue") != null) {
    resultNode.innerHTML = localStorage.getItem("urlsDefault");
  }

let urlUse;
const useRequest = () => {
  return fetch(urlUse)
    .then((response) => {
      return response.json();
    })
    .catch(() => { console.log('error');});
};

btn.addEventListener('click', async () => {
  const page = +document.querySelector(".page").value,
        limit = +document.querySelector(".limit").value;   
  urlUse = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

  let cards = '';

  if(page > 0 && page <= 10 && limit > 0 && limit <= 10) {
    const requestResult = await useRequest();
    requestResult.forEach(el => {
      cards += `<div class="card"><img src="${el.download_url}" class="card-image"/></div>`;
    });
    resultNode.innerHTML = cards;
    resultPage.textContent = '';
    resultLimit.textContent = '';

    localStorage.setItem("urlsDefault",cards);
    localStorage.setItem("urlsDefaultTrue",true);
  } 
  if(page > 10 || page < 1 || isNaN(page)) {
    resultNode.innerHTML = '';
    resultPage.textContent = "Номер страницы вне диапазона от 1 до 10";
  } 
  if(limit > 10 || limit < 1 || isNaN(limit)) {
    resultNode.innerHTML = '';
    resultLimit.textContent = "Лимит вне диапазона от 1 до 10";
  }
  if(resultPage.textContent != '' && resultLimit.textContent != '') {
    resultPage.textContent = '';
    resultLimit.textContent = '';
    resultNode.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
  }
});
