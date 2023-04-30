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

const ctx = document.getElementById('myChart').getContext('2d');

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

