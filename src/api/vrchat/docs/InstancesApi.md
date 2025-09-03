# InstancesApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**closeInstance**](#closeinstance) | **DELETE** /instances/{worldId}:{instanceId} | Close Instance|
|[**createInstance**](#createinstance) | **POST** /instances | Create Instance|
|[**getInstance**](#getinstance) | **GET** /instances/{worldId}:{instanceId} | Get Instance|
|[**getInstanceByShortName**](#getinstancebyshortname) | **GET** /instances/s/{shortName} | Get Instance By Short Name|
|[**getShortName**](#getshortname) | **GET** /instances/{worldId}:{instanceId}/shortName | Get Instance Short Name|

# **closeInstance**
> Instance closeInstance()

Close an instance or update the closedAt time when it will be closed.  You can only close an instance if the ownerId is yourself or if the instance owner is a group and you have the `group-instance-manage` permission.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let worldId: string; //Must be a valid world ID. (default to undefined)
let instanceId: string; //Must be a valid instance ID. (default to undefined)
let hardClose: boolean; //Whether to hard close the instance. Defaults to false. (optional) (default to undefined)
let closedAt: string; //The time after which users won\'t be allowed to join the instances. If omitted, the instance will be closed immediately. (optional) (default to undefined)

const { status, data } = await apiInstance.closeInstance(
    worldId,
    instanceId,
    hardClose,
    closedAt
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **worldId** | [**string**] | Must be a valid world ID. | defaults to undefined|
| **instanceId** | [**string**] | Must be a valid instance ID. | defaults to undefined|
| **hardClose** | [**boolean**] | Whether to hard close the instance. Defaults to false. | (optional) defaults to undefined|
| **closedAt** | [**string**] | The time after which users won\&#39;t be allowed to join the instances. If omitted, the instance will be closed immediately. | (optional) defaults to undefined|


### Return type

**Instance**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Instance object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**403** | Error response due to not being allowed to close an instance |  -  |
|**404** | Error response due to non existant instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createInstance**
> Instance createInstance(createInstanceRequest)

Create an instance

### Example

```typescript
import {
    InstancesApi,
    Configuration,
    CreateInstanceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let createInstanceRequest: CreateInstanceRequest; //

const { status, data } = await apiInstance.createInstance(
    createInstanceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createInstanceRequest** | **CreateInstanceRequest**|  | |


### Return type

**Instance**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Instance object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInstance**
> Instance getInstance()

Returns an instance. Please read [Instances Tutorial](https://vrchatapi.github.io/tutorials/instances/) for more information on Instances.  If an invalid instanceId is provided, this endpoint will simply return \"null\"!

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let worldId: string; //Must be a valid world ID. (default to undefined)
let instanceId: string; //Must be a valid instance ID. (default to undefined)

const { status, data } = await apiInstance.getInstance(
    worldId,
    instanceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **worldId** | [**string**] | Must be a valid world ID. | defaults to undefined|
| **instanceId** | [**string**] | Must be a valid instance ID. | defaults to undefined|


### Return type

**Instance**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Instance object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInstanceByShortName**
> Instance getInstanceByShortName()

Returns an instance. Please read [Instances Tutorial](https://vrchatapi.github.io/tutorials/instances/) for more information on Instances.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let shortName: string; //Must be a valid instance short name. (default to undefined)

const { status, data } = await apiInstance.getInstanceByShortName(
    shortName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shortName** | [**string**] | Must be a valid instance short name. | defaults to undefined|


### Return type

**Instance**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Instance object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response due to non existant instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getShortName**
> InstanceShortNameResponse getShortName()

Returns an instance short name.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let worldId: string; //Must be a valid world ID. (default to undefined)
let instanceId: string; //Must be a valid instance ID. (default to undefined)

const { status, data } = await apiInstance.getShortName(
    worldId,
    instanceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **worldId** | [**string**] | Must be a valid world ID. | defaults to undefined|
| **instanceId** | [**string**] | Must be a valid instance ID. | defaults to undefined|


### Return type

**InstanceShortNameResponse**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns an instance secureName and/or shortName. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

