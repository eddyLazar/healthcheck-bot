import { HealthState } from './UrlItem.hook';

const colors = {
  error: '#fff1f0',
  success: '#f6ffed'
};

const getStyle = (urlState: HealthState) => {
  let color = 'transparent';
  switch (urlState) {
    case HealthState.error:
      color = colors.error;
      break;
    case HealthState.success:
      color = colors.success;
      break;
    default:
      break;
  }
  return { backgroundColor: color };
};

export default getStyle;
