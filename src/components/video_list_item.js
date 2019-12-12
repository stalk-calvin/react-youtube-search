import React from 'react';

String.prototype.trunc =
     function( n, useWordBoundary ){
         if (this.length <= n) { return this; }
         var subString = this.substr(0, n-1);
         return (useWordBoundary 
            ? subString.substr(0, subString.lastIndexOf(' ')) 
            : subString) + "&hellip;";
      };

const VideoListItem = ({video, onVideoSelect, active, onClick}) => {
    const imgUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => {
            onVideoSelect(video);
            onClick();
        }} className={active ? "list-group-item active" : "list-group-item"}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading" dangerouslySetInnerHTML={{ __html: video.snippet.title.trunc(50,true) }} />
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;