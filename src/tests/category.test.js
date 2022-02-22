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
    test('should create a new category', async () => {
        const res = await request(app)
            .post('/api/add-category')
            .send({
                name: 'Test Category',
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('data')
    })
})

describe('Delete Endpoints', () => {
    test('should delete a category', async () => {
        const res = await request(app)
            // change for an existing value
            .delete('/api/remove-category/114')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('data')
    })
})

