# RRBorderPane

`RRBorderPane` is a custom layout pane that extends standard JavaFX `BorderPane`. It lays out children in five regions: top, bottom, left, right, and center. It automatically applies Railroad-specific styling.

## Constructors

- `RRBorderPane()`: Creates a new BorderPane.

## Usage

```java
import dev.railroadide.core.ui.RRBorderPane;
import dev.railroadide.core.ui.RRButton;
import javafx.scene.control.Label;

RRBorderPane borderPane = new RRBorderPane();

// Set components in different regions
borderPane.setTop(new Label("Header"));
borderPane.setCenter(new RRButton("myplugin.button.center"));
borderPane.setBottom(new Label("Footer"));

// You can also set left and right components
// borderPane.setLeft(new Label("Sidebar Left"));
// borderPane.setRight(new Label("Sidebar Right"));
```
