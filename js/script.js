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

/* function buscarProducto(inventario, productoBuscado) {
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i] === productoBuscado) {
      return i;
    }
  }
  return -1;
}

let stock = ["Laptop", "Teclado", "Mouse", "Monitor"];
console.log(buscarProducto(stock, "Teclado"));
 */

//El Escenario: Eres un médico analizando datos. Tienes una lista de temperaturas de pacientes.
// Necesitas una función que te devuelva una nueva lista que contenga SOLO las temperaturas que indican fiebre (mayores a 37).

/* let pacientes = [36, 37.5, 38, 36.5, 39, 35];

function obtenerFiebres(listaDeTemperaturas) {
  let fiebres = [];
  for (let i = 0; i < listaDeTemperaturas.length; i++) {
    if (listaDeTemperaturas[i] > 37) {
      fiebres.push(listaDeTemperaturas[i]);
    }
  }
  return fiebres;
}

console.log(obtenerFiebres(pacientes)); */

//El Escenario: Como psicólogo, aplicaste un test de ansiedad de 5 preguntas a un paciente.
// Las respuestas son numéricas (del 1 al 10).
// Necesitas una función que calcule el promedio de ansiedad.

/* function calcularPromedio(puntajes) {
  let sumaTotal = 0;
  for (let i = 0; i < puntajes.length; i++) {
    sumaTotal = sumaTotal + puntajes[i];
  }
  let promedio = sumaTotal / puntajes.length;
  return promedio;
}

let testAnsiedad = [8, 5, 9, 7, 6]; 

console.log(calcularPromedio(testAnsiedad)); */

/* function evaluarSemana(registroDeHoras) {
  let sumaHoras = 0;
  let diasNoLaborados = 0;
  let promedioHoras = 0;

  for (let i = 0; i < registroDeHoras.length; i++) {
    sumaHoras = sumaHoras + registroDeHoras[i];

    if (registroDeHoras[i] === 0) {
      diasNoLaborados++;
    }
  }
  promedioHoras = sumaHoras / registroDeHoras.length;
  if (promedioHoras < 4) {
    return "Rendimiento bajo (Promedio: " + promedioHoras + ")";
  } else if (promedioHoras >= 4 && diasNoLaborados >= 2) {
    return `Rendimiento irregular (Promedio: ${promedioHoras}, pero ${diasNoLaborados} días de cero)`;
  } else {
    return "Rendimiento optimo";
  }
}

let semana1 = [8, 8, 8, 8, 8]; // Debería ser Óptimo
let semana2 = [2, 3, 2, 0, 1]; // Debería ser Bajo (Promedio: 1.6)
let semana3 = [10, 0, 10, 0, 10]; // Debería ser Irregular (Promedio: 6, pero 2 días de cero)

console.log(evaluarSemana(semana1));
console.log(evaluarSemana(semana2));
console.log(evaluarSemana(semana3)); */

//Instrucciones Técnicas:
//Crea una función llamada encontrarPicoMaximo.
//Recibe un parámetro traficoPorHora (un array de números).
//El Reto Lógico (Sin usar trucos):
//No puedes usar funciones mágicas como Math.max(). Tienes que hacerlo con lógica pura de bucles.
//Necesitarás una variable auxiliar (ej: let maximoActual) que empiece valiendo 0 (o el primer valor del array).
//Recorre el array. En cada vuelta, compara: ¿Es el número actual MAYOR que mi maximoActual?
//Si es mayor, actualiza tu variable maximoActual con ese nuevo número (porque encontraste un nuevo rey).
//Return: Devuelve el número más alto encontrado al final.

/* function encontrarPicoMaximo(traficoPorHora) {
  let maximoActual = 0;
  for (let i = 0; i < traficoPorHora.length; i++) {
    if (traficoPorHora[i] > maximoActual) {
      maximoActual = traficoPorHora[i];
    }
  }
  return maximoActual;
}

let lunes = [100, 450, 200, 50, 10];      // Debería devolver 450
let martes = [50, 10, 20, 30];            // Debería devolver 50
let miercoles = [5, 5, 5, 5];             // Debería devolver 5

console.log(encontrarPicoMaximo(lunes));
console.log(encontrarPicoMaximo(martes));
console.log(encontrarPicoMaximo(miercoles)); */

