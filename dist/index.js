"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//First dependencies to initialized a project with Express
const express_1 = __importDefault(require("express"));
//Configuration of out port for the API
const port = 8000;
//use the method express() to init
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello From Express + TS, YESSS!");
});
// app.get("/api/saidYourName/:name", (req, res) =>{
//     const {name} = req.params;
//     res.send("Hello From Express + TS, "+ name);
// });
//send the API for our port
app.listen(port, () => {
    console.log(`now listeaning on PORT ${port}`);
});
