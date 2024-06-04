import {
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
  Chip,
  Typography,
} from '@mui/material';
import CoinInfo from './CoinInfo';

const Modal = ({ coin, setDialog }) => {
  const {
    price,
    priceChange1h,
    priceChange1d,
    priceChange1w,
    marketCap,
    rank,
  } = coin;

  return (
    <Box sx={{ p: 2, minWidth: 500 }}>
      <CoinInfo coin={coin} />

      <DialogContent>
        <Box display="flex" flexDirection="column" gap={1}>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography sx={{ fontWeight: 500 }}>Rank:</Typography>
            <Chip
              label={rank}
              size="small"
              color="primary"
              variant="outlined"
            />
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Typography sx={{ fontWeight: 500 }}>Price:</Typography>
            <Typography>{price.toFixed(2)}$</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Typography sx={{ fontWeight: 500 }}>1h:</Typography>
            <Typography>{priceChange1h}%</Typography>

            <Typography sx={{ fontWeight: 500 }}>1d:</Typography>
            <Typography>{priceChange1d}%</Typography>

            <Typography sx={{ fontWeight: 500 }}>1w:</Typography>
            <Typography>{priceChange1w}%</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Typography sx={{ fontWeight: 500 }}>Market Cap:</Typography>
            <Typography>{marketCap.toFixed(2)}$</Typography>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => setDialog(false)}>Close</Button>
      </DialogActions>
    </Box>
  );
};

export default Modal;
