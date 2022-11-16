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
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../../models/users");
const userModel = new users_1.UserModel;
describe('Tests User Model ', () => {
    let user_id;
    const user = {
        email: 'ebtisam0@gmail.com',
        first_name: 'pepes',
        last_name: 'harbi',
        password: '123f'
    };
    it('Should create a user ', () => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = yield userModel.create(user);
        expect(newUser.email).toBe(user.email);
        expect(newUser.first_name).toBe(user.first_name);
        expect(newUser.last_name).toBe(user.last_name);
        user_id = newUser.id;
    }));
    it('Should return all users ', () => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield userModel.index();
        expect(users[0]).toBeTruthy();
    }));
    it('Should return one user by id ', () => __awaiter(void 0, void 0, void 0, function* () {
        const userId = yield userModel.getUserById(10);
        expect(userId).toEqual({
            id: 10,
            email: 'he@gmail.com',
            first_name: "lolo",
            last_name: "harbi",
            password: '$2b$10$9BGDqVnEoYu7fxnDpbxlru58VLyAQXRqFsunm0geFYQR2mwrVJmjG'
        });
    }));
});
//   it('Update user', async () => {
//     // let id : number
//     const update_user: user_type = {
//       email: 'gg@gmail.com',
//       first_name: 'gge',
//       last_name: 'ggeg',
//       password:'123'
//     };
//     const newUser = await userModel.update(user_id, update_user);
//     expect([newUser.first_name, newUser.last_name]).toEqual([
//       'Hsos',
//       'Alharbi'
//     ]);
//   });
//   it('Delete user', async () => {
//     const user = await userModel.delete(user_id);
//     expect(user.id).toBe(user_id);
//   });
// });
