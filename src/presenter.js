import { cambio, verificacion } from "./sumador";

const first = document.querySelector("#Monto");
const second = document.querySelector("#efectivo");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  console.log(typeof(firstNumber));
  if(verificacion(firstNumber, secondNumber) === false){
    alert("Ingrese ambas datos");
  }
  else{
    div.innerHTML = "<p>" + cambio(firstNumber, secondNumber) + "</p>";
  }
  
});
