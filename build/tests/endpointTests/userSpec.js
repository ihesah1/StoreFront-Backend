"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const users_1 = require("../../models/users");
const index_1 = __importDefault(require("../../index"));
const request = (0, supertest_1.default)(index_1.default);
const userModel = new users_1.UserModel();
describe("User Controller", () => {
    // let token:string,user_id = '';
    // var token: string;
    // var user:user_type ;
    let userId;
    it("gets the api endpoint /register", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.post("/register").send({
            email: "test@gmail.com",
            first_name: "test",
            last_name: "test",
            password: "password123",
        });
        userId = res.body.id;
        expect(res.status).toBe(404);
    }));
});
// it("Post /create , should return success for create user.",
// async ():Promise<void>=>{
// const user :object = {
//     email:"test1@gmail.com",
//     first_name:"test1",
//     last_name:"test11",
//     password:"123"
// }
// const res = await request.post('/create').send(user)
// token = res.body.token;
// const response = await request.post("/users/register").send(user);
// expect(response.status).toBe(201);
// expect(response.body.result).toEqual({
//     email:"test1@gmail.com",
//     first_name:"test1",
//     last_name:"test11",
// });
// it('Get all /users ',async()=>{
//     const response = await request.get('/users')
//     .set('Authorization', 'Bearer ' + token);
//     expect(response.status).toBe(404)
//     const users = response.body as user_type[];
//     expect(users[0]).toBeTruthy()
// })
// it('Get user by /id', async()=>{
//     const response = await request.get('/users/1')
//     .send({
//         id:user.id
//     })
//     expect(response.status).toBe(404);
//     expect(response.body).toBe(user)
// });
// })  
