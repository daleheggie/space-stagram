import { Component } from "react";
import {API_KEY} from '../../utils/global';
import {API_URL} from '../../utils/global';
import axios from 'axios';
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import './HomePage.scss'


class HomePage extends Component {
    state = {
        imageData: null,
        count: 5,
        likesArray: []
    }

    componentDidMount = () => {
        let query = `count=${this.state.count}`

        if (localStorage.getItem('spacestagramLikes')){
            this.setState({likesArray: localStorage.getItem('spacestagramLikes').split(',')})
        }

        axios
            .get(`${API_URL}?api_key=${API_KEY}&${query}`)
            .then(res => {
                this.setState({imageData: res.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidUpdate(_prevProps, prevState) {
        if (prevState.likesArray !== this.state.likesArray) {
            // If the likesArray is not empty, save in local storage, otherwise remove
            if (this.state.likesArray.length > 0){
                localStorage.setItem('spacestagramLikes', this.state.likesArray)
            } else {
                localStorage.removeItem('spacestagramLikes')
            }
        }
    }

    handleLikeImage = (imageId) => {
        if (!this.state.likesArray.includes(imageId)) {
            this.setState({likesArray: [...this.state.likesArray, imageId]})
        }
    }

    handleDislikeImage = (imageId) => {
        let filteredLikesArray = this.state.likesArray.filter(image => image !== imageId);
        this.setState({likesArray: filteredLikesArray})
    }

    refreshImages = () => {
        let query = `count=${this.state.count}`
        
        axios
            .get(`${API_URL}?api_key=${API_KEY}&${query}`)
            .then(res => {
                this.setState({imageData: res.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return(
            <main className='home-page'>
                <h1 className='home-page__title'>Space-stagram</h1>
                {this.state.imageData === null 
                    ? <h2>Data is Loading...</h2> 
                    : <ImageSlider imageData = {this.state.imageData}
                                    handleLikeImage = {this.handleLikeImage}
                                    handleDislikeImage = {this.handleDislikeImage} 
                                    usersLikes = {this.state.likesArray}/>}
                <button className='home-page__refresh-button' onClick={this.refreshImages}>Get different images</button>
            </main>
        );
    }
}

export default HomePage