
import React from 'react';
import './PageTitle.css';

const PageTitle = ({ title }) => {
  return <section className="container--page-title-am2">
    <h3 className="title--page-title-am2">{title}</h3>
    <hr className="hr--page-title-am2" />
  </section>;
};

export default PageTitle;
