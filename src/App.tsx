import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ProgressBar from "./Progress";
import { useSpring, animated } from "react-spring";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  textField: {
    marginTop: theme.spacing(3)
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const springProps = useSpring({
    from: { opacity: 0, marginTop: "-500px" },
    to: { opacity: 1, marginTop: "0" },
    config: { duration: 1500 }
  });

  return (
    <animated.div style={springProps}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <div>
            <ProgressBar />
          </div>
          <form className={classes.form} noValidate>
            <Typography variant="h5">Input label</Typography>
            <TextField
              id="filled-full-width"
              label="Your input here:"
              placeholder="Placeholder"
              fullWidth
              margin="normal"
              rows={4}
              variant="outlined"
              multiline
            />

            <Grid container justify="center" spacing={2}>
              <Grid item xs={4}>
                <Button fullWidth variant="contained" color="primary">
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button fullWidth variant="contained" color="secondary">
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </animated.div>
  );
}
