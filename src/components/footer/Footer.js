import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { useStyles } from './styles';

function Home() {

  const classes = useStyles();
  
  return (
    <>
      <Card className={classes.root}>
            <Grid 
              container
              spacing={3} 
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <div className={classes.footerBody}>
                  Proyecto creado con React.js <br />
                </div>
                <div className={classes.footerCopy}>
                  <span>2020 — Nicolas Gonzalez</span>
                </div>
              </Grid>
            </Grid>
      </Card>
    </>
  )
}


export default Home;
