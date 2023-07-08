import { Grid, Typography, Paper, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import articles from '../articles.json';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Jumbotron from '../components/layout/Jumbotron';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Article() {
  const titleStyle = {
    fontSize: { xs: '0.75em', md: '1.2em' },
  };

  return (
    <>
      <Navbar />
      <Jumbotron
        label="Articles"
        title="Medical and Health Article"
        subtitle="Unmasking the secrets of good health"
      />
      
      <Container>
      {articles.map((article) => (
        <Paper
          key={article.id}
          sx={{
            p: 2,
            m: 2,
            maxWidth: 1200,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: { xs: '100%', sm: 128 }, height: 128 }}>
                <Img alt={article.title} src={article.image} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction='column' spacing={2}>
                <Grid item xs>
                  <Typography
                    gutterBottom
                    variant='subtitle1'
                    component='h4'
                    sx={ titleStyle }
                  >
                    <h3>{article.title}</h3>
                  </Typography>
                  <Typography variant='body2' gutterBottom>
                    {article.description}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: 'pointer' }} variant='body2'>
                    <a style={{ textDecoration: 'none', color:'#19AE15' }} href={article.link}>Read More</a>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
      </Container>
      <Footer />
    </>
  );
}
