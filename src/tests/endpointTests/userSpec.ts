import supertest from "supertest";
import {user_type} from "../../types/userType";
import  app  from "../../index";
import jwt from 'jsonwebtoken'

const request = supertest(app);
const user: user_type = {
      email: 'Nourah@gmail.com',
      first_name: 'nour',
      last_name: 'harbi',
      password: 'tee123'
    };
describe('Test user endpoint responses',()=>{
  let token:string;
  let userId: Number; 
  
   
  it('Create user ', async()=>{
    const response = await request.post('/api/users/create').send(user)
    token = response.body.token;
    expect(response.status).toBe(201);
  });


  it('Get all users as []', async()=>{
    const response = await request.get('/api/users')
    .set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(200);
    const users=await response.body as user_type[]
    expect(users[0]).toBeTruthy();

  })
  it('Get user by id',async()=>{
    const response = await request.get('/api/users/10')
    .set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(200);
  }) 

})


















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