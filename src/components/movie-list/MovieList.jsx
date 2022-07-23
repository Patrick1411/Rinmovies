import PropTypes from 'prop-types'
import { SwiperSlide, Swiper } from 'swiper/react'
import { useEffect, useState } from 'react'
import SwiperCore, { Autoplay, Scrollbar, Navigation } from 'swiper'

import './movie-list.scss'
import tmdbApi, { category } from '../../api/tmdbApi'
import MovieCard from '../movie-card/MovieCard'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"

function MovieList(props) {

    SwiperCore.use([Autoplay, Scrollbar, Navigation])

    const [ items, setItems ] = useState([])

    useEffect(() => {
        const getList = async () => {
            let response = null
            const params = {}

            if (props.type !== 'similar') {
                switch(props.category) {
                    case category.movie: 
                        response = await tmdbApi.getMovieList(props.type, {params})
                        break
                    default:
                        response = await tmdbApi.getTvList(props.type, {params})
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id)
            }
            setItems(response.results)
        }
        getList()
    }, [])

    return (
        <div className="movie_list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
                navigation={true}
                autoplay={{ delay: 5000}}
                scrollbar={{
                    hide: true,
                }}
            >
                {
                    items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <MovieCard item={item} category={props.category} />                        
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>      
    )
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}
export default MovieList