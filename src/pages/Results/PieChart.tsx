import React from 'react';
import Chart from 'react-apexcharts';

interface PieChartData {
  organizasyon: string;
  count: number;
}

const PieChart: React.FC<{ data: PieChartData[] }> = ({ data }) => {
  const chartOptions = {
    chart: {
      id: "pie-chart",
      width: 400
    },
    labels: data.map(item => item.organizasyon),
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const chartSeries = data.map(item => item.count);

  return (
    <div>
      <h4>Organizasyon - Rapor Sayısı Pie Chart</h4>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="pie"
        width="400"
      />
    </div>
  );
};

export default PieChart;
