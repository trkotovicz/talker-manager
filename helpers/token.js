function token(length) {
  let string = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let index = 0; index < length; index += 1) {
    string += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return string;
}

module.exports = token;