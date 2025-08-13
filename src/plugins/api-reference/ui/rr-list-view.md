# RRListView

`RRListView` is a modern list view component that extends standard JavaFX `ListView<T>`. It provides enhanced styling, smooth animations for item manipulation and selection, and supports different sizes and visual states.

## Constructors

- `RRListView()`: Constructs an empty modern list view with default styling and animations.
- `RRListView(ObservableList<T> items)`: Constructs a modern list view with the specified items and default styling.

## Static Factory Methods

- `static <T> RRListView<T> create(ObservableList<T> items)`: Creates a modern list view with the provided items.
- `static <T> RRListView<T> create()`: Creates an empty modern list view.

## Key Methods

- `void setListViewSize(ListViewSize size)`: Sets the size of the list view (e.g., `SMALL`, `MEDIUM`, `LARGE`).
- `void setAnimationsEnabled(boolean enabled)`: Enables or disables animations for item changes and selection.
- `void setBordered(boolean bordered)`: Applies a bordered style to the list view.
- `void setStriped(boolean striped)`: Applies a striped style to the list view rows.
- `void setDense(boolean dense)`: Applies a dense style with reduced padding.
- `void setEdgeToEdge(boolean edgeToEdge)`: Applies an edge-to-edge style.
- `void addItemWithAnimation(T item)`: Adds an item to the list with a fade-in animation.
- `void removeItemWithAnimation(T item)`: Removes an item from the list with a fade-out animation.
- `void clearWithAnimation()`: Clears all items from the list with a fade-out animation.
- `void setMultipleSelection(boolean multiple)`: Sets the selection mode to single or multiple.

## Enums

- `ListViewSize`: Defines the sizes: `SMALL`, `MEDIUM`, `LARGE`.

## Usage Example

```java
import dev.railroadide.core.ui.RRListView;
import dev.railroadide.core.ui.RRListView.ListViewSize;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.scene.layout.VBox;

public class MyListViewPlugin implements Plugin {

    @Override
    public void onEnable(PluginContext context) {
        VBox container = new VBox();

        ObservableList<String> items = FXCollections.observableArrayList(
            "Item 1", "Item 2", "Item 3", "Item 4"
        );

        RRListView<String> myListView = new RRListView<>(items);
        myListView.setListViewSize(ListViewSize.MEDIUM);
        myListView.setBordered(true);
        myListView.setStriped(true);
        myListView.setMultipleSelection(true);

        // Add an item with animation
        RRButton addItemButton = new RRButton("myplugin.button.add_item");
        addItemButton.setOnAction(event -> myListView.addItemWithAnimation("New Item " + (items.size() + 1)));

        // Remove selected item with animation
        RRButton removeItemButton = new RRButton("myplugin.button.remove_item");
        removeItemButton.setOnAction(event -> {
            String selectedItem = myListView.getSelectionModel().getSelectedItem();
            if (selectedItem != null) {
                myListView.removeItemWithAnimation(selectedItem);
            }
        });

        container.getChildren().addAll(myListView, addItemButton, removeItemButton);
        // In a real plugin, you would add this container to a scene or another layout
    }

    @Override
    public void onDisable(PluginContext context) {
        // Clean up
    }
}
```
