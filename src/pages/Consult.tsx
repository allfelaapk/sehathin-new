import { Typography } from '@mui/material';
import CardList from '../components/card/CardList';
import { Container } from '@mui/system';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Jumbotron from '../components/layout/Jumbotron';

export default function Consult() {
  const titleStyle = {
    fontSize: { xs: '1em', md: '1.5em' },
    textAlign: 'center',
    my: 4,
  };

  return (
    <>
      <Navbar />
      <Jumbotron
        label="Consult"
        title="Nutritionists"
        subtitle="Never hesitate to consult nutrition problems with us"
      />

      <Container>
        <Typography variant="h4" sx={ titleStyle }>
          Recomendation Best Nutritions
        </Typography>

        <CardList />
      </Container>
      <Footer />
    </>
  );
}
