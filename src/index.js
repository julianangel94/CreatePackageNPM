const messages = [
  "Julian",
  "Oscar",
  "Carolina",
  "Maria",
  "Ana",
  "Lisseth",
  "Diego",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
