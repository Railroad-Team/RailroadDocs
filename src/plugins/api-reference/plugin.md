# Plugin API

These are the core components for creating a plugin in Railroad.

## `Plugin`

This is the main interface that your plugin class must implement. It defines the lifecycle methods that the Railroad application will call when your plugin is loaded and unloaded.

### Methods

- `void onEnable(PluginContext context)`: Called when your plugin is enabled. This is the primary entry point for your plugin's logic. You receive a `PluginContext` object which provides access to various application services and functionalities.
- `void onDisable(PluginContext context)`: Called when your plugin is disabled. Use this method to clean up any resources, unregister listeners, or save state before your plugin is unloaded.

## `PluginContext`

The `PluginContext` interface provides your plugin with access to the Railroad application's core services, event bus, logger, and other essential functionalities. An instance of `PluginContext` is passed to your plugin's `onEnable` and `onDisable` methods.

### Key Methods

- `PluginDescriptor getDescriptor()`: Returns the descriptor of the plugin, containing metadata like name, version, and description.
- `EventBus getEventBus()`: Provides access to the application's event bus, allowing your plugin to publish and subscribe to events.
- `Logger getLogger()`: Returns a logger instance specific to your plugin for logging messages, warnings, and errors.
- `void setLogger(Logger logger)`: Allows the plugin to set its own logger implementation.
- `<T> void registerExtension(Class<T> extensionPoint, T extension)`: Registers an extension for a specified extension point.
- `<T> List<T> getExtensions(Class<T> extensionPoint)`: Retrieves all registered extensions for a given extension point.
- `Path getDataDirectory()`: Returns the path to the plugin's data directory for persistent storage.
- `<T> T getService(Class<T> serviceClass)`: Retrieves a shared service instance from the application.
- `<T> Registry<T> getRegistry(Class<T> type)`: Retrieves a type-specific registry.
- `Registry<?> getRegistry(String id)`: Retrieves a registry by its string identifier.

## `PluginDescriptor`

This interface describes your plugin and contains metadata such as its name, version, and description. This information is typically loaded from a plugin configuration file (e.g., `plugin.json`).
