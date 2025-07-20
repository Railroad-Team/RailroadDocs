# Events

The Railroad Plugin API provides a robust event system that allows plugins to react to various occurrences within the application. This system is built around the `EventBus`, `Event`, and `EventListener` interfaces.

## `Event`

This is the base interface for all events in the Railroad system. All custom events that you wish to publish or subscribe to must implement this interface.

## `EventBus`

The `EventBus` is the central component for the event system. It allows plugins to publish new events and subscribe to existing ones. You can obtain an instance of the `EventBus` from the `PluginContext`.

### Methods:

- `void publish(Event event)`: Publishes an event to the bus, notifying all subscribed listeners.
- `void subscribe(Class<T> eventType, EventListener<T> listener)`: Subscribes a given `EventListener` to events of a specific type.
- `void unsubscribe(Class<T> eventType, EventListener<T> listener)`: Unsubscribes a previously registered `EventListener` from events of a specific type. This is crucial for proper resource management and preventing memory leaks when a plugin is disabled.

## `EventListener`

This interface is used to define a callback for handling events. When an event of the type `T` (which extends `Event`) is published, the `handle` method of the `EventListener` will be invoked.

### Methods:

- `void handle(T event)`: This method is called when an event of type `T` is published.

## Core Events (`io.github.railroad.railroadpluginapi.events`)

The API provides several built-in events that cover common application occurrences:

- `EnterDefaultStateEvent`: Fired when the application enters its default state.
- `FileEvent`: Represents events related to file operations (e.g., activation).
- `FileRenamedEvent`: Fired when a file is renamed.
- `ProjectAliasChangedEvent`: Fired when a project's alias is changed.
- `ProjectEvent`: Represents events related to project lifecycle (e.g., opening, closing).

### Example: Subscribing to `ProjectEvent`

As seen in the `RailroadDiscordPlugin`, you can subscribe to `ProjectEvent` to perform actions when a project is opened or closed:

```java
import io.github.railroad.railroadpluginapi.Plugin;
import io.github.railroad.railroadpluginapi.PluginContext;
import io.github.railroad.railroadpluginapi.event.EventListener;
import io.github.railroad.railroadpluginapi.events.ProjectEvent;

public class ProjectLoggerPlugin implements Plugin {

    @Override
    public void onEnable(PluginContext context) {
        context.getEventBus().subscribe(ProjectEvent.class, event -> {
            if (event.isOpened()) {
                context.getLogger().info("Project '" + event.project().getAlias() + "' has been opened!");
            } else if (event.isClosed()) {
                context.getLogger().info("Project '" + event.project().getAlias() + "' has been closed!");
            }
        });
    }

    @Override
    public void onDisable(PluginContext context) {
        // Event listeners are typically managed by the EventBus and don't require explicit unsubscription
        // if the plugin context handles their lifecycle.
    }
}
```