//Especificaciones del Algoritmo (Léelas con cuidado):

/* Crea la función generarReporte que reciba listaPagos.
Necesitas dos variables internas: totalGanancias (acumulador) y sesionesPagadas (contador).
Recorre la lista.
Regla de Seguridad (Break): Si encuentras un número negativo, significa que hackearon el sistema. Detén el bucle inmediatamente y devuelve el texto exacto: "Error Crítico: Datos corruptos".

Regla de Limpieza (Continue): Si encuentras un 0, es una sesión "Pro Bono" (gratuita). No suma dinero ni cuenta como pagada. Sáltala y sigue con la siguiente.
Regla de Negocio (Lógica): Si el número es positivo, súmalo al totalGanancias y aumenta en 1 el contador de sesionesPagadas.

El Retorno Final (Decision Making): Al terminar el bucle (si no hubo errores), evalúa:
Si totalGanancias es mayor a 500 Y (&&) tuviste más de 3 sesiones pagadas: Devuelve "Semana Exitosa: [Total]" (pon el valor real).
Si no cumples eso: Devuelve "Semana Baja: [Total]". */

/* function generarReporte(listasPagos) {

  let totalGanancias = 0;
  let sesionesPagadas = 0;

  for (let i = 0; i < listasPagos.length; i++) {
    if (listasPagos[i] < 0) {
      return "Error Crítico; Datos corruptos";
    } else if (listasPagos[i] === 0) {
      continue;
    } else {
      totalGanancias = totalGanancias + listasPagos[i];
      sesionesPagadas++;
    }
  }

  //console.log(totalGanancias);
  //console.log(sesionesPagadas);
  
  if (totalGanancias > 500 && sesionesPagadas >= 3) {
    return `Semana exitosa: ${totalGanancias}`;
  } else {
    return `Semana baja: ${totalGanancias}`;
  }
}

let caja1 = [100, 200, 0, 300, 0];    // Debería ser "Semana Exitosa: 600" (3 sesiones pagadas, >500 soles)
let caja2 = [50, 0, 100];             // Debería ser "Semana Baja: 150"
let caja3 = [100, 200, -50, 300];     // Debería ser "Error Crítico: Datos corruptos"

console.log(generarReporte(caja1));
console.log(generarReporte(caja2));
console.log(generarReporte(caja3)); */

/* function simularJornada(tareas) {
  let energia = 100;
  let ingresos = 0;

  for (let i = 0; i < tareas.length; i++) {
    while (energia <= 10) {
      return "Día terminado, sin energía";
    }
    switch (tareas[i]) {
      case "Terapia":
        energia = energia - 15;
        ingresos = ingresos + 100;
        break;
      case "Admin":
        energia = energia - 5;
        break;
      case "Descanso":
        energia = energia + 20;
        continue;
      case "Urgencia":
        energia = energia - 30;
        ingresos = ingresos + 200;
        let protocoloCalma = 1;
        do {
          console.log("Respirando...");
          protocoloCalma++;
        } while (protocoloCalma < 4);
      default:
        break;
    }
  }
  return `Día terminado. Ingresos: ${ingresos}, Energía final: ${energia}`;
}

let agenda = ["Terapia", "Terapia", "Admin", "Urgencia", "Terapia", "Descanso"];
let agendaDificil = ["Urgencia", "Urgencia", "Urgencia", "Terapia"];

console.log(simularJornada(agenda));
console.log(simularJornada(agendaDificil));
 */

//FILTER AND FIND

/* let multitud = ["Persona", "Persona", "Wally", "Persona", "Wally"];

let personaje = multitud.find(x => x === "Wally");
console.log(personaje);
 */

/* let precios = [100, 200, 50, 500];
//1.1
let nuevosPrecios = precios.map(y => Math.round(y * 1.1)); 
console.log(nuevosPrecios); */

/* let duraciones = [60.5, 15, 45, 20.8, 60, 30.2];
let tiemposLimpios = duraciones.map((n) => Math.round(n));
console.log(tiemposLimpios);

let sesionesCortas = tiemposLimpios.filter((n) => n < 30);
console.log(sesionesCortas);

let cancelacion = sesionesCortas.find(n => n === 15);
console.log(cancelacion); */

/* let precios = [10, 20, 30];
precios.forEach(n => console.log(`Oferta: ${n}`)); */

