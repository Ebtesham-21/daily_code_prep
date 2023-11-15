import { connectToDatabase } from "./db/connection.js";
import app from "./utils/app.js";




const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(() => {
        app.listen(5000, ()=>
            console.log("Server open and connected to database")
        );

})
.catch((err) => console.log(err));


