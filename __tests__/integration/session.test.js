const request = require('supertest')

const app = require('../../src/app')

const { User } = require('../../src/app/models')

describe('Authentication', () => {
    it('should be able to authenticate with valid credentials', async () => {
        const user = await User.create({
            name: 'Denis',
            email: 'denisforigo@gmail.com',
            password_hash: '123123'
        });

        const response = await resquest(app)
            .post('./sessions')
            .send({
                email: user.email,
                password: '123123'
            })

        expect(response.status).toBe(200)
    })
})