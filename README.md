# ZEROAPI828 Project

A web application for searching and managing product information, compatibility, and sales rankings.

## Prerequisites

Before running this project, make sure you have the following installed on your machine:

1. Node.js (v12.0.0 or higher)
2. npm (Node Package Manager, usually comes with Node.js)

You can check if you have them installed by running:
```bash
node --version
npm --version
```

## Installation

1. 

2. Navigate to the project directory:
```bash
cd ZEROAPI828SIMPLE
```

3. Install dependencies:
```bash
npm install
```

This will install the required packages:
- express (^4.19.2)
- axios (^1.7.7)

## Running the Application

1. Start the server:
```bash
node index.js
```

2. You should see the message:
```
Server is running on port 3000
```

3. Open your web browser and navigate to:
```
http://localhost:3000
```

## Available Features

The application provides three main functions:

1. Search Host and Part (function1)
   - Search for product information
   - View detailed product specifications

2. Get Compatible Parts (function2)
   - Find compatible parts for specific hosts
   - View detailed compatibility information

3. Sales and Ranking (function3)
   - View sales data and rankings
   - Access historical data and trends

## Troubleshooting

If you encounter any issues:

1. Port in Use:
   - If port 3000 is already in use, you can modify the port in `index.js`:
   ```javascript
   const PORT = process.env.PORT || 3000;
   ```
   - Change 3000 to another port number

2. Dependencies Issues:
   - Try removing node_modules and package-lock.json
   - Run `npm install` again

3. Connection Issues:
   - Ensure your machine has internet access
   - Check if the API endpoints are accessible

## Project Structure

```
ZEROAPI828/
├── node_modules/      # Dependencies
├── public/           # Frontend files
│   ├── function1.html
│   ├── function2.html
│   ├── function3.html
│   └── home.html
├── index.js          # Main server file
├── package.json      # Project configuration
└── package-lock.json # Dependency lock file
```

## Support

For any issues or questions, please refer to the documentation or file an issue in the project repository.