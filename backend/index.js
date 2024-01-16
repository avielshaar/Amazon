import express from "express";
import cors from "cors";
const app = express();

app.use(cors()); // does nothing at the moment
app.use(express.json()); // parses JSONs
app.use(express.urlencoded({extended: false})); //this is common practice for urlencoded
// these three lines are boilerplate

//routes:

app.listen(8080, function(){
    console.log("listening on " + 8080);
});