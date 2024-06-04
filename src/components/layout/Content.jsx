import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

import { useCrypto } from '../../hooks/useCrypto';
import ChartAssets from '../ChartAssets';
import TableAssets from '../TableAssets';

const Content = () => {
  const theme = useTheme();
  const { assets } = useCrypto();

  return (
    <Box
      sx={{
        width: '100%',
        p: '1rem',
        bgcolor: theme.palette.background.default,
      }}
    >
      <Typography variant="h4" color={theme.typography.body1.color}>
        Portfolio:{' '}
        {assets
          .map((asset) => asset.marketPrice)
          .reduce((acc, v) => (acc += v), 0)
          .toLocaleString()}
        $
      </Typography>
      <ChartAssets />
      <TableAssets />
    </Box>
  );
};

export default Content;
