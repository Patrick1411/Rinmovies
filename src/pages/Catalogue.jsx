import PageHeader from '../components/page-header/PageHeader'
import { category as cate  } from '../api/tmdbApi'
import MovieGrid from '../components/movie-grid/MovieGrid'

import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function Catalogue () {

  const { category } = useParams()

  return (
    <>
      <Helmet prioritizeSeoTags>
        {category === cate.movie ? (<title>Rinmovies | Movies</title>) : (<title>Rinmovies | TV Series</title>)}
      </Helmet>

      <PageHeader>
        {category === cate.movie ? 'Movies' : 'TV Series'}
      </PageHeader>
      
      <div className="container">
        <div className="section mb-3">
            <MovieGrid category={category} />
        </div>
      </div>
    </>
  )
}

export default Catalogue
