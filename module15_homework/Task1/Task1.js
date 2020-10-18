const btn = document.querySelector('.j-btn-test');
let btnDisable = true;

btn.addEventListener('click', () => {
    if(btnDisable) {
    document.querySelector(".btn_icon").innerHTML = `
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.879-2.828a.5.5 0 1 1 .707.707L6.732 9.975H9.5a.5.5 0 1 1 0 1H5.525a.5.5 0 0 1-.5-.5V6.5a.5.5 0 1 1 1 0v2.768l4.096-4.096z"/>
        </svg>
    `;
    btnDisable = false;
    } else {
        document.querySelector(".btn_icon").innerHTML = 
        `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path fill-rule="evenodd" d="M10.828 5.172a.5.5 0 0 0-.707 0L6.025 9.268V6.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H9.5a.5.5 0 0 0 0-1H6.732l4.096-4.096a.5.5 0 0 0 0-.707z"/>
        </svg>
        `;
        btnDisable = true;
    }
});

// Всё работает верно, но для лучшей производительности можно менять не содержимое элемента (т.к. это каждый раз вызывает перезагрузку контента), а прописать в HTML-коде сразу 2 иконки, одна из которых будет спрятана с помощью display:none, и по щелчку мыши показывать одну иконку и прятать другую. Можно как менять свойство display напрямую, так и использовать классы и стилизацию CSS