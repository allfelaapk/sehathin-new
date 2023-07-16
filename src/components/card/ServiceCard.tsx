import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Divider } from '@mui/material';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
    border: '1px solid #ddd',
    borderRadius: '20px',
  };

  const cardContentStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
  };

  const titleStyle = {
    fontSize: { xs: '1em', md: '1.25em' },
    fontWeight: 'bold',
    color: '#19AE15',
  };

  return (
    <Card sx={ cardStyle }>
      <CardContent sx={ cardContentStyle }>
        <Typography variant='h3'>
          {image}
        </Typography>
        <Typography component='div'>
          <Typography variant='h4' component='h4' sx={ titleStyle }>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>{description}</Typography>
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button variant='text' size='small' sx={{ color: '#19AE15' }}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
