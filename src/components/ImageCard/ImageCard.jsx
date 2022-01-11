import './ImageCard.scss'

const ImageCard = ({imageObj}) => {
    return(
        <section class='image-card'>
            <h1 class='image-card__title'>{imageObj.title}</h1>
            <p class='image-card__date'>Image taken: {imageObj.date}</p>
            <img class='image-card__image' src={`${imageObj.url}`} alt={`${imageObj.title}`}/>
            <p class='image-card__explanation'>{imageObj.explanation}</p>
            <button class='image-card__like-button'>Like</button>
        </section>
    );
}

export default ImageCard