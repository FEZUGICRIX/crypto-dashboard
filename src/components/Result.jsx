import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Result = ({ title, subTitle, extra }) => {
  return (
    <Card
      style={{
        textAlign: 'center',
        padding: '20px',
        maxWidth: '400px',
        margin: 'auto',
      }}
    >
      <CardContent>
        <CheckCircleOutlineIcon color="success" style={{ fontSize: 40 }} />

        <Typography
          variant="h5"
          component="div"
          style={{ marginTop: '16px' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ marginTop: '8px' }}
        >
          {subTitle}
        </Typography>
      </CardContent>
      {extra && (
        <CardActions style={{ justifyContent: 'center' }}>
          {extra.map((button, index) => (
            <Button
              key={index}
              variant="contained"
              color={button.color || 'primary'}
              onClick={button.onClick}
            >
              {button.text}
            </Button>
          ))}
        </CardActions>
      )}
    </Card>
  );
};

export default Result;