/* let ventas = [100, 50, 200, 50];
let totalCaja = ventas.reduce((x, y) => x + y, 0);
console.log(totalCaja);

ventas.reduce */

//Ejercicio 1
/* let listaAviones = ["Avión B", "Avión C"];
listaAviones.unshift("Avión Ambulancia");
console.log(listaAviones);

let despego = listaAviones.shift();
console.log(despego);
 */

//splice ejercicios
//let colores = ["Rojo", "Verde", "Azul", "Amarillo"];
//Ejercicio 1: El Borrador El color "Verde" (índice 1) está feo. Elimínalo usando .splice(), pero no agregues nada.
//Ejercicio 2: El Intruso Queremos agregar "Violeta" entre "Azul" y "Amarillo".
//Pista: "Azul" es índice 2, "Amarillo" es índice 3. Si te paras en el 3 y borras 0... ¿qué pasa?
//Ejercicio 3: El Cambiazo El "Rojo" (índice 0) debe ser reemplazado por "Negro" y "Blanco" (dos colores nuevos al mismo tiempo).
//Pista: Borras 1, pero agregas 2.|

/* colores.splice(1, 1);
console.log(colores);
colores.splice(2, 0, "Violeta");
console.log(colores);
colores.splice(0, 1, "Negro", "Blanco")
console.log(colores); */

/* let palabras = ["Hola", "Mundo"];
let frase = palabras.join(" "); // "Hola Mundo" (separado por espacio)
console.log(frase);
let fecha = ["12", "05", "2025"].join("/"); // "12/05/2025"
console.log(fecha); */

/* let pacientes = ["Pedro", "Ana", "Zoe", "Juan"];
let estaAna = pacientes.includes("Ana");
console.log(estaAna);

let posicionZoe = pacientes.indexOf("Zoe");
console.log(posicionZoe);

console.log(pacientes.sort());
console.log(pacientes.reverse());

let listaFinal = pacientes.join("-");
console.log(listaFinal);
 */

/* let archivoTopSecret = ["Info A", "Info B", "Info C", "Info D"];
let archivoPublico = ["Noticias", "Clima"];

let evidencia = archivoTopSecret.slice(1, 3);
console.log(evidencia);

let wikileaks = archivoTopSecret.concat(archivoPublico);
console.log(wikileaks);
console.log(archivoTopSecret); */

/* function encontrarMayor(lista) {
  let campeon = lista[0];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > campeon) {
      campeon = lista[i];
    }
  }
  return campeon;
}

let resultado1 = encontrarMayor([1, 5, 3]);
console.log(resultado1); */

//El Examen Final del Módulo 1: "El Promedio" 🎓
/* function calcularPromedio(lista) {
  let acumulador = 0;
  for (let i = 0; i < lista.length; i++) {
    acumulador += lista[i];
  }
  acumulador = acumulador / lista.length;
  return acumulador;
}

let notas = [15, 13, 20, 18, 11, 19];
console.log(calcularPromedio(notas));
 */

/* let inventario = [
  {
    id: 1,
    val: 100,
  },
  {
    id: 2,
    val: 300,
  },
  {
    id: 3,
    val: 50,
  },
];
let total = 0;

for (let i = 0; i < inventario.length; i++) {
  total = total + inventario[i].val;
}

for (let item of inventario) {
  total = total + item["val"]; // el problema es que yo ponía aquí esto: inventario[item].val
}

console.log(total); */

/* let movimientos = [
  { tipo: "A", valor: 100 },
  { tipo: "B", valor: 50 }, // Este debería restar
  { tipo: "A", valor: 200 },
  { tipo: "B", valor: 30 }  // Este debería restar
];

let balance = 0;
for (let item of movimientos) {
  item.tipo === "A" ? balance += item.valor : balance -= item.valor;
}
console.log(balance); */

/* let carrito = [
  { nombre: "X", precio: 10, cantidad: 2 }, // 10 * 2 = 20
  { nombre: "Y", precio: 5, cantidad: 10 }, // 5 * 10 = 50
  { nombre: "Z", precio: 20, cantidad: 1 }, // 20 * 1 = 20
];

let acumulador = 0;
for (let i = 0; i < carrito.length; i++) {
  acumulador += carrito[i].precio * carrito[i].cantidad;
}
console.log(acumulador); */

