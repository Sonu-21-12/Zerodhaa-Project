const dns = require("node:dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const  {Holding}  =  require('./model/holdingModel')
const {Positions} = require('./model/positionModel')
const {Order} = require('./model/orderModel')
const bodyParser = require("body-parser");
const cors = require('cors')
const AuthRoutes = require('./routes/AuthRoutes')
const cookieParser = require("cookie-parser");




const app = express();
app.use(cors({
  origin: function (origin, callback) {
    // CRA may start the frontend/dashboard on another port if the default is busy.
    // In local development, accept localhost origins on any port.
    if (
      !origin ||
      /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)
    ) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use("/", AuthRoutes);


const mongoUrl = process.env.MONGOURL;
const PORT = process.env.PORT || 4001;

// app.get("/", async(req, res) => {
//    let data =  [
//     {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
//    ]
  
//     const saveData = await Positions.insertMany(data)
    
//    console.log(saveData)
//   res.send(" save succefully")

// });

app.get("/allholding" , async(req,res) => {
    let allHolding =  await Holding.find({})
    res.json(allHolding)
})
app.get("/position" , async(req,res) => {
    let position =  await Positions.find({})
    res.json(position)
})

app.get("/order", async(req,res) => {
  try {
    const orderData = await Order.find({}).sort({ _id: -1 });
    res.json(orderData);
  } catch (err) {
    res.status(500).json({ success: false, message: "Orders could not be loaded" });
  }
})

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new Order({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode
    });

    await newOrder.save();

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      order: newOrder
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

async function main() {
  try {
    await mongoose.connect(mongoUrl);
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
  }
}

main();
