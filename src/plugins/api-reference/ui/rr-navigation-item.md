# RRNavigationItem

`RRNavigationItem` is a modern navigation item component designed for use in sidebars and navigation menus. It extends `javafx.scene.layout.VBox` and supports icons, localized labels, badges, and smooth hover animations.

## Constructors

- `RRNavigationItem()`: Constructs a new navigation item with default styling and no text.
- `RRNavigationItem(String text)`: Constructs a new navigation item with non-localized text.
- `RRNavigationItem(String localizationKey, Object... args)`: Constructs a new navigation item with localized text.
- `RRNavigationItem(String localizationKey, Ikon iconCode, Object... args)`: Constructs a new navigation item with localized text and an icon.

## Static Factory Methods

- `static RRNavigationItem create(String text, Ikon icon)`: Creates a navigation item with non-localized text and an icon.
- `static RRNavigationItem create(String text)`: Creates a navigation item with non-localized text only.

## Key Methods

- `void setLocalizedText(String localizationKey, Object... args)`: Sets the navigation item's text using a localization key.
- `void setText(String text)`: Sets the navigation item's text using a plain string.
- `void setNavigationItemSize(NavigationItemSize size)`: Sets the size of the navigation item (`SMALL`, `MEDIUM`, `LARGE`).
- `void setNavigationItemState(NavigationItemState state)`: Sets the visual state of the item (`NORMAL`, `ACTIVE`, `DISABLED`, `HIGHLIGHTED`).
- `void setLocalizedBadge(String localizationKey, Object... args)`: Sets a localized badge text to display next to the item.
- `void setBadge(String badgeText)`: Sets a non-localized badge text.
- `void setIcon(Ikon iconCode)`: Sets an icon for the navigation item.
- `void setRounded(boolean rounded)`: Applies a rounded style.
- `void setOutlined(boolean outlined)`: Applies an outlined style.
- `void setCompact(boolean compact)`: Applies a compact style.
- `void setSelected(boolean selected)`: Sets the selected state of the item.

## Enums

- `NavigationItemSize`: `SMALL`, `MEDIUM`, `LARGE`.
- `NavigationItemState`: `NORMAL`, `ACTIVE`, `DISABLED`, `HIGHLIGHTED`.

## Usage Example

```java
import io.github.railroad.core.ui.RRNavigationItem;
import io.github.railroad.core.ui.RRNavigationItem.NavigationItemSize;
import io.github.railroad.core.ui.RRNavigationItem.NavigationItemState;
import javafx.scene.layout.VBox;
import org.kordamp.ikonli.fontawesome6.FontAwesomeSolid;

// Assuming localization keys like:
// myplugin.nav.dashboard=Dashboard
// myplugin.nav.settings=Settings
// myplugin.nav.notifications=Notifications
// myplugin.badge.new=New!

VBox sidebar = new VBox();

// Create a basic navigation item
RRNavigationItem dashboardItem = new RRNavigationItem("myplugin.nav.dashboard", FontAwesomeSolid.HOME);
dashboardItem.setNavigationItemSize(NavigationItemSize.MEDIUM);
dashboardItem.setNavigationItemState(NavigationItemState.NORMAL);

// Create a selected navigation item with a badge
RRNavigationItem settingsItem = new RRNavigationItem("myplugin.nav.settings", FontAwesomeSolid.COG);
settingsItem.setSelected(true);
settingsItem.setLocalizedBadge("myplugin.badge.new");

// Create a disabled item
RRNavigationItem disabledItem = new RRNavigationItem("myplugin.nav.notifications", FontAwesomeSolid.BELL);
disabledItem.setNavigationItemState(NavigationItemState.DISABLED);

sidebar.getChildren().addAll(dashboardItem, settingsItem, disabledItem);
```
