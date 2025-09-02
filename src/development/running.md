# Running the Railroad IDE

This guide explains how to run the Railroad IDE from source after you've built it.

## Prerequisites

Before running the IDE, ensure you have:

- Successfully completed the [building process](./building.md)
- Java 21 or later installed on your system

## Running the IDE

### Using Gradle Wrapper

1. Open a terminal in the project root directory
2. Run the application:
   ```bash
   ./gradlew run
   ```
   (On Windows, use `gradlew.bat` instead of `./gradlew`)

### Running from Different IDEs

#### IntelliJ IDEA
1. In the Gradle tool window (usually on the right), navigate to `Tasks` > `application` > `run`
2. Double-click `run` to start the application

#### Eclipse
1. Install the Buildship Gradle Integration from the Eclipse Marketplace (if you don't have it already)
2. Go to `File` > `Import` > `Gradle` > `Existing Gradle Project` (if you haven't already imported the project)
3. Select the project root directory and click `Finish`
4. Once imported, right-click the project and select `Run As` > `Gradle Build...`
5. Enter `run` in the Tasks field and click `Run`

#### NetBeans
1. Install the Gradle plugin via `Tools` > `Plugins` > `Available Plugins` (if you don't have it already)
2. Open the project using `File` > `Open Project` and select the project directory (if you haven't already opened the project)
3. Right-click the project and select `Run` > `Run Project`

#### VS Code
1. Install the following extensions (if you don't have them already):
   - Extension Pack for Java
   - Gradle for Java
2. Open the project folder in VS Code (if you haven't already opened the project)
3. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
4. Select `Java: Import Java Projects into Workspace` (if you haven't already imported the project)
5. Once imported, open the Run view (`Ctrl+Shift+D` or `Cmd+Shift+D`)
6. Click the play button or press `F5` to run the application

## Common Runtime Issues

### Java Version Mismatch
- **Symptom**: Errors about unsupported class file version
- **Solution**: Ensure Java 21 is set as the runtime environment:
  - Check `JAVA_HOME` environment variable
  - Verify IntelliJ run configuration uses Java 21

### Plugin Loading Issues
- **Symptom**: Plugins fail to load or errors about missing dependencies
- **Solution**:
  1. Clean and rebuild the project
  2. Invalidate caches: `File` > `Invalidate Caches...`
  3. Delete the `.gradle` directory and re-import the project

### Performance Issues
- **Symptom**: Slow startup or laggy performance
- **Possible Solution**:
  - Increase JVM heap size in `gradle.properties`:
    ```properties
    org.gradle.jvmargs=-Xmx4g -XX:MaxMetaspaceSize=1g
    ```

## Debugging

### Running in Debug Mode

1. In IntelliJ:
   - Click the debug icon (bug) next to the run configuration
   - Or right-click the run configuration and select "Debug"

2. From command line:
   ```bash
   ./gradlew run --debug-jvm
   ```

### Common Debugging Scenarios

1. **UI Freezes**:
   - Take a thread dump using VisualVM or YourKit
   - Check for deadlocks in the logs

2. **Memory Leaks**:
   - Enable GC logging
   - Use a profiler to analyze heap dumps

## Next Steps

- Learn how to [contribute to the project](./contributing.md)
- Report issues on our [GitHub repository](https://github.com/Railroad-Team/Railroad/issues)
- Get help on our [Discord server](https://discord.turtywurty.dev/)
