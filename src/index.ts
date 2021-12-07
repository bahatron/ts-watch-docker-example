import express from "express";

let app = express();

app.get("/ping", (req, res) => res.json("pong"));

app.listen(3000, () => {
    console.log(`APP SERVER LISTENING`);
});
