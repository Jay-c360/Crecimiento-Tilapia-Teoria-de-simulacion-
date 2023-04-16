function mortalidadPeces(numPeces, dias) {dias

    let pecesRestantes = numPeces;
    let pecesMuertos = 0;
    let tazaMortalidad = 0;
    let totalpecesMuertos = 0;
    let mortalidadAcumulada = 0;
  
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
  
      pecesMuertos = Math.round(pecesRestantes * tazaMortalidad);
      pecesRestantes -= pecesMuertos;
      totalpecesMuertos += pecesMuertos;
      mortalidadAcumulada += tazaMortalidad;
  
      results.push({
        dia: i,
        pecesMuertos: pecesMuertos,
        pecesRestantes: pecesRestantes,
        totalpecesMuertos: totalpecesMuertos,
        mortalidadDia: tazaMortalidad,
        mortalidadAcumulada: mortalidadAcumulada
      });
    }
  
    return results;
  }
  
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  let numPeces = 9000;
  let dias = 10;
  
  let results = mortalidadPeces(numPeces, dias);

  let pecesVivosRestantes = results.map(function(item) {
    return item.pecesRestantes;
  });

  //console.log(pecesMuertosValues);

  //----------------------------------------------------Funcion para calcular alimento dado a los peces-----------------------------------------------------------------------------------//
 
  function calculateFishWeight(fishArray, numdias) {
    //let pesoInicial = 30; // in grams
    //let pesoGanado = 0
    let totalComida = 0; // in grams
    let comidaAcc = 0; // in grams

    let biomasaTot = 0
    let pesoDia = 0;
    let results = [];
  
    for (let i = 0; i <= numdias; i++) {
      let comidaPorPez = 0;
      let pesoGanadoDia = 0;
      let pesoGanado = 0;
      let pesoInicial = 30;

      if (i == 0){
        comidaPorPez = Math.random() * (1.5 - 1) + 1;
        pesoGanadoDia = comidaPorPez - (Math.random() * (0.1 - 0.15) + 1);
        pesoGanado = pesoInicial + pesoGanadoDia
      } else if (i >= 1 && i <= 15) {
        comidaPorPez = Math.random() * (2.5 - 2) + 2;
        pesoGanadoDia = comidaPorPez - (Math.random() * (0.3 - 0.35) + 1);
        pesoGanado = pesoGanadoDia
      } else if (i >= 16 && i <= 30) {
        comidaPorPez = Math.random() * (2.5 - 2) + 2;
        pesoGanadoDia = comidaPorPez - (Math.random() * (0.3 - 0.35) + 1);
        pesoGanado = pesoGanadoDia
      } else if (i >= 31 && i <= 60) {
        comidaPorPez = Math.random() * (2.5 - 2) + 2;
        pesoGanadoDia = comidaPorPez - (Math.random() * (0.3 - 0.35) + 1);
        pesoGanado = pesoGanadoDia
      } else if (i >= 61 && i <= 90) {
        comidaPorPez = Math.random() * (2.5 - 2) + 2;
        pesoGanadoDia = comidaPorPez - (Math.random() * (0.3 - 0.35) + 1);
        pesoGanado = pesoGanadoDia
      } else if (i >= 91 && i <= 120) {
        comidaPorPez = Math.random() * (2.5 - 2) + 2;
        pesoGanadoDia = comidaPorPez - (Math.random() * (0.3 - 0.35) + 1);
        pesoGanado = pesoGanadoDia
      } else if (i >= 121 && i <= 150) {
        comidaPorPez = Math.random() * (2.5 - 2) + 2;
        pesoGanadoDia = comidaPorPez - (Math.random() * (0.3 - 0.35) + 1);
        pesoGanado = pesoGanadoDia
      } else {
        comidaPorPez = Math.random() * (2.5 - 2) + 2;
        pesoGanadoDia = comidaPorPez - (Math.random() * (0.3 - 0.35) + 1);
        pesoGanado = pesoGanadoDia
      }
      

      comidaDada = comidaPorPez;
      peso = pesoGanadoDia;
      pesoDia += pesoGanado;
      totalComidaPorDay = fishArray[i] * comidaPorPez;
      biomasaDia = fishArray[i] * pesoDia;
      biomasaTot += biomasaDia 
      comidaAcc += totalComidaPorDay;

      results.push({
      day : i + 1, 
      given:comidaDada,
      pesoMas: peso,
      pesoTot:pesoDia,
      bmd:biomasaDia,
      bmt:biomasaTot,
      comidaPorDia:totalComidaPorDay,
      totalComidadDada:comidaAcc
        
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

/*const fishArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 10, 20, 30, 40, 50, 140];
const numdias = 35;*/

/*let comidaAcc = 0;
for (let i = 0; i < numdias; i++) {
  const result = calculateFishWeight(fishArray.slice(0, i+1), i+1);
  const comidaPorPez = result.totalComida / fishArray[i];
  console.log(`Day ${i+1}: ${result.foodPerDay.toFixed(2)} grams of food given`);
  console.log(`Individual fish: ${comidaPorPez.toFixed(2)} grams of food given`);
  console.log(`Group: ${result.totalComida.toFixed(2)} grams of food given`);
  comidaAcc += result.totalComida;
  console.log(`Cumulative total: ${comidaAcc.toFixed(2)} grams of food given\n`);
}*/

const result = calculateFishWeight(pecesVivosRestantes,dias - 1);
//console.log(pecesMuertosValues,dias)
console.log(pecesVivosRestantes,result)