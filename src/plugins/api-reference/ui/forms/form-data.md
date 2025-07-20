# FormData

`FormData` is a class that represents a data object used to store and retrieve form data. It internally uses a `HashMap` to store key-value pairs, where keys are `String` and values can be any `Object`.

## Usage

```java
FormData formData = new FormData();
formData.add("username", "john.doe");
formData.addProperty("age", 30);
formData.addProperty("isAdmin", true);

String username = formData.getString("username");
int age = formData.getInt("age");
boolean isAdmin = formData.getBoolean("isAdmin");

System.out.println("Username: " + username); // Output: Username: john.doe
System.out.println("Age: " + age);         // Output: Age: 30
System.out.println("Is Admin: " + isAdmin); // Output: Is Admin: true
```

## Methods

### `add(String key, Object value)`

Adds a key-value pair to the form data.

- `key`: The string key.
- `value`: The object value.

### `addProperty(String key, String value)`

Adds a string key-value pair to the form data.

- `key`: The string key.
- `value`: The string value.

### `addProperty(String key, int value)`

Adds an integer key-value pair to the form data.

- `key`: The string key.
- `value`: The integer value.

### `addProperty(String key, boolean value)`

Adds a boolean key-value pair to the form data.

- `key`: The string key.
- `value`: The boolean value.

### `addProperty(String key, double value)`

Adds a double key-value pair to the form data.

- `key`: The string key.
- `value`: The double value.

### `addProperty(String key, float value)`

Adds a float key-value pair to the form data.

- `key`: The string key.
- `value`: The float value.

### `addProperty(String key, long value)`

Adds a long key-value pair to the form data.

- `key`: The string key.
- `value`: The long value.

### `addProperty(String key, short value)`

Adds a short key-value pair to the form data.

- `key`: The string key.
- `value`: The short value.

### `addProperty(String key, byte value)`

Adds a byte key-value pair to the form data.

- `key`: The string key.
- `value`: The byte value.

### `addProperty(String key, char value)`

Adds a char key-value pair to the form data.

- `key`: The string key.
- `value`: The char value.

### `get(String key)`

Gets the value of the specified key as an `Object`.

- `key`: The string key.
- **Returns**: The value associated with the key.

### `getString(String key)`

Gets the value of the specified key as a `String`.

- `key`: The string key.
- **Returns**: The string value.

### `getInt(String key)`

Gets the value of the specified key as an `int`.

- `key`: The string key.
- **Returns**: The integer value.

### `getBoolean(String key)`

Gets the value of the specified key as a `boolean`.

- `key`: The string key.
- **Returns**: The boolean value.

### `getDouble(String key)`

Gets the value of the specified key as a `double`.

- `key`: The string key.
- **Returns**: The double value.

### `getFloat(String key)`

Gets the value of the specified key as a `float`.

- `key`: The string key.
- **Returns**: The float value.

### `getLong(String key)`

Gets the value of the specified key as a `long`.

- `key`: The string key.
- **Returns**: The long value.

### `getShort(String key)`

Gets the value of the specified key as a `short`.

- `key`: The string key.
- **Returns**: The short value.

### `getByte(String key)`

Gets the value of the specified key as a `byte`.

- `key`: The string key.
- **Returns**: The byte value.

### `getChar(String key)`

Gets the value of the specified key as a `char`.

- `key`: The string key.
- **Returns**: The char value.

### `containsKey(String key)`

Checks if the form data contains the specified key.

- `key`: The string key.
- **Returns**: `true` if the key exists, `false` otherwise.

### `containsValue(Object value)`

Checks if the form data contains the specified value.

- `value`: The object value.
- **Returns**: `true` if the value exists, `false` otherwise.

### `isEmpty()`

Checks if the form data is empty.

- **Returns**: `true` if the data is empty, `false` otherwise.

### `getEnum(String key, Class<T> enumType)`

Gets the value of the specified key and casts it to the specified enum type.

- `key`: The string key.
- `enumType`: The class of the enum type.
- **Returns**: The enum value.
- **Throws**: `ClassCastException` if the value cannot be cast to the specified enum type.

### `get(String key, Class<T> clazz)`

Gets the value of the specified key and casts it to the specified class.

- `key`: The string key.
- `clazz`: The class to cast the value to.
- **Returns**: The value cast to the specified class.
- **Throws**: `ClassCastException` if the value cannot be cast to the specified class.
