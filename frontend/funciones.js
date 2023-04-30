/*  var num1;
  var num2;
  var sum;
  var product;

  function calculate() {
    // Assign the values of the input fields to the global variables
    num1 = parseFloat(document.getElementById("amount").value);
    num2 = parseFloat(document.getElementById("days").value);

    // Calculate the sum and product
    sum = add(num1,num2);
    product = multiply(num1, num2);

    // Display the results
    //alert("Sum: " + sum + "\nProduct: " + product);
  }

  function add(a, b) {
    return a + b;
  }

  function multiply(a, b) {
    return a * b;
  } */

function mortalidadPeces(numPeces, dias) {dias

    let pecesRestantes = numPeces; // variable que guarda la cantidad de peces por dia
    let pecesMuertos = 0; // variable que almacena la cantidad de peces muertos por dia
    let tazaMortalidad = 0; // variable que almacena la taza de mortalidad por dia 
    let totalpecesMuertos = 0; // variable que va almacenando la cantidad de peces muertos hasta ese dia(almacena de manera acumulada)
    let mortalidadAcumulada = 0; // variable que almacena la mortalidad acumulada de los peces
  
    let results = [];
  
    for (let i = 1; i <= dias && i <= 171; i++) {
      if (i >= 1 && i <= 15) {
        tazaMortalidad = getRandomNumber(0.001, 0.005);
      } else if (i >= 16 && i <= 30) {
        tazaMortalidad = getRandomNumber(0.0007, 0.003);
      } else if (i >= 31 && i <= 60) {
        tazaMortalidad = getRandomNumber(0.0004, 0.002);
      } else if (i >= 61 && i <= 90) {
        tazaMortalidad = getRandomNumber(0.0002, 0.001);
      } else if (i >= 91 && i <= 120) {
        tazaMortalidad = getRandomNumber(0.0001, 0.0005);
      } else if (i >= 121 && i <= 150) {
        tazaMortalidad = getRandomNumber(0.00005, 0.0002);
      } else {
        tazaMortalidad = getRandomNumber(0.00001, 0.0001);
      }
  
      pecesMuertos = Math.round(pecesRestantes * tazaMortalidad); // calculo de peces muertos por dia, el cual multiplica la cantidad de peces por la taza de mortalidad en un dia dado)
      pecesRestantes -= pecesMuertos; // calculo de peces restantes por dia
      totalpecesMuertos += pecesMuertos; // calculo acumulado de total de peces muertos por dia
      mortalidadAcumulada += tazaMortalidad; // calculo acumulado del porcentaje de mortalidad
  
      results.push({
        dia: i, // dia transcurrido
        pecesMuertos: pecesMuertos, // total de peces muertos 
        pecesRestantes: pecesRestantes, // peces restantes por dia 
        totalpecesMuertos: totalpecesMuertos, // total de peces muertos hasta ese dia 
        mortalidadDia: tazaMortalidad, // porcentaje de mortalidad 
        mortalidadAcumulada: mortalidadAcumulada //porcentaje de mortalidad acumulada hasta ese dia 
      });
    }
  
    return results;
  }
  
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  let numPeces = 10000;
  let dias = 70;
  
  let results = mortalidadPeces(numPeces,dias);

  let arrPecesRestantes = results.map(function(item) { // arreglo de peces restantes
    return item.pecesRestantes;
  });

  let arrPorMortalidad = results.map(function(item) { // arreglo de porcentade de mostalidad por dia  
    return item.mortalidadDia;
  });


  console.log(arrPecesRestantes);

  //----------------------------------------------------Funcion para calcular alimento dado a los peces-----------------------------------------------------------------------------------//
 
 
 
 
 
 
 
 
 
 
  function calculoBiomasa(arrPeces, numdias) {
    //let pesoInicial = 30; // in grams
    //let pesoGanado = 0
    let totalComida = 0; // total de comida dado por dia en gramos 
    let comidaAcc = 0; // total de comida acumulado hasta ese dia, en gramos 

    let biomasaTot = 0 // biomasa total
    let pesoDia = 0; // peso en gramos por dia 
    let results = []; // resultados 
  
    for (let i = 0; i < numdias; i++) {
      let comidaPorPez = 0; // la comida (en gramos) dada por pez por dia 
      let pesoGanadoDia = 0; // peso ganado(en gramos) por pez por dia 
      let pesoGanado = 0; //
      let pesoInicial = 30;

      if (i == 0){
        comidaPorPez = Math.random() * (1.5 - 1) + 1;
        pesoGanadoDia = comidaPorPez - (Math.random() * (0.1 - 0.15) + 1);
        pesoGanado = pesoInicial + pesoGanadoDia
      }
      else if (i >= 1 && i <= 15) {
        comidaPorPez = Math.random() * (1.5 - 1) + 1;
        pesoGanadoDia = comidaPorPez - (Math.random() * (0.1 - 0.15) + 1);
        pesoGanado = pesoGanadoDia
      } else if (i <= 30) {
        comidaPorPez = Math.random() * (2 - 1.5) + 1.5;
        pesoGanadoDia = comidaPorPez - (Math.random() * (0.2 - 0.25) + 1);
        pesoGanado = pesoGanadoDia
      } else {
        comidaPorPez = Math.random() * (2.5 - 2) + 2;
        pesoGanadoDia = comidaPorPez - (Math.random() * (0.3 - 0.35) + 1);
        pesoGanado = pesoGanadoDia
      }

      comidaDada = comidaPorPez; // comida dada por pez por dia
      peso = pesoGanadoDia; // peso ganado por pez por dia
      pesoDia += pesoGanado; // peso acumulado ganado por pez por dia 
      totalComidaPorDay = arrPeces[i] * comidaPorPez; // total de comida dada por dia
      biomasaDia = arrPeces[i] * pesoDia;  // biomasa(total del peso combinado de todos los peces)
      comidaAcc += totalComidaPorDay; // total de comidad(acumulada) dada por pez por dia 

      results.push({
      dia : i + 1, // dia
      given:comidaDada, // comida dada por dia 
      pesoMas: peso, //peso ganad por pez por dia
      pesoTot:pesoDia, // peso total por pez por dia
      bmd:biomasaDia, // peso acumulado hasta ese dia 
      comidaPorDia:totalComidaPorDay, // total de comidad dado por dia
      totalComidadDada:comidaAcc // total de comidad dada hasta ese dia 
        
      })
    }
  
    return results
    //const finalWeight = pesoInicial + totalComida;
    /*return {
      foodPerDay: comidaAcc,
      totalComida: totalComida,
      finalWeight: finalWeight
    };*/
  } 