//Nivel 4: Lógica Multicondicional (El Portero de Discoteca) 🕵️‍♂️
/* let usuarios = [
  { nombre: "Ana", edad: 20, activo: true }, // Pasa
  { nombre: "Beto", edad: 17, activo: true }, // Rebota (muy joven)
  { nombre: "Carla", edad: 30, activo: false }, // Rebota (inactiva)
  { nombre: "Dani", edad: 40, activo: true }, // Pasa
];

let contador = 0;
for (let item of usuarios) {
  if (item.edad >= 18 && item.activo) {
    contador++;
  }
}
console.log(contador);
 */

//Nivel 5: Lógica de Negocio (Matemáticas Condicionales) 🧮
/* let aduana = [
  { nombre: "Gorra", origen: "nacional", precio: 50 },
  { nombre: "Celular", origen: "importado", precio: 200 }, // Debería sumar 210
  { nombre: "Polo", origen: "importado", precio: 20 }, // Debería sumar 30
];
let total = 0;
for (let item of aduana) {
  item.origen === "nacional"
    ? (total += item.precio)
    : (total += item.precio + 10);
}
console.log(total); */

// Nivel 6: Lógica de Estado(Mutación) 📉

/* let almacen = [
  { producto: "TV", stock: 5 },
  { producto: "PC", stock: 0 }, // ¡Cuidado aquí!
  { producto: "Mouse", stock: 10 },
];

for (let item of almacen) {
  if (item.stock !== 0) {
    item.stock--;
  }
}
console.log(almacen); */

// Nivel 7: El Detective de Datos (Relacionar Dos Listas) 🕵️‍♂️
/* let usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Carlos" }, // ¡Objetivo!
  { id: 3, nombre: "Beto" },
];
let compras = [
  { usuario_id: 1, monto: 50 },
  { usuario_id: 2, monto: 100 }, // Es de Carlos
  { usuario_id: 1, monto: 20 },
  { usuario_id: 2, monto: 200 }, // Es de Carlos
  { usuario_id: 3, monto: 10 },
];
let usuarioNombre = prompt("Escribe el nombre del usuario buscado");
let usuarioBuscado;
let comprasUsuarioBuscado = 0;
for (let item of usuarios) {
  if (usuarioNombre === item.nombre) {
    usuarioBuscado = item.id;
  }
}
for (let item of compras) {
  if (item.usuario_id === usuarioBuscado) {
    comprasUsuarioBuscado += item.monto;
  }
}
console.log(comprasUsuarioBuscado); */

// Nivel 8: Estructuras Anidadas (Inception) 🤯
/* let curso = [
  { nombre: "Juan", notas: [10, 15, 12] },
  { nombre: "Luisa", notas: [20, 18, 19] }, // Queremos su promedio
  { nombre: "Ana", notas: [15, 15, 15] },
];
let nombreBuscado = "Luisa";
let promLuisa = 0;

for (let item of curso) {
  let temp;
  if (item.nombre === nombreBuscado) {
    temp = item.notas;
    for (let element of temp) {
      promLuisa += element;
    }
    promLuisa /= temp.length;
  }
}

console.log(promLuisa);

 */

// EL JEFE FINAL: "El Generador de Reportes" 🏆
//Reglas de Negocio:
// 1. Para aprobar, el promedio del alumno debe ser mayor o igual a 13.
// 2. Tienes que calcular el promedio de cada uno (ya sabes hacer eso).
// 3. Si aprueba, guardas su nombre en la lista de aprobados.

/* let curso = [
  { nombre: "Juan", notas: [10, 12, 11] }, // Promedio 11 (Reprobado)
  { nombre: "Luisa", notas: [18, 19, 20] }, // Promedio 19 (Aprobado)
  { nombre: "Ana", notas: [14, 13, 15] }, // Promedio 14 (Aprobado)
];
let aprobados = [];

for (let item of curso) {
  // recorrer cada objeto
  let alumnoActual = 0; // si la variable es temporal debe ir dentro de cada iteración en la que la vayas a usar
  let tempNotas;
  tempNotas = item.notas; // aquí ya tengo un array solo de las notas

  for (let notas of tempNotas) {
    // aquí voy a sumar cada nota y la guardo en otra variable
    alumnoActual += notas;
  }

  alumnoActual /= tempNotas.length; // aquí, en cada vuelta estoy dividiendo la suma por la cantidad de notas dentro del array
  if (alumnoActual >= 13) {
    // continua la ejecución en cascada y antes de terminar la 1era iteración, voy a verificar si aprobó y sumarlo a el array final
    aprobados.push(item.nombre);
  }
}
console.log(aprobados); */

