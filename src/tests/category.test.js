const request = require('supertest');
const app = require('../app');

describe('Get Endpoints', () => {
  it('should get all categories', async () => {
    const res = await request(app)
      .get('/api/categories');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });
});