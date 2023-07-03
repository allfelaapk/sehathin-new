import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import './Article.css';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Article() {
  return ( 
  <><><><><><><><>
  <Navbar />
  <div className="title">
      <p>Medical and Health Article</p>
    </div>
  
      <Paper
        sx={{
          p: 2,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 5,
          marginBottom: 2,
          maxWidth: 1200,
          flexGrow: 1,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="Gain Weight" src="https://images.theconversation.com/files/371033/original/file-20201124-19-6l9aa.jpg?ixlib=rb-1.1.0&rect=38%2C7%2C5150%2C3446&q=45&auto=format&w=926&fit=clip" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                <h3>Gaining weight can be difficult – but here are the safest ways to do it</h3>
                </Typography>
                <Typography variant="body2" gutterBottom>
                There’s no shortage of articles and resources out there offering people advice on the best ways to lose weight. But not everyone wants to lose weight. For those who want to gain weight, finding good advice on how to reach the weight they desire can be harder to come by. Whether it’s a sports person wanting to increase muscle mass, somebody recovering from a long illness or someone with a high metabolism who’s naturally thin, it...
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  <a href="https://theconversation.com/gaining-weight-can-be-difficult-but-here-are-the-safest-ways-to-do-it-150035">
                  Read More
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper></>

      <Paper
        sx={{
          p: 2,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 1,
          marginBottom: 2,
          maxWidth: 1200,
          flexGrow: 1,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="Healthy Eating" src="https://images.everydayhealth.com/images/why-are-healthy-eating-habits-important-alt-badge-722x406.jpg?w=1110" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <h3>Why Are Healthy Eating Habits Important?</h3>
                </Typography>
                <Typography variant="body2" gutterBottom>
                If you’ve ever asked someone how to be healthy, you’ve probably heard this advice: Eat a healthy diet. Really, though, what does that even mean? If you ask many followers of the trendy ketogenic diet, it means shunning sweet potatoes and quinoa in favor of cheese and coconut oil. For another person, it might mean avoiding sugary foods like ice cream and candy at all costs. And someone else may tell you to avoid all dairy...
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  <a href="https://www.everydayhealth.com/diet-nutrition/importance-healthy-eating-habits/">
                  Read More
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper></>

      <Paper
        sx={{
          p: 2,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 1,
          marginBottom: 2,
          maxWidth: 1200,
          flexGrow: 1,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="Healthy Weight" src="https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2012/09/healthy-weight.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <h3>Healthy Weight - Maintain, Don’t Gain</h3>
                </Typography>
                <Typography variant="body2" gutterBottom>
                Your weight, your waist size, and the amount of weight gained since your mid-20s can have serious health implications. These factors can strongly influence your chances of developing the following diseases and conditions: Cardiovascular disease, heart attack, stroke, Diabetes, Cancer, Arthritis, Gallstones, ...
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  <a href="https://www.hsph.harvard.edu/nutritionsource/healthy-weight/">
                    Read More
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper></>

      <Paper
        sx={{
          p: 2,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 1,
          marginBottom: 2,
          maxWidth: 1200,
          flexGrow: 1,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="Fitness" src="https://stepsforliving.hemophilia.org/sites/default/files/header-img-4.3_0.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <h3>Benefits of Sports and Fitness</h3>
                </Typography>
                <Typography variant="body2" gutterBottom>
                When you hear the word sports you probably think basketball, baseball, or football. When you read fitness you may imagine intense daily workouts at a gym. As a person with a bleeding disorder you may not be able to participate in these activities. The next time you hear the words sports and fitness, consider that physical activity—through safe sports and exercises—will strengthen your musculoskeletal system and reduce extra weight. The real benefit: your joints will become more stable and you'll...
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  <a href="https://stepsforliving.hemophilia.org/step-up/maintaining-a-healthy-body/benefits-of-sports-and-fitness">
                    Read More
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper></>

      <Paper
        sx={{
          p: 2,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 1,
          marginBottom: 2,
          maxWidth: 1200,
          flexGrow: 1,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="Fats" src="https://res-3.cloudinary.com/sharecare/image/upload/c_fill,dpr_1,f_auto,w_640/v1582821255/articles/good-and-bad-fats-the-ultimate-guide" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <h3>Good and Bad Fats: The Ultimate Guide</h3>
                </Typography>
                <Typography variant="body2" gutterBottom>
                Remember when any fat was bad fat? When the only difference between a croissant and a Krispy Kreme was snob appeal? Now that (happily) science has found that some fats are good fats, it's all about avoiding the bad guys. But if sorting out omega-3s from saturated fats makes you want to drown your frustration in a quarter-pounder and fries (a whopping 56 grams of the ickiest stuff), here's a simple list that rates fats, from the top dog to the don't-...
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  <a href="https://www.sharecare.com/diet-nutrition/diets/good-and-bad-fats-the-ultimate-guide">
                    Read More
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper></>

      <Paper
        sx={{
          p: 2,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 1,
          marginBottom: 2,
          maxWidth: 1200,
          flexGrow: 1,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="Foods" src="https://res-3.cloudinary.com/sharecare/image/upload/c_fill,dpr_1,f_auto,w_640/v1582650792/articles/foods-make-hungrier-what-eat-instead" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <h3>
                  Foods That Can Actually Make You Hungrier—And What to Eat Instead
                  </h3>
                </Typography>
                <Typography variant="body2" gutterBottom>
                If you’ve ever downed a bag of chips, but found yourself heading back into the kitchen an hour later in search of a snack, there’s actually an explanation. Certain foods, especially simple and refined carbohydrates like cookies can actually cause your blood sugar levels to spike quickly so a lot of insulin is released, then your blood sugar levels drop, or crash. “When your blood sugar drops, you get hungry,” says dietitian Caron Sharp, RD, of Colleton Medical Center in Walterboro South Carolina. A drop in blood sugar is just one of the causes...
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  <a href="https://www.sharecare.com/diet-nutrition/foods-make-hungrier-what-eat-instead">
                    Read More
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper></>
 
      <Paper
        sx={{
          p: 2,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 1,
          marginBottom: 2,
          maxWidth: 1200,
          flexGrow: 1,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="Exercise" src="https://cdn2.stylecraze.com/wp-content/uploads/2014/01/Top-10-Exercises-That-Help-You-Gain-Weight-1.jpg.webp" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <h3>
                  Exercises To Gain Weight: How To Bulk Up Muscle Mass Safely
                  </h3>
                </Typography>
                <Typography variant="body2" gutterBottom>
                While most people think of exercise and workouts as a means to lose weight, are you aware that you can exercise to gain weight as well? The right exercise and diet regimen, as per your body type, helps you distribute the body fat proportionately and builds lean mass and muscle at the right places...
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  <a href="https://www.stylecraze.com/articles/exercises-that-help-you-gain-weight/">
                    Read More
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper></>

      <Paper
        sx={{
          p: 2,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 1,
          marginBottom: 5,
          maxWidth: 1200,
          flexGrow: 1,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="Healthy Food" src="https://l.hdnux.com/350x235p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/3e707f5e789e4106bd5119cb88579f83" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <h3>
                  The Advantages of Eating Healthy Food
                  </h3>
                </Typography>
                <Typography variant="body2" gutterBottom>
                Weight control is a common reason that you might consider eating healthily. Although following a balanced diet can help you lose weight or maintain a healthy weight, this is only one benefit. Those who follow a healthy, well-balanced diet reduce their risk of chronic diseases, such as diabetes, heart disease and cancer. Aim to consume a diet rich in fruits, vegetables, whole grains and...
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                    <a href="https://healthyeating.sfgate.com/advantages-eating-healthy-food-3731.html">Read More</a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Footer />
      </>

  );
}




