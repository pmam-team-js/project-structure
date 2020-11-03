const expressWinston = require("express-winston");
const winston = require("winston");
require("winston-daily-rotate-file");

const merge = require("deepmerge");

const transportlogger = new winston.transports.DailyRotateFile({
  filename: "logger-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  dirname: "./api/logs",
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
});

const transporterror = new winston.transports.DailyRotateFile({
  filename: "error-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  dirname: "./api/logs",
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
});

const transportfile = (dirname, filename) => {
  return new winston.transports.DailyRotateFile({
    filename: filename + "-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    dirname: "./api/logs" + "/" + dirname,
    level: "info",
  });
};

module.exports.applogger = expressWinston.logger({
  transports: [transportlogger],
});

module.exports.errorlogger = expressWinston.errorLogger({
  transports: [transporterror],
});

module.exports.filelogger = (dirname, filename) =>
  new winston.createLogger({
    levels: winston.config.syslog.levels,
    format: winston.format.combine(
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      winston.format.errors({ stack: true }),
      winston.format.splat(),
      winston.format.json()
    ),
    transports: [transportfile(dirname, filename)],
  });

module.exports.getErrorRequestObject = (req, err) => {
  //console.log(req);
  const request = {
    req: {
      method: req.method,
      baseUrl: req.baseUrl,
      hostname: req.hostname,
      ip: req.ip,
      originalUrl: req.originalUrl,
      params: req.params,
      body: req.body,
      path: req.path,
      query: req.query,
      route: req.route,
    },
  };

  const output = merge.all([err, request]);
  return output;
};
