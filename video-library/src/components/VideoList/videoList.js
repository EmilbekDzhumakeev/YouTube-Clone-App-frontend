import React from 'react';
import VideoPlayer from '../VideoPlayer/videoPlayerTester';

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoPlayer key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        console.log(video.id);
    });

    return <div className='video list column'>{renderedVideos}</div>;
};
export default VideoList;