import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading . . .</div>
    }
    // console.log(video);

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    const publishedAt = new Date(video.snippet.publishedAt);

    // console.log(video.snippet.description);

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <p className="custom">URL:</p>
            <div className="details">
                <div>{url}</div>
            </div>
            <p className="custom">Published Time:</p>
            <div className="details">
                <div>{publishedAt.toString()}</div>
            </div>
            <p className="custom">Title:</p>
            <div className="details">
                <div dangerouslySetInnerHTML={{ __html: video.snippet.title }} />
            </div>
            <p className="custom">Description:</p>
            <div className="details">
                <div dangerouslySetInnerHTML={{ __html: video.snippet.description }} />
            </div>
        </div>
    )
};

export default VideoDetail;