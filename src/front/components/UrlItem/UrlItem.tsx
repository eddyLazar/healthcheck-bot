import React from 'react';
import List from 'antd/lib/list';
import RefreshButton from '../RefreshButton';
import { useHealthCheck } from './UrlItem.hook';

interface Props {
  url: string;
}

const UrlItem = ({ url }: Props) => {
  const healthState = useHealthCheck(url);
  console.log(healthState);

  return (
    <List.Item actions={[<RefreshButton key={1} />]} style={{}}>
      <List.Item.Meta
        title={
          <a target="_blank" rel="noopener noreferrer" href={url}>
            {url}
          </a>
        }
      />
    </List.Item>
  );
};

export default UrlItem;
