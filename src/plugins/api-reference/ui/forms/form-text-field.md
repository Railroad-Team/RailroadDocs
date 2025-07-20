# FormTextField

`FormTextField` is a UI component that provides a labeled text field with validation, localization, and styling support. It extends `InformativeLabeledHBox`.

## Usage

```java
// Basic usage
FormTextField textField = new FormTextField("username.label", true, "", "Enter your username", true, false);

// Non-editable
FormTextField readOnlyField = new FormTextField("user.id.label", false, "12345", null, false, false);
```

## Constructor

### `FormTextField(String labelKey, boolean required, String text, String promptText, boolean editable, boolean translate)`

Constructs a new `FormTextField`.

- `labelKey`: The localization key for the label text.
- `required`: Whether the text field is a required field.
- `text`: The initial text content.
- `promptText`: The placeholder text to display when empty.
- `editable`: Whether the text field is editable.
- `translate`: Whether to use localization for the prompt text.

## Methods

### `createPrimaryComponent(Map<String, Object> params)`

Creates the primary `TextField` component with the specified parameters.

- `params`: A map containing parameters for the text field.
- **Returns**: A new `TextField` instance.

### `getTextField()`

Gets the underlying `TextField` component.

- **Returns**: The `TextField` component.
