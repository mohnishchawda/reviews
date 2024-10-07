import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56],
      fill: false,
      borderColor: 'rgb(125, 12, 180)',
      tension: 0.1
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    }
  }
};

const linechart = () => {
  return <Line data={data} options={options} />;
};

export default linechart;
