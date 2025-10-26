'use client'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const data = {
  labels: ['Red', 'Blue'],
  datasets: [
    {
      label: 'Chart 2',
      data: [60, 40],
      backgroundColor: ['#ef4444', '#3b82f6'], // Tailwind red-500 and blue-500
    },
  ],
};

export default function BarShow() {
  return <Bar data={data} />;
}
