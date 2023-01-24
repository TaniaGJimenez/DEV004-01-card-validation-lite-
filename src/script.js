
const Validacion = document.getElementById("BtnValidar");
Validacion.addEventListener("click", validate)

function validate() {
  const valid = isValid(document.getElementById("cardnumber").value)
  console.log(valid)  
  //If/Else statments para llenar formulario, saber si la tarjeta es valida    
  if (document.getElementById("cardnumber").value ===""){
    alert("Ingresa tu numero de tarjeta")
  }
  else if(valid===true) {
    document.getElementById('result').innerHTML="Numero de Tarjeta Valido"
  }
  else {document.getElementById('result').innerHTML="Numero de Tarjeta Invalido"
  }
  return valid
}

function isValid(creditCardNumber) {
  //Convertir el input en Array usando Array.From()
  const arr = Array.from((creditCardNumber))
  console.log(Array.from(creditCardNumber), "Original")
  //Invertir el Array usando la nueva constante usando .Reverse()
  arr.reverse();  
  console.log(arr, "Invertido");
  //Convertir el array Invertido en Numeros con .map, una función y parseInt.
  const nums = arr.map(numStr=>parseInt(numStr));
  console.log(nums,"Array de Nùmeros")
  //La variable sum que contiene la suma de los valores en el array
  let sum = 0;
  //For que recorre todo mi array
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      const numG1 = (nums[i]);
      sum+= numG1;
    } else {
      //Aqui multiplico los pares.
      const numG2 = (nums[i] * 2);
      //Aqui es un "nested conditional" por si el num es mayor o igual a diez, restar nueve.
      if (numG2 >= 10) {
        sum += numG2 - 9;
      } else {
        sum += numG2;
      }
    }
  }
  //Si el residuo de la suma es igual a cero entonces sum es True/sino False
  sum = sum % 10 === 0 

  return sum

}
