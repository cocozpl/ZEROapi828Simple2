// index.js

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// API keys
const apiKey = "A0WLZ2Gke9N7hejjZ2hTTqaJWrncjJA2";

// API configuration for Function 1
const item_searching_url = "http://192.168.3.147:20001/api/v1/backend/item_information_querying/item_searching";


// API configuration for Function 2
const compatibility_url = "http://192.168.3.147:20002/api/v1/backend/compatibility_querying/compatibility_querying";


// API configuration for Function 3
const sales_querying_url = "http://192.168.3.147:20003/api/v1/backend/sales_querying/sales_querying";


// Middleware to parse JSON
app.use(bodyParser.json());

// Route to serve the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));  // Serve home.html at the root
});

// Route to serve Function 1's web page (Search Host & Part)
app.get('/function1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'function1.html'));  // Serve index.html for Function 1
});

// Route to serve Function 2's web page (Get Compatible Part)
app.get('/function2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'function2.html'));  // Serve function2.html for Function 2
});

// Route to serve Function 3's web page
app.get('/function3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'function3.html'));
});


// POST route to handle Function 1's search (Search Host & Part)
app.post('/search', async (req, res) => {
    try {
        const searchCriteria = req.body;
        const response = await axios.post(item_searching_url, searchCriteria, {
            headers: {
                'API-key': apiKey,
                'Content-Type': 'application/json',
            },
        });
        res.json(response.data);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            // Send a structured response for "not found" case
            res.json({ status: 'not_found', message: 'No results found' });
        } else if (error.response) {
            // Send a structured error response
            res.json({ 
                status: 'error', 
                message: error.response.data.message || 'An error occurred',
                code: error.response.status 
            });
        } else {
            res.json({ status: 'error', message: 'An error occurred', code: 500 });
        }
    }
});


// POST route to handle Function 2's search (Get Compatible Parts)
app.post('/getCompatibleParts', async (req, res) => {
    try {
        const requestBody = req.body

        const response = await axios.post(compatibility_url, requestBody, {
            headers: {
                'API-key': apiKey,
                'Content-Type': 'application/json',
            },
        });
        res.json(response.data);

    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ error: 'An error occurred' });
        }
    }
});

// POST route to handle Function 3's sales and ranking search
app.post('/getSalesRanking', async (req, res) => {
    try {
        const requestBody = req.body;
        console.log('Request Body:', requestBody);

        // Make the API request
        const response = await axios.post(sales_querying_url, requestBody, {
            headers: {
                'API-key': apiKey,
                'Content-Type': 'application/json',
            },
        });
        console.log('API Response:', response.data);  // Log the API response
        // Send the API response back to the frontend
        res.json(response.data);
    } catch (error) {
        if (error.response) {
            console.error('API Error Response:', error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error('Error:', error.message);
            res.status(500).json({ error: 'An error occurred' });
        }
    }
});

// Start the server
const PORT = 20010;
const HOST = "0.0.0.0"
app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
