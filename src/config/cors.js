/** @format */

var whitelist = [process.env.CLIENT_URL, 'http://locaalhost:5173.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "x-refresh-token",
    "Access-Control-Allow-Origin",
  ],
};

module.exports = corsOptions;