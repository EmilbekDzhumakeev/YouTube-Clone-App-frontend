import React from "react";
//import App from "../app";
import '../VideoPlayer/videoPlayer.css'

const VideoPlayer = ({video, handleVideoSelect}) => {
  if (!video) {
    return <div>Loading ...</div>;
} 
const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
console.log(typeof(video));
return (

    <>
    <div onClick={ () => handleVideoSelect(video)} className=' video-item item'></div>
     <iframe src={videoSrc} allowFullScreen title='Video player'/>
     <h4 className='ui header'>{video.snippet.title}</h4>
     <p>{video.snippet.description}</p>

    </>
  )
}

export default VideoPlayer;
