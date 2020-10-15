const expressWinston = require("express-winston");
const winston = require("winston");
require("winston-daily-rotate-file");

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

const transportfile = (dirname, filename) =>
  new winston.transports.DailyRotateFile({
    filename: filename + "-%DATE%.log",
    datePattern: "YYYY-MM-DD-HH-MM",
    dirname: "./api/logs" + "/" + dirname,
    format: winston.format.combine(
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      winston.format.errors({ stack: true }),
      winston.format.splat(),
      winston.format.json()
    ),
  });

module.exports.applogger = expressWinston.logger({
  transports: [transportlogger],
});

module.exports.errorlogger = expressWinston.errorLogger({
  transports: [transporterror],
});

module.exports.filelogger = (dirname, filename) =>
  winston.createLogger({
    transports: [transportfile(dirname, filename)],
  });
