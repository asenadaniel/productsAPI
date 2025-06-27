# Product Catalogue API

A simple Express.js API for managing a product catalogue.

## Features

- Add, view, update, and delete products
- Error handling and logging middleware

## Installation

```bash
git clone https://github.com/asenadaniel/productsAPI.git
cd productsAPI
npm install
```

## Usage

Start the development server:

```bash
npm run dev
```

Server runs at [http://localhost:3000](http://localhost:3000)

## API Endpoints

| Method | Endpoint             | Description                |
|--------|----------------------|----------------------------|
| GET    | /api/product         | Get all products           |
| GET    | /api/product/:id     | Get product by ID          |
| POST   | /api/product         | Add a new product          |
| PUT    | /api/product/:id     | Update a product           |
| DELETE | /api/product/:id     | Delete a product           |

## Project Structure

```
/Route          # Route definitions
/controller     # Controller logic
/Middleware     # Custom middleware (logger, error handler, etc.)
server.js       # Main server file
```

## License

MIT
