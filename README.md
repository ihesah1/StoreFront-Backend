### Set up Packages
#### express
`npm i -S express`
`npm i -D @types/express`
#### dotenv
`npm i dotenv`
`npm i --save-dev @types/dotenv`
#### pg
`npm i -S pg`
`npm i -D @types/pg`
#### body-parser
`npm i -S body-parser`
`npm i -D @types/body-parser`
#### typescript
`npm i -D typescript`
#### db-migrate
`npm install -g db-migrate`
#### bcrypt
`npm -i bcrypt`
`npm -i -D @types/bcrypt`
#### jsonwebtoken
`npm install jsonwebtoken --sav`
`npm -i @types/jsonwebtoken`
#### jasmine
`npm install jasmine @types/jasmine @ert78gb/jasmine-ts ts-node --save-dev`
#### supertest
`npm i supertest`
`npm i --save-dev @types/supertest`
#### lint & prettier 
`npm run prettier`
`npm run lint`

### Set up Database 
##### dotenv.config()
const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DB_test,
    ENV
} = process.env 


const Client = new Pool({
    host: POSTGRES_HOST,
    database: ENV === "dev" ? POSTGRES_DB : POSTGRES_DB_test,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
})



### Environment Variables
default env
ENV=dev