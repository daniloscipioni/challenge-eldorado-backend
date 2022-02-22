const request = require('supertest')
const app = require('../app')

const url = 'https://challenge-eldorado-backend.herokuapp.com';

describe('Post Endpoints', () => {
    it('should create a new post', async () => {
        const res = await request(app)
            .get('/api/categories')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('data')
    })
})


describe('Post Endpoints', () => {
    it('should create a new post', async () => {
        const res = await request(app)
            .post('/api/add-category')
            .send({
                name: 'test is cool',
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('data')
    })
})