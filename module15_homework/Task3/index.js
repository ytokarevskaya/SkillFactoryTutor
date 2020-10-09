const wsUri = "wss://echo.websocket.org/";

const output = document.querySelector(".chat");
const btnOpen = document.querySelector('.j-btn-open');
const btnClose = document.querySelector('.j-btn-close');
btnClose.style.display = 'none';
const btnSend = document.querySelector('.chat-btn');
const chatInput = document.querySelector('.chat-input');
const btnGeo = document.querySelector(".geo");

let websocket;

function writeToScreen(message) {
  output.innerHTML += `<p><div class="chat-text">${message}</div></p>`;
}

btnOpen.addEventListener('click', () => {
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) {
    console.log("CONNECTED");
    btnOpen.style.display = 'none';
    btnClose.style.display = 'block';
  };
  websocket.onclose = function(evt) {
    console.log("DISCONNECTED");
    btnOpen.style.display = 'block';
    btnClose.style.display = 'none';
  };
  websocket.onmessage = function(evt) {
    if(evt.data.indexOf(`https://www.openstreetmap.org/#map=18/`) != -1) {
      output.innerHTML += `<div class="serv-message"><p><div class="chat-text"><a href="` + evt.data + `">Ваша геолокация</a></div></p></div>`;
    } else {
      output.innerHTML += '<div class="serv-message"><p><div class="chat-text">' + evt.data + '</div></p></div>';
    }
  };
  websocket.onerror = function(evt) {
    console.log("ERROR"+ evt.data);
  };
});

btnClose.addEventListener('click', () => {
  websocket.close();
  websocket = null;
});

btnSend.addEventListener('click', () => {
  if(chatInput.value == "") return;
  const message = chatInput.value;
  writeToScreen(message);
  chatInput.value = "";
  websocket.send(message);
});

chatInput.addEventListener("keydown", function(event) {
  if(chatInput.value == "") return;
  if(event.keyCode == 13) {
    const message = chatInput.value;
    writeToScreen(message);
    chatInput.value = "";
    websocket.send(message);
  }
});

btnGeo.addEventListener('click', () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      websocket.send(`https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}`);
    });
  }
});

