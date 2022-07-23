import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { apiConfig, tmdbApi } from '../../api'

function CastList(props) {

    const { category } = useParams()

    const [ casts, setCasts ] = useState([])

    useEffect(() => {
        const getCredits = async () => {
            const response = await tmdbApi.credits(category, props.id)
            setCasts(response.cast.slice(0, 5))
        }

        getCredits()
    }, [category, props.id])

    return (
        <div className="casts"> 
            {
                casts.map((cast, index) => (
                    <div key={index} className="casts_item">
                        <div 
                            className="casts_item_img"
                            style={{backgroundImage: `url(${apiConfig.w500Image(cast.backdrop_path || cast.profile_path)})`}}
                        >
                        </div>
                        <p className="casts_item_name">{cast.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CastList