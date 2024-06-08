const app= require('../backend/app')
const connectWithDB = require('../backend/config/database')

connectWithDB();

app.listen(process.env.PORT,()=>{
    console.log("Server is running")
})