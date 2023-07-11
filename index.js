import BookCollection from './modules/bookCollection.js';
import { insertDateTime } from './modules/date-time.js';

const collection = new BookCollection();
collection.initialize();

insertDateTime();
setInterval(insertDateTime, 1000);