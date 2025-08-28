# Registries

Registries in Railroad provide a way to manage collections of objects of a specific type. Plugins can interact with registries to register or retrieve various components, such as settings, commands, or other custom types.

## Accessing Registries

You can access registries through the `PluginContext` using the `getRegistry()` method. The `Registries` utility class also provides convenient static methods to get commonly used registries, such as the settings registry.

### Example: Registering a Custom Setting

This example demonstrates how to access the settings registry and register a custom setting for your plugin. This is a common pattern for allowing users to configure aspects of your plugin.

```java
import dev.railroadide.core.registry.Registry;
import dev.railroadide.core.settings.DefaultSettingCodecs;
import dev.railroadide.core.settings.Setting;
import dev.railroadide.core.settings.SettingCategory;
import dev.railroadide.railroadpluginapi.Plugin;
import dev.railroadide.railroadpluginapi.PluginContext;
import dev.railroadide.railroadpluginapi.Registries;

public class MySettingPlugin implements Plugin {
    // Define a unique ID for your setting
    private static final String MY_CUSTOM_SETTING_ID = "myplugin:custom_value";

    @Override
    public void onEnable(PluginContext context) {
        Registry<Setting<?>> settingRegistry = Registries.getSettingsRegistry(context);

        // Create a new setting
        Setting<String> customSetting = Setting.builder(String.class, MY_CUSTOM_SETTING_ID)
                .treePath("plugins.myplugin") // Define where it appears in the settings UI
                .category(SettingCategory.simple("myplugin:general")) // Category for the setting
                .codec(DefaultSettingCodecs.STRING) // Codec for serialization/deserialization
                .defaultValue("Hello, Railroad!") // Default value for the setting
                .build();

        // Register the setting with the registry
        settingRegistry.register(MY_CUSTOM_SETTING_ID, customSetting);

        // You can also add a listener to react when the setting's value changes
        customSetting.addListener((oldValue, newValue) -> {
            context.getLogger().info("Custom setting changed from '" + oldValue + "' to '" + newValue + "'");
        });

        // Retrieve the setting's current value
        String currentValue = customSetting.getValue();
        context.getLogger().info("Initial custom setting value: " + currentValue);
    }

    @Override
    public void onDisable(PluginContext context) {
        Registry<Setting<?>> settingRegistry = Registries.getSettingsRegistry(context);
        // It's good practice to unregister your settings when the plugin is disabled
        try {
            settingRegistry.unregister(MY_CUSTOM_SETTING_ID);
            context.getLogger().info("Unregistered custom setting: " + MY_CUSTOM_SETTING_ID);
        } catch (Exception e) {
            context.getLogger().warn("Failed to unregister setting '" + MY_CUSTOM_SETTING_ID + "': " + e.getMessage());
        }
    }
}
```

## `Registry` Interface

The `dev.railroadide.core.registry.Registry` interface defines the common operations for managing collections of items. Any registry you obtain from the `PluginContext` or `Registries` utility class will implement this interface.

### Key Methods

- `String getId()`: Returns the unique identifier of the registry.
- `Type getType()`: Returns the generic type of items managed by the registry.
- `T register(String id, T item)`: Registers an item with a given ID.
- `T unregister(String id)`: Unregisters an item by its ID.
- `T get(String id)`: Retrieves an item by its ID.
- `boolean contains(String id)`: Checks if an item with the given ID is registered.
- `List<T> values()`: Returns a list of all registered items.
- `List<String> keys()`: Returns a list of all registered item IDs.
- `Map<String, T> entries()`: Returns a map of all registered items, with their IDs as keys.

### Example: Interacting with a Generic Registry

```java
import dev.railroadide.core.registry.Registry;
import dev.railroadide.railroadpluginapi.Plugin;
import dev.railroadide.railroadpluginapi.PluginContext;

public class MyGenericRegistryPlugin implements Plugin {

    // A simple custom class to register
    static class MyCustomObject {
        private String data;
        public MyCustomObject(String data) { this.data = data; }
        public String getData() { return data; }
    }

    @Override
    public void onEnable(PluginContext context) {
        // Obtain a generic registry (e.g., if you registered one in the core)
        // For demonstration, let's assume a registry for MyCustomObject exists with ID "myplugin:custom_objects"
        Registry<MyCustomObject> customObjectRegistry = context.getRegistry("myplugin:custom_objects");

        if (customObjectRegistry != null) {
            // Register an item
            MyCustomObject obj1 = new MyCustomObject("First Object");
            customObjectRegistry.register("obj1", obj1);
            context.getLogger().info("Registered obj1.");

            // Retrieve an item
            MyCustomObject retrievedObj = customObjectRegistry.get("obj1");
            if (retrievedObj != null) {
                context.getLogger().info("Retrieved obj1 data: " + retrievedObj.getData());
            }

            // Check if an item exists
            boolean containsObj2 = customObjectRegistry.contains("obj2");
            context.getLogger().info("Contains obj2: " + containsObj2);

            // List all keys
            context.getLogger().info("All registered keys: " + customObjectRegistry.keys());

            // Unregister an item
            customObjectRegistry.unregister("obj1");
            context.getLogger().info("Unregistered obj1.");
        } else {
            context.getLogger().warn("Custom object registry not found.");
        }
    }

    @Override
    public void onDisable(PluginContext context) {
        // Clean up
    }
}
```
