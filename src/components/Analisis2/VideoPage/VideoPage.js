import React from 'react';
import { useParams } from 'react-router-dom';

import Redir from '../Redir/Redir';
import baseRelativePath from '../../../path';
import Header from '../Header/Header';
import ButtonBackToTop from '../ButtonBackToTop/ButtonBackToTop';
import ContentEntry from '../ContentEntry/ContentEntry';
import Footer from '../Footer/Footer';
import PageTitle from '../PageTitle/PageTitle';

import { videos } from '../../../data/analisis-2-data';

const VideoPage = () => {
  const { videoRelativePath } = useParams();
  let currentVideo = null;
  let currentVideoIndex = null;

  for (let i = 0; i < videos.length; i++) {
    if (videos[i][1] === videoRelativePath) {
      currentVideo = videos[i];
      currentVideoIndex = i;
    }
  }

  // Handle if the videoRelativePath does not exist
  if (currentVideo === null) {
    return <Redir dest={`${baseRelativePath}/pages/analisis-2`} />;
  }

  return <>
    <Header />
    <ButtonBackToTop />
    <PageTitle title={`${(currentVideoIndex + 1).toString()}. ${currentVideo[0]}`} />
    {
      currentVideo[2].map((entry, index) => {
        return <ContentEntry entry={entry} key={index.toString()} />;
      })
    }
    <Footer />
  </>;
};

export default VideoPage;
