# Localization API

The Railroad Plugin API provides a localization system to help plugins support multiple languages. This is achieved through the `LocalizationService` and `LocalizationServiceLocator`, which load translations from `.lang` files.

## `LocalizationService`

The `LocalizationService` interface provides methods for retrieving localized strings based on a key and optional arguments. This allows your plugin to display messages, UI elements, and other text in the user's preferred language.

### Key Methods:

- `String get(String key)`: Retrieves the localized string for the given key.
- `String get(String key, Object... args)`: Retrieves the localized string for the given key, replacing placeholders with the provided arguments.

## `LocalizationServiceLocator`

The `LocalizationServiceLocator` is a utility class that provides access to the singleton instance of the `LocalizationService`. Plugins should use this locator to obtain the service instance.

### Example: Using LocalizationService

```java
import dev.railroadide.railroadpluginapi.Plugin;
import dev.railroadide.railroadpluginapi.PluginContext;
import dev.railroadide.core.localization.LocalizationService;
import dev.railroadide.core.localization.LocalizationServiceLocator;

public class MyLocalizationPlugin implements Plugin {

    @Override
    public void onEnable(PluginContext context) {
        LocalizationService localizationService = LocalizationServiceLocator.getInstance();

        // Get a simple localized string
        String welcomeMessage = localizationService.get("plugin.myplugin.welcome_message");
        context.getLogger().info(welcomeMessage);

        // Get a localized string with arguments
        String greeting = localizationService.get("plugin.myplugin.greeting", "John Doe");
        context.getLogger().info(greeting);
    }

    @Override
    public void onDisable(PluginContext context) {
        // Clean up resources if necessary
    }
}
```

## Language Files (`.lang`)

Translations are stored in `.lang` files, which are simple key-value pair files. These files should be placed in your plugin's resources directory, typically under `src/main/resources/assets/<your_plugin_id>/lang/`.

For example, an English (US) language file would be named `en_us.lang`.

### Format:

Each line in a `.lang` file represents a key-value pair, where the key is used to retrieve the localized string, and the value is the translated text. Comments can be added using `#`.

```properties
# General messages
plugin.myplugin.welcome_message=Welcome to My Plugin!
plugin.myplugin.greeting=Hello, %s!

# Settings related messages
settings.myplugin.enable_feature.title=Enable My Feature
settings.myplugin.enable_feature.description=Toggles the main feature of my plugin.
```

### Placeholders:

Placeholders in the translated strings are denoted by `%s`, `%d`, etc., similar to `String.format()` in Java, corresponding to the order of arguments passed to the `localizationService.get()` method.

For instance, in `Hello, %s!`, `%s` will be replaced by the first string argument provided.

By organizing your translations in these `.lang` files, the `LocalizationService` can automatically load the appropriate language based on the application's current locale, providing a seamless localized experience for your users.