# JamsApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getJam**](#getjam) | **GET** /jams/{jamId} | Show jam information|
|[**getJamSubmissions**](#getjamsubmissions) | **GET** /jams/{jamId}/submissions | Show jam submissions|
|[**getJams**](#getjams) | **GET** /jams | Show jams list|

# **getJam**
> Jam getJam()

Returns a jam.

### Example

```typescript
import {
    JamsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JamsApi(configuration);

let jamId: string; //Must be a valid query ID. (default to undefined)

const { status, data } = await apiInstance.getJam(
    jamId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jamId** | [**string**] | Must be a valid query ID. | defaults to undefined|


### Return type

**Jam**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a Jam object. |  -  |
|**404** | Error response when trying to show information about a non-existent jam. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getJamSubmissions**
> Array<Submission> getJamSubmissions()

Returns all submissions of a jam.

### Example

```typescript
import {
    JamsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JamsApi(configuration);

let jamId: string; //Must be a valid query ID. (default to undefined)

const { status, data } = await apiInstance.getJamSubmissions(
    jamId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jamId** | [**string**] | Must be a valid query ID. | defaults to undefined|


### Return type

**Array<Submission>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of Submission objects. |  -  |
|**404** | Error response when trying to show information about a non-existent jam. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getJams**
> Array<Jam> getJams()

Lists World Jams or Avatar Jams, both currently running and ones that have ended.  `isActive` is used to select only active or already ended jams.  `type` is used to select only world or avatar jams, and can only take `world` or `avatar`. ``

### Example

```typescript
import {
    JamsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JamsApi(configuration);

let type: string; //Only show jams of this type (`avatar` or `world`). (optional) (default to undefined)

const { status, data } = await apiInstance.getJams(
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] | Only show jams of this type (&#x60;avatar&#x60; or &#x60;world&#x60;). | (optional) defaults to undefined|


### Return type

**Array<Jam>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of Jam objects. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

