import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import VideoPlayer from './VideoPlayer/videoPlayer';
import VideoList from './VideoList/videoList';
import SearchBar from "../components/SearchBar/searchBar";
import axios from "axios"; 
import youtube from '../apis/youtube';

class App extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            data:[], 
           
            videos: [],
            selectedVideo: null,
        };
    }

   

/////////////////////////////////////////////////////////////////////
handleSubmit = async (termFromSearchBar) => {
    console.log("this handleSubmit before get request !!!!!!!!!!!!!: " ); 
    const response = await youtube.get('/search', {
        params: {
            q: termFromSearchBar
        }
    })
    this.setState({
        videos: response.data.items
    })
    console.log("this handleSubmit after axios call: "+ this.state.videos );
};  
///////////////////////////////////////////////////////////////////////////////////////

handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
}

///////////////////////////////////////////////////////////////////////////////////////

    async getData() {
        try{
            let response = await axios.get(
                "https://www.googleapis.com/youtube/v3/search?q=starwars&key=AIzaSyAACIBMXcV3cB9S7VnBOvCuLSDZU2nV0Tk"
            );
            //let otherResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.state.term}`)
            // let postResponse = await axios.post('https;//localhost:8000.com/api/comments', {videoId: '1838fjfkd', text: 'this is a comment'})
            this.setState({
                data: response.data,
            });
        } catch (err) {
            console.log(err);
        }
    }
/////////////////////////////////////////////////////////////////////  
    render() {  
        console.log("this is this.state.videos in RENDER: " + this.state.videos); 
     //   console.log("this is data: " + this.state.data);
       
        
        return (
            <div className="container-fluid"> 
            <TitleBar /> 
            <SearchBar handleFormSubmit={this.handleSubmit}/>
            <VideoPlayer video={this.state.selectedVideo}/>
            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
            </div>
        );
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////
 

 }

export default App;