//First dependencies to initialized a project with Express
import express, {Express, Request, Response} from "express";
//Configuration of out port for the API
const port = 8000;
//use the method express() to init
const app = express();

app.get("/", (req, res) =>{
    res.send("Hello From Express + TS, YESSS!");
});

// app.get("/api/saidYourName/:name", (req, res) =>{
//     const {name} = req.params;
//     res.send("Hello From Express + TS, "+ name);
// });
//send the API for our port
app.listen(port, () => {
    console.log(`now listeaning on PORT ${port}`)
})