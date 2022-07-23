import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import './movie-grid.scss'
import MovieCard from '../movie-card/MovieCard'
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi'
import Button, { OutlineButton } from '../button/Button'
import Input from '../input/Input'

function MovieGrid(props) {

    const [ items, setItems ] = useState([])

    const [ page, setPage ] = useState(1)
    const [ totalPage, setTotalPage ] = useState(0)

    const { keyword } = useParams()

    useEffect(() => {
        const getList = async () => {
            let response = null

            if(keyword === undefined) {
                const params = {}

                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMovieList(movieType.upcoming, {params})
                        break
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, {params})
                }
            } else {
                const params = {
                    query: keyword
                }

                response = await tmdbApi.search(props.category, {params})
            }

            setItems(response.results)
            setTotalPage(response.total_pages)
        }
        getList()
    }, [props.category, keyword])


    const loadMore = async () => {

        let response = null

        if(keyword === undefined) {
            const params = {
                page: page + 1
            }

            switch(props.category) {
                case category.movie:
                    response = await tmdbApi.getMovieList(movieType.upcoming, {params})
                    break
                default:
                    response = await tmdbApi.getTvList(tvType.popular, {params})
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }

            response = await tmdbApi.search(props.category, {params})
        }

            setItems([...items, ...response.results])
            setPage(page + 1)  
    }

    return (
        <>

            <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword} />
            </div>
            <div className="movie_grid">
                {
                    items.map((item, index) => <MovieCard category={props.category} item={item} key={index} />)
                }
            </div>

            {
                page < totalPage ? (
                    <div className="movie_grid_loadMore">
                        <OutlineButton className="small" onClick={loadMore}>Load more</OutlineButton>
                    </div>
                ) : null
            }
        </>
    )
}

function MovieSearch(props) {

    const navigate = useNavigate()

    const [ keyword, setKeyword ] = useState(props.keyword ? props.keyword : "")

    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                navigate(`/${category[props.category]}/search/${keyword}`)
            }
        },
        [keyword, props.category, navigate]
    )

    useEffect(() => {
        const enterEvent = e => {
            e.preventDefault()

            if ( e.keyCode === 13 ) {
                goToSearch()
            }
        }

        document.addEventListener('keyup', enterEvent)

        return () => {
            document.removeEventListener('keyup', enterEvent)
        }
    }, [keyword, goToSearch])

    return (
        <div className="movie_search">
            <Input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
            />

            <Button className="small" onClick={goToSearch}>Search</Button>
        </div>
    )

}

export default MovieGrid