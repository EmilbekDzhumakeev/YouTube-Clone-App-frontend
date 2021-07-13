import React, { Component } from 'react';
import TitleBar from '../TitleBar/titleBar';
import VideoPlayer from './VideoPlayer/videoPlayer';
import SearchBar from "../components/SearchBar/searchBar";

class App extends Component { 
    state={ }
    render() {
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
        filter: event.target.value
    });
} 

 }

export default App;