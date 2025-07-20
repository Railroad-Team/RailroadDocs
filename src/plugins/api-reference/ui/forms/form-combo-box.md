# FormComboBox

`FormComboBox` is a UI component that provides a labeled combo box with validation, localization, and styling support, extending `InformativeLabeledHBox`.

## Type Parameters

- `<T>`: The type of items in the combo box.

## Usage

```java
List<String> options = Arrays.asList("Option 1", "Option 2", "Option 3");
FormComboBox<String> comboBox = new FormComboBox<>("combo.box.label", false, options, false, false, null, null);
```

## Constructor

### `FormComboBox(String labelKey, boolean required, List<T> items, boolean editable, boolean translate, @Nullable ToStringFunction<T> keyFunction, @Nullable FromStringFunction<T> valueOfFunction)`

Constructs a new `FormComboBox`.

- `labelKey`: The localization key for the label text.
- `required`: Whether the combo box is a required field.
- `items`: The list of items to display in the combo box.
- `editable`: Whether the combo box is editable.
- `translate`: Whether to use localization for the items.
- `keyFunction`: A function to convert items to strings for display (can be `null`).
- `valueOfFunction`: A function to convert strings back to items (can be `null`).

## Methods

### `createPrimaryComponent(Map<String, Object> params)`

Creates the primary `ComboBox` component with the specified parameters.

- `params`: A map containing parameters for the combo box.
- **Returns**: A new `ComboBox` instance.
