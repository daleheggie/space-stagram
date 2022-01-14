import { useState } from "react";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'
import {BiArrowToLeft, BiArrowToRight} from 'react-icons/bi'
import ImageCard from "../ImageCard/ImageCard";
import './ImageSlider.scss'

const ImageSlider = ({imageData, handleLikeImage, handleDislikeImage, usersLikes}) => {
    const [current, setCurrent] = useState(0)
    const length = imageData.length

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const previousImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const firstImage = () => {
        setCurrent(0)
    }
    const lastImage = () => {
        setCurrent(length - 1)
    }
    return(
        <section className='image-slider'>
            <FaArrowAltCircleLeft className='image-slider__back-arrow' onClick={previousImage}/>
            <FaArrowAltCircleRight className='image-slider__next-arrow' onClick={nextImage}/>
            <BiArrowToLeft className='image-slider__to-start-arrow' onClick={firstImage}/>
            <BiArrowToRight className='image-slider__to-end-arrow' onClick={lastImage}/>             
            {imageData.map((image, index) => {
                return (index === current && <ImageCard  key = {index} 
                                                        imageObj = {image} 
                                                        handleLikeImage = {handleLikeImage}
                                                        handleDislikeImage = {handleDislikeImage} 
                                                        userLikesImage = {usersLikes.includes(image.url)}/>);
            })}
        </section>
    );
}

export default ImageSlider