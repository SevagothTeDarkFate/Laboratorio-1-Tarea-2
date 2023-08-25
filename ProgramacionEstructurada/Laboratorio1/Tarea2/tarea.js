let userInput = prompt("Ingresa un texto  que contenga o no la palabra 'Nemo':");
let lowercaseInput = userInput.toLowerCase();
let words = lowercaseInput.split(" ");
let nemoIndex = words.indexOf("nemo");

if (nemoIndex !== -1) {
  // Si encontramos "nemo", mostramos el mensaje con la posición
  alert("Encontré a Nemo en la palabra número " + (nemoIndex + 1) + ".");
} else {
  // Si no encontramos "nemo", mostramos el mensaje de no encontrarlo
  alert("No pude encontrar a Nemo :(");
}
