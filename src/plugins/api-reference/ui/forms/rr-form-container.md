# RRFormContainer

`RRFormContainer` is a modern form container component that provides a clean, elevated container for entire forms. It extends `VBox` and is perfect for wrapping multiple form sections with consistent modern design.

## Usage

```java
RRFormContainer formContainer = new RRFormContainer("User Profile");
// Add form sections or other nodes to formContainer.getFormContent()
formContainer.getFormContent().getChildren().add(new RRFormSection("Personal Information"));
```

## Constructors

### `RRFormContainer()`

Constructs a new `RRFormContainer` with no title.

### `RRFormContainer(@Nullable String title)`

Constructs a new `RRFormContainer` with the specified title and default padding.

- `title`: The title of the form container. Can be a localization key if it contains a dot (`.`), otherwise treated as plain text.

### `RRFormContainer(@Nullable String title, Insets padding)`

Constructs a new `RRFormContainer` with the specified title and padding.

- `title`: The title of the form container. Can be a localization key if it contains a dot (`.`), otherwise treated as plain text.
- `padding`: The `Insets` to use for padding around the form container.

## Methods

### `setTitle(String title)`

Sets the form title (non-localized).

- `title`: The title text.

### `setLocalizedTitle(String localizationKey, Object... args)`

Sets the form title using a localization key.

- `localizationKey`: The localization key for the title.
- `args`: Optional arguments for localization.

### `getTitle()`

Gets the current form title.

- **Returns**: The title text.

### `getLocalizationKey()`

Gets the localization key if the title is localized.

- **Returns**: The localization key.

### `addContent(Node... nodes)`

Adds content to the form container.

- `nodes`: One or more `Node` objects to add.

### `addContent(int index, Node... nodes)`

Adds content to the form container at a specific index.

- `index`: The index at which to add the nodes.
- `nodes`: One or more `Node` objects to add.

### `removeContent(Node... nodes)`

Removes content from the form container.

- `nodes`: One or more `Node` objects to remove.

### `clearContent()`

Clears all content from the form container.

### `setCompact(boolean compact)`

Sets the form as compact (reduced padding and spacing).

- `compact`: `true` to make the form compact, `false` otherwise.

### `setHighlighted(boolean highlighted)`

Sets the form as highlighted.

- `highlighted`: `true` to highlight the form, `false` otherwise.

### `setInteractive(boolean interactive)`

Sets the form as interactive (clickable).

- `interactive`: `true` to make the form interactive, `false` otherwise.
