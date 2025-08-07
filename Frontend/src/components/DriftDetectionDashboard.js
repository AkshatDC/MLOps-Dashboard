import React from 'react';
import { Box, Typography, Paper, Alert, Stack } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Mock drift score data for illustration
const driftData = {
  dates: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
  driftScores: [0.05, 0.07, 0.08, 0.12, 0.15, 0.19, 0.25], // Scores rising suggests drift
  threshold: 0.15,
};

function DriftDetectionDashboard() {
  const lineData = {
    labels: driftData.dates,
    datasets: [
      {
        label: 'Drift Score',
        data: driftData.driftScores,
        borderColor: '#bb86fc',
        backgroundColor: 'rgba(187, 134, 252, 0.5)',
        fill: true,
        tension: 0.3,
      },
      {
        label: 'Alert Threshold',
        data: new Array(driftData.dates.length).fill(driftData.threshold),
        borderColor: '#f50057',
        borderDash: [10, 5],
        fill: false,
        pointRadius: 0,
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
        text: 'Data/Model Drift over Time',
        color: '#bb86fc',
        font: { size: 18 },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 0.4,
        ticks: { color: '#e0e0e0' },
        grid: { color: '#333' },
      },
      x: {
        ticks: { color: '#e0e0e0' },
        grid: { color: '#333' },
      },
    },
  };

  const latestScore = driftData.driftScores[driftData.driftScores.length - 1];
  const isDrift = latestScore >= driftData.threshold;

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" color="primary" gutterBottom>
        Drift Detection & Monitoring
      </Typography>

      {isDrift && (
        <Stack mb={2}>
          <Alert severity="warning" variant="filled">
            Warning: Drift detected! Latest drift score {latestScore.toFixed(2)} exceeds threshold {driftData.threshold}.
          </Alert>
        </Stack>
      )}

      <Paper sx={{ p: 3, backgroundColor: '#1e1e1e' }} elevation={8}>
        <Line data={lineData} options={options} />
      </Paper>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Drift scores track deviations in data or model behavior over time. Surpassing the threshold indicates potential model degradation requiring investigation or retraining.
      </Typography>
    </Box>
  );
}

export default DriftDetectionDashboard;