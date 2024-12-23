const express = require("express");
import 'dotenv/config'
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("anuragdotcom");
});
app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>You are on youTube</h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`example app listening on port ${port} `);
});
