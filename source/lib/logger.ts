import * as bunyan from 'bunyan';

const logger = bunyan.createLogger({ name: 'api' });

export default logger;
