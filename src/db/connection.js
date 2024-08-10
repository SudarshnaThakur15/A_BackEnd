import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
async function connect() {
  try {
            const connection=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, {
            
            });
            console.log(`Connected to the database.................... ${connection.connection.host}`);
     } catch (error) {
         console.log("Error connecting to the database: ",error);
         process.exit(1);
  }
}
 export default connect;