# Handling Events

The Railroad Plugin API has a powerful event system that allows your plugin to react to things happening in the IDE.

## `EventBus`

The `EventBus` is used to publish and subscribe to events. You can get an instance of the `EventBus` from the `PluginContext`.

## `EventListener`

To listen for events, create a class that implements the `EventListener` interface.

## Common Events

- `ProjectEvent`: Fired when a project is opened or closed.
- `FileEvent`: Fired when a file is opened, closed, or modified.
- `EnterDefaultStateEvent`: Fired when the IDE enters its default state.

Check the `dev.railroadide.railroadpluginapi.events` package for a full list of events.
