require('dotenv').config()

const app = require('./controllers/router')
const {connect} = require('./db/connect');


const { PORT = 3000 } = process.env;

connect(process.env.DB_URI);

app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`)
});