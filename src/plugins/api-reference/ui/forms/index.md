# Forms Overview

Forms are a fundamental part of any interactive application, allowing users to input and manage data. In Railroad, the forms API provides a structured and flexible way to build robust and user-friendly forms, integrating validation, localization, and modern UI components.

## Core Concepts

- **`Form`**: The top-level container for an entire form, composed of one or more `FormSection`s. It manages submission, validation, and data collection.
- **`FormSection`**: A logical grouping of related form fields within a `Form`. It helps organize complex forms into manageable parts.
- **`FormComponent`**: An abstract base class for individual form fields (e.g., text fields, checkboxes, combo boxes). It handles data binding, validation, and UI representation for a single input.
- **`FormData`**: A data structure used to collect and manage the values submitted through a form.
- **`InformativeLabeledHBox`**: A base UI component that provides a labeled input field with support for displaying informational messages (info, warning, error) and validation feedback.

## Available Form Components

Here are the specific UI components available for building forms:

- [FormCheckBox](./form-check-box.md): A labeled checkbox component.
- [FormComboBox](./form-combo-box.md): A labeled combo box component.
- [FormDirectoryChooser](./form-directory-chooser.md): A labeled text field with an optional browse button for directory selection.
- [FormTextArea](./form-text-area.md): A labeled text area component.
- [FormTextField](./form-text-field.md): A labeled text field component.
- [RRFormContainer](./rr-form-container.md): A modern container for entire forms.
- [RRFormSection](./rr-form-section.md): A modern container for grouping related form fields.

## Example Usage

Here's a simple example demonstrating how to create a form with a text field and a submit button:

```java
import io.github.railroad.core.form.Form;
import io.github.railroad.core.form.FormComponent;
import io.github.railroad.core.form.ui.FormTextField;
import javafx.scene.Node;
import javafx.scene.control.Button;

// In a plugin context, you would typically integrate this form into an existing UI.
// For example, adding it to a dialog or a specific panel.

// Create the form
Form form = Form.create()
        .onSubmit((f, data) -> {
            System.out.println("Form submitted!");
            System.out.println("Username: " + data.getString("username"));
        })
        .appendSection("User Details",
                FormComponent.textField("username", "form.username.label")
                        .required(true)
                        .build()
        )
        .submitButtonFactory(f -> new RRButton("button.submit"))
        .build();

// Get the UI node for the form
Node formUI = form.createUI();

// You can now add 'formUI' to any JavaFX parent container.
// For instance, if you have a VBox or a Pane in your plugin's UI:
// someParentContainer.getChildren().add(formUI);
```

## API Reference

For detailed API documentation on the core form classes, refer to:

- [Form](./form.md)
- [FormComponent](./form-component.md)
- [FormData](./form-data.md)
- [InformativeLabeledHBox](./informative-labeled-h-box.md)
