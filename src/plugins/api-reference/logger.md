# Railroad Logger API

The Railroad Logger API provides a flexible and robust logging mechanism for both the core application and plugins. It allows developers to output messages at various severity levels, aiding in debugging, monitoring, and understanding application behavior.

## Core Concepts

- **`Logger`**: The primary interface for logging messages. Plugins will typically interact with instances of this interface.
- **`LoggingLevel`**: Defines the severity levels for log messages (e.g., INFO, WARN, ERROR).
- **`LoggerManager`**: Manages logger instances and their configurations.
- **`LoggerService` and `LoggerServiceLocator`**: (From RailroadCore) Provide a way for the main application and plugins to access the logging system.

## How Logging Works

Messages are logged through a `Logger` instance, which can be obtained from the `LoggerServiceLocator`. Each message is associated with a `LoggingLevel`.

## Example Usage

Here's how to create and use a logger in your plugin, utilizing the `LoggerManager` builder pattern for proper configuration:

```java
import dev.railroadide.logger.Logger;
import dev.railroadide.logger.LoggerManager;
import dev.railroadide.logger.LoggingLevel;
import java.nio.file.Path;
import java.util.concurrent.TimeUnit;

public class MyPluginLoggerExample {

    // Create and configure a logger instance for your plugin using the builder
    private static final Logger PLUGIN_LOGGER = LoggerManager.create(MyPluginLoggerExample.class)
            .logDirectory(Path.of("plugin-logs")) // Set a specific log directory for your plugin
            .loggingLevel(LoggingLevel.DEBUG) // Set the desired logging level
            .logFrequency(5, TimeUnit.SECONDS) // Flush logs to file every 5 seconds
            .deletionFrequency(7, TimeUnit.DAYS) // Delete logs older than 7 days
            .isCompressionEnabled(true) // Enable compression for archived logs
            .addLogFile("my_plugin.log") // Add a specific log file
            .build();

    public static void main(String[] args) {
        // Log messages at different levels
        PLUGIN_LOGGER.info("My plugin has started successfully!");
        PLUGIN_LOGGER.debug("Debugging information: variableX = {}", 123);
        PLUGIN_LOGGER.warn("A potential issue detected: configuration file missing.");

        try {
            // Simulate an error
            throw new RuntimeException("Something went wrong!");
        } catch (Exception e) {
            PLUGIN_LOGGER.error("An unexpected error occurred: {}", e.getMessage(), e);
        }

        // The LoggerManager handles initialization and shutdown automatically
        // LoggerManager.init(); // Called once at application startup
        // LoggerManager.shutdown(); // Called automatically on application exit
    }
}
```

## Logger Interface

The `Logger` interface defines the contract for a logging system within Railroad. It provides methods to log messages at various severity levels and manage logging configurations such as compression, log frequency, deletion frequency, and log file management.

### Methods

- `init()`: Initializes the logger, setting up any necessary resources or configurations. This method has a default implementation and does nothing if not overridden.
- `getName()`: Returns the name of the logger.
- `error(String logMessage, Object... objects)`: Logs an error message.
- `warn(String logMessage, Object... objects)`: Logs a warning message.
- `info(String logMessage, Object... objects)`: Logs an informational message.
- `debug(String logMessage, Object... objects)`: Logs a debug message.
- `log(String message, LoggingLevel level, Object... objects)`: Logs a message with the specified logging level.
- `setCompressionEnabled(boolean compression)`: Sets whether compression is enabled for the logger.
- `isCompressionEnabled()`: Checks if compression is enabled for the logger.
- `getLogFrequency()`: Gets the frequency of logging in milliseconds.
- `setLogFrequency(long frequency, TimeUnit timeUnit)`: Sets the frequency of logging in a specified time unit.
- `getDeletionFrequency()`: Gets the frequency of log deletion in milliseconds.
- `setDeletionFrequency(long frequency, TimeUnit timeUnit)`: Sets the frequency of log deletion in a specified time unit.
- `getLogDirectory()`: Gets the directory where logs are stored.
- `setLogDirectory(Path logDirectory)`: Sets the directory where logs will be stored.
- `getLoggingLevel()`: Gets the current logging level.
- `setLoggingLevel(LoggingLevel level)`: Sets the logging level for the logger.
- `addLogFile(Path file)`: Adds a file to which logs will be written.
- `addLogFile(String name)`: Adds a file to which logs will be written by its name (resolved relative to the log directory).
- `getFilesToLogTo()`: Gets the list of files to which logs will be written.
- `getLogDateFormat()`: Gets the date format used for the log files.
- `formatFileTime(FileTime fileTime)`: Formats a `FileTime` object into a human-readable string.
- `close()`: Closes the logger and releases any resources it holds. This method has a default implementation and does nothing if not overridden.

## LoggingLevel Enum

The `LoggingLevel` enum represents the different severity levels for log messages within the Railroad logging system. It is used to categorize log messages, allowing for filtering and prioritization of output.

### Enum Values

- `ERROR`: Indicates a serious failure that prevents the application from continuing its normal operation.
- `WARN`: Indicates a warning that may require attention but does not prevent the application from running. These are often signs of potential problems.
- `INFO`: Indicates general informational messages about the application's progress or significant events.
- `DEBUG`: Indicates detailed information useful for debugging purposes. These messages are typically only enabled during development or troubleshooting.

### Usage

`LoggingLevel` values are used when calling logging methods (e.g., `Logger.log(message, LoggingLevel.INFO, objects)`).

```java
import dev.railroadide.logger.LoggingLevel;

// Example of using LoggingLevel
LoggingLevel currentLevel = LoggingLevel.INFO;

if (currentLevel.ordinal() <= LoggingLevel.WARN.ordinal()) {
    // Log a warning message
    // logger.warn("Something potentially problematic occurred.");
}
```

## LoggerManager

`LoggerManager` is a singleton class responsible for managing multiple `Logger` instances within the Railroad application. It handles the initialization, registration, unregistration, and shutdown of loggers, as well as the archiving and cleanup of log files.

### Initialization and Shutdown

- `static void init()`: Initializes the `LoggerManager`. This method should be called once at the start of the application. It sets up all registered loggers, archives existing logs, and prepares new log files. A shutdown hook is automatically registered to ensure proper cleanup on application exit.
- `static void shutdown()`: Shuts down the `LoggerManager`, closing all registered loggers and releasing resources. This method is automatically called when the application exits.

### Logger Creation

- `static DefaultLogger.Builder create(String name)`: Creates a new `DefaultLogger.Builder` instance for a logger with the specified name.
- `static DefaultLogger.Builder create(Class<?> clazz)`: Creates a new `DefaultLogger.Builder` instance for a logger associated with the specified class. The logger's name will be derived from the class name.

### Logger Registration and Unregistration

- `static <T extends Logger> T registerLogger(T logger)`: Registers a new `Logger` with the `LoggerManager`. If the logger is already registered, the existing instance is returned. If the `LoggerManager` is already initialized, the new logger will also be initialized.
- `static void unregisterLogger(Logger logger)`: Unregisters a `Logger` from the `LoggerManager`. If the logger is not registered, an `IllegalArgumentException` is thrown. If the `LoggerManager` is initialized, the logger will be closed before unregistration.

### Internal Operations

`LoggerManager` also handles internal operations such as:

- **Log Archiving**: Existing log files are archived (copied and potentially compressed) before new logging sessions begin.
- **Log Deletion**: Old log files are periodically deleted based on the `deletionFrequency` configured for each logger.

These operations are managed internally and do not require direct interaction from plugins.
