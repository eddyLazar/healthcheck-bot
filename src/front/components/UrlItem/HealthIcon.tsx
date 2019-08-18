import React from 'react';
import Icon from 'antd/lib/icon';
import { HealthState } from './UrlItem.hook';

const HealthIcon = ({ health }: { health: HealthState }) => {
  switch (health) {
    case HealthState.error:
      return (
        <Icon type="close-circle" theme="twoTone" twoToneColor="#f5222d" />
      );
    case HealthState.success:
      return (
        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
      );

    default:
      return null;
  }
};

export default HealthIcon;
