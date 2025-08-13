# RRHBox and RRVBox

`RRHBox` and `RRVBox` are custom horizontal and vertical box layouts, respectively, designed to maintain consistent styling and behavior within the Railroad application. They extend standard JavaFX `HBox` and `VBox`.

These components automatically apply Railroad-specific styling classes (`"Railroad"`, `"Pane"`, `"HBox"`/`"VBox"`, `"background-2"`) to ensure visual consistency.

## Constructors

- `RRHBox()` / `RRVBox()`: Creates a new HBox/VBox with default spacing.
- `RRHBox(double spacing)` / `RRVBox(double spacing)`: Creates a new HBox/VBox with the specified spacing between elements.

## Usage

```java
import dev.railroadide.core.ui.RRHBox;
import dev.railroadide.core.ui.RRVBox;
import dev.railroadide.core.ui.RRButton;
import dev.railroadide.core.ui.RRTextField;
import javafx.geometry.Insets;
import javafx.geometry.Pos;

// Horizontal layout
RRHBox hbox = new RRHBox(10); // 10 pixels spacing
hbox.setPadding(new Insets(10));
hbox.setAlignment(Pos.CENTER);
hbox.getChildren().addAll(new RRButton("myplugin.button.one"), new RRButton("myplugin.button.two"));

// Vertical layout
RRVBox vbox = new RRVBox(5); // 5 pixels spacing
vbox.setPadding(new Insets(5));
vbox.getChildren().addAll(new RRTextField("myplugin.textfield.placeholder.submit"), new RRButton("myplugin.button.submit"));
```
