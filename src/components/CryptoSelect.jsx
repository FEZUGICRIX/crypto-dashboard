import {
  Select,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Box,
} from '@mui/material';
import { useCrypto } from '../hooks/useCrypto';

const CryptoSelect = ({ coin, setCoin, setDialog }) => {
  const { crypto } = useCrypto();

  const handleChange = (event) => {
    setCoin(event.target.value);
    // setDialog(true)
  };

  return (
    <Select
      sx={{ minWidth: 250, color: 'inherit' }}
      fullWidth
      value={coin}
      onChange={handleChange}
      displayEmpty
      renderValue={(selected) => {
        if (!selected) {
          return <em>Select coin</em>;
        }
        return (
          <Box display="flex" alignItems="center">
            <img
              src={selected.icon}
              alt={selected.name}
              width={30}
              style={{ marginRight: 8 }}
            />
            {selected.name}
          </Box>
        );
      }}
    >
      {crypto.map((c) => (
        <MenuItem key={c.name} value={c}>
          <ListItemIcon>
            <img width={20} src={c.icon} alt={c.name} />
          </ListItemIcon>
          <ListItemText primary={c.name} />
        </MenuItem>
      ))}
    </Select>
  );
};

export default CryptoSelect;
