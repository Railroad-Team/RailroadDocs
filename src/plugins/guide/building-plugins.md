# Building and Distributing Plugins

This guide covers the process of building and distributing your Railroad plugins.

## Prerequisites

Before building your plugin, ensure you have:
- **JDK 21** (required)
- **Gradle 8.14+** (recommended to use the Gradle wrapper included in the project)
- Your plugin code is complete

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

## Installing and Enabling Your Plugin

1. Locate the generated JAR file in `build/libs/`
2. Copy it to Railroad's plugins directory:
   - **Windows:** `%APPDATA%\Railroad\plugins\`
   - **macOS:** `~/Library/Application Support/Railroad/plugins/`
   - **Linux:** `~/.local/share/Railroad/plugins/`
3. Start or restart Railroad
4. Go to `Settings > Plugins`
5. Find your plugin in the list and enable it
6. Restart Railroad when prompted

## Deploying Your Plugin

To distribute your plugin to other users:

1. Create a GitHub repository for your plugin (if you haven't already)
2. Push your code to the repository
3. Create a new release in GitHub:
   - Tag the release with the version number (e.g., `v1.0.0`)
   - Attach the compiled JAR file from `build/libs/`
   - Include a changelog in the release notes

> **Note:** This deployment process may change in the future as the plugin ecosystem evolves.