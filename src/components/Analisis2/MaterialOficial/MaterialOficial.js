import React from 'react';

import Header from '../Header/Header';
import ButtonBackToTop from '../ButtonBackToTop/ButtonBackToTop';
import ContentEntry from '../ContentEntry/ContentEntry';
import PageTitle from '../PageTitle/PageTitle';
import Footer from '../Footer/Footer';

import { materialOficial } from '../../../data/analisis-2-data';

const MaterialOficial = () => {
  return <>
    <Header />
    <ButtonBackToTop />
    <PageTitle title={'MATERIAL OFICIAL'} />
    {
      materialOficial.map((entry, index) => {
        return <ContentEntry entry={entry} key={index.toString()} />;
      })
    }
    <Footer />
  </>;
};

export default MaterialOficial;
