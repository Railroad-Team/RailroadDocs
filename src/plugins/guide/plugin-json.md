# `plugin.json`

The `plugin.json` file is a crucial part of your Railroad plugin, providing essential metadata about your plugin to the Railroad application. It must be located at `src/main/resources/META-INF/plugin.json` within your plugin project.

### Fields:

- **Required Fields:**
    - `id` (string): A unique identifier for your plugin (e.g., `com.example.myplugin`).
    - `name` (string): The human-readable name of your plugin (e.g., `My Awesome Plugin`).
    - `version` (string): The version of your plugin (e.g., `1.0.0`).
    - `mainClass` (string): The fully qualified name of your main plugin class that implements `dev.railroadide.railroadpluginapi.Plugin` (e.g., `com.example.MyPlugin`).

- **Optional Fields:**
    - `author` (string): The author(s) of the plugin.
    - `description` (string): A brief description of what your plugin does.
    - `website` (string): A URL to your plugin's website or repository.
    - `license` (string): The license under which your plugin is distributed (e.g., `MIT`, `Apache 2.0`).
    - `icon` (string): A path to an icon for your plugin (e.g., `assets/icon.png`).
    - `dependencies` (object): An object defining external library dependencies and repositories. For details on the structure of this object, see [Managing Dependencies](./dependencies.md).

### Example `plugin.json`

```json
{
  "id": "my-plugin",
  "name": "My Awesome Plugin",
  "version": "1.0.0",
  "mainClass": "com.example.MyPlugin",
  "author": "Your Name",
  "description": "A plugin that does awesome things.",
  "website": "https://example.com/myplugin",
  "license": "MIT",
  "icon": "assets/icon.png",
  "dependencies": {
    "repositories": [
      {
        "id": "maven-central",
        "url": "https://repo.maven.apache.org/maven2"
      }
    ],
    "artifacts": [
      {
        "groupId": "com.google.code.gson",
        "artifactId": "gson",
        "version": "2.10.1"
      }
    ]
  }
}
```
