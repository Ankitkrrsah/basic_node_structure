import { StatusCodes } from "http-status-codes";
import config from "../config/index.js";

const logger = config.logger ; 

const info = (req,res)=>{
    logger.info("Hii")
    return res.status(StatusCodes.OK).json({
        error : {} , 
        message : "Server is running fine" , 
        success : true , 
        data : {} 
    })
}

export default info ; 