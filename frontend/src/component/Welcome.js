import {color, Grid, Typography } from "@material-ui/core";

const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      color="Yellow"
      justify="center"
      style={{ padding: "20px", minHeight: "93vh",backgroundColor: "cyan" }}
    >
      <Grid item >
        <Typography variant="h1" >Job Portal Project </Typography>
        <Typography variant="h2">Developed By: Yash Majithiya </Typography>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh",backgroundColor: "cyan"  }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
