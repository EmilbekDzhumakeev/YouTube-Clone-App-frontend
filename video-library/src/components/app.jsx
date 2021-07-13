import React, { Component } from 'react';
import TitleBar from '../TitleBar/titleBar';
import VideoPlayer from './VideoPlayer/videoPlayer';

class App extends Component { 
    state={ }
    render() {
        return (
            <div className="container-fluid"> 
            <TitleBar /> 
            <VideoPlayer/>
            </div>
        );
    }
 }

export default App;