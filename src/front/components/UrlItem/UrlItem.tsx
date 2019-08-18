import React from 'react';
import List from 'antd/lib/list';
import RefreshButton from '../RefreshButton';
import { useHealthCheck, HealthState } from './UrlItem.hook';
import HealthIcon from './HealthIcon';
import getStyle from './UrlItem.style';

interface Props {
  url: string;
}

const UrlItem = ({ url }: Props) => {
  const [healthState, checkUrl] = useHealthCheck(url);

  return (
    <List.Item
      style={getStyle(healthState)}
      actions={[
        <RefreshButton
          key={1}
          isLoading={healthState === HealthState.isPending}
          onClick={checkUrl}
        />
      ]}>
      <List.Item.Meta
        title={
          <a target="_blank" rel="noopener noreferrer" href={url}>
            <HealthIcon health={healthState} /> {url}
          </a>
        }
      />
    </List.Item>
  );
};

export default UrlItem;
