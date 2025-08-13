# FormDirectoryChooser

`FormDirectoryChooser` is a UI component that provides a labeled text field with an optional browse button for directory selection. It extends `InformativeLabeledHBox` and supports validation and modern styling.

## Usage

```java
// With a browse button
FormDirectoryChooser directoryChooser = new FormDirectoryChooser("project.directory.label", true, "C:\Users\User\Documents", true);

// Without a browse button
FormDirectoryChooser directoryInput = new FormDirectoryChooser("output.path.label", false, null, false);
```

## Constructor

### `FormDirectoryChooser(String labelKey, boolean required, @Nullable String defaultPath, boolean includeButton)`

Constructs a new `FormDirectoryChooser`.

- `labelKey`: The localization key for the label text.
- `required`: Whether the directory chooser is a required field.
- `defaultPath`: The default path to display in the text field, or `null` for empty.
- `includeButton`: Whether to include a browse button for directory selection.

## Inner Class: `TextFieldWithButton`

`TextFieldWithButton` is a private inner class that combines an `RRTextField` and an optional `BrowseButton` to form the visual component of the directory chooser.

### Constructor

#### `TextFieldWithButton(RRTextField textField, @Nullable BrowseButton browseButton)`

Constructs a new `TextFieldWithButton`.

- `textField`: The text field for displaying the selected directory path.
- `browseButton`: The browse button for opening the directory chooser, or `null` if not needed.
