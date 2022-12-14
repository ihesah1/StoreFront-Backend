
import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()
const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DB_test,
    NODE_ENV
} = process.env 


const Client = new Pool({
    host: POSTGRES_HOST,
    database: NODE_ENV === "dev" ? POSTGRES_DB : POSTGRES_DB_test,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
})

export default Client;