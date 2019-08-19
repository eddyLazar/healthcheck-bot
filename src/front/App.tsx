import React from 'react';
import UrlsContainer from './components/UrlsContainer/UrlsContainer';
import GithubRibbon from './components/GithubRibbon';
import config from '../config';

const App = () => (
  <div>
    <GithubRibbon />
    <UrlsContainer urls={config.urls} />
  </div>
);

export default App;
