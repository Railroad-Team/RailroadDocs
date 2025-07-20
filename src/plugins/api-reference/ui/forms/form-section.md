# FormSection

`FormSection` represents a logical grouping of `FormComponent` instances within a `Form`. It is responsible for creating the UI for its contained fields, binding them to a `FormData` object, and validating them.

## Usage

`FormSection` instances are typically created using the `FormSection.Builder` class and then added to a `Form`.

```java
FormSection section = FormSection.create("Personal Details")
    .appendComponent(FormComponent.textField("firstName", "First Name"))
    .appendComponent(FormComponent.textField("lastName", "Last Name"))
    .build();

// Add this section to a Form.Builder
Form.create()
    .appendSection(section)
    // ... other configurations
    .build();
```

## Builder Class: `FormSection.Builder`

The `FormSection.Builder` class is used to construct `FormSection` instances.

### Methods

#### `title(@NotNull String title)`

Sets the title of the form section. The title is a localization key that will be displayed at the top of the form section.

- `title`: The localization key for the section title.

#### `appendComponent(@NotNull FormComponent<?, ?, ?, ?> component)`

Appends a `FormComponent` to the form section.

- `component`: The `FormComponent` to append.

#### `spacing(double spacing)`

Sets the spacing between the components within the form section.

- `spacing`: The spacing in pixels.

#### `padding(@NotNull Insets padding)`

Sets the padding of the form section.

- `padding`: The `Insets` to use for padding.

#### `padding(double top, double right, double bottom, double left)`

Sets the padding of the form section with individual values for each side.

- `top`, `right`, `bottom`, `left`: The padding values in pixels.

#### `padding(double padding)`

Sets uniform padding for all sides of the form section.

- `padding`: The padding value in pixels.

#### `border(@Nullable Border border)`

Sets the border of the form section.

- `border`: The `Border` object to apply.

#### `borderColor(@NotNull Color color)`

Sets the color of the border.

- `color`: The `Color` for the border.

#### `borderStyle(@NotNull BorderStrokeStyle style)`

Sets the style of the border (e.g., `SOLID`, `DASHED`).

- `style`: The `BorderStrokeStyle`.

#### `borderRadii(@NotNull CornerRadii radii)`

Sets the corner radii for the border.

- `radii`: The `CornerRadii` object.

#### `borderWidths(@NotNull BorderWidths widths)`

Sets the widths of the border strokes.

- `widths`: The `BorderWidths` object.

#### `titleConsumer(@NotNull Consumer<LocalizedText> titleConsumer)`

Sets a consumer for the section's title, allowing for custom styling or behavior.

- `titleConsumer`: A `Consumer` that accepts the `LocalizedText` title.

#### `build()`

Builds and returns the `FormSection` instance.

- **Returns**: The constructed `FormSection` object.

#### `build(Form.Builder formBuilder)`

Builds the `FormSection` and adds it to the given `Form.Builder`.

- `formBuilder`: The `Form.Builder` to add the section to.
- **Returns**: The constructed `FormSection` object.

## FormSection Methods

### `reset()`

Resets all `FormComponent` instances within this section to their default values.

### `disable(boolean disable)`

Disables or enables all `FormComponent` instances within this section.

- `disable`: `true` to disable, `false` to enable.

### `createUI()`

Creates the JavaFX UI node for the form section. This method should be called when you want to display the form section in the UI.

- **Returns**: The root `Node` of the form section UI.

### `validate()`

Validates all `FormComponent` instances within this section.

- **Returns**: `true` if all components are valid (no errors), `false` otherwise.

### `runValidation()`

Runs the validation process on all `FormComponent` instances in this section, displaying validation messages.
