import React from 'react'
import GALLERY_1 from '../images/gallery-1.png'
import GALLERY_2 from '../images/gallery-2.png'
import GALLERY_3 from '../images/gallery-3.png'

const Gallery = () => {
  return (
    <section className="gallery">
    <img className="gallery__img" src={GALLERY_1} alt="galeria imagen 1"></img>
    <img className="gallery__img" src={GALLERY_2} alt="galeria imagen 2"></img>
    <img className="gallery__img" src={GALLERY_3} alt="galeria imagen 3"></img>
</section>
  )
}

export default Gallery