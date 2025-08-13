# Settings API

The Railroad Plugin API provides a robust system for defining, managing, and persisting application and plugin-specific settings. This system allows for hierarchical organization of settings, type-safe value handling, and integration with the application's UI.

## `Setting`

The `Setting` class is the core component of the settings API. Each `Setting` represents a single configurable value within the application. Settings are typically registered with the settings registry and can be accessed and modified by plugins.

### Key Properties

- `id` (String): A unique identifier for the setting (e.g., `myplugin:my_setting_id`).
- `treePath` (String): Defines the hierarchical path for the setting, used for organizing settings in the UI (e.g., `plugins.myplugin.general`).
- `type` (Class&lt;T&gt;): The Java class representing the type of the setting's value (e.g., `String.class`, `Boolean.class`).
- `defaultValue` (T): The default value for the setting, used when the setting is first created or reset.
- `category` (SettingCategory): The category to which this setting belongs, used for UI grouping.
- `title` (String): A display title for the setting, often used in the UI.
- `description` (String): A descriptive text providing more information about the setting.
- `codec` (SettingCodec&lt;T, ?&gt;): Defines how the setting's value is serialized/deserialized and how it interacts with UI components.

### Building a Setting

You create `Setting` instances using its fluent `builder` API:

```java
import dev.railroadide.core.settings.Setting;
import dev.railroadide.core.settings.SettingCategory;
import dev.railroadide.core.settings.DefaultSettingCodecs;

// Example: A boolean setting for enabling/disabling a feature
Setting<Boolean> enableFeatureSetting = Setting.builder(Boolean.class, "myplugin:enable_feature")
        .treePath("plugins.myplugin.features")
        .category(SettingCategory.simple("myplugin:features"))
        .title("Enable Awesome Feature")
        .description("Toggles the main awesome feature of the plugin.")
        .codec(DefaultSettingCodecs.BOOLEAN)
        .defaultValue(true)
        .build();

// Example: A string setting for a custom message
Setting<String> customMessageSetting = Setting.builder(String.class, "myplugin:custom_message")
        .treePath("plugins.myplugin.messages")
        .category(SettingCategory.simple("myplugin:messages"))
        .title("Custom Welcome Message")
        .description("A message displayed to users on startup.")
        .codec(DefaultSettingCodecs.STRING)
        .defaultValue("Welcome to Railroad!")
        .build();
```

## `SettingCategory`

`SettingCategory` is used to group related settings together, primarily for organizing them within the application's user interface. Each category has an `id`, `title`, and `description`.

### Building a SettingCategory

```java
import dev.railroadide.core.settings.SettingCategory;

// Simple category
SettingCategory generalCategory = SettingCategory.simple("myplugin:general");

// Category with custom title and description
SettingCategory advancedCategory = SettingCategory.builder("myplugin:advanced")
        .title("Advanced Plugin Settings")
        .description("Configuration options for advanced users.")
        .build();
```

## `SettingCodec`

A `SettingCodec` defines how a setting's value is converted between its Java object representation, its JSON representation (for persistence), and its UI component representation (e.g., a `TextField` for a `String`).

### Key Components

- `nodeToValue`: Function to extract the value from a UI Node.
- `valueToNode`: Function to set the value in a UI Node.
- `jsonDecoder`: Function to decode a JSON element into the setting's value.
- `jsonEncoder`: Function to encode the setting's value into a JSON element.
- `createNode`: Function to create a new UI Node for the setting.

Plugins can create custom codecs for complex data types or custom UI components.

## `DefaultSettingCodecs`

Railroad provides a set of predefined `SettingCodec` instances for common data types, making it easy to create settings for basic types without defining custom codecs. These are available through `DefaultSettingCodecs`.

### Available Default Codecs

- `BOOLEAN` (for `Boolean` values, uses `CheckBox`)
- `STRING` (for `String` values, uses `TextField`)
- `INTEGER` (for `Integer` values, uses `TextField`)
- `DOUBLE` (for `Double` values, uses `TextField`)
- `FLOAT` (for `Float` values, uses `TextField`)
- `LONG` (for `Long` values, uses `TextField`)

### Example Usage

```java
import dev.railroadide.core.settings.DefaultSettingCodecs;
import dev.railroadide.core.settings.Setting;

Setting<Integer> maxAttempts = Setting.builder(Integer.class, "myplugin:max_attempts")
        .codec(DefaultSettingCodecs.INTEGER)
        .defaultValue(3)
        // ... other properties
        .build();
```

## Registering Settings

Settings are registered with the application's settings registry, which is accessible via `Registries.getSettingsRegistry(context)` from your `PluginContext`.

```java
import dev.railroadide.railroadpluginapi.Plugin;
import dev.railroadide.railroadpluginapi.PluginContext;
import dev.railroadide.railroadpluginapi.Registries;
import dev.railroadide.core.settings.Setting;
import dev.railroadide.core.settings.SettingCategory;
import dev.railroadide.core.settings.DefaultSettingCodecs;

public class MySettingsPlugin implements Plugin {

    private Setting<Boolean> enableFeatureSetting;

    @Override
    public void onEnable(PluginContext context) {
        // Retrieve the settings registry
        Registry<Setting<?>> settingRegistry = Registries.getSettingsRegistry(context);

        // Define and register a new setting
        enableFeatureSetting = Setting.builder(Boolean.class, "myplugin:enable_feature")
                .treePath("plugins.myplugin.features")
                .category(SettingCategory.simple("myplugin:features"))
                .title("Enable My Feature")
                .description("Toggles the main feature of my plugin.")
                .codec(DefaultSettingCodecs.BOOLEAN)
                .defaultValue(true)
                .addListener((oldValue, newValue) -> {
                    context.getLogger().info("Feature enabled status changed from " + oldValue + " to " + newValue);
                })
                .build();

        settingRegistry.register(enableFeatureSetting.getId(), enableFeatureSetting);
        context.getLogger().info("Setting '" + enableFeatureSetting.getId() + "' registered.");

        // Accessing a setting's current value
        boolean isFeatureEnabled = enableFeatureSetting.getValue();
        context.getLogger().info("Current feature enabled status: " + isFeatureEnabled);
    }

    @Override
    public void onDisable(PluginContext context) {
        // Unregister settings when the plugin is disabled to clean up resources
        Registry<Setting<?>> settingRegistry = Registries.getSettingsRegistry(context);
        try {
            if (enableFeatureSetting != null) {
                settingRegistry.unregister(enableFeatureSetting.getId());
                context.getLogger().info("Setting '" + enableFeatureSetting.getId() + "' unregistered.");
            }
        } catch (Exception e) {
            context.getLogger().warn("Failed to unregister setting: " + e.getMessage());
        }
    }
}
```
