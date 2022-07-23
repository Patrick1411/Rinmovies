import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { tmdbApi, apiConfig } from '../../api'
import CastList from './CastList'
import VideoList from './VideoList'
import MovieList from '../../components/movie-list/MovieList'
import './general.scss'

function Details() {

  const { category, id } = useParams()

  const [item, setItem] = useState(null)

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} })
      setItem(response)
      window.scrollTo(0, 0)
    }
    getDetail()

  },[category, id])

  return (
    <>
      {
        item && (
          <>
            <div 
              className="banner"
              style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}  
            >
            </div> 

            <div className="movie_content mb-3 container">
              <div className="movie_content_poster">
                <div 
                  className="movie_content_poster_img" 
                  style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}} 
                >
                </div>
              </div>

              <Helmet>
                <title>Rinmovies | {item.title || item.name}</title>
                <meta name="description" content={item.overview}/>
              </Helmet>

              <div className="movie_content_info">
                  <h1 className="title">
                    {item.title || item.name}
                  </h1>
                  <div className="genres">
                    {
                      item.genres && item.genres.slice(0, 5).map((genre, index) => (
                        <span className="genres_item" key={index} >{genre.name}</span>
                      ))
                    }
                  </div>
                  <p className="overview">{item.overview}</p>
                  <div className="cast">
                    <div className="section_header">
                      <h2>Casts</h2>
                    </div>

                    {/* List of casts */}
                    <CastList id={item.id} />
                  </div>
                </div>
            </div>

            <div className="container">
              <div className="section mb-3">
                <VideoList id={item.id} />
              </div>

              <div className="section mb-3">
                <div className="section_header mb-2">
                  <h2>Similar</h2>
                </div>

                <MovieList category={category} type="similar" id={item.id} />
              </div>
            </div>
          </>
        )
      }
    </>
  )
}

export default Details
