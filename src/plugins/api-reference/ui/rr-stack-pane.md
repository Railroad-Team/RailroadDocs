# RRStackPane

`RRStackPane` is a custom layout pane that extends standard JavaFX `StackPane`. It stacks all its children on top of each other, with the last added child on top. It automatically applies Railroad-specific styling.

## Constructors

- `RRStackPane()`: Creates a new StackPane.

## Usage

```java
import dev.railroadide.core.ui.RRStackPane;
import dev.railroadide.core.ui.RRButton;
import javafx.scene.control.Label;
import javafx.scene.paint.Color;
import javafx.scene.shape.Rectangle;

RRStackPane stackPane = new RRStackPane();

// Add a background rectangle
Rectangle background = new Rectangle(200, 150, Color.LIGHTBLUE);

// Add a label on top of the rectangle
Label overlayLabel = new Label("Overlay Text");
overlayLabel.setStyle("-fx-font-size: 20px; -fx-text-fill: white;");

// Add a button on top of the label
RRButton topButton = new RRButton("myplugin.button.click_me");

stackPane.getChildren().addAll(background, overlayLabel, topButton);
```
