import express from 'express';
import routes from './routes';
import podyParser from 'body-parser';

//create instance from express
const app = express()
const port = 3000


app.use(podyParser.json())
app.use('/api', routes)
app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})

export default app;
