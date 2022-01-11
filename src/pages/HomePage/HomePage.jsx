import { Component } from "react";
import {API_KEY} from '../../utils/global';
import {API_URL} from '../../utils/global';
import axios from 'axios';
import ImageCard from "../../components/ImageCard/ImageCard";


class HomePage extends Component {
    state = {
        imageData: null,
        count: 10,
        likesArray: []
    }

    componentDidMount = () => {
        let query = 'count=10'
        axios
            .get(`${API_URL}?api_key=${API_KEY}&${query}`)
            .then(res => {
                this.setState({imageData: res.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleLikeImage = () => {

    }

    render() {
        return(
            <main>
                <h1>This is the Home Page</h1>
                {this.state.imageData === null 
                    ? <h2>Data is Loading...</h2> 
                    : this.state.imageData.map(image => {
                        return(<ImageCard imageObj = {image} key = {image.date}/>)
                    })}
            </main>
        );
    }
}

export default HomePage