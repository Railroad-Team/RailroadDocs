# Creating Your Plugin Class

Once your project is set up, you can create your main plugin class that implements the `dev.railroadide.railroadpluginapi.Plugin` interface. This class will contain the logic for your plugin.

## Example

Here is an example of a simple plugin that logs a message to the console when it is enabled:

```java
import dev.railroadide.railroadpluginapi.Plugin;
import dev.railroadide.railroadpluginapi.PluginContext;

public class MyPlugin implements Plugin {
    @Override
    public void onEnable(PluginContext context) {
        context.getLogger().info("MyPlugin has been enabled!");
    }

    @Override
    public void onDisable(PluginContext context) {
        context.getLogger().info("MyPlugin has been disabled!");
    }
}
```