/* let numeros = [2, 4, 6];
let cuadrados = numeros.map(numero => numero * numero);
console.log(cuadrados); */

/* let saldos = [100, -50, 20, -10, 0, 500, -2];
const deudas = saldos.filter((deuda) => deuda < 0);
console.log(deudas);
 */

/* let usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Carlos" }, // Objetivo
  { id: 3, nombre: "Beto" },
  { id: 2, nombre: "Carlos Clon" }, // (Ojo: Si hubiera repetidos, solo me interesa el primero que aparezca)
];

let idUser = 2;
let encontrado = usuarios.find((usuario) => usuario.id === idUser);
console.log(encontrado); */

/* let carrito = [
  { producto: "Leche", precio: 2 },
  { producto: "Pan", precio: 1 },
  { producto: "Carne", precio: 15 },
];

let total = carrito.reduce((bolsa, item) => bolsa + item.precio, 0);
console.log(total); */

/* let gastos = [
  { motivo: "Alquiler", monto: 500 },
  { motivo: "Luz", monto: 50 },
  { motivo: "Internet", monto: 40 },
];

let totalGastos = gastos.reduce((acum, gasto) => acum + gasto.monto, 0);
console.log(totalGastos);
 */

//EJEMPLO DE REDUCE
/* let productos = [
  { nombre: "Mouse", categoria: "Accesorios", precio: 20, stock: 0 },
  { nombre: "Monitor", categoria: "Pantallas", precio: 200, stock: 5 },
  { nombre: "Teclado", categoria: "Accesorios", precio: 50, stock: 2 },
  { nombre: "Cable HDMI", categoria: "Accesorios", precio: 10, stock: 0 },
];

let filtrar = productos.filter((lista) => lista.categoria === "Accesorios" && lista.stock > 0);
console.log(filtrar);

let mapeo = filtrar.map(n => n.nombre);
console.log(mapeo); */

// CÓDIGO MEJORADO
/* let nombresAccesoriosConStock = productos
  .filter((p) => p.categoria === "Accesorios" && p.stock > 0)
  .map((p) => p.nombre);
console.log(nombresAccesoriosConStock); */

/* let reducir = productos.reduce((acumulador, sumatoria) => acumulador + sumatoria.precio * sumatoria.stock, 0);
console.log(reducir); */

// PROGRAMACIÓN ORIENTADA A OBJETOS POO
/* class CuentaBancaria {
  // 1. El Constructor: Recibe los datos iniciales
  constructor(titular, saldoInicial) {
    this.titular = titular; // "Este objeto tendrá el titular que me pases"
    this.saldo = saldoInicial;
  }

  // 2. Métodos (Funciones): Lo que puede hacer (Llamar a las variables usando THIS)
  mostrarSaldo() {
    return "El saldo de " + this.titular + " es: " + this.saldo;
  }
}

// FABRICAR OBJETOS (Instanciar) con la palabra 'new'
let cuenta1 = new CuentaBancaria("Ana", 1000);
let cuenta2 = new CuentaBancaria("Carlos", 500);

console.log(cuenta1.mostrarSaldo()); // "El saldo de Ana es: 1000"
console.log(cuenta1); */

// ⚡ Tu Misión: La Fábrica de Productos

/* class Producto {
  // palabra reservada Class para crear objetos
  constructor(name, price) {
    // declaración de variables
    this.nombre = name;
    this.precio = price;
  }
  // declaración de métodos
  verFicha() {
    return `${this.nombre} cuesta ${this.precio}`;
  }
  aplicarDescuento(porcentaje) {
    this.precio = this.precio - (this.precio * porcentaje) / 100;
  }
}

let producto1 = new Producto("Laptop", 500);
console.log(producto1.verFicha());
producto1.aplicarDescuento(50);
console.log(producto1.verFicha());

class Carrito {
  constructor() {
    this.lista = [];
  }
  agregar(producto) {
    this.lista.push(producto);
  }
  calcularTotal() {
    let reducir = this.lista.reduce((x, y) => x + y.precio, 0);
    return reducir;
  }
}

let miCarrito = new Carrito();

let p1 = new Producto("TV", 1000);
let p2 = new Producto("Mouse", 50);

miCarrito.agregar(p1);
miCarrito.agregar(p2);

console.log(p1);
console.log(p2);

console.log(miCarrito);

console.log(miCarrito.calcularTotal()); // Debería salir 1050 */

