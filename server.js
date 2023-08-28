const http = require("http");

const host = "localhost"; // 'http://boobbot.fun/' my host;
const port = 8000;

const currentDate = new Date();
console.log(`Текущая дата: ${currentDate.toDateString()}`);
console.log(`Текущее время: ${currentDate.toTimeString()}`);

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(currentDate);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
