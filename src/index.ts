import logger from "./utils/logger";

const main = async () => {
  logger.info("Hello World!");

  const cleanup = () => {
    logger.info("App is closing");
  };
  process.on("exit", cleanup); // app is closing
  process.on("SIGINT", cleanup); // ctrl+c event
  process.on("SIGTERM", cleanup); // "kill pid" (like nodemon restart)
};

main().catch((error) => {
  logger.error(error);
});
