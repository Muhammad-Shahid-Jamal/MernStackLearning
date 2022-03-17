const request = require("supertest");
const {app} = require("../app");

describe('user end point testing', () => { 
    test('get all users', async () => { 
        const response = await request(app).get("/user");
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({user:[]});
    });
    test("check 404 page on user api",async ()=>{
        const response = await request(app).get("/user/1");
        expect(response.statusCode).toBe(400);
    })
})