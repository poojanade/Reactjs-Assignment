import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

import './Gallery.css'

const Gallery = ({galleryImages}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <div>

      {openModal && 
        <div className='sliderWrap'>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}  />
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      }
<link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />
      <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
                <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={slide.img} alt='' />
                <p >Image By: {slide.name}</p> 
                </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Gallery