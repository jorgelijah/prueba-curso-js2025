/* for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log('hola, mundo');

let i = 0;
while (i < 5) {
  console.log(i); 
  i++;
}

console.log(Boolean(" ")); */

/* let temperatura = prompt("Introduce un número de 1 al 100");

if (temperatura > 25) {
  alert("Hace calor");
} else if (temperatura <= 15) {
  alert("Hace frio");
} else {
  alert("El clima es agradable");
}; */

/* let tieneMembresia = prompt("¿Tienes membresía? (responde si o no)");

if (tieneMembresia == "si") {
  let puntaje = prompt("¿Cuántos puntos tienes?");
  if (puntaje > 100) {
    alert("¡Tienes un 50% de descuento! 🌟");
  } else {
    alert("Tienes un 10% de descuento 👍");
  }
} else {
  alert("Te invitamos a afiliarte 👋");
}; */


/* 🎯 Ejercicio 4: Envío Gratis 📦
Vamos a aplicar esto a tu negocio de "Origen del Valle".
Tu misión: Crea un sistema que decida si un cliente recibe envío gratis.
Pide al usuario el montoCompra (número).
Pide al usuario la ciudad (texto).
Usa el operador && dentro de un if.
Si la compra es mayor o igual a 100 SOLES Y (&&) la ciudad es "Lima":
Muestra: "¡Felicidades! Tienes envío GRATIS 🚚".
Si no se cumplen ambas:
Muestra: "El costo de envío es 15 soles".
¡Inténtalo usando el operador &&! */

let montoCompra = prompt("Introduce el monto de compra");
let ciudad = prompt("¿De que ciudad del Perú eres?");

if (montoCompra >= 100 && ciudad == "Lima") {
  alert("¡Felicidades! Tienes envío GRATIS 🚚");
} else {
  alert("El costo de envío es 15 soles");
};