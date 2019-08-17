import React from 'react';
import UrlsContainer from './components/UrlsContainer';

const urls = [
  'http://google.com',
  'http://yandex.ru',
  'http://pampasdfasfdam.org'
];

const App = () => <UrlsContainer urls={urls} />;

export default App;
