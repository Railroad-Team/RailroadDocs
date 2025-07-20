# Managing Dependencies

This page details the `dependencies` object within your `plugin.json` file. For a general overview of the `plugin.json` file, its location, and other fields, please refer to the [`plugin.json` Configuration](./plugin-json.md) guide.

## `dependencies` Object Structure

Within the `plugin.json` file, the `dependencies` object contains `repositories` and `artifacts` arrays.

### Example `dependencies` Object

Here is an example of the `dependencies` object within a `plugin.json` file, demonstrating how to declare dependencies and custom Maven repositories:

```json
{
  "repositories": [
    {
      "id": "central",
      "url": "https://repo.maven.apache.org/maven2"
    },
    {
      "id": "my-custom-repo",
      "url": "https://mymavenrepo.com/releases"
    }
  ],
  "artifacts": [
    {
      "groupId": "com.google.code.gson",
      "artifactId": "gson",
      "version": "2.10.1"
    },
    {
      "groupId": "org.slf4j",
      "artifactId": "slf4j-api",
      "version": "2.0.7"
    }
  ]
}
```

### Repository Object Fields (within `dependencies.repositories`):

- `id` (string): A unique identifier for the repository.
- `url` (string): The URL of the Maven repository.

### Artifact Object Fields (within `dependencies.artifacts`):

- `groupId` (string): The group ID of the Maven artifact.
- `artifactId` (string): The artifact ID of the Maven artifact.
- `version` (string): The version of the Maven artifact.

When the Railroad application loads your plugin, it will read this `plugin.json` file, resolve the declared artifacts from the specified repositories (or Maven Central by default), and add them to your plugin's classpath.
