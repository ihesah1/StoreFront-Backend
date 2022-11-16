import {  UserModel } from "../../models/users";
import { user_type } from "../../types/userType";


const userModel = new UserModel
describe('Tests User Model ',()=>{
   
    let user_id: Number;
   const user: user_type = {
    email: 'Mohhammed@gmail.com',
    first_name: 'Harbi',
    last_name: 'harbi',
    password: '123f'
  }; 
  it('Should create a user ', async () => {
        const newUser = await userModel.create(user);
        expect(newUser.email).toBe(user.email);
        expect(newUser.first_name).toBe(user.first_name);
        expect(newUser.last_name).toBe(user.last_name);
        user_id = newUser.id as number;
      });
  it('Should return all users ', async()=>{
     const users = await userModel.index();
     expect(users[0]).toBeTruthy()
  })
  it('Should return one user by id ', async()=>{
    const userId: user_type= await userModel.getUserById(10);
    expect(userId).toEqual({
        id: 10,
        email:'he@gmail.com',
        first_name: "lolo",
        last_name: "harbi",
        password:'$2b$10$9BGDqVnEoYu7fxnDpbxlru58VLyAQXRqFsunm0geFYQR2mwrVJmjG'
      });
  })
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
    
    