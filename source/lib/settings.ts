import logger from './logger';

class Settings {
    public jwtSecret: string;

    constructor() {
        //
    }

    initialize(): void {
        // Secret key for Json Web Token generation & validation.
        this.jwtSecret = process.env['API_JWT_SECRET'];
        if (!this.jwtSecret) {
            logger.warn('Environment variable API_JWT_SECRET not set, using an insecure default value');
            this.jwtSecret = 'INSECURE_SECRET_KEY';
        }
    }
}

export { Settings };
export default new Settings();
