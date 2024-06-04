import { Box, DialogTitle, Typography, Divider } from '@mui/material';

const CoinInfo = ({ coin }) => {
  return (
    <>
      <Box display="flex" sx={{ pb: 1 }}>
        <img src={coin.icon} alt="coin" width={64} />
        <DialogTitle>
          <Typography variant="h5">
            ({coin.symbol}) {coin.name}
          </Typography>
        </DialogTitle>
      </Box>
      <Divider variant="middle" />
    </>
  );
};

export default CoinInfo;
