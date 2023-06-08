import express from "express";
import mongoose from "mongoose";
mongoose
  .connect("mongodb://127.0.0.1:27017", { dbName: "backenf" })
  .then(() => {
    console.log("cpnnected");
  })
  .catch((e) => {
    console.log(e);
  });
  const messageSchema=mongoose.Schema({
    name:String,
    email:String
  })
  const message =mongoose.model("Message",messageSchema)

const app = express();

app.get("/", (req, res) => {
  res.send({ name: "saodncv" });
});

app.get("/hello",(req,res)=>{
  message.create({name:"vishal",email:"vishalkamboj9211@gmail.com"})
  res.send('yasv')
  
})
app.listen(3000, () => {
  console.log({ vishal: "name" });
});
