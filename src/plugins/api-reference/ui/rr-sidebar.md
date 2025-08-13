# RRSidebar

`RRSidebar` is a modern sidebar component that extends `javafx.scene.layout.VBox`. It's designed for navigation menus and side panels, offering enhanced styling, smooth transitions, and support for header, content, and footer sections.

## Constructors

- `RRSidebar()`: Constructs a new sidebar with default left positioning and medium size.
- `RRSidebar(SidebarPosition position)`: Constructs a new sidebar with the specified position (`LEFT` or `RIGHT`).

## Key Methods

- `void setPosition(SidebarPosition position)`: Sets the position of the sidebar.
- `void setSidebarSize(SidebarSize size)`: Sets the size of the sidebar (`SMALL`, `MEDIUM`, `LARGE`).
- `void setCollapsed(boolean collapsed)`: Toggles the collapsed state of the sidebar with animation.
- `void toggleCollapse()`: Toggles the collapsed state.
- `void addHeaderContent(Node... nodes)`: Adds content to the header section.
- `void addContent(Node... nodes)`: Adds content to the main content area.
- `void addFooterContent(Node... nodes)`: Adds content to the footer section.
- `void clearHeader()`: Clears all content from the header.
- `void clearContent()`: Clears all content from the main area.
- `void clearFooter()`: Clears all content from the footer.
- `void setFloating(boolean floating)`: Applies a floating style to the sidebar.
- `void setTransparent(boolean transparent)`: Applies a transparent style to the sidebar.

## Enums

- `SidebarPosition`: `LEFT`, `RIGHT`.
- `SidebarSize`: `SMALL`, `MEDIUM`, `LARGE`.

## Usage Example

```java
import dev.railroadide.core.ui.RRSidebar;
import dev.railroadide.core.ui.RRSidebar.SidebarPosition;
import dev.railroadide.core.ui.RRSidebar.SidebarSize;
import dev.railroadide.core.ui.RRNavigationItem;
import dev.railroadide.core.ui.RRButton;
import javafx.scene.control.Label;
import org.kordamp.ikonli.fontawesome6.FontAwesomeSolid;

// Assuming localization keys:
// myplugin.sidebar.header=My Plugin
// myplugin.nav.dashboard=Dashboard
// myplugin.nav.settings=Settings
// myplugin.sidebar.footer=Version 1.0

RRSidebar sidebar = new RRSidebar(SidebarPosition.LEFT);
sidebar.setSidebarSize(SidebarSize.MEDIUM);

// Add header content
sidebar.addHeaderContent(new Label("myplugin.sidebar.header"));

// Add navigation items to the main content area
sidebar.addContent(
    new RRNavigationItem("myplugin.nav.dashboard", FontAwesomeSolid.HOME),
    new RRNavigationItem("myplugin.nav.settings", FontAwesomeSolid.COG)
);

// Add footer content
sidebar.addFooterContent(new Label("myplugin.sidebar.footer"));

// Example of toggling collapse state
RRButton toggleButton = new RRButton("myplugin.button.toggle_sidebar");
toggleButton.setOnAction(event -> sidebar.toggleCollapse());

// In a real application, you would add the sidebar and toggleButton to a scene graph.
```
