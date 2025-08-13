# Gson Locator

The Railroad Plugin API provides a centralized way to access a pre-configured `Gson` instance through the `GsonLocator`. This ensures consistency in JSON serialization and deserialization across the application and its plugins.

## `GsonLocator`

The `GsonLocator` is a utility class that provides a singleton instance of `com.google.gson.Gson`. Plugins should use this locator to obtain the `Gson` instance for their JSON operations.

### Key Methods:

- `static Gson getInstance()`: Retrieves the singleton `Gson` instance. Throws `IllegalStateException` if the `Gson` instance has not been set (which is typically handled by the core application during startup).

### Example: Using `GsonLocator`

```java
import dev.railroadide.railroadpluginapi.Plugin;
import dev.railroadide.railroadpluginapi.PluginContext;
import dev.railroadide.core.gson.GsonLocator;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

public class MyGsonPlugin implements Plugin {

    @Override
    public void onEnable(PluginContext context) {
        try {
            Gson gson = GsonLocator.getInstance();

            // Example: Creating a JSON object
            JsonObject jsonObject = new JsonObject();
            jsonObject.addProperty("name", "Railroad Plugin");
            jsonObject.addProperty("version", 1.0);

            String jsonString = gson.toJson(jsonObject);
            context.getLogger().info("Generated JSON: " + jsonString);

            // Example: Parsing a JSON string
            String receivedJson = "{\"message\":\"Hello from JSON!\"}";
            JsonObject parsedObject = gson.fromJson(receivedJson, JsonObject.class);
            context.getLogger().info("Parsed message: " + parsedObject.get("message").getAsString());

        } catch (IllegalStateException e) {
            context.getLogger().error("Gson instance not available: " + e.getMessage());
        }
    }

    @Override
    public void onDisable(PluginContext context) {
        // Clean up resources if necessary
    }
}
```

```