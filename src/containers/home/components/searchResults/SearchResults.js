import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { callSearch } from '../../../../core/Movie/actions';
import { useDispatch, useSelector } from "react-redux";
import Card from '../../../card/Card';
import { useStyles } from './styles';
//material ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


function SearchResults() {

  const classes = useStyles();

  const {search, results} = useSelector(state => state.movieReducer);

  const dispatch = useDispatch();

  useEffect(
    () => {
     dispatch(callSearch(search))
    }, [search]
  )

  return (
    <>
      {results && (
        <div className={classes.root}>
          <Container fixed>
            <Grid container spacing={3}>
              {results && results.map((element, key)  => (
                <React.Fragment key={key}>
                  {element.backdrop_path && element.title && (
                    <Card 
                      element={{
                        backdrop_path: element.backdrop_path,
                        title: element.title,
                        id: element.id,
                        media_type: element.media_type
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Grid>
          </Container>
        </div>    
      )}
    </>
  )
}

SearchResults.propTypes = {
  search: PropTypes.string,
  results: PropTypes.array,
  callSearch: PropTypes.func
}

export default SearchResults;