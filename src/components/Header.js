import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
      justifyContent:'center'
    },
  });
export const Header = () => {
    const classes = useStyles();
    return (
        <>
        <Grid container  className={classes.root}>
        <Typography variant="h2" color='secondary'  >
          Gift Expert
      </Typography>
        </Grid>
            
        </>
    )
}
