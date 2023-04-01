import React from 'react';
import { useParams } from 'react-router-dom';

import Redir from '../Redir/Redir';
import baseRelativePath from '../../../path';
import Header from '../Header/Header';

import { videos } from '../../../data/analisis-2-data';

const VideoPage = () => {
  const { videoRelativePath } = useParams();
  let currentVideoPath = null;

  for (let i = 0; i < videos.length; i++) {
    if (videos[i][1] === videoRelativePath) {
      currentVideoPath = videos[i];
    }
  }

  // Handle if the videoRelativePath does not exist
  if (currentVideoPath === null) {
    return <Redir dest={`${baseRelativePath}/pages/analisis-2`} />;
  }

  return <>
    <Header />
    {JSON.stringify(currentVideoPath)}
  </>;
};

export default VideoPage;
