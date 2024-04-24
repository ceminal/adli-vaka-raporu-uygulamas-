import React from 'react';
import Chart from 'react-apexcharts';

interface PieChartData {
  organizasyon: string;
  count: number;
}

const PieChart: React.FC<{ data: PieChartData[] }> = ({ data }) => {
  const chartOptions = {
    chart: {
      id: "pie-chart"
    },
    labels: data.map(item => item.organizasyon),
    title: {
      text: 'Organizasyon Adına Göre Adli Rapor Sayısı',
      align: 'center'
    },
    legend: {
      position: 'bottom'
    }
  };

  const chartSeries = data.map(item => item.count);

  return (
    <div>
      <h2>Pie Chart</h2>
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
