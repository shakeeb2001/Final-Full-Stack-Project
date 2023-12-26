const crypto = require('crypto');

const generateSecretKey = () => {
  const length = 64; // Adjust the length as needed (e.g., 32, 64, or more)
  return crypto.randomBytes(length).toString('hex');
};

console.log(generateSecretKey());

