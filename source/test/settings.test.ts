import 'mocha';
import 'should';
import { Settings } from '../lib/settings';
import logger from '../lib/logger';

// Disable logging.
logger.level(50);

describe('Settings', () => {
    let settings: Settings;

    // Setup a valid environment before each test.
    beforeEach(() => {
        process.env = {
            'API_JWT_SECRET': '1234',
        };

        settings = new Settings();
    });

    // Test initialization.
    describe('#initialize', () => {
        it('should read the JWT secret', () => {
            settings.initialize();
            settings.jwtSecret.should.equal('1234');
        });

        it('should assign a default JWT secret if not set', () => {
            delete process.env['API_JWT_SECRET'];

            settings.initialize();
            settings.jwtSecret.should.equal('INSECURE_SECRET_KEY');
        });

        it('should assign a default JWT secret if empty', () => {
            process.env['API_JWT_SECRET'] = '';

            settings.initialize();
            settings.jwtSecret.should.equal('INSECURE_SECRET_KEY');
        });
    });
});
