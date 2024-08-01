import ApexCharts from 'react-apexcharts';

const Charts = () => {
  const barChartOptions = {
    chart: {
      type: 'bar'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    },
    title: {
      text: 'Штрафы в последний месяц'
    }
  };

  const barChartSeries = [{
    name: 'Sales',
    data: [30, 40, 35, 50, 49]
  }];

  const areaChartOptions = {
    chart: {
      type: 'area'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    },
    title: {
      text: 'Штрафы в последний год'
    }
  };

  const areaChartSeries = [{
    name: 'Orders',
    data: [20, 40, 30, 60, 50]
  }];

  return (
    <div className="charts">
      <div className="charts-card">
        <ApexCharts
          options={barChartOptions}
          series={barChartSeries}
          type="bar"
          height={350}
          id="bar-chart"
        />
      </div>
      <div className="charts-card">
        <ApexCharts
          options={areaChartOptions}
          series={areaChartSeries}
          type="area"
          height={350}
          id="area-chart"
        />
      </div>
    </div>
  );
};

export default Charts;
