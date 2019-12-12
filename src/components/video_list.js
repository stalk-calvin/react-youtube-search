import React, { useState } from "react";
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const [chosen, setChosen] = useState();
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                active={video.etag === chosen}
                key={video.etag} 
                video={video} 
                onClick={() => setChosen(video.etag)}/>
        );
    });

    return (
        <ul className="col-md-4 list-group">
          {videoItems}
        </ul>
    );
};

export default VideoList;