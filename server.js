import express from 'express';
import product from './Route/product.js';
import logger from './Middleware/logger.js';
import errorHandler from './Middleware/errorHandler.js';
import NotFound from './Middleware/notFound.js';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger)

// The Products route
app.use('/api/product', product)

// Handler for 404 and error
app.use(NotFound)

// Error handler middleware
app.use(errorHandler)

// To Connect the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});