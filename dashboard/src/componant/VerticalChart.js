import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: { mode: 'index', intersect: false },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: '#64748b', maxRotation: 0, autoSkip: true },
      border: { display: false },
    },
    y: {
      beginAtZero: true,
      grid: { color: 'rgba(148, 163, 184, 0.18)' },
      ticks: {
        color: '#64748b',
        callback: (value) => `Rs. ${Number(value).toLocaleString('en-IN')}`,
      },
      border: { display: false, dash: [4, 4] },
    },
  },
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
      labels: { usePointStyle: true, pointStyle: 'circle', boxWidth: 8, color: '#475569', padding: 18 },
    },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#0f172a',
      padding: 12,
      displayColors: true,
      callbacks: {
        label: (context) => `${context.dataset.label}: Rs. ${Number(context.parsed.y).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`,
      },
    },
  },
};



export function VerticalChart({data}) {
  return <Bar options={options} data={data} />;
}
