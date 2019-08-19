import React from 'react';
import UrlsContainer from './components/UrlsContainer';
import config from '../config';

const App = () => <UrlsContainer urls={config.urls} />;

export default App;
