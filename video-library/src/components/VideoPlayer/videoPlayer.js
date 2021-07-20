import React from "react";
//import App from "../app";
import '../VideoPlayer/videoPlayer.css' 
import Comments from "../Comments/comments";

const VideoPlayer = ({video}) => {
  if (!video) {
    return <div>Loading Player...</div>;
} 
const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
console.log(typeof(video));
return (

    <>
     
         <iframe id="ytplayer" 
            type="text/html" 
            width="640"
            height="360"
            src={videoSrc}
            frameborder="5">

         </iframe> 
         <h4 className='ui header'>{video.snippet.title}</h4>
         <p>{video.snippet.description}</p>
     <Comments /> 
    </>
  )
}

export default VideoPlayer;

