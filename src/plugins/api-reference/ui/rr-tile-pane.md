# RRTilePane

`RRTilePane` is a custom layout pane that extends standard JavaFX `TilePane`. It lays out its children in a grid of uniformly sized cells. It automatically applies Railroad-specific styling.

## Constructors

- `RRTilePane()`: Creates a new TilePane.

## Usage

```java
import io.github.railroad.core.ui.RRTilePane;
import io.github.railroad.core.ui.RRButton;
import javafx.geometry.Insets;
import javafx.geometry.Orientation;

RRTilePane tilePane = new RRTilePane();
tilePane.setHgap(10);
tilePane.setVgap(10);
tilePane.setPadding(new Insets(10));
tilePane.setPrefColumns(3); // Arrange in 3 columns

// Add multiple buttons as tiles
for (int i = 1; i <= 9; i++) {
    tilePane.getChildren().add(new RRButton("myplugin.button.tile" + i));
}
```
