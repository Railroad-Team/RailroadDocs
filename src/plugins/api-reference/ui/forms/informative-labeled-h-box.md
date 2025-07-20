# InformativeLabeledHBox

`InformativeLabeledHBox` is an abstract base class that provides a labeled `RRHBox` component with the ability to display various types of information labels (info, note, warning, error). It extends `RRVBox` and is designed to be extended by specific form components.

## Type Parameters

- `<T>`: The type of the primary component (a `Node`) contained within the labeled `RRHBox`.

## Usage

This is an abstract class and cannot be instantiated directly. It is extended by components like `FormCheckBox`, `FormComboBox`, `FormDirectoryChooser`, `FormTextArea`, and `FormTextField`.

## Constructor

### `InformativeLabeledHBox(String labelKey, boolean required, Map<String, Object> params)`

Constructs a new `InformativeLabeledHBox`.

- `labelKey`: The localization key for the main label of the component.
- `required`: A boolean indicating whether the component is a required field.
- `params`: A map of parameters to be passed to the `createPrimaryComponent` method.

## Methods

### `addInformationLabel(@NotNull String informativeText, @NotNull InformationType informationType, @Nullable StringProperty bindTo, Object... args)`

Adds an information label to the component.

- `informativeText`: The text content of the information label.
- `informationType`: The type of information (INFO, NOTE, WARNING, ERROR).
- `bindTo`: An optional `StringProperty` to bind the information label's text to.
- `args`: Optional arguments for formatting the `informativeText`.

(Overloaded methods exist for various combinations of parameters.)

### `createPrimaryComponent(Map<String, Object> params)`

**Abstract Method**: This method must be implemented by subclasses to create and return the primary UI component (e.g., `CheckBox`, `ComboBox`, `TextField`).

- `params`: A map containing parameters for creating the primary component.
- **Returns**: The primary UI component of type `T`.

### `getPrimaryComponent()`

Gets the primary component of the `InformativeLabeledHBox`.

- **Returns**: The primary component of type `T`.

## Inner Class: `InformationLabel`

`InformationLabel` is a static inner class that represents a localized label with an associated `InformationType` and an icon.

### Constructor

#### `InformationLabel(String key, InformationType informationType, Object... args)`

Constructs a new `InformationLabel`.

- `key`: The localization key for the label.
- `informationType`: The type of information (determines icon and styling).
- `args`: Optional arguments for formatting the label text.

## Enum: `InformationType`

An enum defining the types of information labels.

- `INFO`: General informational message.
- `NOTE`: A note or tip.
- `WARNING`: A warning message.
- `ERROR`: An error message.
