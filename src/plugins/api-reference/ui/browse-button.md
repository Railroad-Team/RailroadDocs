# BrowseButton

`BrowseButton` is a specialized button component that extends `LocalizedButton` (which in turn extends `RRButton`). It is designed to simplify the process of opening file or directory browser dialogs and automatically updating a `TextField` with the selected path(s).

## Constructors

- `BrowseButton()`: Creates a new `BrowseButton` with default localized text (`"railroad.home.project.browse"`).

## Key Properties (via `ObjectProperty`)

`BrowseButton` exposes several properties that control its behavior. You can bind to these properties or set their values directly.

- `ObjectProperty<Window> parentWindowProperty()`: The `Window` that will own the browser dialog. Essential for proper dialog behavior.
- `ObjectProperty<TextField> textFieldProperty()`: The `TextField` whose text will be updated with the selected file or directory path.
- `ObjectProperty<BrowseType> browseTypeProperty()`: Determines the type of browser to open (`FILE`, `DIRECTORY`, or `IMAGE`).
- `ObjectProperty<BrowseSelectionMode> selectionModeProperty()`: Determines if single or multiple selections are allowed (`SINGLE`, `MULTIPLE`).
- `ObjectProperty<Path> defaultLocationProperty()`: The initial directory for the browser dialog.

## Enums

- `BrowseType`: Defines the type of browsing operation:
    - `FILE`: For selecting files.
    - `DIRECTORY`: For selecting directories.
    - `IMAGE`: For selecting image files (with predefined filters).
- `BrowseSelectionMode`: Defines the selection mode:
    - `SINGLE`: Allows selecting only one item.
    - `MULTIPLE`: Allows selecting multiple items.

## Usage Example

```java
import io.github.railroad.core.ui.BrowseButton;
import io.github.railroad.core.ui.BrowseButton.BrowseType;
import io.github.railroad.core.ui.BrowseButton.BrowseSelectionMode;
import io.github.railroad.core.ui.RRTextField;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;
import java.nio.file.Paths;

public class MyBrowsePlugin implements Plugin {

    @Override
    public void onEnable(PluginContext context) {
        Stage primaryStage = new Stage(); // In a real app, you'd get the primary stage

        RRTextField pathTextField = new RRTextField();
        pathTextField.setPromptText("Select a file or directory");

        BrowseButton browseButton = new BrowseButton();
        browseButton.parentWindowProperty().set(primaryStage); // Set the parent window
        browseButton.textFieldProperty().set(pathTextField); // Link to the text field
        browseButton.browseTypeProperty().set(BrowseType.DIRECTORY); // Set to browse directories
        browseButton.selectionModeProperty().set(BrowseSelectionMode.SINGLE); // Allow single selection
        browseButton.defaultLocationProperty().set(Paths.get(System.getProperty("user.home")));

        HBox layout = new HBox(10);
        layout.getChildren().addAll(pathTextField, browseButton);

        // In a real plugin, you would add 'layout' to a scene and display it.
    }

    @Override
    public void onDisable(PluginContext context) {
        // Clean up
    }
}
```
