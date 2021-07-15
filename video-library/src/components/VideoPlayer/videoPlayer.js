import React from "react";
//import App from "../app";

const VideoPlayer = ({video}) => {
  if (!video) {
    return <div>Loading ...</div>;
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
    </>
  )
}

export default VideoPlayer;

