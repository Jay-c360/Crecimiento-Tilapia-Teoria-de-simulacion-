  /*var num1;
  var num2;
  var sum;
  var product;*/

  const resultadosDiv = document.getElementById('resultados'); // obtiene el div donde se mostraran los resultados 
   
  let arr1;
   let arr2;
   let arr3;
   let arr4;

  function calculate() {
    event.preventDefault();
    // Assign the values of the input fields to the global variables
    var num1 = parseFloat(document.getElementById("amount").value); // numero de peces 
    var num2 = parseFloat(document.getElementById("days").value); // numero de dias 
    
    var results = mortalidadPeces(num1,num2); //calculo de mortalidad de peces, numero de peces restantes****
    
    let arrPorMortalidad = results.map(function(item) { // arreglo de porcentade de mostalidad por dia  
      return item.mortalidadDia;
    });
    
    arr1 = arrPorMortalidad;

    let arrPecesRestantes = results.map(function(item) { // arreglo de peces restantes
        return item.pecesRestantes;
    });

    arr1 = arrPecesRestantes;
      

    let results2 = calculoBiomasa(arrPecesRestantes,num2) // calculo de la biomasa, engorde y comidad dada****



    let arrBiomasaTotal = results2.map(function(item) {    //obtiene el arreglo de la biomasa por dia
      return item.bmd;
    });
    
    arr3 = arrBiomasaTotal;

    let arrTotalComida = results2.map(function(item) {    //obtiene el arreglo de el total de comida dado atravez del tiempo(dia)
      return item.totalComidadDada;
    });

 
    let adgDia = results2.map(function(item){    // obtiene el arreglo del peso promedio que gana los peces por dia 
      return item.pesoTot
    })

    arr4 = adgDia;

    const totlBiomasa = arrBiomasaTotal[arrBiomasaTotal.length - 1];// el ultimo valor del arreglo de la biomasa por dia, ya que el ultimo dia se obtiene el total de biomasa

    const totComida = arrTotalComida[arrTotalComida.length - 1];// el ultimo valor del arreglo del total de comidad dado por dia, ya que el ultimo dia se obtiene el total de comida que se dio

    const biomasaInicial = arrPecesRestantes[0]

    let fcr = totComida / (totlBiomasa - (biomasaInicial*30))

    resultadosDiv.innerHTML = `
    <h5 class="card-title">Data</h5>
    <p class="card-text">Biomass: ${totlBiomasa} g</p>
    <p class="card-text">Total food given: ${totComida} g</p>
    <p class="card-text">FCR: ${fcr}</p>
    `;
    
    const data1 = generateData1(arrPorMortalidad);
    drawLineGraph('myChart', data1);
  
  
  
  }




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
  
  //-------------------------------------------------------------------------------------------------------------------------------//


  
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }



  //--------------------------------------------------------------------------------------------------------------------------------//
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


  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------// 

  function generateData1(data) {
    return {
      labels:data.map((_, i) => `Day ${i+1}`),
      datasets: [{
        label:"Tasa de mortalidad",
        data: data,
        borderColor: 'red',
        borderWidth: 1
      }]
    };
  }
  
  function drawLineGraph(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }


  
  const graph1Data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Dataset 1',
      data: [0, 10, 5, 2, 20, 30, 45],
      borderColor: 'red',
      fill: false
    }]
  };
  const graph2Data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Dataset 2',
      data: [10, 20, 30, 40, 50, 60, 70],
      borderColor: 'blue',
      fill: false
    }]
  };
  const graph3Data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Dataset 3',
      data: [50, 40, 30, 20, 10, 5, 0],
      borderColor: 'green',
      fill: false
    }]
  };
  const graph4Data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Dataset 4',
      data: [0, 5, 10, 15, 20, 25, 30],
      borderColor: 'purple',
      fill: false
    }]
  };
  
  //const ctx = document.getElementById('myChart').getContext('2d');
  
  const chart = new Chart(ctx, {
    type: 'line',
    data: graph1Data
  });
  
  document.getElementById('graph1').addEventListener('click', () => {
    chart.data = graph1Data;
    chart.update();
  });
  document.getElementById('graph2').addEventListener('click', () => {
    chart.data = graph2Data;
    chart.update();
  });
  document.getElementById('graph3').addEventListener('click', () => {
    chart.data = graph3Data;
    chart.update();
  });
  document.getElementById('graph4').addEventListener('click', () => {
    chart.data = graph4Data;
    chart.update();
  });
  