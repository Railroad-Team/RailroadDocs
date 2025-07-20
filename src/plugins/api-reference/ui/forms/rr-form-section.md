# RRFormSection

`RRFormSection` is a modern form section component that provides a clean, elevated container for form fields. It extends `VBox` and is perfect for grouping related form elements with a consistent modern design.

## Usage

```java
RRFormSection section = new RRFormSection("Contact Information");
// Add form fields or other nodes to section.getContentArea()
section.getContentArea().getChildren().add(new FormTextField("email.label", true, "", "", true, false));
```

## Constructors

### `RRFormSection()`

Constructs a new `RRFormSection` with no header text.

### `RRFormSection(@Nullable String headerText)`

Constructs a new `RRFormSection` with the specified header text and default padding.

- `headerText`: The header text for the section. Can be a localization key if it contains a dot (`.`), otherwise treated as plain text.

### `RRFormSection(@Nullable String headerText, Insets padding)`

Constructs a new `RRFormSection` with the specified header text and padding.

- `headerText`: The header text for the section. Can be a localization key if it contains a dot (`.`), otherwise treated as plain text.
- `padding`: The `Insets` to use for padding around the form section.

## Methods

### `setHeaderText(String headerText)`

Sets the section header text (non-localized).

- `headerText`: The header text.

### `setLocalizedHeaderText(String localizationKey, Object... args)`

Sets the section header text using a localization key.

- `localizationKey`: The localization key for the header.
- `args`: Optional arguments for localization.

### `getHeaderText()`

Gets the current section header text.

- **Returns**: The header text.

### `getLocalizationKey()`

Gets the localization key if the header is localized.

- **Returns**: The localization key.

### `addContent(Node... nodes)`

Adds content to the form section.

- `nodes`: One or more `Node` objects to add.

### `addContent(int index, Node... nodes)`

Adds content to the form section at a specific index.

- `index`: The index at which to add the nodes.
- `nodes`: One or more `Node` objects to add.

### `removeContent(Node... nodes)`

Removes content from the form section.

- `nodes`: One or more `Node` objects to remove.

### `clearContent()`

Clears all content from the form section.

### `setCompact(boolean compact)`

Sets the section as compact (reduced padding and spacing).

- `compact`: `true` to make the section compact, `false` otherwise.

### `setHighlighted(boolean highlighted)`

Sets the section as highlighted.

- `highlighted`: `true` to highlight the section, `false` otherwise.

### `setInteractive(boolean interactive)`

Sets the section as interactive (clickable).

- `interactive`: `true` to make the section interactive, `false` otherwise.
