import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Box } from '@mui/material';
import { useCrypto } from '../hooks/useCrypto';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartAssets = () => {
  const { assets } = useCrypto();

  const data = {
    labels: assets.map((asset) => asset.name),
    datasets: [
      {
        label: '$',
        data: assets.map((asset) => asset.marketPrice),
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: { xs: 300, sm: 400, md: 500 },
        width: '100%',
      }}
    >
      <Pie data={data} />
    </Box>
  );
};

export default ChartAssets;
