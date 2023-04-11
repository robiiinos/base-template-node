import logger from "./utils/logger";

const main = async () => {
  logger.info("Hello World!");
};

main().catch((error) => {
  logger.error(error);
});
