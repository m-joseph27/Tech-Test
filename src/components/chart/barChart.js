import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const BarChart = ({ chartData, chartOptions, type }) => {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    setData(chartData);
    setOptions(chartOptions);
  }, [chartData, chartOptions]);

  return (
    <Chart
      options={options}
      series={data}
      type={type}
      width="100%"
      height="100%"
    />
  );
};

export default BarChart;
