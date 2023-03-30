import React from 'react';

import './ContentEntry.css';
import { youtubeThumbnailMaxResEndpoint, youtubeVideoShortEndpoint } from '../../../data/standard-links';

const ContentEntry = ({ entry }) => {
  const [title, videoID, text] = [entry[0], entry[1], entry[2]];

  return <section className="container-fluid container--content-entry-am2">
    <h2 className="title--content-entry-am2">{title}</h2>
    <p className="text--content-entry-am2">{text}</p>
    <div className="container-fluid container-image--content-entry-am2">
      <a href={youtubeVideoShortEndpoint(videoID)} target="_blank" rel="noreferrer">
        <img className="image--content-entry-am2" src={youtubeThumbnailMaxResEndpoint(videoID)}/>
      </a>
    </div>
  </section>;
};

export default ContentEntry;
