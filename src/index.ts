import logger from "./utils/logger";

const main = async () => {
  logger.info("Hello World!");
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    logger.error(error);
    process.exit(1);
  });
