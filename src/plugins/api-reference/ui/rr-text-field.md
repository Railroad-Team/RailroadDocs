# RRTextField

`RRTextField` is a modern text field component that extends JavaFX's `TextField`. It offers enhanced styling, support for prefix and suffix icons, and visual feedback for validation states. It also includes features for localized placeholder text and animated clearing.

## Usage

```java
// Basic usage
RRTextField textField = new RRTextField();
textField.setPromptText("Enter text here");

// With localized placeholder and prefix icon
RRTextField searchField = new RRTextField("search.placeholder", FontAwesomeSolid.SEARCH);

// Setting size and validation state
textField.setTextFieldSize(RRTextField.TextFieldSize.LARGE);
textField.setValidationState(RRTextField.ValidationState.ERROR);

// Setting rounded and outlined styles
textField.setRounded(true);
textField.setOutlined(true);
```

## Constructors

### `RRTextField()`

Constructs a new `RRTextField` with empty text and default styling.

### `RRTextField(String localizationKey, Ikon prefixIcon)`

Constructs a new `RRTextField` with localized placeholder text and a prefix icon.

- `localizationKey`: The localization key for the placeholder text.
- `prefixIcon`: The `Ikon` (icon code) to display before the text field.

### `RRTextField(String localizationKey, Object... args)`

Constructs a new `RRTextField` with localized placeholder text.

- `localizationKey`: The localization key for the placeholder text.
- `args`: Optional formatting arguments for the localized text.

## Methods

### `setTextFieldSize(TextFieldSize size)`

Sets the visual size of the text field.

- `size`: A `TextFieldSize` enum value (SMALL, MEDIUM, LARGE).

### `setValidationState(ValidationState state)`

Sets the validation state of the text field, which applies corresponding styling.

- `state`: A `ValidationState` enum value (NONE, SUCCESS, ERROR, WARNING).

### `setPrefixIcon(Ikon iconCode)`

Sets an icon to be displayed at the beginning of the text field.

- `iconCode`: The `Ikon` (icon code) for the prefix icon. Set to `null` to remove.

### `setSuffixIcon(Ikon iconCode)`

Sets an icon to be displayed at the end of the text field.

- `iconCode`: The `Ikon` (icon code) for the suffix icon. Set to `null` to remove.

### `setRounded(boolean rounded)`

Applies or removes a rounded style to the text field.

- `rounded`: `true` to make the text field rounded, `false` otherwise.

### `setOutlined(boolean outlined)`

Applies or removes an outlined style to the text field.

- `outlined`: `true` to make the text field outlined, `false` otherwise.

### `setDisabledState(boolean disabled)`

Sets the disabled state of the text field.

- `disabled`: `true` to disable the text field, `false` to enable.

### `setPlaceholder(String placeholder)`

Sets the placeholder text (prompt text) for the text field.

- `placeholder`: The string to use as placeholder text.

### `clearWithAnimation()`

Clears the text field's content with a fade-out and fade-in animation.

### `setLocalizedPlaceholder(String localizationKey, Object... args)`

Sets the placeholder text using a localization key. The text will update automatically if the application's language changes.

- `localizationKey`: The localization key for the placeholder text.
- `args`: Optional formatting arguments for the localized text.

## Enums

### `TextFieldSize`

Defines the available sizes for the `RRTextField`.

- `SMALL`
- `MEDIUM`
- `LARGE`

### `ValidationState`

Defines the visual validation states for the `RRTextField`.

- `NONE`
- `SUCCESS`
- `ERROR`
- `WARNING`
