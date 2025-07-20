# Setting up Your Plugin Project

To create a Railroad plugin, you'll typically set up a new Gradle project. This allows you to manage dependencies, compile your code, and package your plugin into a JAR file.

### Project Structure

A typical Gradle project for a Railroad plugin will have the following structure:

```
my-railroad-plugin/
├── src/
│   ├── main/
│   │   ├── java/        # Your Java source code goes here
│   │   └── resources/   # Resources like plugin.json go here
│   │       └── META-INF/
│   │           └── plugin.json
├── build.gradle       # Your Gradle build script
├── settings.gradle    # Gradle settings file
└── gradlew            # Gradle wrapper script (for easy execution)
└── gradlew.bat
```

### `build.gradle` Configuration

Your `build.gradle` file is crucial for defining your project's dependencies and how it's built. Here's a comprehensive template `build.gradle` that includes the necessary configurations for a Railroad plugin, incorporating common practices seen in existing plugins:

```groovy
plugins {
    id 'java'
    id 'maven-publish' // For publishing your plugin artifact to a Maven repository
    id 'org.openjfx.javafxplugin' version '0.1.0' // If your plugin uses JavaFX for UI
}

group = 'com.example.exampleperson.plugin' // Replace with your unique group ID
version = '1.0.0-SNAPSHOT' // Replace with your plugin's version (use -SNAPSHOT for development)

java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(21)) // Set your desired Java version (e.g., 17, 21)
    }
}

tasks.withType(JavaCompile).configureEach {
    options.release.set(21) // Ensure compatibility with the specified Java version
}

repositories {
    mavenCentral() // Standard Maven Central repository
    maven { url 'https://jitpack.io' }
}

// JavaFX configuration, if the 'org.openjfx.javafxplugin' is applied
javafx {
    version = '21.0.2' // Match your Java version or a compatible one
    modules = [ 'javafx.controls', 'javafx.graphics' ] // Add necessary JavaFX modules
}

dependencies {
    // Railroad Plugin API - essential for all Railroad plugins
    // Replace 'x.y.z' with the actual version of the Railroad Plugin API you are targeting
    compileOnly 'io.github.railroad:railroad-plugin-api:x.y.z'

    // JavaFX dependencies (if using JavaFX for UI)
    implementation 'org.openjfx:javafx-controls'
    implementation 'org.openjfx:javafx-graphics'

    // Lombok - useful for reducing boilerplate code (requires annotationProcessor)
    compileOnly 'org.projectlombok:lombok:1.18.32' // Use the latest version
    annotationProcessor 'org.projectlombok:lombok:1.18.32' // Use the latest version

    // Add any other third-party dependencies your plugin needs here
    // implementation 'com.google.code.gson:gson:2.10.1'
}

publishing {
    publications {
        mavenJava(MavenPublication) {
            from components.java
        }
    }
}
```
