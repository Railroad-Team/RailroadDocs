# Building the Railroad IDE from Source

This guide provides instructions for building the Railroad IDE from source code.

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

## Building the IDE

### Using Gradle Wrapper

1. Open a terminal in the project root directory
2. Run the build command:
   ```bash
   ./gradlew build
   ```
   (On Windows, use `gradlew.bat` instead of `./gradlew`)

### Building from IntelliJ

1. In the Gradle tool window (usually on the right), navigate to `Tasks` > `build`
2. Double-click `build` to start the build

## Verifying the Build

After a successful build, you should see a `BUILD SUCCESSFUL` message in the console. The built artifacts will be available in the `build/distributions` directory.

## Creating Installers with jpackage

Railroad IDE uses `jpackage` to create native installers for different platforms. Here's how to generate installers:

### Prerequisites
- JDK 21 or later with jpackage
- Platform-specific requirements:
  - **Windows**: WiX Toolset (for MSI) or Inno Setup (for EXE)
  - **macOS**: Xcode Command Line Tools
  - **Linux**: fpm, rpmbuild, or dpkg

### Using Gradle to Create Installers

1. **Build the application** (if not already built):
   ```bash
   ./gradlew build
   ```

2. **Create platform-specific installer**:
   - For Windows (MSI):
     ```bash
     ./gradlew jpackage --type msi
     ```
   - For macOS (DMG):
     ```bash
     ./gradlew jpackage --type dmg
     ```
   - For Linux (DEB/RPM):
     ```bash
     # For Debian/Ubuntu
     ./gradlew jpackage --type deb
     
     # For Fedora/RHEL
     # ./gradlew jpackage --type rpm
     ```

### Installer Output

The generated installers will be placed in the `build/jpackage` directory with the appropriate extension for your platform (`.msi`, `.dmg`, `.deb`, etc.).

### Customizing the Installer

You can customize the installer by modifying the `jpackage` configuration in `build.gradle`. Common customizations include:

- Application name and version
- Icons and splash screen
- Installation directory
- File associations
- JVM options

Example customization in `build.gradle`:
```groovy
jpackage {
    appName = "Railroad IDE"
    appVersion = project.version
    vendor = "Railroad Team"
    
    // Platform-specific settings
    if (org.gradle.internal.os.OperatingSystem.current().windows) {
        installerType = 'msi'
        installerOptions = ['--win-per-user-install', '--win-dir-chooser', '--win-menu']
    } else if (org.gradle.internal.os.OperatingSystem.current().macOsX) {
        installerType = 'dmg'
        icon = 'src/main/resources/icon.icns'
    } else {
        installerType = 'deb'
        installerOptions = ['--linux-shortcut']
    }
}
```

## Next Steps

Now that you've built the IDE, you can [run it from source](./running.md).

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

If you're interested in contributing to the Railroad IDE, please see our [Contributing Guidelines](./contributing.md).

## Support

For additional help, please join our [Discord server](https://discord.turtywurty.dev/).
