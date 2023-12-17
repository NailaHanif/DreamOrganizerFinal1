const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  // Get the token from the request headers
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Token not provided' });
  }

  // Verify the token
  jwt.verify(token, 'DreamOrgnizer', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden - Invalid token' });
    }

    // Attach the user to the request for further use
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
