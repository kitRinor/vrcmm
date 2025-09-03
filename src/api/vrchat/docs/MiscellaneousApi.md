# MiscellaneousApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAssignedPermissions**](#getassignedpermissions) | **GET** /auth/permissions | Get Assigned Permissions|
|[**getCSS**](#getcss) | **GET** /css/app.css | Download CSS|
|[**getConfig**](#getconfig) | **GET** /config | Fetch API Config|
|[**getCurrentOnlineUsers**](#getcurrentonlineusers) | **GET** /visits | Current Online Users|
|[**getHealth**](#gethealth) | **GET** /health | Check API Health|
|[**getInfoPush**](#getinfopush) | **GET** /infoPush | Show Information Notices|
|[**getJavaScript**](#getjavascript) | **GET** /js/app.js | Download JavaScript|
|[**getPermission**](#getpermission) | **GET** /permissions/{permissionId} | Get Permission|
|[**getSystemTime**](#getsystemtime) | **GET** /time | Current System Time|

# **getAssignedPermissions**
> Array<Permission> getAssignedPermissions()

Returns a list of all permissions currently granted by the user. Permissions are assigned e.g. by subscribing to VRC+.

### Example

```typescript
import {
    MiscellaneousApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MiscellaneousApi(configuration);

const { status, data } = await apiInstance.getAssignedPermissions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Permission>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of Permission objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCSS**
> string getCSS()

Fetches the CSS code to the frontend React website.

### Example

```typescript
import {
    MiscellaneousApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MiscellaneousApi(configuration);

let variant: 'public' | 'internal'; //Specifies which `variant` of the site. Public is the end-user site, while `internal` is the staff-only site with special pages for moderation and management. (optional) (default to 'public')
let branch: string; //Specifies which git branch the site should load frontend source code from. (optional) (default to 'main')

const { status, data } = await apiInstance.getCSS(
    variant,
    branch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **variant** | [**&#39;public&#39; | &#39;internal&#39;**]**Array<&#39;public&#39; &#124; &#39;internal&#39;>** | Specifies which &#x60;variant&#x60; of the site. Public is the end-user site, while &#x60;internal&#x60; is the staff-only site with special pages for moderation and management. | (optional) defaults to 'public'|
| **branch** | [**string**] | Specifies which git branch the site should load frontend source code from. | (optional) defaults to 'main'|


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/css, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | **Note:** VRChat uses 302 Redirect to Cloudfront. The implementing library **must** support and follow redirects natively. |  -  |
|**400** | Error response when trying to download non-public and non-main JavaScript or CSS without Admin Credentials. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getConfig**
> APIConfig getConfig()

API config contains configuration that the clients needs to work properly.  Currently the most important value here is `clientApiKey` which is used for all other API endpoints.

### Example

```typescript
import {
    MiscellaneousApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MiscellaneousApi(configuration);

const { status, data } = await apiInstance.getConfig();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**APIConfig**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns the API\&#39;s config. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCurrentOnlineUsers**
> number getCurrentOnlineUsers()

Returns the current number of online users.  **NOTE:** The response type is not a JSON object, but a simple JSON integer.

### Example

```typescript
import {
    MiscellaneousApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MiscellaneousApi(configuration);

const { status, data } = await apiInstance.getCurrentOnlineUsers();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**number**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getHealth**
> APIHealth getHealth()

~~Gets the overall health status, the server name, and the current build version tag of the API.~~  **DEPRECATED:** VRChat has suddenly restricted this endpoint for unknown reasons, and now always return 401 Unauthorized.

### Example

```typescript
import {
    MiscellaneousApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MiscellaneousApi(configuration);

const { status, data } = await apiInstance.getHealth();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**APIHealth**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns the API\&#39;s health. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInfoPush**
> Array<InfoPush> getInfoPush()

IPS (Info Push System) is a system for VRChat to push out dynamic information to the client. This is primarily used by the Quick-Menu info banners, but can also be used to e.g. alert you to update your game to the latest version.  `include` is used to query what Information Pushes should be included in the response. If include is missing or empty, then no notices will normally be returned. This is an \"any of\" search.  `require` is used to limit what Information Pushes should be included in the response. This is usually used in combination with `include`, and is an \"all of\" search.

### Example

```typescript
import {
    MiscellaneousApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MiscellaneousApi(configuration);

let require: string; //Tags to include (comma-separated). All of the tags needs to be present. (optional) (default to undefined)
let include: string; //Tags to include (comma-separated). Any of the tags needs to be present. (optional) (default to undefined)

const { status, data } = await apiInstance.getInfoPush(
    require,
    include
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **require** | [**string**] | Tags to include (comma-separated). All of the tags needs to be present. | (optional) defaults to undefined|
| **include** | [**string**] | Tags to include (comma-separated). Any of the tags needs to be present. | (optional) defaults to undefined|


### Return type

**Array<InfoPush>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of InfoPush objects. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getJavaScript**
> string getJavaScript()

Fetches the JavaScript code to the frontend React website.

### Example

```typescript
import {
    MiscellaneousApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MiscellaneousApi(configuration);

let variant: 'public' | 'internal'; //Specifies which `variant` of the site. Public is the end-user site, while `internal` is the staff-only site with special pages for moderation and management. (optional) (default to 'public')
let branch: string; //Specifies which git branch the site should load frontend source code from. (optional) (default to 'main')

const { status, data } = await apiInstance.getJavaScript(
    variant,
    branch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **variant** | [**&#39;public&#39; | &#39;internal&#39;**]**Array<&#39;public&#39; &#124; &#39;internal&#39;>** | Specifies which &#x60;variant&#x60; of the site. Public is the end-user site, while &#x60;internal&#x60; is the staff-only site with special pages for moderation and management. | (optional) defaults to 'public'|
| **branch** | [**string**] | Specifies which git branch the site should load frontend source code from. | (optional) defaults to 'main'|


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/javascript, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | **Note:** VRChat uses 302 Redirect to Cloudfront. The implementing library **must** support and follow redirects natively. |  -  |
|**400** | Error response when trying to download non-public and non-main JavaScript or CSS without Admin Credentials. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPermission**
> Permission getPermission()

Returns a single permission. This endpoint is pretty useless, as it returns the exact same information as `/auth/permissions`.

### Example

```typescript
import {
    MiscellaneousApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MiscellaneousApi(configuration);

let permissionId: string; //Must be a valid permission ID. (default to undefined)

const { status, data } = await apiInstance.getPermission(
    permissionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permissionId** | [**string**] | Must be a valid permission ID. | defaults to undefined|


### Return type

**Permission**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Permission object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSystemTime**
> string getSystemTime()

Returns the current time of the API server.  **NOTE:** The response type is not a JSON object, but a simple JSON string.

### Example

```typescript
import {
    MiscellaneousApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MiscellaneousApi(configuration);

const { status, data } = await apiInstance.getSystemTime();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

