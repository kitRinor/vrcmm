# InventoryApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getInventory**](#getinventory) | **GET** /inventory | Get Inventory|
|[**getInventoryDrops**](#getinventorydrops) | **GET** /inventory/drops | List Inventory Drops|
|[**getInventoryTemplate**](#getinventorytemplate) | **GET** /inventory/template/{inventoryTemplateId} | Get Inventory Template|
|[**getOwnInventoryItem**](#getowninventoryitem) | **GET** /inventory/{inventoryItemId} | Get Own Inventory Item|
|[**spawnInventoryItem**](#spawninventoryitem) | **GET** /inventory/spawn | Spawn Inventory Item|

# **getInventory**
> Inventory getInventory()

Returns an Inventory object.

### Example

```typescript
import {
    InventoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)
let inventorySortOrder: 'newest' | 'oldest'; //Sort order for inventory retrieval. (optional) (default to undefined)
let inventoryItemType: InventoryItemType; //Filter for inventory retrieval. (optional) (default to undefined)

const { status, data } = await apiInstance.getInventory(
    n,
    offset,
    inventorySortOrder,
    inventoryItemType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|
| **inventorySortOrder** | [**&#39;newest&#39; | &#39;oldest&#39;**]**Array<&#39;newest&#39; &#124; &#39;oldest&#39;>** | Sort order for inventory retrieval. | (optional) defaults to undefined|
| **inventoryItemType** | **InventoryItemType** | Filter for inventory retrieval. | (optional) defaults to undefined|


### Return type

**Inventory**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns an Inventory object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInventoryDrops**
> Array<InventoryDrop> getInventoryDrops()

Returns a list of InventoryDrop objects.

### Example

```typescript
import {
    InventoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let active: boolean; //Filter for users\' listings and inventory bundles. (optional) (default to undefined)

const { status, data } = await apiInstance.getInventoryDrops(
    active
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **active** | [**boolean**] | Filter for users\&#39; listings and inventory bundles. | (optional) defaults to undefined|


### Return type

**Array<InventoryDrop>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of InventoryDrop objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInventoryTemplate**
> InventoryTemplate getInventoryTemplate()

Returns an InventoryTemplate object.

### Example

```typescript
import {
    InventoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let inventoryTemplateId: string; //Must be a valid inventory template ID. (default to undefined)

const { status, data } = await apiInstance.getInventoryTemplate(
    inventoryTemplateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inventoryTemplateId** | [**string**] | Must be a valid inventory template ID. | defaults to undefined|


### Return type

**InventoryTemplate**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns an InventoryTemplate object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOwnInventoryItem**
> InventoryItem getOwnInventoryItem()

Returns an InventoryItem object held by the currently logged in user.

### Example

```typescript
import {
    InventoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let inventoryItemId: string; //Must be a valid inventory item ID. (default to undefined)

const { status, data } = await apiInstance.getOwnInventoryItem(
    inventoryItemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inventoryItemId** | [**string**] | Must be a valid inventory item ID. | defaults to undefined|


### Return type

**InventoryItem**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns an InventoryItem object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spawnInventoryItem**
> InventorySpawn spawnInventoryItem()

Returns an InventorySpawn object.

### Example

```typescript
import {
    InventoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let id: string; //Id for inventory item spawning. (default to undefined)

const { status, data } = await apiInstance.spawnInventoryItem(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Id for inventory item spawning. | defaults to undefined|


### Return type

**InventorySpawn**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns an InventorySpawn object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

