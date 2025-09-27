# Styling UI Components

This guide explains how to style UI components in your plugin using CSS.

## Adding a Style Class to a JavaFX Node

To apply custom styles to a JavaFX node, you first need to assign a style class to it. You can do this programmatically in your Java code using the `getStyleClass().add()` method.

```java
// Example: Adding a style class to an RRButton
RRButton myButton = new RRButton("plugin.myplugin.button.click_me");
myButton.getStyleClass().add("my-custom-button");
```

In this example, `"my-custom-button"` is the name of the style class you are adding.

## CSS File Location

For your plugin's custom styles, the CSS file should be placed within your plugin's `assets` directory. The recommended path structure is:

`assets/your-plugin-id/styles/your-styles.css`

Replace `your-plugin-id` with the actual ID of your plugin. For example, if your plugin ID is `my-awesome-plugin`, the path would be:

`assets/my-awesome-plugin/styles/main.css`

## Styling the JavaFX Node with CSS

Once you have added a style class to your node and placed your CSS file in the correct location, you can define the styles in your CSS file.

```css
/* assets/your-plugin-id/styles/main.css */

.my-custom-button {
    -fx-background-color: #2196F3; /* Material Design Blue 500 */
    -fx-text-fill: white;
    -fx-font-size: 14px;
    -fx-padding: 10px 20px;
    -fx-border-radius: 5px;
}

.my-custom-button:hover {
    -fx-background-color: #1976D2; /* Material Design Blue 700 */
}
```

This CSS snippet targets the `.my-custom-button` style class and applies various JavaFX CSS properties to change its appearance.

Remember to ensure your plugin correctly loads and applies this CSS file at runtime. This typically involves adding the CSS file to the scene or a parent node's stylesheets when your plugin's UI components are initialized, often within your plugin's `onEnable` method. In the examples below, `rootNode` and `someParentNode` are placeholders for your actual JavaFX nodes.

```java
// When you create or obtain a Scene for your plugin's UI component,
// or when you have access to a Parent node of your UI:

// If creating a new scene:
Scene scene = new Scene(rootNode);
scene.getStylesheets().add(getClass().getResource("/assets/your-plugin-id/styles/main.css").toExternalForm());

// Or, if adding to an existing Parent node (e.g., a VBox, GridPane, etc.):
someParentNode.getStylesheets().add(getClass().getResource("/assets/your-plugin-id/styles/main.css").toExternalForm());
```
