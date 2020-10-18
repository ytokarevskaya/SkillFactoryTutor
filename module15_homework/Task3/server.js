const express = require('express');
const path = require("path");

let client = null;

express()
  .use(express.json())
  .use(express.static(path.join(__dirname, "public")))
  .get("/events/", async function (req, res) {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
      "Cache-Control": "no-cache"
    });

    res.write('data: "открытие соединения"\n\n');

    client = res;
  })
  .get("/start/", async function (req, res) {
    setInterval(() => {
      client.write('data: "сервер отправляет события"\n\n');
    }, 1000);
  })
  .listen(8080);