import request = require('supertest');
import app from '../src/app';

describe('web service', () => {
    test('it should be happy', async () => {
        const { body } = await request(app)
            .get('/')
            .expect(200);
        expect(body.hello).toBe('world');
    });
});
