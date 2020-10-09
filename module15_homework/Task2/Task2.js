document.querySelector(".j-btn-test").addEventListener('click', () => {
    alert(
`Размер экрана монитора:
Ширина экрана - ${window.screen.width}
Высота экрана - ${window.screen.height}

Размер окна браузера:
Ширина с полосой скролла - ${window.innerWidth}(без - ${document.documentElement.clientWidth})
Высота с полосой скролла - ${window.innerHeight}(без - ${document.documentElement.clientHeight})`);
});