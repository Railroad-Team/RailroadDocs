# RRGridPane

`RRGridPane` is a flexible layout for arranging components in a grid of rows and columns, adhering to Railroad's UI design. It extends standard JavaFX `GridPane`.

This component automatically applies Railroad-specific styling classes (`"Railroad"`, `"Pane"`, `"GridPane"`, `"background-2"`) to ensure visual consistency.

## Constructors

- `RRGridPane()`: Creates a new GridPane.

## Usage

```java
import dev.railroadide.core.ui.RRGridPane;
import dev.railroadide.core.ui.RRTextField;
import dev.railroadide.core.ui.RRButton;
import javafx.geometry.Insets;

RRGridPane gridPane = new RRGridPane();
gridPane.setHgap(10);
gridPane.setVgap(10);
gridPane.setPadding(new Insets(10));

// Add components to specific grid cells
gridPane.add(new RRTextField("myplugin.textfield.placeholder.firstname"), 0, 0); // (column, row)
gridPane.add(new RRTextField("myplugin.textfield.placeholder.lastname"), 1, 0);
gridPane.add(new RRButton("myplugin.button.save"), 0, 1, 2, 1); // (column, row, columnspan, rowspan)
```