import HeroSlide from '../components/hero-slide/HeroSlide'
import MovieList from '../components/movie-list/MovieList'
import { category, movieType, tvType } from '../api/tmdbApi'
import { OutlineButton } from '../components/button/Button'

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'


function Home() {
  
  return (
    <>
        <Helmet>
            <title>RinMovies</title>
        </Helmet>
        <HeroSlide />
        <div className="container">
          
          {/* Trending Movies */}
          <div className="section mb-3">
            <div className="section_header mb-2">
              <h2>Trending Movies</h2>
              <Link to="/movie">
                <OutlineButton className="small">View more</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.movie} type={movieType.popular} />
          </div>

          {/* Top Rated Movies */}
          <div className="section mb-3">
            <div className="section_header mb-2">
              <h2>Top Rated Movies</h2>
              <Link to="/movie">
                <OutlineButton className="small">View more</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.movie} type={movieType.top_rated} />
          </div>

          {/* Trending TV */}
          <div className="section mb-3">
            <div className="section_header mb-2">
              <h2>Trending TV</h2>
              <Link to="/tv">
                <OutlineButton className="small">View more</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.tv} type={tvType.popular} />
          </div>  

          {/* Top Rated TV */}
          <div className="section mb-3">
            <div className="section_header mb-2">
              <h2>Top Rated TV</h2>
              <Link to="/tv">
                <OutlineButton className="small">View more</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.tv} type={tvType.top_rated} />
          </div>
        </div> 
    </>
  )
}

export default Home
