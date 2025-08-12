# Building and Distributing Plugins

This guide covers the process of building, testing, and distributing your Railroad plugins.

## Prerequisites

Before building your plugin, ensure you have:
- JDK 17 or later installed
- Gradle 7.6+ installed or use the Gradle wrapper
- Your plugin code is complete and tested locally

## Building Your Plugin

### Using Gradle Wrapper (Recommended)

1. Open a terminal in your plugin project's root directory
2. Run the build command for your operating system:

   **Windows:**
   ```powershell
   .\gradlew build
   ```

   **macOS/Linux:**
   ```bash
   ./gradlew build
   ```

### Build Outputs

Successful builds will generate the following in the `build/libs/` directory:
- `your-plugin-1.0.0.jar` - Your compiled plugin
- `your-plugin-1.0.0-sources.jar` - Source JAR (if configured)
- `your-plugin-1.0.0-javadoc.jar` - Javadoc JAR (if configured)

### Common Build Options

| Command | Description |
|---------|-------------|
| `build` | Compiles and packages your plugin |
| `clean` | Removes build artifacts |
| `test`  | Runs unit tests |
| `build --refresh-dependencies` | Refreshes dependencies |
| `build --info` | Shows detailed build information |

## Testing Your Build

1. Locate the generated JAR file in `build/libs/`
2. Copy it to Railroad's plugins directory:
   - **Windows:** `%APPDATA%\Railroad\plugins\`
   - **macOS:** `~/Library/Application Support/Railroad/plugins/`
   - **Linux:** `~/.local/share/Railroad/plugins/`
3. Restart Railroad or use the plugin manager to reload plugins

This command compiles your plugin's source code and packages it into a JAR file. The compiled JAR file will be located in the `build/libs/` directory within your project. For example, if your plugin is named `my-railroad-plugin`, you might find a file like `my-railroad-plugin-1.0.0.jar`.

## Installing Your Plugin

After successfully building your plugin, you need to place the generated JAR file into Railroad's plugins directory.

The plugins directory is located in your Railroad application's data folder. The exact path varies depending on your operating system:

- **Windows:** `%appdata%\Railroad\plugins`
- **macOS:** `~/Library/Application Support/Railroad/plugins`
- **Linux:** `~/.local/share/Railroad/plugins` or `~/.config/Railroad/plugins`

**Steps to Install:**

1.  Locate the JAR file you built (e.g., `my-railroad-plugin-1.0.0.jar`) in your project's `build/libs/` directory.
2.  Copy this JAR file.
3.  Navigate to the Railroad plugins directory on your system.
4.  Paste the copied JAR file into the `plugins` directory.

Once the JAR file is in the correct location, restart your Railroad application (if it was running) to load the new plugin. Your plugin should now be active and its features available within Railroad.
