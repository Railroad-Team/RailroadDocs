# RRAnchorPane

`RRAnchorPane` is a custom layout pane that extends standard JavaFX `AnchorPane`. It allows you to anchor the edges of its children to the edges of the pane, or to a specific offset from the edges. It automatically applies Railroad-specific styling.

## Constructors

- `RRAnchorPane()`: Creates a new AnchorPane.

## Usage

```java
import io.github.railroad.core.ui.RRAnchorPane;
import io.github.railroad.core.ui.RRButton;
import javafx.scene.layout.AnchorPane;

RRAnchorPane anchorPane = new RRAnchorPane();

RRButton topLeftButton = new RRButton("myplugin.button.top_left");
AnchorPane.setTopAnchor(topLeftButton, 10.0);
AnchorPane.setLeftAnchor(topLeftButton, 10.0);

RRButton bottomRightButton = new RRButton("myplugin.button.bottom_right");
AnchorPane.setBottomAnchor(bottomRightButton, 10.0);
AnchorPane.setRightAnchor(bottomRightButton, 10.0);

anchorPane.getChildren().addAll(topLeftButton, bottomRightButton);
```
