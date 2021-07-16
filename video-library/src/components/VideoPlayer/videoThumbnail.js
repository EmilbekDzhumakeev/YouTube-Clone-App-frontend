import React from "react";
//import App from "../app";
import '../VideoPlayer/videoPlayer.css'

//This one can be changed to thumbnail
const VideoThumb = ({video, handleVideoSelect}) => {
  if (!video) {
    return <div>Select a Video From the List...</div>;
} 
const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
console.log("video", video);
return (

    <>
    <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
     <img src={video.snippet.thumbnails.default.url} allowFullScreen title='Video player'/>
     <div className='header '>{video.snippet.title}</div>
     </div>
    </>
  )
}

export default VideoThumb;
