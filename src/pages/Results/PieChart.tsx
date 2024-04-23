import React from 'react';
import Chart from 'react-apexcharts';


interface TableData {
  organizasyon: string;
}

const PieChart: React.FC<{ data: TableData[] }> = ({ data }) => {
  const calculateOrganizationCounts = () => {
    const organizationCounts: { [key: string]: number } = {};


    data.forEach((record) => {
      const organizationName = record.organizasyon;
      if (!organizationCounts[organizationName]) {
        organizationCounts[organizationName] = 1;
      } else {
        organizationCounts[organizationName]++;
      }
    });

    return organizationCounts;
  };

  const organizationCounts = calculateOrganizationCounts();

  const chartOptions = {
    labels: Object.keys(organizationCounts),
    options: {
      legend: {
        position: 'top',
      },
      title: {
        text: 'Organizasyon Adına Göre Adli Rapor Sayısı',
        align: 'center',
      },
    },
  };

  const chartSeries = Object.values(organizationCounts);

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
