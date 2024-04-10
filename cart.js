const textchange = document.querySelector("#change");
const textvalue = ["Our New Product", "Exclusive available in PlugAndPlay"];
let counter = 0;
setInterval(() => {
  textchange.textContent = textvalue[counter];
  counter = (counter + 1) % textvalue.length;
}, 3000);
