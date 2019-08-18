import React from 'react';
import List from 'antd/lib/list';
import RefreshButton from '../RefreshButton';
import { useHealthCheck, HealthState } from './UrlItem.hook';
import HealthIcon from './HealthIcon';

interface Props {
  url: string;
}

const colors = {
  error: '#fff1f0',
  pending: 'transparent',
  success: '#f6ffed'
};

const getColor = (urlState: HealthState) => {
  switch (urlState) {
    case HealthState.error:
      return colors.error;
    case HealthState.success:
      return colors.success;
    case HealthState.isPending:
      return colors.pending;
  }
};

const UrlItem = ({ url }: Props) => {
  const [healthState, checkUrl] = useHealthCheck(url);

  const color = getColor(healthState);

  return (
    <List.Item
      style={{ backgroundColor: color }}
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
