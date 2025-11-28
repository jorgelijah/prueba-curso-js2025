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

/* let montoCompra = prompt("Introduce el monto de compra");
let ciudad = prompt("¿De que ciudad del Perú eres?");

if (montoCompra >= 100 && ciudad == "Lima") {
  alert("¡Felicidades! Tienes envío GRATIS 🚚");
} else {
  alert("El costo de envío es 15 soles");
} */

/* for (let i = 1; i <= 5; i++) {
  console.log("Revisando producto #" + i);
} */

/* for (let i = 1; i <= 10; i++) {
  if (i <= 5) {
    console.log(`Producto #${i}: Oferta Especial 🔥`);
  } else {
    console.log(`Producto #${i}: Precio Normal 💰`);
  }
} */

/* for (let i = 1; i <= 10; i++) {
  console.log(`Producto #${i}: ${i <= 5 ? "Oferta Especial 🔥" : "Precio Normal 💰"}`);
} */

/* // RETO 1
let usuario = prompt("Introduce tu usuario");
let contraseña = prompt("Introduce tu contraseña");

if ((usuario == "admin" || usuario == "gerente") && contraseña == "secreto123") {
  alert("Acceso concedido 🔓");
} else {
  alert("Acceso denegado 🔒");
}

// RETO 2
for (let piso = 1; piso <= 20; piso++) {
  console.log(`Piso${piso}${piso !== 13 ? " " : " Piso clausurado 👻" }`);
}

// RETO 3
for (let jugador = 1; jugador <= 2; jugador++) {
  let goles = prompt("Goles anotados");
  let lesionado = prompt("Jugador lesionado"); //si, no
  console.log(`${goles > 10 && lesionado !== "si" ? `Jugador${jugador}: Convocado ⚽` : `Jugador${jugador}: Descartado ❌` }`);
} */

/* let ahorro = 0;
while (ahorro < 50) {
  ahorro += 10;
  console.log(`Ahorrando ... Llevo ${ahorro} soles`);
}

console.log(`¡Meta alcanzada! Total: ${ahorro} soles`); */

/* let palabra = "";
while (palabra !== "JavaScript") {
  palabra = prompt("Dime la clave secreta");
}
alert("¡Clave correcta! Bienvenido"); */

/* let contraseña;
let saldoInicial = 1000;
let saldo

for (let intentos = 1; intentos < 5; intentos ++) {
  contraseña = prompt("Ingrese su contraseña");
  if (contraseña != 1234) {
    alert("Contraseña incorrecta, inténtelo de nuevo");
  } else {
    alert("Contraseña correcta");
    break;
  }
  if (intentos === 3) {
    alert("Tarjeta bloqueada ❌");
    break;
  }
}

while (contraseña == 1234) {
  let acción = prompt(
    "¿Qué deseas hacer? digita 1 para Retirar o 2 para Salir"
  );
  if (acción == 1) {
    alert(`Tu saldo es ${saldoInicial}`);
    let montoRetirar = prompt("Introduce el monto a retirar");
    if (montoRetirar > saldoInicial) {
      alert("Saldo insuficiente");
    } else {
      saldo = saldoInicial - montoRetirar;
      alert(`Tu saldo es ${saldo}`);
      alert("Hasta pronto");
    }
    break;
  } else {
    alert("Hasta pronto");
  }
  break;
} */

/* let contraseña;
  let saldoInicial = 1000;

  // 1. Lógica de Seguridad (3 Intentos)
  for (let intentos = 1; intentos <= 3; intentos++) {
    contraseña = prompt("Ingrese su contraseña (intento " + intentos + "/3)");

    if (contraseña == 1234) {
      alert("Contraseña correcta. Bienvenido/a. ✅");
      break; // Rompemos el ciclo for porque ya entró
    } else {
      alert("Contraseña incorrecta ❌");
    }

    // Si llegamos al intento 3 y falló, bloqueamos
    if (intentos === 3) {
      alert("Tarjeta bloqueada por seguridad 🚫");
      contraseña = null; // Aseguramos que no entre al while
    }
  }

  // 2. Lógica del Sistema (Bucle Infinito controlado)
  while (contraseña == 1234) {
    let acción = prompt("Saldo: S/" + saldoInicial + "\n1. Retirar \n2. Salir");

    if (acción == "1") {
      let montoRetirar = Number(prompt("Ingrese monto a retirar:"));

      if (montoRetirar > saldoInicial) {
        alert("Saldo insuficiente 📉");
      } else {
        // CORRECCIÓN CLAVE 1: Actualizamos la variable original
        saldoInicial = saldoInicial - montoRetirar;
        alert("Retiro exitoso. Nuevo saldo: S/" + saldoInicial + " 💰");
      }
      // CORRECCIÓN CLAVE 2: NO ponemos break aquí para que el ciclo se repita
    } else if (acción == "2") {
      alert("Gracias por usar nuestro cajero. ¡Hasta luego! 👋");
      break; // Este es el ÚNICO break que apaga el cajero
    } else {
      alert("Opción no válida ⚠️");
    }
  } */

