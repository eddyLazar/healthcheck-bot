import 'antd/lib/list/style/css';
import React from 'react';
import List from 'antd/lib/list';
import UrlItem from './UrlItem';

interface Props {
  urls: string[];
}

const App = ({ urls }: Props) => (
  <List
    bordered
    dataSource={urls}
    renderItem={item => <UrlItem url={item} />}
  />
);

export default App;
