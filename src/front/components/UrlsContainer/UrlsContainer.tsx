import './UrlsContainer.css';
import 'antd/lib/list/style/css';
import React from 'react';
import List from 'antd/lib/list';
import UrlItem from '../UrlItem';
import { useResources } from './UrlsContainer.hook';

const App = () => {
  const { resources, isFetching } = useResources();

  return (
    <List
      loading={isFetching}
      size="large"
      header="RESOURCE LIST"
      bordered
      dataSource={resources}
      renderItem={item => <UrlItem url={item} />}
    />
  );
};

export default App;
