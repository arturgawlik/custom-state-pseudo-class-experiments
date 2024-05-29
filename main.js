import MyCustomElement from "./my-custom-element.js";

customElements.define("my-custom-element", MyCustomElement);

const customElem = document.querySelector("my-custom-element");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", () => {
  customElem.togleStateOne();
});

btn2.addEventListener("click", () => {
  customElem.togleStateTwo();
});

btn3.addEventListener("click", () => {
  customElem.togleStateThree();
});
