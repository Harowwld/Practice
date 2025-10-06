
//Imports
import express from "express"
import dotenv from "dotenv"
import cors from "cors"

//Initialize
dotenv.config();
const app = express();

app.use(cors({
    origin: "",
    credentials: true,
}))

//env variables
const PORT=process.env.PORT || 3000

//port 
app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`)
})