// EJERCICIO 2 🎅

/* class Producto {
  constructor(name, price, stock) {
    this.nombre = name;
    this.precio = price;
    this.stock = stock;
  }
}

class Tienda {
  constructor() {
    this.inventario = [];
  }
  agregar(producto) {
    this.inventario.push(producto);
  }
  vender(nombreProducto, cantidad) {
    let productoEncontrado = this.inventario.find(
      (n) => n.nombre === nombreProducto
    );
    console.log(productoEncontrado);
    let venta;
    if (productoEncontrado && productoEncontrado.stock >= cantidad) {
      productoEncontrado.stock -= cantidad;
      venta = "Venta realizada"
    } else {
      venta = "No hay suficiente stock";
    }
    return venta;
  }
}

let miTienda = new Tienda();

let p1 = new Producto("Monitor", 200, 10);
let p2 = new Producto("Teclado", 50, 2);
let p3 = new Producto("Mouse", 20, 0);
let p4 = new Producto("Laptop", 1000, 1);

miTienda.agregar(p1);
miTienda.agregar(p2);
miTienda.agregar(p3);
miTienda.agregar(p4);

console.log(miTienda.vender("Teclado", 2)); */

// REFERENCIA DE OBJETOS MODIFICADOS
/* let a = { stock: 5 };
let b = a;
console.log(a);
console.log(b);
b.stock = 0;
console.log(a);
console.log(b); */

// Reto: "El Sistema de Fidelización" 🏆

