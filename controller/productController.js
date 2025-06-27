
let products = [

  { "id": 1, "name": "Wireless Mouse", "category": "Electronics", "price": 25.99, "inStock": true },
  { "id": 2, "name": "Bluetooth Speaker", "category": "Electronics", "price": 49.99, "inStock": true },
  { "id": 3, "name": "Yoga Mat", "category": "Fitness", "price": 19.99, "inStock": true },
  { "id": 4, "name": "Water Bottle", "category": "Fitness", "price": 12.5, "inStock": false },
  { "id": 5, "name": "Desk Lamp", "category": "Home", "price": 34.99, "inStock": true },
  { "id": 6, "name": "Throw Blanket", "category": "Home", "price": 29.99, "inStock": true },
  { "id": 7, "name": "Coffee Grinder", "category": "Kitchen", "price": 45.0, "inStock": true },
  { "id": 8, "name": "Cutting Board", "category": "Kitchen", "price": 15.75, "inStock": false },
  { "id": 9, "name": "LED Light Strip", "category": "Electronics", "price": 22.99, "inStock": true },
  { "id": 10, "name": "Running Shoes", "category": "Fitness", "price": 89.95, "inStock": true },
  { "id": 11, "name": "Notebook", "category": "Stationery", "price": 5.99, "inStock": true },
  { "id": 12, "name": "Ballpoint Pen Set", "category": "Stationery", "price": 7.49, "inStock": true },
  { "id": 13, "name": "Electric Kettle", "category": "Kitchen", "price": 39.95, "inStock": false },
  { "id": 14, "name": "Smartwatch", "category": "Electronics", "price": 149.99, "inStock": true },
  { "id": 15, "name": "Scented Candle", "category": "Home", "price": 14.25, "inStock": true },
  { "id": 16, "name": "Desk Organizer", "category": "Stationery", "price": 12.0, "inStock": true },
  { "id": 17, "name": "Monitor Stand", "category": "Electronics", "price": 27.49, "inStock": false },
  { "id": 18, "name": "Resistance Bands", "category": "Fitness", "price": 18.89, "inStock": true },
  { "id": 19, "name": "Phone Charger", "category": "Electronics", "price": 10.99, "inStock": true },
  { "id": 20, "name": "Frying Pan", "category": "Kitchen", "price": 25.99, "inStock": false },
  { "id": 21, "name": "Table Clock", "category": "Home", "price": 20.0, "inStock": true },
  { "id": 22, "name": "Highlighter Set", "category": "Stationery", "price": 4.99, "inStock": true },
  { "id": 23, "name": "Tripod Stand", "category": "Electronics", "price": 31.5, "inStock": true },
  { "id": 24, "name": "Fitness Tracker", "category": "Fitness", "price": 59.99, "inStock": true },
  { "id": 25, "name": "Plush Pillow", "category": "Home", "price": 16.45, "inStock": false },
  { "id": 26, "name": "Measuring Cups", "category": "Kitchen", "price": 8.95, "inStock": true },
  { "id": 27, "name": "Laptop Sleeve", "category": "Electronics", "price": 22.0, "inStock": true },
  { "id": 28, "name": "Sketchbook", "category": "Stationery", "price": 9.99, "inStock": true },
  { "id": 29, "name": "Treadmill Mat", "category": "Fitness", "price": 42.3, "inStock": false },
  { "id": 30, "name": "Wall Poster", "category": "Home", "price": 11.25, "inStock": true }
]



// Get all products
export const getAllProduct = (req, res) => {
  res.json(products);
}

//Get a product by id
export const getproductById = ((req, res, next) => {
  const id = parseInt(req.params.id)
  const product = products.find(product => product.id === id)
  if (!product) {
    const err = new Error(`The product with the id ${id} is not found`)
    err.status = 404
    next(err)
    return;
  }
  res.status(200).json(product)
})

//Create a product
export const createProduct = ((req, res, next) => {
  const { name, category, price, inStock } = req.body
  if (!name || !category || !price || inStock === undefined) {
    const err = new Error(`Please provide all fields`)
    err.status = 404
    next(err)
    return;
  }
  const newProduct = {
    id: products.length + 1,
    name,
    category,
    price,
    inStock
  }
  products.push(newProduct)
  res.status(201).json(newProduct)
})


//Update a product
export const updateProduct = ((req, res, next) => {
  const id = parseInt(req.params.id)
  const product = products.find(product => product.id === id)

  if (!product) {
    const err = new Error(`The product with the id ${id} is not found`)
    err.status = 404
    next(err)
    return;
  }

  const { name, category, price, inStock } = req.body
  if (!name || !category || !price || inStock === undefined) {
    const err = new Error(`Please provide all fields`)
    err.status = 404
    next(err)
    return;
  }

  product.name = name
  product.category = category
  product.price = price
  product.inStock = inStock
  res.status(200).json({ msg: 'Product updated', product });
})

//Delete a product

export const deleteProduct = ((req, res) => {

  const id = parseInt(req.params.id)
  const product = products.find(product => product.id === id)

  if (!product) {
    return res.status(404).json({ msg: `The product with the id ${id} is not found` })
  }

  products = products.filter(product => product.id !== id)

  res.status(200).json({ msg: 'Product deleted', product });



})
