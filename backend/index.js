require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3002;

// Initialize Supabase Client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.json());
app.use(cors());

// Fetch all holdings
app.get('/allHoldings', async (req, res) => {
    try {
        const { data, error } = await supabase.from('holdings').select('*');
        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch all positions
app.get('/allPositions', async (req, res) => {
    try {
        const { data, error } = await supabase.from('positions').select('*');
        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Insert a new order
app.post('/newOrder', async (req, res) => {
    const { name, qty, price, mode } = req.body;
    try {
        const { data, error } = await supabase
            .from('orders')
            .insert([{ name, qty, price, mode }])
            .select();

        if (error) throw error;
        res.status(201).json({ message: "Order added successfully", order: data });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Root route check
app.get('/', (req, res) => {
    res.send("Express API with Supabase is running.");
});

// Start local development server
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

// Export Express app for Vercel Serverless Functions
module.exports = app;