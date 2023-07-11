import { DateTime } from './luxon.js';

const insertDateTime = () => {
  const dt = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.getElementById('date-time').innerHTML = dt;
};

/* eslint-disable-next-line */
export { insertDateTime };