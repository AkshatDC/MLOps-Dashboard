import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Mock SHAP-like feature importance data (in %) for demo
const featureImportance = {
  featureNames: ['Age', 'Income', 'Credit Score', 'Employment Length', 'Loan Amount', 'Previous Defaults', 'Savings'],
  importanceValues: [25, 20, 18, 15, 12, 7, 3],
};

function ExplainabilityDashboard() {
  const barData = {
    labels: featureImportance.featureNames,
    datasets: [
      {
        label: 'Feature Importance (%)',
        data: featureImportance.importanceValues,
        backgroundColor: '#bb86fc',
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Global Feature Importance',
        color: '#bb86fc',
        font: { size: 18 },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 30,
        ticks: {
          color: '#e0e0e0',
        },
        grid: {
          color: '#333',
        },
      },
      y: {
        ticks: {
          color: '#e0e0e0',
        },
        grid: {
          color: '#333',
        },
      },
    },
  };

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" color="primary" gutterBottom>
        Explainability Insights
      </Typography>

      <Paper sx={{ p: 3, backgroundColor: '#1e1e1e' }} elevation={8}>
        <Bar data={barData} options={options} />
      </Paper>

      <Paper sx={{ mt: 3, p: 2, backgroundColor: '#1e1e1e' }} elevation={6}>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Top contributing features provide insight into model decisions. These explanations build transparency and trust, essential for Responsible AI.
        </Typography>

        <List dense>
          {featureImportance.featureNames.map((feature, idx) => (
            <ListItem key={feature}>
              <ListItemText
                primary={feature}
                secondary={`${featureImportance.importanceValues[idx]}% contribution`}
                primaryTypographyProps={{ color: 'text.primary' }}
                secondaryTypographyProps={{ color: 'text.secondary' }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default ExplainabilityDashboard;
