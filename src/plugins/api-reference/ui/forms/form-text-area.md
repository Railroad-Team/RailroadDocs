# FormTextArea

`FormTextArea` is a UI component that provides a labeled text area with validation, localization, and styling support. It extends `InformativeLabeledHBox` and supports auto-resizing and text wrapping features.

## Usage

```java
// Basic usage
FormTextArea textArea = new FormTextArea("description.label", false, "Initial text", "Enter description here", true, true, true, false);

// Non-editable, non-resizable
FormTextArea readOnlyTextArea = new FormTextArea("log.output.label", false, "Log messages...", null, false, false, true, false);
```

## Constructor

### `FormTextArea(String labelKey, boolean required, String text, String promptText, boolean editable, boolean resizable, boolean wrapText, boolean translate)`

Constructs a new `FormTextArea`.

- `labelKey`: The localization key for the label text.
- `required`: Whether the text area is a required field.
- `text`: The initial text content.
- `promptText`: The placeholder text to display when empty.
- `editable`: Whether the text area is editable.
- `resizable`: Whether the text area should auto-resize based on content.
- `wrapText`: Whether text should wrap to new lines.
- `translate`: Whether to use localization for the prompt text.

## Methods

### `createPrimaryComponent(Map<String, Object> params)`

Creates the primary `TextArea` component with the specified parameters.

- `params`: A map containing parameters for the text area.
- **Returns**: A new `TextArea` instance.

### `getTextArea()`

Gets the underlying `TextArea` component.

- **Returns**: The `TextArea` component.
