# Plugin Structure

A plugin is a single class that implements the `Plugin` interface. This class is the entry point for your plugin, and is where you will register all of your plugin's features.

## The `Plugin` Interface

The `Plugin` interface provides two methods that you can implement to add your own functionality. These methods are called at different points in the plugin lifecycle, such as when the plugin is enabled or disabled.

### `onEnable()`

This method is called when the plugin is enabled. This is where you should register any event listeners, commands, or other features that your plugin provides.

### `onDisable()`

This method is called when the plugin is disabled. This is where you should unregister any event listeners, commands, or other features that your plugin provides. It's crucial to clean up resources and unregister listeners to prevent memory leaks and unexpected behavior.

## Event Handling

Plugins can subscribe to events published by the Railroad application or other plugins using the `EventBus` available through the `PluginContext`. To handle an event, you typically implement the `EventListener` interface for the specific event type.

### Example: Subscribing to Events

Here is an example of a plugin that subscribes to `ProjectEvent` to detect when projects are opened or closed. It also demonstrates proper cleanup in `onDisable`.

```java
import dev.railroadide.railroadpluginapi.Plugin;
import dev.railroadide.railroadpluginapi.PluginContext;
import dev.railroadide.railroadpluginapi.event.EventListener;
import dev.railroadide.railroadpluginapi.events.ProjectEvent;

public class MyPlugin implements Plugin {
    private EventListener<ProjectEvent> projectEventListener;

    @Override
    public void onEnable(PluginContext context) {
        // Define the event listener as a lambda or an anonymous class
        projectEventListener = event -> {
            if (event.isOpened()) {
                context.getLogger().info("Project '" + event.project().getAlias() + "' has been opened!");
            } else if (event.isClosed()) {
                context.getLogger().info("Project '" + event.project().getAlias() + "' has been closed!");
            }
        };
        // Subscribe the listener to ProjectEvent
        context.getEventBus().subscribe(ProjectEvent.class, projectEventListener);
    }

    @Override
    public void onDisable(PluginContext context) {
        // It is good practice to unregister event listeners when the plugin is disabled.
        if (projectEventListener != null) {
            context.getEventBus().unsubscribe(ProjectEvent.class, projectEventListener);
            context.getLogger().info("Unsubscribed ProjectEvent listener.");
        }
        context.getLogger().info("MyPlugin is disabling. Remember to clean up resources!");
    }
}
```
