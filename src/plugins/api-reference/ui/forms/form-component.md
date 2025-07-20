# FormComponent

`FormComponent` is an abstract class that serves as the base for all form components in Railroad. It defines the core behavior and properties of a form component, including data handling, validation, and UI representation.

## Type Parameters

- `<T extends Node>`: The JavaFX node type of the component.
- `<U>`: The data type of the component.
- `<V extends Node>`: The JavaFX node type of the validation node.
- `<W>`: The data type of the validation node.

## Usage

`FormComponent` is an abstract class and cannot be instantiated directly. It is extended by concrete form components like `TextFieldComponent`, `ComboBoxComponent`, etc.

## Constructors

`FormComponent` has internal constructors that are not meant for direct use. Subclasses are expected to call these constructors.

## Static Factory Methods

`FormComponent` provides static factory methods for creating builders for common form components:

### `static TextFieldComponent.Builder textField(@NotNull String dataKey, @NotNull String label)`

Creates a new builder for a text field component.

- `dataKey`: The key to identify the data associated with this component.
- `label`: The label text for the component.

### `static <T> ComboBoxComponent.Builder<T> comboBox(@NotNull String dataKey, @NotNull String label, @NotNull Class<T> itemClazz)`

Creates a new builder for a combo box component.

- `dataKey`: The key to identify the data associated with this component.
- `label`: The label text for the component.
- `itemClazz`: The class of the items in the combo box (used for type inference, not directly in implementation).

### `static CheckBoxComponent.Builder checkBox(@NotNull String dataKey, @NotNull String label)`

Creates a new builder for a checkbox component.

- `dataKey`: The key to identify the data associated with this component.
- `label`: The label text for the component.

### `static DirectoryChooserComponent.Builder directoryChooser(@NotNull String dataKey, @NotNull String label)`

Creates a new builder for a directory chooser component.

- `dataKey`: The key to identify the data associated with this component.
- `label`: The label text for the component.

### `static TextAreaComponent.Builder textArea(@NotNull String dataKey, @NotNull String label)`

Creates a new builder for a text area component.

- `dataKey`: The key to identify the data associated with this component.
- `label`: The label text for the component.

## Methods

### `dataProperty()`

Returns a property that represents the data of the component.

- **Returns**: An `UpdatableObjectProperty` holding the component's data.

### `getData()`

Returns the current data of the component.

- **Returns**: The data of type `U`.

### `setData(U data)`

Sets the data of the component.

- `data`: The data to set.

### `componentProperty()`

Returns a property that represents the JavaFX component node.

- **Returns**: An `UpdatableObjectProperty` holding the component's JavaFX node.

### `getComponent()`

Returns the JavaFX component node.

- **Returns**: The JavaFX `Node` of type `T`.

### `getValidationNode()`

**Abstract Method**: Returns the JavaFX node used for validation (e.g., where error styles or tooltips are applied).

- **Returns**: An `ObservableValue` holding the validation `Node` of type `V`.

### `applyListener(FormComponentChangeListener<V, W> listener)`

**Abstract Method**: Applies a change listener to the component.

- `listener`: The `FormComponentChangeListener` to apply.

### `bindToFormData(FormData formData)`

**Abstract Method**: Binds the component's data to a `FormData` object.

- `formData`: The `FormData` object to bind to.

### `reset()`

**Abstract Method**: Resets the component to its initial state.

### `validate()`

Validates the component.

- **Returns**: A `ValidationResult` indicating the validation status.

### `disable(boolean disable)`

Disables or enables the component.

- `disable`: `true` to disable, `false` to enable.

### `runValidation(V node)`

Runs the validation for the component and applies styling/tooltips based on the result.

- `node`: The validation `Node`.

### `runValidation()`

Runs the validation for the component using its current validation node.
