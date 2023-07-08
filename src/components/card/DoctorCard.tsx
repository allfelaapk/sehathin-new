import {
  Card,
  CardActionArea,
  CardContent,
  Button,
  Avatar,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface DoctorCardProps {
  name: string;
  imageUrl: string;
}

export default function DoctorCard({ name, imageUrl }: DoctorCardProps) {
  const navigate = useNavigate();

  const navigateToConsult = () => {
    navigate('/consult');
  };

  const cardStyle = {
    maxWidth: { xs: 345, md: '100%' },
    py: 2,
    boxShadow: 'none',
  };

  const cardContentStyle = {
    textAlign: 'center',
    p: '1em',
  };

  const nameStyle = {
    fontSize: { xs: '1.2em', md: '1.5em' },
    color: '#19AE15',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    color: '#19AE15',
    mt: 2,
    width: '100%',
    borderRadius: '50px',
  };

  return (
    <Card sx={ cardStyle }>
      <CardActionArea>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <Avatar
            alt='doctor'
            src={imageUrl}
            sx={{ width: 128, height: 128 }}
          />
        </div>
        <CardContent sx={ cardContentStyle }>
          <Typography gutterBottom variant='h5' component='h5' sx={ nameStyle }>
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            ⭐4.5/5 Review
          </Typography>
          <Button
            size='medium'
            sx={ buttonStyle }
            variant='outlined'
            onClick={navigateToConsult}
          >
            Chat Here
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
