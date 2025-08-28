# Working with Projects and Documents

Your plugin can interact with the user's projects and the documents within them. This is crucial for plugins that need to understand the user's current context, such as which project is open or which file is being edited.

## Accessing Project and Document Information

The primary way to access information about the current project and active document is through the `IDEStateService`, which can be retrieved from the `PluginContext`.

### Example: Getting Current Project and Document

```java
import dev.railroadide.railroadpluginapi.Plugin;
import dev.railroadide.railroadpluginapi.PluginContext;
import dev.railroadide.railroadpluginapi.services.IDEStateService;
import dev.railroadide.railroadpluginapi.dto.Project;
import dev.railroadide.railroadpluginapi.dto.Document;

public class ProjectDocumentPlugin implements Plugin {

    @Override
    public void onEnable(PluginContext context) {
        IDEStateService ideStateService = context.getService(IDEStateService.class);

        if (ideStateService != null) {
            // Get the current active project
            Project currentProject = ideStateService.getCurrentProject();
            if (currentProject != null) {
                context.getLogger().info("Current Project Alias: " + currentProject.getAlias());
                context.getLogger().info("Current Project Base Path: " + currentProject.getBasePath());
            } else {
                context.getLogger().warn("No project is currently open.");
            }

            // Get the currently active document (file in editor)
            Document activeDocument = ideStateService.getActiveDocument();
            if (activeDocument != null) {
                context.getLogger().info("Active Document Name: " + activeDocument.getName());
                context.getLogger().info("Active Document Path: " + activeDocument.getPath());
                // Note: Getting content might be resource-intensive for large files
                // context.getLogger().info("Active Document Content: " + activeDocument.getContent());
            } else {
                context.getLogger().warn("No document is currently active.");
            }
        } else {
            context.getLogger().warn("IDEStateService not available.");
        }
    }

    @Override
    public void onDisable(PluginContext context) {
        // Clean up resources if necessary
    }
}
```

## Responding to Project and File Events

Plugins can also react to changes in project and document states by subscribing to relevant events via the `EventBus`.

### `ProjectEvent`

This event is fired when a project is opened or closed. It provides access to the `Project` object that was affected.

### Example: Handling Project Open/Close Events

```java
import dev.railroadide.railroadpluginapi.Plugin;
import dev.railroadide.railroadpluginapi.PluginContext;
import dev.railroadide.railroadpluginapi.event.EventListener;
import dev.railroadide.railroadpluginapi.events.ProjectEvent;

public class ProjectEventListenerPlugin implements Plugin {

    private EventListener<ProjectEvent> projectEventListener;

    @Override
    public void onEnable(PluginContext context) {
        projectEventListener = event -> {
            if (event.isOpened()) {
                context.getLogger().info("Project Opened: " + event.project().getAlias());
            } else if (event.isClosed()) {
                context.getLogger().info("Project Closed: " + event.project().getAlias());
            }
        };
        context.getEventBus().subscribe(ProjectEvent.class, projectEventListener);
    }

    @Override
    public void onDisable(PluginContext context) {
        context.getEventBus().unsubscribe(ProjectEvent.class, projectEventListener);
    }
}
```

### `FileEvent`

This event is fired when a file becomes active (e.g., opened in the editor or switched to). It provides access to the `Document` object.

### Example: Handling Active File Changes

```java
import dev.railroadide.railroadpluginapi.Plugin;
import dev.railroadide.railroadpluginapi.PluginContext;
import dev.railroadide.railroadpluginapi.event.EventListener;
import dev.railroadide.railroadpluginapi.events.FileEvent;
import dev.railroadide.railroadpluginapi.dto.Document;

public class FileEventListenerPlugin implements Plugin {

    private EventListener<FileEvent> fileEventListener;

    @Override
    public void onEnable(PluginContext context) {
        fileEventListener = event -> {
            if (event.isActivated()) {
                Document activeFile = event.file();
                if (activeFile != null) {
                    context.getLogger().info("Active File Changed to: " + activeFile.getName());
                    context.getLogger().info("File Path: " + activeFile.getPath());
                }
            }
        };
        context.getEventBus().subscribe(FileEvent.class, fileEventListener);
    }

    @Override
    public void onDisable(PluginContext context) {
        context.getEventBus().unsubscribe(FileEvent.class, fileEventListener);
    }
}
```