/* let saldo = 100;
while (saldo > 0) {
  let precio = prompt("Ingresa precio (o dale a Cancelar para salir)");
  if (precio == null) {
    break;
  } else {
    precio = Number(precio);
    if (isNaN(precio)) {
      alert("Eso no es un número válido");
      continue;
    }
    if (precio <= saldo) {
      saldo = saldo - precio;
      alert("Tu saldo es: " + saldo);
    } else {
      alert("❌ No te alcanza");
    }
  }
} */

/* let piso = 1;
while (true) {
  let choice = prompt("Estás en el piso "+piso+". \n1. Subir \n2. Bajar \n3. Salir");
  if (choice == "1") {
    if (piso < 10) {
      piso++;
    } else {
      alert("⚠️ ¡Ya estás en el último piso!");
    }
  } else if (choice == "2") {
    if (piso > 1) {
      piso--;
    } else {
      alert("⚠️ ¡Ya estás en planta baja!");
    }
  } else if (choice == "3") {
    break;
  } else {
    alert("Comando no válido");
  }
} */

/* let numeroAlumnos;
let notaAlumno;
let sumaTotal = 0;
let aprobados = 0;
let promedioAlumnos;

do {
  numeroAlumnos = Number(prompt("¿Cuantos alumnos tienes?"));
} while (numeroAlumnos <= 0);

for (let repetir = 1; repetir <= numeroAlumnos ; repetir++) {
  do {
    notaAlumno = Number(prompt("Escriba la nota del alumno X"))
  } while (notaAlumno < 0 || notaAlumno > 20);
  sumaTotal = sumaTotal + notaAlumno;
  if (notaAlumno >= 11) {
    aprobados++;
  }
}

promedioAlumnos = sumaTotal / numeroAlumnos;
alert("Promedio total del salón es " + promedioAlumnos);
alert("Alumnos aprobados: " + aprobados); */

/* let colorSemaforo = prompt("Escoge un color:\n1. verde o green \n2. amarillo o yellow \n3. rojo o red");

switch (colorSemaforo) {
  case "verde":
  case "green":
    alert("Avanzar");
    break;
  case "amarillo":
  case "yellow":
    alert("Precaución");
    break;
  case "rojo":
  case "red":
    alert("Detenerse");
    break;
  default:
    alert("Error");
    break;
} */

/* let precios = [100, 50, 25, 200]; 
let total = 0;
let i = 0;

for (let i = 0; i < precios.length; i++) {
  total = total + precios[i];
  console.log("Precio total actual es " + total);
}

while (i < precios.length) {
  console.log(`El valor de i es ${i} antes de ser aumentada en 1 y el precio a sumarse sera ${precios[i]}`)
  total = total + precios[i];
  console.log("Precio total actual es " + total);
  i++;
  console.log(`Ahora el valor de i es ${i} y el valor de precios[i] es ${precios[i]}`);
} */

/* let nombreUsuario;

do {
  nombreUsuario = prompt("Ingresa tu nombre aquí:")
} while (nombreUsuario === "" || nombreUsuario === null); */

/* let notas = [15, 8, 30, 20, 11, -1, 18];

for (let i = 0; i < notas.length; i++) {
  console.log(notas[i]);
  if (notas[i] < 0) {
    console.log("Error crítico detectado: " + notas[i]);
    break;
  }
  if (notas[i] > 20) {
    console.log("Error de tipeo");
    continue; 
  }
  if (notas[i] >= 11) {
    console.log(`Nota ${notas[i]}: Aprobado.`);
  } else {
    console.log(`Nota ${notas[i]}: Desaprobado.`);
  }
} */

//Evaluación de tu código:
//Jerarquía Perfecta: Pusiste la seguridad primero (break), luego la limpieza (continue) y al final la lógica de negocio (if/else). Ese es el orden correcto en ingeniería: Primero proteges el sistema, luego filtras la basura, y al final trabajas.

/* function calcularArea(base, altura) {
  return base * altura;
}

let areaX = calcularArea(10, 5);
console.log(areaX); */

//PROCESAR NOTAS(FX, IF, FOR, BREAK AND CONTINUE)

/* let aulaA = [15, 8, 30, 20];
let aulaB = [10, -1, 18];

function procesarNotas(listaDeNotas) {
  let resultados = [];
  for (let i = 0; i < listaDeNotas.length; i++) {
    if (listaDeNotas[i] < 0) {
      resultados.push("Dato no valido: " + listaDeNotas[i]);
      break;
    }
    if (listaDeNotas[i] > 20) {
      resultados.push("Error de tipeo");
      continue;
    }
    if (listaDeNotas[i] >= 11) {
      resultados.push(`Nota ${listaDeNotas[i]}: Aprobado.`);
    } else {
      resultados.push(`Nota ${listaDeNotas[i]}: Desaprobado.`);
    }
  }
  return resultados;
}

let notasA = procesarNotas(aulaA);
let notasB = procesarNotas(aulaB);

console.log(notasA);
console.log(notasB); */

/* function validarEntrada() {
  let claveMaestra = 1234;
  for (let i = 1; i <= 3; i++) {
    let intento = Number(prompt("Introduce tu contraseña"));
    if (claveMaestra === intento) {
      return true;
    }
    alert("Intento fallido " + (3 - i) + " intentos.");
  }
  return false;
}

let accesoConcedido = validarEntrada();

if (accesoConcedido) {
  console.log("Bienvenido a la bóveda");
} else {
  console.log("Intruso detectado");
} */

