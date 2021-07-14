import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import VideoPlayer from './VideoPlayer/videoPlayer';
import SearchBar from "../components/SearchBar/searchBar";
import axios from "axios";

class App extends Component { 
    state={ 
        term: ''
    } 
     
    constructor(props) {
        super(props);
        this.state = {
            data:[],
        };
    }
    componentDidMount(){
        this.getData();
    }

    async getData() {
        try{
            let response = await axios.get(
                "https://www.googleapis.com/youtube/v3/search?q=starwars&key=AIzaSyB01g48z-Nq63zN9W3fy_1UClauXjjPU6w"
            );
            this.setState({
                data: response.data,
            });
        } catch (err) {
            console.log(err);
        }
    }
     
    render() { 
        console.log(this.state.data);
        return (
            <div className="container-fluid"> 
            <TitleBar /> 
            <SearchBar handleChange = {(event)=>this.handleChange(event)}/>
            <VideoPlayer/>
            </div>
        );
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////
handleChange(event){
    console.log(event);
    this.setState({
        term: event.target.value, 

    });
} 

 }

export default App;