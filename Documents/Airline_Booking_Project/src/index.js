import express from "express" ; 
import config from "./config/index.js" ;
import sampleRoute from "./routes/index.js"
import controllers from "./controllers/index.js";
const app = express() ; 
const PORT = config.PORT ; 
const logger = config.logger ;
app.use(express.json()) ; 
app.use(express.urlencoded({extended:true})) ; 

app.use("/api/v1" , controllers.infoController) ; 


app.listen(PORT , ()=>{
    console.log(`Running on PORT ${PORT}`) ;
})