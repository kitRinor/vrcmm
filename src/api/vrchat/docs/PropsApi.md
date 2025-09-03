# PropsApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getProp**](#getprop) | **GET** /props/{propId} | Get Prop|

# **getProp**
> Prop getProp()

Returns a Prop object.

### Example

```typescript
import {
    PropsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PropsApi(configuration);

let propId: string; //Prop ID. (default to undefined)

const { status, data } = await apiInstance.getProp(
    propId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propId** | [**string**] | Prop ID. | defaults to undefined|


### Return type

**Prop**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Prop object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

