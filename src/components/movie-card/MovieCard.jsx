import './movie-card.scss'
import { apiConfig } from '../../api'
import Button from '../button/Button'
import { category } from '../../api/tmdbApi'


import { Link } from 'react-router-dom'

function MovieCard(props) {

    const item = props.item

    const link = '/' + category[props.category] + '/' + item.id

    const background = apiConfig.w500Image(item.poster_path || item.backdrop_path)

    return (
        <Link to={link}>
            <div 
                className="movie_card" 
                style={{backgroundImage : `url(${background})`}}    
            >
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    )
}

export default MovieCard