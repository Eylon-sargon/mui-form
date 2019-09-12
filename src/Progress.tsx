import React from "react";
import {
  lighten,
  Theme,
  createStyles,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("#ff6c5c", 0.5)
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ff6c5c"
  }
})(LinearProgress);

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "200px"
    },
    margin: {
      margin: theme.spacing(3)
    }
  });

interface Props extends WithStyles<typeof styles> {}

const ProgressBar: React.ComponentType<Props> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={50}
      />
    </div>
  );
};

export default withStyles(styles)(ProgressBar);
