import { Box, Chip, Typography } from '@mui/material';

interface JumbotronProps {
  label: string;
  title: string;
  subtitle: string;
}

function Jumbotron({ label, title, subtitle }: JumbotronProps) {
  return (
    <Box
      sx={{
        padding: '160px 16px 64px 16px',
        bgcolor: '#19AE15',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Chip label={label} sx={{ fontWeight: 'bold', color: 'white' }} />
      <Typography variant="h4" sx={{ fontSize: { xs: '1.25em', md: '2.25em'} }}>{title}</Typography>
      <Typography variant="body1" component="p" sx={{ mt: 2, fontSize: { xs: '1em', md: '1.2em'} }}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Jumbotron;
