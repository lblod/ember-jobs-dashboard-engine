import { helper } from '@ember/component/helper';
import format from 'date-fns/format';

export default helper(function formatDate([datetime, formatString]) {
  if (!(datetime instanceof Date)) return '';

  try {
    return format(datetime, formatString);
  } catch (e) {
    console.error(e);
    return '';
  }
});