// INVENTARIO
/* class Inventario {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}
// Ejecución
let p1 = new Inventario("Monitor", 200);
let p2 = new Inventario("Teclado", 50);
let p3 = new Inventario("Mouse", 30);
let p4 = new Inventario("Laptop", 1000);
//---------------------------------------------------------------------------------------------------------------------

// CARRITO
class Carrito {
  constructor() {
    this.carrito = [];
  }

  agregarProductos(producto) {
    this.carrito.push(producto);
  }

  totalCarrito() {
    let sumaTotal = this.carrito.reduce(
      (acumulador, sumatoria) => acumulador + sumatoria.precio,
      0
    );
    return sumaTotal;
  }

  quitarProducto(nombre) {
    let indiceBuscado = 0;
    indiceBuscado = this.carrito.findIndex((n) => n.nombre === nombre);
    console.log(indiceBuscado);
    if (indiceBuscado !== -1) {
      this.carrito.splice(indiceBuscado, 1);
    } else {
      console.log("Ítem no encontrado");
    }
  }
}
//---------------------------------------------------------------------------------------------------------------------

// USUARIO
class Usuario {
  constructor(nombreNuevo) {
    this.nombre = nombreNuevo;
    this.nivel = "Bronce";
    this.puntos = 0;
  }

  finalizarCompra(carritoUsuario) {
    let totalPagar = carritoUsuario;
    let idCompra;

    // Aplicar descuento
    if (this.nivel === "Oro") {
      totalPagar = totalPagar - totalPagar * 0.1;
    }

    // Calculo de puntos
    this.puntos += parseInt(totalPagar / 10);

    // Categorización
    if (this.puntos <= 99) {
      this.nivel = "Bronce";
    } else if (this.puntos <= 199) {
      this.nivel = "Plata";
    } else {
      this.nivel = "Oro";
    }

    // ID de compra
    let random = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    return `El total a pagar es: ${totalPagar}. ID Compra: ${random}`;
  }
}

// Ordenamiento de productos
function ordenamiento(inventario, orden) {
  switch (orden) {
    case "Barato":
      inventario.sort((a, b) => a.precio - b.precio);
      break;
    case "Caro":
      inventario.sort((a, b) => b.precio - a.precio);
      break;
  }
}

//---------------------------------------------------------------------------------------------------------------

//Ejecución
let usuario1 = new Usuario("Jorge"); // crear  nuevo usuario

console.log(usuario1); // verificación de usuario creado

let carritoUsuario1 = new Carrito(); // Carrito 1 de Jorge

carritoUsuario1.agregarProductos(p1); // agregar productos al carrito
carritoUsuario1.agregarProductos(p2); // agregar productos al carrito
carritoUsuario1.agregarProductos(p3); // agregar productos al carrito
carritoUsuario1.agregarProductos(p4); // agregar productos al carrito
console.log("Suma total del carrito: " + carritoUsuario1.totalCarrito()); // preview - precio final
console.log(usuario1.finalizarCompra(carritoUsuario1.totalCarrito()));

console.log(usuario1); // verificación de usuario creado

let carrito2Usuario1 = new Carrito(); // Carrito 2 de Jorge
carrito2Usuario1.agregarProductos(p1); // agregar productos al carrito
console.log("Suma total del carrito: " + carrito2Usuario1.totalCarrito()); // preview - precio final
console.log(usuario1.finalizarCompra(carrito2Usuario1.totalCarrito()));

let carrito3Usuario1 = new Carrito();
carrito3Usuario1.agregarProductos(p4); // agregar productos al carrito
console.log("Suma total del carrito: " + carrito3Usuario1.totalCarrito()); // preview - precio final
console.log(usuario1.finalizarCompra(carrito3Usuario1.totalCarrito()));

carrito3Usuario1.agregarProductos(p1); // agregar productos al carrito
console.log("Suma total del carrito: " + carrito3Usuario1.totalCarrito()); // preview - precio final
console.log(usuario1.finalizarCompra(carrito3Usuario1.totalCarrito()));

console.log(usuario1); // verificación de usuario creado

let carrito4Usuario1 = new Carrito(); // Validación para eliminar ítem
carrito4Usuario1.agregarProductos(p1);
carrito4Usuario1.agregarProductos(p2);
carrito4Usuario1.agregarProductos(p3);
carrito4Usuario1.agregarProductos(p4);
console.log(carrito4Usuario1);
carrito4Usuario1.quitarProducto("Mouse");
console.log(carrito4Usuario1);
carrito4Usuario1.quitarProducto("Lampara"); // ítem no encontrado
console.log(carrito4Usuario1);

//
let carrito5Usuario1 = new Carrito(); // Validación para eliminar ítem
carrito5Usuario1.agregarProductos(p1);
carrito5Usuario1.agregarProductos(p2);
carrito5Usuario1.agregarProductos(p3);
carrito5Usuario1.agregarProductos(p4);
console.log(carrito5Usuario1);
ordenamiento(carrito5Usuario1.carrito, "Caro");
console.log(carrito5Usuario1); */

// 📝 Tu Desafío de Refuerzo (Repetido)

/* let empleados = [
  { nombre: "Lucía", ventas: 15, bono: 0 },
  { nombre: "Marcos", ventas: 8, bono: 0 },
  { nombre: "Rocío", ventas: 22, bono: 0 },
  { nombre: "Esteban", ventas: 5, bono: 0 },
  { nombre: "Paula", ventas: 18, bono: 0 },
];

empleados.sort((a, b) => b.ventas - a.ventas);
console.log(empleados);
empleados[0].bono = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
console.log(empleados);

let estadoEmpresa = "recorte";

switch (estadoEmpresa) {
  case "premiar":
    let mejorEmpleado = empleados[0].nombre;
    let bonoEmpleado = empleados[0].bono;
    console.log(`Mejor empleado: ${mejorEmpleado}. Bono: ${bonoEmpleado}`);
    break;

  case "recorte":
    empleados.splice(empleados.length - 2, 2);
    break;

  default:
    break;
}

console.log(empleados); */

//12. Herencia: El siguiente nivel de eficiencia

// CLASE PADRE
/* class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

// CLASE HIJA (Hereda de Producto)
class ProductoFisico extends Producto {
  constructor(nombre, precio, peso) {
    super(nombre, precio); // Le pasa el nombre y precio al "padre"
    this.peso = peso; // El peso es algo ÚNICO del producto físico
  }
}

let productoFisico1 = new ProductoFisico("arroz", 4, 1);
console.log(productoFisico1.nombre); */

