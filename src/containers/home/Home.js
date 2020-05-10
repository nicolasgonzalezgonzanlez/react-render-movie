import React from 'react';
import Search from './components/search/Search'
import SearchResults from './components/searchResults/SearchResults'
import MovieMoreView from './components/movieMoreView/MovieMoreView'

function Home() {
  
  return (
    <>
      <Search />
      <SearchResults />
      <MovieMoreView  />
    </>
  )
}

export default Home;
