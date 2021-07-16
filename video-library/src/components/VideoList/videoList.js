import React from 'react';
import VideoThumb from '../VideoPlayer/videoThumbnail';
import '../VideoList/videoList.css'

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoThumb key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        console.log(video.id);
    });

    return <div className='video-list-column'>{renderedVideos}</div>;
};
export default VideoList;