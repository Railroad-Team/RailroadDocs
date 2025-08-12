# Building and Running Railroad IDE from Source

This guide provides instructions for setting up the Railroad IDE development environment.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Java Development Kit (JDK) 21** (Required for both Gradle and IntelliJ)
- **Git** for version control
- **IntelliJ IDEA** (Recommended IDE)
- **Lombok Plugin** (For IntelliJ)

## Setting Up the Development Environment

1. **Install the Lombok Plugin in IntelliJ**:
   - Go to `File` > `Settings` > `Plugins`
   - Search for "Lombok" and install the plugin
   - Restart IntelliJ when prompted

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/Railroad-Team/Railroad.git
   cd Railroad
   ```

3. **Update Submodules**:
   ```bash
   git submodule update --init --recursive
   ```

## Importing into IntelliJ

1. Open IntelliJ IDEA
2. Select `Open` and navigate to the cloned repository
3. Select the `build.gradle` file and click `OK`
4. When prompted, select "Open as Project"
5. Wait for Gradle to sync and download all dependencies

## Configuring Java Version

1. In IntelliJ, go to `File` > `Project Structure` > `Project`
2. Set both "Project SDK" and "Project language level" to Java 21
3. Go to `File` > `Settings` > `Build, Execution, Deployment` > `Build Tools` > `Gradle`
4. Set "Gradle JVM" to Java 21

## Building and Running

### Using Gradle Wrapper

1. **Build the project**:
   ```bash
   ./gradlew build
   ```
   (On Windows, use `gradlew.bat` instead of `./gradlew`)

2. **Run the application**:
   ```bash
   ./gradlew run
   ```

### Running from IntelliJ

1. In the Gradle tool window (usually on the right), navigate to `Tasks` > `application` > `run`
2. Double-click `run` to start the application

## Troubleshooting

### Common Issues

- **Lombok Not Working**:
  - Ensure the Lombok plugin is installed and enabled
  - Go to `File` > `Settings` > `Build, Execution, Deployment` > `Compiler` > `Annotation Processors`
  - Check "Enable annotation processing"

- **Java Version Mismatch**:
  - Verify that both Gradle and IntelliJ are using Java 21
  - Check environment variables `JAVA_HOME` and `PATH`

- **Gradle Sync Failures**:
  - Try invalidating caches: `File` > `Invalidate Caches...`
  - Delete the `.gradle` directory and re-import the project

## Contributing

If you're interested in contributing to the Railroad IDE, please see our [Contributing Guidelines](https://github.com/Railroad-Team/Railroad/CONTRIBUTING.md).

## Support

For additional help, please join our [Discord server](https://discord.turtywurty.dev/).
