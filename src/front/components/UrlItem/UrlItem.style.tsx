import { HealthState } from './UrlItem.hook';
import theme from '../../theme';

const getStyle = (urlState: HealthState) => {
  let color = 'transparent';
  switch (urlState) {
    case HealthState.error:
      color = theme.colors.listItem.error;
      break;
    case HealthState.success:
      color = theme.colors.listItem.success;
      break;
    default:
      break;
  }
  return { backgroundColor: color };
};

export default getStyle;
