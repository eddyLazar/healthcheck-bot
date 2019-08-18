import React from 'react';
import Icon from 'antd/lib/icon';
import { HealthState } from './UrlItem.hook';
import theme from '../../theme';

const HealthIcon = ({ health }: { health: HealthState }) => {
  switch (health) {
    case HealthState.error:
      return (
        <Icon
          type="close-circle"
          theme="twoTone"
          twoToneColor={theme.colors.icon.error}
        />
      );
    case HealthState.success:
      return (
        <Icon
          type="check-circle"
          theme="twoTone"
          twoToneColor={theme.colors.icon.success}
        />
      );

    default:
      return null;
  }
};

export default HealthIcon;
