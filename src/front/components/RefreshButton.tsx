import React from 'react';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

interface Props {
  isLoading?: boolean;
  onClick: () => void;
}

const RefreshButton = (props: Props) => (
  <Button
    loading={props.isLoading}
    onClick={props.onClick}
    shape="circle"
    icon="redo"
  />
);

export default RefreshButton;
