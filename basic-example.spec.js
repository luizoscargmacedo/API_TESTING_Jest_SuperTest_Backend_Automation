const request = require("supertest")
const app = require('./server')

describe( 'API Validation', () => {

    it ('Should get main route', async () => {
        const ans = await request(app).get('/')
        //console.log(ans)
        expect(ans.statusCode).toEqual(200)
        expect(ans.body).toHaveProperty('message')
    })
})