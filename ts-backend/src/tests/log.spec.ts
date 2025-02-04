import request from 'supertest';
import { app, init, close } from '../app';

beforeAll(async () => {
  await init(); // Ensure database and routes are initialized
});

afterAll(async () => {
  await close(); // Close the database connection
});

describe('Log API', () => {
  it('should create a new log entry', async () => {
    const res = await request(app)
      .post('/log')
      .send({ json: { message: "Hello, world!" } })
      .expect(201);
    expect(res.body.json.message).toEqual("Hello, world!");
  });

  it('should retrieve log entries', async () => {
    await request(app)
      .get('/log')
      .expect(200)
      .then(response => {
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThanOrEqual(1);
      });
  });
});
