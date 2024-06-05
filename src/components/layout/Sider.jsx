import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useCrypto } from '../../hooks/useCrypto';
import CoinInfo from '../CoinInfo';
import { useTheme } from '@emotion/react';

const Sider = () => {
  const { assets, crypto } = useCrypto();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        minHeight: 'calc(100vh - 64px)',
        width: { xs: 300, sm: 550 },
        padding: '1rem',
        bgcolor: theme.palette.background.default,
      }}
    >
      {assets.map((asset) => {
        const coin = crypto.find((c) => c.id === asset.id);

        return (
          <Card>
            <CardActionArea>
              <CardContent>
                <CoinInfo coin={coin} />

                <List sx={{ width: '100%' }}>
                  <ListItem>
                    <ListItemText
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                      primary="Market Price:"
                      secondary={
                        <Typography>
                          {asset.marketPrice.toFixed(2)}$
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                      primary="Total Profit:"
                      secondary={
                        <Typography>{asset.totalProfit}$</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                      primary="Asset amount:"
                      secondary={<Typography>{asset.amount}</Typography>}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Box>
  );
};

export default Sider;
