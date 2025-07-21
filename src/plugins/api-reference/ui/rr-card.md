# RRCard

`RRCard` is a container component that visually groups content, often with a distinct background and elevated appearance, similar to a card in modern UI design. It extends `javafx.scene.layout.VBox` and provides hover effects and styling options.

## Constructors

- `RRCard()`: Creates a new card with default corner radius and padding.
- `RRCard(double cornerRadius)`: Creates a new card with a specified corner radius.
- `RRCard(double cornerRadius, Insets padding)`: Creates a new card with specified corner radius and padding.

## Key Methods

- `void addContent(Node... nodes)`: Adds one or more JavaFX `Node` objects as content to the card.
- `void clearContent()`: Removes all content from the card.
- `void setInteractive(boolean interactive)`: Sets the card as interactive, typically adding a visual cue for clickability.
- `void setHighlighted(boolean highlighted)`: Applies a highlighted style to the card.
- `void setSelected(boolean selected)`: Applies a selected style to the card.

## Usage Example

```java
import dev.railroadide.core.ui.RRCard;
import dev.railroadide.core.ui.RRVBox;
import dev.railroadide.core.ui.RRTextField;
import dev.railroadide.core.ui.RRButton;
import javafx.scene.control.Label;
import javafx.geometry.Insets;

RRCard card = new RRCard();

// To add a title, you would typically add a Label or similar component as part of the content
Label titleLabel = new Label("User Information");
titleLabel.getStyleClass().add("card-title"); // Assuming a CSS class for card titles

RRVBox content = new RRVBox(5);
content.setPadding(new Insets(10)); // Add padding to the content VBox
content.getChildren().addAll(
    new Label("Name:"),
    new RRTextField("John Doe"),
    new Label("Email:"),
    new RRTextField("john.doe@example.com"),
    new RRButton("myplugin.button.edit_profile")
);

// Add the title and content to the card
card.addContent(titleLabel, content);

// Example of making the card interactive
card.setInteractive(true);
card.setOnMouseClicked(event -> {
    System.out.println("Card clicked!");
});
```