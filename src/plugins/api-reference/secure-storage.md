# Secure Storage API

The Railroad Plugin API provides a `SecureTokenStore` for securely storing sensitive information, such as API keys, access tokens, or other credentials. This helps plugins avoid hardcoding sensitive data and provides a more secure way to manage user-specific secrets.

## `SecureTokenStore`

The `SecureTokenStore` class allows you to save, retrieve, and clear tokens securely. It typically uses platform-specific mechanisms (e.g., OS keychain, encrypted files) to protect the data.

### Key Methods:

- `SecureTokenStore(String serviceName)`: Constructor. `serviceName` is a unique identifier for your plugin's storage area.
- `void saveToken(String token, String key)`: Saves a token associated with a given key.
- `String getToken(String key)`: Retrieves a token associated with a given key.
- `void clearToken(String key)`: Clears a token associated with a given key.

### Example: Using `SecureTokenStore`

```java
import io.github.railroad.railroadpluginapi.Plugin;
import io.github.railroad.railroadpluginapi.PluginContext;
import io.github.railroad.core.secure_storage.SecureTokenStore;

public class MySecureStoragePlugin implements Plugin {

    // Define a unique service name for your plugin's secure storage
    private static final String MY_PLUGIN_SERVICE_NAME = "myplugin-auth";
    private SecureTokenStore tokenStore;

    @Override
    public void onEnable(PluginContext context) {
        tokenStore = new SecureTokenStore(MY_PLUGIN_SERVICE_NAME);

        String apiKey = "my_super_secret_api_key_123";
        String apiKeyId = "api_key_for_service_x";

        // Save the API key securely
        tokenStore.saveToken(apiKey, apiKeyId);
        context.getLogger().info("API Key saved securely.");

        // Retrieve the API key
        String retrievedApiKey = tokenStore.getToken(apiKeyId);
        if (retrievedApiKey != null) {
            context.getLogger().info("Retrieved API Key: " + retrievedApiKey);
        } else {
            context.getLogger().warn("API Key not found or could not be retrieved.");
        }
    }

    @Override
    public void onDisable(PluginContext context) {
        // It's good practice to clear sensitive data when no longer needed (not necessarily in onDisable)
        // tokenStore.clearToken("api_key_for_service_x");
        // context.getLogger().info("API Key cleared from secure storage.");
    }
}
```
