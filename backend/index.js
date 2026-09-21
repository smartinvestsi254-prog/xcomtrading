require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3002;

// Dynamic CORS configuration for local and production Vercel apps
const allowedOrigins = [
    'http://localhost:3000',                  // Local Frontend / Dashboard
    'http://localhost:3001',                  // Secondary local dev port
    'https://xcomtrading-frontend.vercel.app',       // Update with your actual frontend Vercel URL
    'https://xcomtrading-dashboard.vercel.app'        // Update with your actual dashboard Vercel URL
];

const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (e.g., Mobile apps, Postman, server-to-server)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Blocked by CORS policy'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

// Enable CORS middleware (must be placed before routes)
app.use(cors(corsOptions));

// Enable JSON parser middleware
app.use(express.json());

// Initialize Supabase Client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

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
