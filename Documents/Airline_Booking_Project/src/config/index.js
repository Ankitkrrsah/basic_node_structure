import dotenv from "dotenv" ; 
import {logger} from "./logger-config.js";
dotenv.config(".../.env") ; 

console.log(process.env.PORT) ; 

export default {
     PORT : process.env.PORT, 
     logger
}