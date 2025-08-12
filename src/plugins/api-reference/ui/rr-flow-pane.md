# RRFlowPane

`RRFlowPane` is a custom layout pane that extends standard JavaFX `FlowPane`. It arranges its children in a flow, wrapping to the next row or column when the current row or column is full. It automatically applies Railroad-specific styling.

## Constructors

- `RRFlowPane()`: Creates a new FlowPane.

## Usage

```java
import dev.railroadide.core.ui.RRFlowPane;
import dev.railroadide.core.ui.RRButton;
import javafx.geometry.Insets;
import javafx.geometry.Orientation;

RRFlowPane flowPane = new RRFlowPane();
flowPane.setHgap(10);
flowPane.setVgap(10);
flowPane.setPadding(new Insets(10));
flowPane.setOrientation(Orientation.HORIZONTAL); // or VERTICAL

// Add multiple buttons, they will flow and wrap as needed
for (int i = 1; i <= 10; i++) {
    flowPane.getChildren().add(new RRButton("myplugin.button.item" + i));
}
```
