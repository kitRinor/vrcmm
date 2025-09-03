# PrintsApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deletePrint**](#deleteprint) | **DELETE** /prints/{printId} | Delete Print|
|[**editPrint**](#editprint) | **POST** /prints/{printId} | Edit Print|
|[**getPrint**](#getprint) | **GET** /prints/{printId} | Get Print|
|[**getUserPrints**](#getuserprints) | **GET** /prints/user/{userId} | Get Own Prints|
|[**uploadPrint**](#uploadprint) | **POST** /prints | Upload Print|

# **deletePrint**
> deletePrint()

Returns a print.

### Example

```typescript
import {
    PrintsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PrintsApi(configuration);

let printId: string; //Print ID. (default to undefined)

const { status, data } = await apiInstance.deletePrint(
    printId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **printId** | [**string**] | Print ID. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty response if successful |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **editPrint**
> Print editPrint()

Edits a print.

### Example

```typescript
import {
    PrintsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PrintsApi(configuration);

let printId: string; //Print ID. (default to undefined)
let image: File; //The binary blob of the png file. (default to undefined)
let note: string; //The caption for the image. (optional) (default to undefined)

const { status, data } = await apiInstance.editPrint(
    printId,
    image,
    note
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **printId** | [**string**] | Print ID. | defaults to undefined|
| **image** | [**File**] | The binary blob of the png file. | defaults to undefined|
| **note** | [**string**] | The caption for the image. | (optional) defaults to undefined|


### Return type

**Print**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Print object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPrint**
> Print getPrint()

Returns a print.

### Example

```typescript
import {
    PrintsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PrintsApi(configuration);

let printId: string; //Print ID. (default to undefined)

const { status, data } = await apiInstance.getPrint(
    printId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **printId** | [**string**] | Print ID. | defaults to undefined|


### Return type

**Print**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Print object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserPrints**
> Array<Print> getUserPrints()

Returns a list of all prints of the user. User id has to be your own userId, as you can\'t request other user\'s prints.

### Example

```typescript
import {
    PrintsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PrintsApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.getUserPrints(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**Array<Print>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of Print objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**403** | Error response when trying to request another user\&#39;s prints. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadPrint**
> Print uploadPrint()

Uploads and creates a print.

### Example

```typescript
import {
    PrintsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PrintsApi(configuration);

let image: File; //The binary blob of the png file. (default to undefined)
let timestamp: string; //The time the image was captured. (default to undefined)
let note: string; //The caption for the image. (optional) (default to undefined)
let worldId: string; //The id of the world in which the image was captured. (optional) (default to undefined)
let worldName: string; //The name of the world in which the image was captured. (optional) (default to undefined)

const { status, data } = await apiInstance.uploadPrint(
    image,
    timestamp,
    note,
    worldId,
    worldName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **image** | [**File**] | The binary blob of the png file. | defaults to undefined|
| **timestamp** | [**string**] | The time the image was captured. | defaults to undefined|
| **note** | [**string**] | The caption for the image. | (optional) defaults to undefined|
| **worldId** | [**string**] | The id of the world in which the image was captured. | (optional) defaults to undefined|
| **worldName** | [**string**] | The name of the world in which the image was captured. | (optional) defaults to undefined|


### Return type

**Print**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Print object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

