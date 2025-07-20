# RRButton

`RRButton` is a modern button component that extends JavaFX's `Button`. It offers enhanced styling, variants, sizes, icon integration, and smooth animations, including a loading state.

## Usage

```java
// Basic primary button
RRButton saveButton = new RRButton("button.save");
saveButton.setVariant(RRButton.ButtonVariant.PRIMARY);

// Button with icon and custom size
RRButton deleteButton = new RRButton("button.delete", FontAwesomeSolid.TRASH);
deleteButton.setButtonSize(RRButton.ButtonSize.SMALL);
deleteButton.setVariant(RRButton.ButtonVariant.DANGER);

// Loading state
RRButton submitButton = new RRButton("button.submit");
submitButton.setOnAction(e -> {
    submitButton.setLoading(true);
    // Simulate an async operation
    new Thread(() -> {
        try { Thread.sleep(2000); } catch (InterruptedException ex) { /* handle */ }
        Platform.runLater(() -> submitButton.setLoading(false));
    }).start();
});
```

## Constructors

### `RRButton()`

Constructs a new `RRButton` with no text.

### `RRButton(String localizationKey, Ikon icon, Object... args)`

Constructs a new `RRButton` with localized text and an icon.

- `localizationKey`: The localization key for the button's text.
- `icon`: The `Ikon` (icon code) to display on the button.
- `args`: Optional formatting arguments for the localized text.

### `RRButton(String localizationKey, Node graphic, Object... args)`

Constructs a new `RRButton` with localized text and a custom graphic node.

- `localizationKey`: The localization key for the button's text.
- `graphic`: A JavaFX `Node` to use as the button's graphic.
- `args`: Optional formatting arguments for the localized text.

### `RRButton(String localizationKey, Object... args)`

Constructs a new `RRButton` with localized text.

- `localizationKey`: The localization key for the button's text.
- `args`: Optional formatting arguments for the localized text.

## Static Factory Methods

Convenience methods for creating buttons with predefined variants:

- `static RRButton primary(String text)`
- `static RRButton secondary(String text)`
- `static RRButton ghost(String text)`
- `static RRButton danger(String text)`
- `static RRButton success(String text)`
- `static RRButton warning(String text)`

## Methods

### `setLocalizedText(String localizationKey, Object... args)`

Sets the button text using a localization key with optional formatting arguments. The text will automatically update when the application language changes.

- `localizationKey`: The localization key for the text.
- `args`: Optional formatting arguments.

### `setVariant(ButtonVariant variant)`

Sets the visual variant of the button, affecting its color and style.

- `variant`: A `ButtonVariant` enum value.

### `setButtonSize(ButtonSize size)`

Sets the visual size of the button.

- `size`: A `ButtonSize` enum value.

### `setIcon(Ikon iconCode)`

Sets an icon to be displayed on the button.

- `iconCode`: The `Ikon` (icon code) for the icon. Set to `null` to remove.

### `setLoading(boolean loading)`

Sets the loading state for the button. When `true`, the button is disabled, shows a spinning icon, and its text changes to "Loading...". When `false`, it restores its original state.

- `loading`: `true` to show loading state, `false` to restore normal state.

### `setRounded(boolean rounded)`

Applies or removes a rounded style to the button.

- `rounded`: `true` to make the button rounded, `false` otherwise.

### `setOutlined(boolean outlined)`

Applies or removes an outlined style to the button.

- `outlined`: `true` to make the button outlined, `false` otherwise.

### `setFlat(boolean flat)`

Applies or removes a flat style to the button.

- `flat`: `true` to make the button flat, `false` otherwise.

## Enums

### `ButtonVariant`

Defines the available visual variants for the `RRButton`.

- `PRIMARY`, `SECONDARY`, `GHOST`, `DANGER`, `SUCCESS`, `WARNING`

### `ButtonSize`

Defines the available sizes for the `RRButton`.

- `SMALL`, `MEDIUM`, `LARGE`