//const arrPeces = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
//const numdias = 30;

/*let comidaAcc = 0;
for (let i = 0; i < numdias; i++) {
  const result = calculoBiomasa(arrPeces.slice(0, i+1), i+1);
  const comidaPorPez = result.totalComida / arrPeces[i];
  console.log(`Day ${i+1}: ${result.foodPerDay.toFixed(2)} grams of food given`);
  console.log(`Individual fish: ${comidaPorPez.toFixed(2)} grams of food given`);
  console.log(`Group: ${result.totalComida.toFixed(2)} grams of food given`);
  comidaAcc += result.totalComida;
  console.log(`Cumulative total: ${comidaAcc.toFixed(2)} grams of food given\n`);
}*/


const result = calculoBiomasa(arrPecesRestantes, dias);

let arrBiomasaTotal = result.map(function(item) {    //obtiene el arreglo de la biomasa por dia
  return item.bmd;
});

let arrTotalComida = result.map(function(item) {    //obtiene el arreglo de el total de comida dado atravez del tiempo(dia)
  return item.totalComidadDada;
});


const totlBiomasa = arrBiomasaTotal[arrBiomasaTotal.length - 1]; // el ultimo valor del arreglo de la biomasa por dia, ya que el ultimo dia se obtiene el total de biomasa

const totComida = arrTotalComida[arrTotalComida.length - 1]; // el ultimo valor del arreglo del total de comidad dado por dia, ya que el ultimo dia se obtiene el total de comida que se dio

const biomasaInicial = arrPecesRestantes[0]

let fcr = totComida / (totlBiomasa - (biomasaInicial*30))

console.log(result)
console.log("total biomasa: "+totlBiomasa+", Total comida dada: "+totComida); // Output: 5
console.log("FCR:"+fcr)
console.log(biomasaInicial)
//console.log(result)