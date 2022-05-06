minValues = [
  Math.min(...oValues),
  Math.min(...cValues),
  Math.min(...lValues),
  Math.min(...hValues),
];

maxValues = [
  Math.max(...oValues),
  Math.max(...cValues),
  Math.max(...lValues),
  Math.max(...hValues),
];

new Chart("myCharto", {
  type: "line",
  data: {
    labels: dValues,
    datasets: [
      {
        data: oValues,
        borderColor: "yellow",
        backgroundColor: "#ffdd00",
        fill: true,
        label: "Open",
        pointRadius: 2,
        pointHoverRadius: 8
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      y: {
        beginAtZero: false,
        min: Math.min(...minValues),
        ticks: {
          stepSize: 100000,
        },
      },
      x: {
        max: dValues[99],
        min: dValues[0] 
      },
    },
  },
});

new Chart("myCharth", {
  type: "line",
  data: {
    labels: dValues,
    datasets: [
      {
        data: hValues,
        borderColor: "green",
        backgroundColor: "#20bf55",
        fill: true,
        label: "High",
        pointRadius: 2,
        pointHoverRadius: 8
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      y: {
        beginAtZero: false,
        min: Math.min(...minValues),
        ticks: {
          stepSize: 100000,
        },
      },
      x: {
        max: dValues[99],
        min: dValues[0] 
      },
    },
  },
});

new Chart("myChartl", {
  type: "line",
  data: {
    labels: dValues,
    datasets: [
      {
        data: lValues,
        borderColor: "red",
        backgroundColor: "#a40606",
        fill: true,
        label: "Low",
        pointRadius: 2,
        pointHoverRadius: 8
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      y: {
        beginAtZero: false,
        min: Math.min(...minValues),
        ticks: {
          stepSize: 100000,
        },
      },
      x: {
        max: dValues[99],
        min: dValues[0] 
      },
    },
  },
});

new Chart("myChartc", {
  type: "line",
  data: {
    labels: dValues,
    datasets: [
      {
        data: cValues,
        borderColor: "blue",
        backgroundColor: "#009ffd",
        fill: true,
        label: "Close",
        pointRadius: 2,
        pointHoverRadius: 8
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      y: {
        beginAtZero: false,
        min: Math.min(...minValues),
        ticks: {
          stepSize: 100000,
        },
      },
      x: {
        max: dValues[99],
        min: dValues[0] 
      },
    },
  },
});

new Chart("myChartoclh", {
  type: "line",
  data: {
    labels: dValues,
    datasets: [
      {
        data: oValues,
        borderColor: "yellow",
        backgroundColor: "#ffdd00",
        fill: false,
        label: "Open",
        pointRadius: 2,
        pointHoverRadius: 8
      },
      {
        data: cValues,
        borderColor: "green",
        backgroundColor: "#20bf55",
        fill: false,
        label: "Close",
        pointRadius: 2,
        pointHoverRadius: 8
      },
      {
        data: lValues,
        borderColor: "red",
        backgroundColor: "#a40606",
        fill: false,
        label: "Low",
        pointRadius: 2,
        pointHoverRadius: 8
      },
      {
        data: hValues,
        borderColor: "blue",
        backgroundColor: "#009ffd",
        fill: false,
        label: "High",
        pointRadius: 2,
        pointHoverRadius: 8
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      y: {
        beginAtZero: false,
        min: Math.min(...minValues),
        ticks: {
          stepSize: 100000,
        },
      },
      x: {
        max: dValues[99],
        min: dValues[0] 
      },
    },
  },
});

var barColors = ["#ffdd00", "#a40606", "#009ffd", "#20bf55"];
var labels = ["open", "close", "low", "high"];

new Chart("myChart-bmin", {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        backgroundColor: barColors,
        data: minValues,
        label: "Analysis of data with minimum value",
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      y: {
        beginAtZero: false,
        min: Math.min(...minValues) - 100000,
      },
    },
  },
});

new Chart("myChart-bmax", {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        backgroundColor: barColors,
        data: maxValues,
        label: "Analysis of data with maximum value",
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      y: {
        beginAtZero: false,
        min: Math.min(...maxValues) - 100000,
      },
    },
  },
});

new Chart("myChart-bminn", {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        backgroundColor: barColors,
        data: minValues,
        label: "Analysis of data with minimum value",
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      y: {
        beginAtZero: false,
        min: Math.min(...minValues) - 100000,
      },
    },
  },
});

new Chart("myChart-bmaxx", {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        backgroundColor: barColors,
        data: maxValues,
        label: "Analysis of data with maximum value",
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      y: {
        beginAtZero: false,
        min: Math.min(...maxValues) - 100000,
      },
    },
  },
});
