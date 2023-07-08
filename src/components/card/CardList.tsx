import { Grid } from '@mui/material';
import doctorsList from '../../doctors.json';
import DoctorCard from './DoctorCard';

export default function CardList() {
  return (
    <>
      <Grid container spacing={2}>
        {doctorsList.map((doctor) => (
          <Grid key={doctor.id} item xs={12} sm={6} md={4} lg={3}>
            <DoctorCard
              name={doctor.name}
              imageUrl={doctor.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
