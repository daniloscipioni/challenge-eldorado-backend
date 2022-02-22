const request = require('supertest');
const app = require('../app');

describe('Get Endpoints', () => {
  test('should get all categories', async () => {
    const res = await request(app)
      .get('/api/categories');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });
});

describe('Post Endpoints', () => {
    test('should create a new categry', async () => {
        const res = await request(app)
            .post('/api/add-category')
            .send({
                name: 'Test Category',
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('data')
    })
})


