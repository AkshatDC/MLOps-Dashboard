import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const mockMetrics = {
  accuracy: 0.92,
  precision: 0.89,
  recall: 0.85,
  f1Score: 0.87,
  inferenceLatencyMs: 120,
  metricHistory: {
    dates: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    accuracy: [0.88, 0.90, 0.91, 0.89, 0.90, 0.92, 0.92],
    precision: [0.85, 0.87, 0.89, 0.88, 0.89, 0.90, 0.89],
    recall: [0.80, 0.82, 0.83, 0.84, 0.85, 0.85, 0.85],
  },
};

function ModelMetricsDashboard() {
  const barData = {
    labels: ['Accuracy', 'Precision', 'Recall', 'F1 Score', 'Latency (ms)'],
    datasets: [
      {
        label: 'Current Metrics',
        data: [
          mockMetrics.accuracy * 100,
          mockMetrics.precision * 100,
          mockMetrics.recall * 100,
          mockMetrics.f1Score * 100,
          mockMetrics.inferenceLatencyMs,
        ],
        backgroundColor: [
          '#bb86fc',
          '#03dac6',
          '#bb86fc',
          '#03dac6',
          '#bb86fc',
        ],
      },
    ],
  };

  const lineData = {
    labels: mockMetrics.metricHistory.dates,
    datasets: [
      {
        label: 'Accuracy',
        data: mockMetrics.metricHistory.accuracy.map((v) => v * 100),
        borderColor: '#bb86fc',
        fill: false,
        tension: 0.3,
      },
      {
        label: 'Precision',
        data: mockMetrics.metricHistory.precision.map((v) => v * 100),
        borderColor: '#03dac6',
        fill: false,
        tension: 0.3,
      },
      {
        label: 'Recall',
        data: mockMetrics.metricHistory.recall.map((v) => v * 100),
        borderColor: '#f50057',
        fill: false,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#e0e0e0',
          font: { size: 14 },
        },
      },
      title: {
        display: true,
        text: 'Model Performance Over Time (%)',
        color: '#bb86fc',
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { color: '#e0e0e0' },
        grid: { color: '#333' },
      },
      x: {
        ticks: { color: '#e0e0e0' },
        grid: { color: '#333' },
      },
    },
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" color="primary" gutterBottom>
        Model Metrics Overview
      </Typography>

      <Paper sx={{ p: 3, mb: 5, backgroundColor: '#1e1e1e' }} elevation={8}>
        <Bar data={barData} options={{
          responsive: true,
          plugins: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Current Model Metrics',
              color: '#bb86fc',
              font: { size: 18 },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { color: '#e0e0e0' },
              grid: { color: '#333' }
            },
            x: {
              ticks: { color: '#e0e0e0' },
              grid: { color: '#333' }
            }
          }
        }} />
      </Paper>

      <Paper sx={{ p: 3, backgroundColor: '#1e1e1e' }} elevation={8}>
        <Line data={lineData} options={options} />
      </Paper>
    </Box>
  );
}

export default ModelMetricsDashboard;