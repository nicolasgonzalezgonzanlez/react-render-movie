import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';
import PropTypes from 'prop-types';
//material ui
import { useStyles, MyChip } from './styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Cards(props) {
  
  const classes = useStyles();

  const onClickUp = () => {
    setTimeout(() => {
      scroll.scrollToTop();
    }, 100);
  }

  return (
    <>
      {props.element && (
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`https://image.tmdb.org/t/p/w500${props.element.backdrop_path}`}
            >
              <Container fixed>
                <Grid container>
                  <Grid item xs={12}>
                    <MyChip
                      label={`${props.element.media_type}`}
                    />
                  </Grid>
                </Grid>
              </Container>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.element.title}
              </Typography>
            </CardContent>
            {props.element.overview && (
              <CardContent>
                <p>
                  {props.element.overview}
                </p>
              </CardContent>
            )}
          </CardActionArea>
          {props.element.overview  ? (
            <CardActions>
              <Link className="a" to={`/post/${props.element.id}`}>
                <Button onClick={onClickUp} size="small" color="primary">
                  Leer mas
                </Button>
              </Link>
            </CardActions>
          ):(
            <CardActions>
              <Link className="a" to={`/post/${props.element.id}`}>
                <Button size="small" color="primary">
                  Leer mas
                </Button>
              </Link>
            </CardActions>
          )}
        </Card>
      </Grid>
      )}
    </>
  )
}

Cards.propTypes = {
  element: PropTypes.object
}

export default Cards;
