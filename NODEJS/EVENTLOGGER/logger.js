const fs = require("fs");
const os = require("os");
const EventEmitter = require("events");
class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}

const logger = new Logger();
const logfile = "./eventlog.txt";
const logtoFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message}\n`;
  fs.appendFileSync(logfile, logMessage);
};
logger.on("message", logtoFile);
setInterval(() => {
  const MemoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Currect memory usage ${MemoryUsage.toFixed(2)}`);
}, 3000);
logger.log("application started");
logger.log("application Event occured");
