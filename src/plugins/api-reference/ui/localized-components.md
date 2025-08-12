# Localized UI Components

Railroad provides specialized UI components that automatically integrate with the application's localization system. These components extend standard JavaFX controls and simplify the process of displaying localized text, ensuring your plugin is ready for internationalization.

All these components are located in the `dev.railroadide.core.ui.localized` package.

## `LocalizedButton`

An extension of `javafx.scene.control.Button` whose text is automatically updated based on a localization key.

### Constructors

- `LocalizedButton(String key)`: Creates a button with text resolved from the given localization key.

### Key Methods

- `String getKey()`: Returns the current localization key.
- `void setKey(String key)`: Sets the localization key and updates the button's text. A listener is added to update the text when the language changes.

## `LocalizedComboBox`

An extension of `javafx.scene.control.ComboBox` that allows its items to have localized labels.

### Constructors

- `LocalizedComboBox(ToStringFunction<T> keyFunction, FromStringFunction<T> valueOfFunction)`: Creates a ComboBox where `keyFunction` converts an item to a localization key, and `valueOfFunction` converts a key back to an item.

## `LocalizedLabel`

An extension of `javafx.scene.control.Label` whose text is automatically updated based on a localization key.

### Constructors

- `LocalizedLabel(String key, Object... args)`: Creates a label with text resolved from the given localization key and optional arguments.

### Key Methods

- `String getKey()`: Returns the current localization key.
- `void setKey(String key, Object... args)`: Sets the localization key and updates the label's text. A listener is added to update the text when the language changes.

## `LocalizedListCell`

An extension of `javafx.scene.control.ListCell` that allows its cell text to be localized.

### Constructors

- `LocalizedListCell(Function<T, String> keyFunction)`: Creates a ListCell where `keyFunction` converts an item to a localization key.

## `LocalizedText`

An extension of `javafx.scene.text.Text` whose text is automatically updated based on a localization key.

### Constructors

- `LocalizedText(String key)`: Creates a text node with text resolved from the given localization key.

### Key Methods

- `String getKey()`: Returns the current localization key.
- `void setKey(String key)`: Sets the localization key and updates the text node's text. A listener is added to update the text when the language changes.

## `LocalizedTextArea`

An extension of `javafx.scene.control.TextArea` whose prompt text is automatically updated based on a localization key.

### Constructors

- `LocalizedTextArea(String key)`: Creates a text area with prompt text resolved from the given localization key.

### Key Methods

- `String getKey()`: Returns the current localization key.
- `void setKey(String key)`: Sets the localization key and updates the text area's prompt text. A listener is added to update the prompt text when the language changes.

## `LocalizedTextField`

An extension of `javafx.scene.control.TextField` whose prompt text is automatically updated based on a localization key.

### Constructors

- `LocalizedTextField(String key)`: Creates a text field with prompt text resolved from the given localization key.

### Key Methods

- `String getKey()`: Returns the current localization key.
- `void setKey(String key)`: Sets the localization key and updates the text field's prompt text. A listener is added to update the prompt text when the language changes.

## `LocalizedTooltip`

An extension of `javafx.scene.control.Tooltip` whose text is automatically updated based on a localization key.

### Constructors

- `LocalizedTooltip(String key, Object... args)`: Creates a tooltip with text resolved from the given localization key and optional arguments.

### Key Methods

- `String getKey()`: Returns the current localization key.
- `void setKey(String key, Object... args)`: Sets the localization key and updates the tooltip's text. A listener is added to update the text when the language changes.

## Usage Example (General)

```java
import dev.railroadide.core.ui.localized.LocalizedLabel;
import dev.railroadide.core.ui.localized.LocalizedButton;
import dev.railroadide.core.ui.localized.LocalizedTextField;
import javafx.scene.layout.VBox;

// Assuming localization keys:
// myplugin.label.greeting=Hello, %s!
// myplugin.button.submit=Submit
// myplugin.textfield.placeholder.name=Enter your name

VBox container = new VBox(10);

// Localized Label
LocalizedLabel greetingLabel = new LocalizedLabel("myplugin.label.greeting", "World");

// Localized Button
LocalizedButton submitButton = new LocalizedButton("myplugin.button.submit");
submitButton.setOnAction(e -> System.out.println("Submit button clicked!"));

// Localized Text Field
LocalizedTextField nameField = new LocalizedTextField("myplugin.textfield.placeholder.name");

container.getChildren().addAll(greetingLabel, submitButton, nameField);
```
