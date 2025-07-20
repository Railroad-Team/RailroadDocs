# Accessing Services

The `PluginContext` provides access to various services that your plugin can use to interact with the Railroad application. You can retrieve a service by calling the `getService()` method on the `PluginContext`.

### Example

Here is an example of how to access the `ApplicationInfoService` to get the application version:

```java
import io.github.railroad.railroadpluginapi.Plugin;
import io.github.railroad.railroadpluginapi.PluginContext;
import io.github.railroad.railroadpluginapi.services.ApplicationInfoService;

public class MyPlugin implements Plugin {
    @Override
    public void onEnable(PluginContext context) {
        ApplicationInfoService appInfoService = context.getService(ApplicationInfoService.class);
        if (appInfoService != null) {
            context.getLogger().info("Railroad Application Version: " + appInfoService.getVersion());
        } else {
            context.getLogger().warn("ApplicationInfoService not available.");
        }
    }

    @Override
    public void onDisable(PluginContext context) {
        // Cleanup code here
    }
}
```
