const jwt = require("jsonwebtoken");
// const secret =
//   "MIICXwIBAAKBgQCe6kpSYO55GfNjq6ySxIQAUmUUOKmScm7eDLRbk06HWYmnjSd6LDoDDuZiPNRx/4/023QGJiEqr3SO+XtmU3jo0DWuQXrh2qpz5xg6OOo0rH2P+rXkOJgsi6whRMFtg52q+0RkaGURUxyyfN9qTnKpIA5QYz7btPEW5HDWgWKVRwIDAQABAoGBAJNYrXzgf30uAKyj2yliqPoba7lqKGCvVfjxUrGuThvVe3stuDLhmxCG2jqwKFNjILlqWZPx+sK3WJ3Q2Qgx0WKmxSdz90xMu5ADQTMdrsKrQ7mjrL+CPWkNguAfZ9F9XIswn39/D9aONcyvReorBTst3joELY7ZF8Fn72BFvi9RAkEAzRDdzG53+LrA8ier2JrbGiNq8vwU9nuJ2vGQtgQYPd1xmcnpHwA6isxWc0mAckH6LMQreTtD3fMtyc92ewPibQJBAMZi7Za7Rbo8FXnPEhNbpD/HKWwq7/aA7AQRfIUZyy154i+g9AAROSuAITzpr1BgJRd/ZUBlkm+n3VN78ETt5gMCQQCn9kulOUo8yUJmVYYUyWnys9XSphTJepCEa13bJ+lvKqT0kQPHp5lLvGiGz0pMy6uM5TSyfI9vCNKVPL9PrPPVAkEAoOSUqd1h1INsK2jr0PVOxUbh6k78ZF/0iewgn9XmeRBTh6symGdfhU8aJcukGjyPeHoihNKbq6BpmI54s355PwJBAInOhhnqQTa4DHmyTyVMilUNHnFVouHFa9FV+O2my5oj2D2wh582JZ8FAPnvt6f0GOhOjUrxiu9E8GQI6HTyWXo=";

// module.exports = {
//   secret:
//     "MIICXwIBAAKBgQCe6kpSYO55GfNjq6ySxIQAUmUUOKmScm7eDLRbk06HWYmnjSd6LDoDDuZiPNRx/4/023QGJiEqr3SO+XtmU3jo0DWuQXrh2qpz5xg6OOo0rH2P+rXkOJgsi6whRMFtg52q+0RkaGURUxyyfN9qTnKpIA5QYz7btPEW5HDWgWKVRwIDAQABAoGBAJNYrXzgf30uAKyj2yliqPoba7lqKGCvVfjxUrGuThvVe3stuDLhmxCG2jqwKFNjILlqWZPx+sK3WJ3Q2Qgx0WKmxSdz90xMu5ADQTMdrsKrQ7mjrL+CPWkNguAfZ9F9XIswn39/D9aONcyvReorBTst3joELY7ZF8Fn72BFvi9RAkEAzRDdzG53+LrA8ier2JrbGiNq8vwU9nuJ2vGQtgQYPd1xmcnpHwA6isxWc0mAckH6LMQreTtD3fMtyc92ewPibQJBAMZi7Za7Rbo8FXnPEhNbpD/HKWwq7/aA7AQRfIUZyy154i+g9AAROSuAITzpr1BgJRd/ZUBlkm+n3VN78ETt5gMCQQCn9kulOUo8yUJmVYYUyWnys9XSphTJepCEa13bJ+lvKqT0kQPHp5lLvGiGz0pMy6uM5TSyfI9vCNKVPL9PrPPVAkEAoOSUqd1h1INsK2jr0PVOxUbh6k78ZF/0iewgn9XmeRBTh6symGdfhU8aJcukGjyPeHoihNKbq6BpmI54s355PwJBAInOhhnqQTa4DHmyTyVMilUNHnFVouHFa9FV+O2my5oj2D2wh582JZ8FAPnvt6f0GOhOjUrxiu9E8GQI6HTyWXo=",
// };

module.exports.generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: 3600,
  });
  return token;
};

module.exports.authenticate = (req, res, next) => {
  const authHeaderExists = req.headers.authorization;
  if (authHeaderExists) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
      if (error) {
        res.status(401).json("Unauthorized");
      } else {
        next();
      }
    });
  } else {
    res.status(403).json("Unauthorized");
  }
};

// https://bezkoder.com/node-js-jwt-authentication-mysql/
