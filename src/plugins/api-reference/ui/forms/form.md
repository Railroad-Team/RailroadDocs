# Form

`Form` is a class that represents a form containing multiple sections, each with multiple components. It provides functionality for validation and data retrieval.

## Usage

Forms are typically built using the `Form.Builder` class.

```java
Form form = Form.create()
    .onSubmit((f, data) -> {
        System.out.println("Form submitted!");
        System.out.println("Data: " + data.toMap());
    })
    .appendSection("User Information",
        new FormTextField("name.label", true, "", "", true, false),
        new FormTextField("email.label", true, "", "", true, false)
    )
    .appendSection("Preferences",
        new FormCheckBox("newsletter.label", false, false)
    )
    .build();

// To display the form in your JavaFX application:
Node formUI = form.createUI();
```

## Builder Class: `Form.Builder`

The `Form.Builder` class is used to construct `Form` instances.

### Methods

#### `onSubmit(BiConsumer<Form, FormData> onSubmit)`

Sets the consumer that will be called when the form is submitted.

- `onSubmit`: A `BiConsumer` that accepts the `Form` instance and `FormData` when the form is submitted.

#### `appendSection(FormSection formSection)`

Appends an existing `FormSection` to the form.

- `formSection`: The `FormSection` to append.

#### `appendSection(FormSection.Builder formSectionBuilder)`

Appends a `FormSection` built from a `FormSection.Builder`.

- `formSectionBuilder`: The builder for the `FormSection` to append.

#### `appendSection(String title, FormComponent<?, ?, ?, ?>... formComponents)`

Appends a new `FormSection` with the given title and components.

- `title`: The title of the new section.
- `formComponents`: One or more `FormComponent` instances to add to the section.

#### `spacing(int spacing)`

Sets the spacing between the sections in the form.

- `spacing`: The spacing in pixels.

#### `padding(Insets padding)`

Sets the padding of the form.

- `padding`: The `Insets` to use for padding.

#### `padding(int top, int right, int bottom, int left)`

Sets the padding of the form with individual values for each side.

- `top`, `right`, `bottom`, `left`: The padding values in pixels.

#### `padding(int padding)`

Sets uniform padding for all sides of the form.

- `padding`: The padding value in pixels.

#### `submitButtonFactory(@Nullable Function<Form, Button> submitButtonFactory)`

Sets the factory for creating the submit button.

- `submitButtonFactory`: A `Function` that takes a `Form` and returns a `Button` for submission. If `null`, no submit button will be created.

#### `resetButtonFactory(@Nullable Function<Form, Button> resetButtonFactory)`

Sets the factory for creating the reset button.

- `resetButtonFactory`: A `Function` that takes a `Form` and returns a `Button` for resetting. If `null`, no reset button will be created.

#### `disableSubmitButton()`

Disables the submit button (sets its factory to `null`).

#### `disableResetButton()`

Disables the reset button (sets its factory to `null`).

#### `buttonAlignment(@NotNull Pos buttonAlignment)`

Sets the alignment of the submit and reset buttons.

- `buttonAlignment`: The `Pos` enum value for button alignment.

#### `build()`

Builds and returns the `Form` instance.

- **Returns**: The constructed `Form` object.

## Form Methods

### `createUI()`

Creates the JavaFX UI node for the form. This method should be called on the JavaFX application thread.

- **Returns**: The root `Node` of the form UI.

### `validate()`

Validates all components within the form.

- **Returns**: `true` if all components are valid, `false` otherwise.

### `runValidation()`

Runs the validation process on all components in the form, displaying validation messages.
