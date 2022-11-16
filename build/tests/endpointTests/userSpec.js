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
const index_1 = __importDefault(require("../../index"));
const request = (0, supertest_1.default)(index_1.default);
const user = {
    email: 'Ebtiso@gmail.com',
    first_name: 'semo',
    last_name: 'harbi',
    password: 'tee123'
};
describe('Test user endpoint responses', () => {
    let token;
    let userId;
    it('Create user ', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.post('/api/users/create').send(user);
        token = response.body.token;
        expect(response.status).toBe(201);
    }));
    it('Get all users as []', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/users')
            .set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(200);
        const users = yield response.body;
        expect(users[0]).toBeTruthy();
    }));
    it('Get user by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/users/10')
            .set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(200);
    }));
});
// it('Update user by id',async()=>{
//   const newUser:user_type = {
//     id:userId ,
//     email: 'test7@gmail.com',
//     first_name: 'test',
//     last_name: 'test',
//     password: 'test123'
//   }
//   const res = await request.patch(`/api/users/${newUser.id}`)
//   .set("Authorization", `Bearer ${token}`);
//   expect(res.status).toBe(200)
//   const User = res.body as user_type;
//   expect(User.first_name).toBe("Hessah")
// })
// })
