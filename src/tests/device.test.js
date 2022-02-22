const request = require('supertest')
const app = require('../app')
const axios = require('axios');

describe('Get Endpoints', () => {
    test('should get all devices', async () => {
        const res = await request(app)
            .get('/api/devices')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('data')
    })
})

describe('Post Endpoints', () => {
    test('should create a new device', async () => {
        
        const res = await request(app)
            .post('/api/add-device')
            .send({
                // change for a existing value
                category: 24,
                color: 'color test',
                partNumber: 123
            })

        // console.log(res);
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('data')
    })
})