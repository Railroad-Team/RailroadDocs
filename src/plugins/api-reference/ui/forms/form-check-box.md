# FormCheckBox

`FormCheckBox` is a UI component that provides a labeled checkbox with validation and styling support, extending `InformativeLabeledHBox`.

## Usage

```java
FormCheckBox checkBox = new FormCheckBox("Enable Feature", false, true);
```

## Constructor

### `FormCheckBox(String label, boolean required, boolean selected)`

Constructs a new `FormCheckBox`.

- `label`: The text label for the checkbox.
- `required`: Whether the checkbox is a required field.
- `selected`: The initial selected state of the checkbox.

## Methods

### `createPrimaryComponent(Map<String, Object> params)`

Creates the primary `CheckBox` component with the specified parameters.

- `params`: A map containing parameters for the checkbox, including the "selected" state.
- **Returns**: A new `CheckBox` instance.
