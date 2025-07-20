# RRDialogPane

`RRDialogPane` is a custom dialog pane that extends standard JavaFX `DialogPane`. It provides a consistent visual style for dialogs within the Railroad application.

## Constructors

- `RRDialogPane()`: Creates a new DialogPane.

## Usage

```java
import io.github.railroad.core.ui.RRDialogPane;
import javafx.scene.control.Alert;
import javafx.scene.control.ButtonType;
import javafx.scene.control.Label;

// Example of using RRDialogPane within an Alert
Alert alert = new Alert(Alert.AlertType.INFORMATION);
alert.setTitle("myplugin.dialog.info.title");
alert.setHeaderText("myplugin.dialog.info.header");

RRDialogPane dialogPane = new RRDialogPane();
dialogPane.setContent(new Label("myplugin.dialog.info.content"));
alert.setDialogPane(dialogPane);

alert.showAndWait();
```
