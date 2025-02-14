// setHeader
const setHeaderResponse = (req, res, next) => {
  // website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you  wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-type');

  // Set to true if you need the website to include cookies in the requests send
  // to the API (e.g. in case you use sesssions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
}

module.exports = {
  setHeaderResponse
}
