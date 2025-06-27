const NotFound = ((req, res, next) => {
  const err = new Error('NOT FOUND')
  err.status = 404
  next(err)
})

export default NotFound; 