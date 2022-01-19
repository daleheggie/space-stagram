import {MdFavorite, MdFavoriteBorder} from 'react-icons/md'
import './ImageCard.scss'

const ImageCard = ({imageObj, isActive, handleLikeImage, handleDislikeImage, userLikesImage}) => {

    return(
        <section className={isActive ? 'image-card' : 'image-card--inactive'}>
                {isActive 
                ?   <>
                        <h1 className='image-card__title'>{imageObj.title}</h1>
                        <img className='image-card__image' src={`${imageObj.url}`} alt={`${imageObj.title}`}/>
                        <p className='image-card__date'>Image taken: {imageObj.date}</p>
                        <p className='image-card__explanation'>{imageObj.explanation}</p>
                        {/* Button indicates if a user has 'liked' an image */}
                        {userLikesImage === true
                        ? <button className='image-card__button' onClick={() => handleDislikeImage(imageObj.url)}><MdFavorite /></button>
                        : <button className='image-card__button' onClick={() => handleLikeImage(imageObj.url)}><MdFavoriteBorder/></button>}
                    </>
                :   <></>}
                        
        </section>
    );
}

export default ImageCard