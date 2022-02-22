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
                // change for an existing value
                category: 34,
                color: 'color test',
                partNumber: 123
            })

        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('data')
    })
})

describe('Delete Endpoints', () => {
    test('should delete a device', async () => {
        const res = await request(app)
            // change for an existing value
            .delete('/api/remove-device/34')
        expect(res.statusCode).toEqual(200)
        expect(res.body).not.toEqual('Device must be removed')
    })
})