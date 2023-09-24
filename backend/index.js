const express = require("express");
const mongoose = require("mongoose");
const Product =require('./routes/Product.js') // Check the path to your Product module
const User =require('./routes/User.js') 
const Cart =require('./routes/Cart.js')
const Orders =require('./routes/Orders.js')
const app = express();

const db = async () => {
  try {
    await mongoose.connect("mongodb+srv://vishalkamboj9211:vishal1234@cluster0.tqdqd4j.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB is connected");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

db();

// Make sure to use "app", not "server"
app.use(express.json());
app.use("/products", Product);
app.use('/users',User);
app.use('/cart',Cart);
app.use('/orders',Orders);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
