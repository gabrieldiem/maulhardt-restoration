import { React, useEffect } from 'react';
import Header from './Header/Header';
import Content from './Content/Content';

import favicon from '../../assets/favicon/favicon-am2.jpg';

const Analisis2 = () => {
  // Change favicon and title
  useEffect(() => {
    document.title = 'Análisis 2';

    let link = document.querySelector('link[rel~=\'icon\']');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = favicon;
  }, []);

  return <div>
    <Header />
    <Content />
  </div>;
};

export default Analisis2;
