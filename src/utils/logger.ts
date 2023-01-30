import winston, { format, transports } from "winston";

const logger = winston.createLogger({
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DDTHH:mm:ss.SSSZ",
    }),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/combined.log", handleExceptions: true }),
  ],
  exitOnError: false,
});

export default logger;
