import React from 'react';
import { useParams } from 'react-router-dom';

import Redir from '../Redir/Redir';
import baseRelativePath from '../../../path';
import Header from '../Header/Header';
import ButtonBackToTop from '../ButtonBackToTop/ButtonBackToTop';
import ContentEntry from '../ContentEntry/ContentEntry';
import Footer from '../Footer/Footer';
import PageTitle from '../PageTitle/PageTitle';

import { ejercicios } from '../../../data/analisis-2-data';

const PracticePage = () => {
  const { practiceRelativePath } = useParams();
  let currentExercise = null;

  for (let i = 0; i < ejercicios.length; i++) {
    if (ejercicios[i][1] === practiceRelativePath) {
      currentExercise = ejercicios[i];
    }
  }

  // Handle if the practiceRelativePath does not exist
  if (currentExercise === null) {
    return <Redir dest={`${baseRelativePath}/pages/analisis-2`} />;
  }

  return <>
    <Header />
    <ButtonBackToTop />
    <PageTitle title={`${currentExercise[0]}`} />
    {
      currentExercise[2].map((entry, index) => {
        return <ContentEntry entry={entry} key={index.toString()} />;
      })
    }
    <Footer />
  </>;
};

export default PracticePage;
