import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import SwiperCore, { Autoplay, Scrollbar, Pagination, Navigation, EffectCube } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-cube"

import Button, { OutlineButton } from '../button/Button'
import Modal, { ModalContent } from '../modal/Modal'
import { apiConfig, tmdbApi } from '../../api'
import { category, movieType } from '../../api/tmdbApi'
import './hero-slide.scss'

function HeroSlide() {
  SwiperCore.use([Autoplay, Scrollbar, EffectCube, Pagination, Navigation])

  const [ movieItems, setMovieItems ] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const params = {page: 1}

      try {
        const response = await tmdbApi.getMovieList(movieType.popular, { params })
        setMovieItems(response.results.slice(0, 4))
        console.log(response)
      } catch(error) {
        console.log({error})
      }
    }
    getMovies()
  }, [])

  return (
    <div className="hero_slide">
        <Swiper
          effect={"cube"}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 10,
            
            shadowScale: 1,
          }}
          scrollbar={{
            hide: true,
          }}
          speed={ 1000 }
          grabCursor={true}
          spaceBetween={0}
          slidesPerView= {1}
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          autoplay={{ delay: 10000}}
          loop={true}
        >
          {
            movieItems.map((movieItem, index ) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <HeroSlideItem item={movieItem} className={`${isActive} ? 'active' : ''`} /> 
                )}
              </SwiperSlide>
            ))
          }
        </Swiper>
        {
          movieItems.map((movieItem, index) => <TrailerModal item={movieItem} key={index}/>)
        }
    </div>
  )
}

const HeroSlideItem = props => {

  let navigate = useNavigate()

  const movieItem = props.item
  const background = apiConfig.originalImage(movieItem.backdrop_path ? movieItem.backdrop_path : movieItem.poster_path)

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${movieItem.id}`)

    const videos = await tmdbApi.getVideos(category.movie, movieItem.id)

    if (videos.results.length > 0) {
      const videoSrc = 'https://www.youtube.com/embed/' + videos.results[0].key
      modal.querySelector('.modal_content > iframe').setAttribute('src', videoSrc)
    } else {
      modal.querySelector('.modal_content').innerHTML = "No trailer"
    }
    modal.classList.toggle('active')
  }
  return (
    <div 
      className={`hero_slide_item ${props.className}`}
      style={{backgroundImage: `url(${background})`}}
    >
      <div className="hero_slide_item_content container">
        <div className="hero_slide_item_content_info">
          <h2 className="title">{movieItem.title}</h2>
          <div className="overview">{movieItem.overview}</div>
          <div className="buttons">
            <Button onClick={() => navigate('/movie/' + movieItem.id)}>
              Watch now
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>

        <div className="hero_slide_item_content_poster">
          <img src={apiConfig.w500Image(movieItem.poster_path)} alt="" />
        </div>
      </div>
    </div>
  )
}

const TrailerModal = props => {
  const movieItem = props.item

  const iframeRef = useRef()

  const onClose = () => iframeRef.current.setAttribute('src', '')

  return (
    <Modal active={false} id={`modal_${movieItem.id}`}>
      <ModalContent oncClose={onClose}>
        <iframe 
          ref={iframeRef} 
          width="100%" 
          height="200px" 
          title="trailer"
          allowFullScreen={true}
        >
          </iframe>
      </ModalContent>
    </Modal>
  )
}

export default HeroSlide;
