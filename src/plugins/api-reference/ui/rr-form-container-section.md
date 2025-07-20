# RRFormContainer and RRFormSection

`RRFormContainer` and `RRFormSection` are components designed for building structured forms, especially useful for settings pages or complex input forms. They extend `javafx.scene.layout.VBox` and provide consistent styling and localization support for titles/headers.

## `RRFormContainer`

`RRFormContainer` acts as a main holder for multiple `RRFormSection` instances or other content. It provides a visually distinct container for an entire form.

### Constructors

- `RRFormContainer()`: Creates a new form container with no title and default padding.
- `RRFormContainer(String title)`: Creates a new form container with a non-localized title. If the title contains a `.` (dot), it's treated as a localization key.
- `RRFormContainer(String title, Insets padding)`: Creates a new form container with a title and custom padding.

### Key Methods

- `void setTitle(String title)`: Sets a non-localized title for the form container.
- `void setLocalizedTitle(String localizationKey, Object... args)`: Sets the title using a localization key.
- `void addContent(Node... nodes)`: Adds content (e.g., `RRFormSection`s) to the form container.
- `void setCompact(boolean compact)`: Applies a compact style with reduced padding and spacing.
- `void setHighlighted(boolean highlighted)`: Applies a highlighted style.
- `void setInteractive(boolean interactive)`: Applies an interactive (clickable) style.

## `RRFormSection`

`RRFormSection` is used to group related form elements within a `RRFormContainer`. Each section can have its own header and content.

### Constructors

- `RRFormSection()`: Creates a new form section with no header and default padding.
- `RRFormSection(String headerText)`: Creates a new form section with a non-localized header. If the header contains a `.` (dot), it's treated as a localization key.
- `RRFormSection(String headerText, Insets padding)`: Creates a new form section with a header and custom padding.

### Key Methods

- `void setHeaderText(String headerText)`: Sets a non-localized header for the section.
- `void setLocalizedHeaderText(String localizationKey, Object... args)`: Sets the header using a localization key.
- `void addContent(Node... nodes)`: Adds content (e.g., form fields) to the section.
- `void setCompact(boolean compact)`: Applies a compact style.
- `void setHighlighted(boolean highlighted)`: Applies a highlighted style.
- `void setInteractive(boolean interactive)`: Applies an interactive style.

## Usage Example

```java
import io.github.railroad.core.ui.RRFormContainer;
import io.github.railroad.core.ui.RRFormSection;
import io.github.railroad.core.ui.RRTextField;
import io.github.railroad.core.ui.RRButton;
import javafx.scene.control.CheckBox;

// Assuming localization keys like:
// myplugin.form.title=My Plugin Settings
// myplugin.section.general=General Settings
// myplugin.section.advanced=Advanced Settings
// myplugin.label.username=Username:
// myplugin.label.notifications=Enable Notifications:
// myplugin.label.apikey=API Key:
// myplugin.button.apply=Apply

RRFormContainer formContainer = new RRFormContainer("myplugin.form.title");

// General Settings Section
RRFormSection generalSection = new RRFormSection("myplugin.section.general");
generalSection.addContent(
    new RRTextField("myplugin.label.username"),
    new CheckBox("myplugin.label.notifications") // Standard JavaFX CheckBox
);
formContainer.addContent(generalSection);

// Advanced Settings Section
RRFormSection advancedSection = new RRFormSection("myplugin.section.advanced");
advancedSection.addContent(
    new RRTextField("myplugin.label.apikey"),
    new RRButton("myplugin.button.apply")
);
formContainer.addSection(advancedSection);
```