// import supertest from "supertest";
// import {user_type} from "../../types/userType";
// import {UserModel} from "../../models/users"
// import  app  from "../../index";
// import jwt from 'jsonwebtoken'

// const request = supertest(app)
// const userModel = new UserModel();
// describe("User Controller",()=>{
   
//     // let token:string,user_id = '';
//     // var token: string;
//     // var user:user_type ;
//     let userId : number;
    
//     it("gets the api endpoint /register", async () => {
//         const res = await request.post("/register").send({
//           email:"test@gmail.com",
//           first_name: "test",
//           last_name: "test",
//           password: "password123",
//         });
//         userId = res.body.id;
//         expect(res.status).toBe(404);
//       });
// })
//     // it("Post /create , should return success for create user.",
//     // async ():Promise<void>=>{












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