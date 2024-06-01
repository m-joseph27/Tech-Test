export const lineChartDataTotalSpent = [
  {
    name: "Revenue",
    data: [45, 55, 49, 62, 49, 58],
  },
  {
    name: "Profit",
    data: [25, 34, 29, 42, 29, 48],
  },
];

export const lineChartOptionsTotalSpent = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#FF7D29",
    },
  },
  colors: ["#FF7D29", "#FFBF78"],
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#FF7D29",
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    type: "line",
  },
  xaxis: {
    type: "numeric",
    categories: ["JAN", "FEB", "MAR", "APR", "MEI", "JUN"],
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    column: {
      color: ["#FF7D29", "#FFBF78"],
      opacity: 0.5,
    },
  },
  color: ["#FF7D29", "#FFBF78"],
};

export const barChartDataConsumption = [
  {
    name: "AYAM GARANG ASAM",
    data: [520, 329, 370, 412, 385, 372, 382, 399, 427],
  },
  {
    name: "CHICKEN KATSU",
    data: [427, 380, 480, 441, 355, 358, 385, 344, 415],
  },
  {
    name: "SEI AYAM",
    data: [452, 371, 338, 391, 335, 365, 387, 334, 388],
  },
];

export const barChartOptionsConsumption = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: false,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#FF7D29", "#FFBF78", "#FFEEA9"],
  },
  legend: {
    show: false,
  },
  colors: ["#FF7D29", "#FFBF78", "#FFEEA9"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "20px",
    },
  },
};