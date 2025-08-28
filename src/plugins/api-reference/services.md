# Services

Services in the Railroad Plugin API provide access to core functionalities and data within the Railroad application. Plugins can retrieve instances of these services through the `PluginContext` to interact with different parts of the system.

## Accessing Services

You can obtain a service instance by calling `context.getService(ServiceClass.class)`, where `ServiceClass` is the interface or class representing the service you wish to use.

### Example: Using `ApplicationInfoService` and `IDEStateService`

The `RailroadDiscordPlugin` demonstrates the use of `ApplicationInfoService` to get application version information and `IDEStateService` to retrieve the current project and file information, which are then used to update Discord Rich Presence.

```java
import dev.railroadide.railroadpluginapi.Plugin;
import dev.railroadide.railroadpluginapi.PluginContext;
import dev.railroadide.railroadpluginapi.events.ProjectEvent;
import dev.railroadide.railroadpluginapi.events.FileEvent;
import dev.railroadide.railroadpluginapi.services.ApplicationInfoService;
import dev.railroadide.railroadpluginapi.services.IDEStateService;
import dev.railroadide.railroadpluginapi.dto.Project;
import dev.railroadide.railroadpluginapi.dto.Document;

public class MyServicePlugin implements Plugin {

    @Override
    public void onEnable(PluginContext context) {
        ApplicationInfoService appInfoService = context.getService(ApplicationInfoService.class);
        IDEStateService ideStateService = context.getService(IDEStateService.class);

        if (appInfoService != null) {
            context.getLogger().info("Application Version: " + appInfoService.getVersion());
        }

        // Example of subscribing to ProjectEvent to use IDEStateService
        context.getEventBus().subscribe(ProjectEvent.class, event -> {
            if (event.isOpened()) {
                Project currentProject = ideStateService != null ? ideStateService.getCurrentProject() : null;
                if (currentProject != null) {
                    context.getLogger().info("Project opened: " + currentProject.getAlias());
                } else {
                    context.getLogger().warn("Current project not available via IDEStateService.");
                }
            }
        });

        // Example of subscribing to FileEvent to use IDEStateService
        context.getEventBus().subscribe(FileEvent.class, event -> {
            if (event.isActivated()) {
                Document activeFile = event.file();
                if (activeFile != null) {
                    context.getLogger().info("Active file: " + activeFile.getName());
                } else {
                    context.getLogger().warn("Active file not available.");
                }
            }
        });
    }

    @Override
    public void onDisable(PluginContext context) {
        // Clean up resources if necessary
    }
}
```

### Example: Using `VCSService`

The `RailroadGithubPlugin` utilizes the `VCSService` to manage version control profiles, specifically for adding and removing GitHub accounts. This demonstrates how plugins can extend core functionalities like VCS integration.

```java
import dev.railroadide.railroadpluginapi.Plugin;
import dev.railroadide.railroadpluginapi.PluginContext;
import dev.railroadide.railroadpluginapi.services.VCSService;
import dev.railroadide.github.data.GithubAccount; // Assuming this is part of your plugin's data model

public class MyVCSPlugin implements Plugin {

    @Override
    public void onEnable(PluginContext context) {
        VCSService vcsService = context.getService(VCSService.class);

        if (vcsService != null) {
            // Example: Adding a new GitHub account as a VCS profile
            GithubAccount newAccount = new GithubAccount(12345, "myusername", "token123"); // Dummy data
            vcsService.addProfile(newAccount);
            context.getLogger().info("Added GitHub account to VCS profiles.");

            // Example: Removing a GitHub account
            // vcsService.removeProfile(newAccount);
            // context.getLogger().info("Removed GitHub account from VCS profiles.");
        } else {
            context.getLogger().warn("VCSService not available.");
        }
    }

    @Override
    public void onDisable(PluginContext context) {
        // Clean up resources if necessary
    }
}
```
