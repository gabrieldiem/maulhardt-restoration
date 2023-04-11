import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import '../index.css';
import baseRelativePath from '../path';
import pageRedirector from '../redirector';
import Analisis2 from '../components/Analisis2/Analisis2';
import Redir from '../components/Analisis2/Redir/Redir';
import ScrollToTop from '../components/Analisis2/ScrollToTop/ScrollToTop';
import VideoPage from '../components/Analisis2/VideoPage/VideoPage';
import PracticePage from '../components/Analisis2/PracticePage/PracticePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>

      {/* Main page */}

      <Route path={`${baseRelativePath}/${pageRedirector('analisis-2', window.location.href)}`} element={<>
        <ScrollToTop />
        <Analisis2 />
      </>} />

      <Route path={`${baseRelativePath}/pages/analisis-2.html/material-oficial`} element={<>
        <Redir dest={`${baseRelativePath}/pages/analisis-2/material-oficial`} />
      </>} />

      {/* Videos */}

      <Route path={`${baseRelativePath}/pages/analisis-2/video/:videoRelativePath`} element={<>
        <ScrollToTop />
        <VideoPage />
      </>} />

      <Route path={`${baseRelativePath}/pages/analisis-2.html/video/:videoRelativePath`} element={<>
        <Redir dest={`${baseRelativePath}/pages/analisis-2/video/:videoRelativePath`} />
      </>} />

      {/* Ejercicios */}

      <Route path={`${baseRelativePath}/pages/analisis-2/ejercicios/:practiceRelativePath`} element={<>
        <ScrollToTop />
        <PracticePage />
      </>} />

      <Route path={`${baseRelativePath}/pages/analisis-2.html/ejercicios/:practiceRelativePath`} element={<>
        <Redir dest={`${baseRelativePath}/pages/analisis-2/ejercicios/:practiceRelativePath`} />
      </>} />

      {/* Catch-all in case something goes wrong */}

      <Route path="*" element={<>
        <ScrollToTop />
        <Navigate to={`${baseRelativePath}/pages/analisis-2`} />
      </>} />
    </Routes>
  </BrowserRouter>
);
