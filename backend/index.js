require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URI;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/allHoldings', async (req, res) => {
    try {
        const allHoldings = await HoldingsModel.find({});
        res.json(allHoldings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/allPositions', async (req, res) => {
    try {
        const allPositions = await PositionsModel.find({});
        res.json(allPositions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/newOrder', async (req, res) => {
    try {
        const newOrder = new OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
        });

        await newOrder.save();
        res.status(201).json({ message: "Order added successfully", order: newOrder });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Connect to MongoDB prior to starting server
mongoose.connect(uri)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

module.exports = app;