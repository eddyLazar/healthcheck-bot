import React from 'react';
import UrlsContainer from './components/UrlsContainer';
import GithubRibbon from './components/GithubRibbon';
import config from '../config';

const App = () => (
  <div>
    <GithubRibbon />
    {/* <h1>Healthcheck</h1> */}
    <UrlsContainer urls={config.urls} />
  </div>
);

export default App;
