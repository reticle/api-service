import logger from './logger';

export class Settings {
    public servicePort: number = 3000;
    public jwtSecret: string = 'INSECURE_SECRET_KEY';

    initialize(): void {
        // Service listening port.
        try {
            const port = parseInt(process.env['RETICLE_SERVICE_PORT'], 10);

            if (port) {
                this.servicePort = port;
            } else {
                logger.warn('Environment variable RETICLE_SERVICE_PORT not set, using default port');
            }
        } catch (exception) {
            logger.warn('Environment variable RETICLE_SERVICE_PORT is not valid, using default port');
        }

        // Secret key for Json Web Token generation & validation.
        const key = process.env['RETICLE_JWT_SECRET'];
        if (key) {
            this.jwtSecret = key;
        } else {
            logger.warn('Environment variable RETICLE_JWT_SECRET not set, using an insecure default value');
        }
    }
}

export default new Settings();
