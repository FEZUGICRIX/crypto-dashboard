import { useRef, useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  InputLabel,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import CryptoSelect from './CryptoSelect';
import CoinInfo from './CoinInfo';
import Result from './Result';
import { useCrypto } from '../hooks/useCrypto';
import { useTheme } from '@emotion/react';

const DrawerContent = () => {
  const { addNewAsset, crypto } = useCrypto();
  const [coin, setCoin] = useState(null);
  const [date, setDate] = useState(null);
  const [result, setResult] = useState(false);
  const [snack, setSnack] = useState(false);
  const amountRef = useRef();
  const priceRef = useRef();
  const totalRef = useRef();
  const theme = useTheme();

  if (!coin) {
    return (
      <Box sx={{ width: 375, m: 3 }}>
        <Typography>Select coin</Typography>
        <CryptoSelect coin={coin} setCoin={setCoin} />
      </Box>
    );
  }

  if (result) {
    function SlideTransition(props) {
      return <Slide {...props} direction="up" />;
    }
    return (
      <>
        <Box sx={{ width: 375, m: 3 }}>
          <Result
            title="New Asset Added"
            subTitle={`Added ${amountRef.current?.value || 0} of ${
              coin?.name || ''
            } by price ${priceRef.current?.value || 0}`}
          />
        </Box>

        <Snackbar
          // sx={{bgcolor: theme.palette.secondary.main}}
          open={snack}
          // autoHideDuration={3000}
          onClose={() => setSnack(false)}
          message="New Asset Added"
        >
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            severity="success"
          >
            New Asset Added
          </Alert>
        </Snackbar>
      </>
    );
  }

  const handleAmountChange = () => {
    totalRef.current.value =
      amountRef.current.value * priceRef.current.value + '$';
  };

  const handlePriceChange = () => {
    const amount = parseFloat(amountRef.current.value);
    const price = parseFloat(priceRef.current.value);
  
    if (!isNaN(amount) && !isNaN(price)) {
      totalRef.current.value = `${(amount * price).toLocaleString()} $`;
    } else {
      totalRef.current.value = 'Invalid input';
    }
  };

  const handleAddAsset = () => {
    const newAsset = {
      id: coin.id,
      price: priceRef.current.value,
      amount: amountRef.current.value,
    };

    if (totalRef.current.value !== 0) {
      addNewAsset(newAsset, crypto);
      setResult(true);
    }
    setSnack(true);
  };

  return (
    <Box sx={{ width: 375, m: 3 }}>
      <CoinInfo coin={coin} />

      <Box sx={{ mt: 1 }} display="flex" flexDirection="column" gap={1}>
        <TextField
          label="Asset amount"
          type="number"
          inputProps={{ min: 0, step: 1 }}
          // value={value}
          inputRef={amountRef}
          onChange={handleAmountChange}
          variant="outlined"
          // error={value.length < 3}
        />
        <TextField
          label="Price"
          type="number"
          inputProps={{ min: 0, step: 1 }}
          inputRef={priceRef}
          defaultValue={coin.price.toFixed(3)}
          // value={value}
          onChange={handlePriceChange}
          variant="outlined"
          // error={value.length < 3}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <InputLabel htmlFor="date-picker">Date & Time</InputLabel>

          <DatePicker
            id="date-picker"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            sx={{ width: '100%' }}
            renderInput={(props) => <TextField {...props} />}
          />
        </LocalizationProvider>


        <Box sx={{ mt: 10 }}>
          <InputLabel htmlFor="total">Total</InputLabel>
          <TextField
            id="total"
            inputRef={totalRef}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
          />
        </Box>

        <Button onClick={handleAddAsset} variant="contained">
          Add Asset
        </Button>
      </Box>
    </Box>
  );
};

export default DrawerContent;
