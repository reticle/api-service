import logger from './logger';

class Settings {
    public servicePort: number;
    public jwtSecret: string;

    constructor() {
        //
    }

    initialize(): void {
        // Service listening port.
        try {
            this.servicePort = parseInt(process.env['RETICLE_SERVICE_PORT'], 10);

            if (!this.servicePort) {
                logger.warn('Environment variable RETICLE_SERVICE_PORT not set, using default port 3000');
                this.servicePort = 3000;
            }
        } catch (exception) {
            logger.warn('Environment variable RETICLE_SERVICE_PORT is not valid, using default port 3000');
            this.servicePort = 3000;
        }


        // Secret key for Json Web Token generation & validation.
        this.jwtSecret = process.env['RETICLE_JWT_SECRET'];
        if (!this.jwtSecret) {
            logger.warn('Environment variable API_JWT_SECRET not set, using an insecure default value');
            this.jwtSecret = 'INSECURE_SECRET_KEY';
        }
    }
}

export { Settings };
export default new Settings();
