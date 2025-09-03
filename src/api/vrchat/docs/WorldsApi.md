# WorldsApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**checkUserPersistenceExists**](#checkuserpersistenceexists) | **GET** /users/{userId}/{worldId}/persist/exists | Check User Persistence Exists|
|[**createWorld**](#createworld) | **POST** /worlds | Create World|
|[**deleteUserPersistence**](#deleteuserpersistence) | **DELETE** /users/{userId}/{worldId}/persist | Delete User Persistence|
|[**deleteWorld**](#deleteworld) | **DELETE** /worlds/{worldId} | Delete World|
|[**getActiveWorlds**](#getactiveworlds) | **GET** /worlds/active | List Active Worlds|
|[**getFavoritedWorlds**](#getfavoritedworlds) | **GET** /worlds/favorites | List Favorited Worlds|
|[**getRecentWorlds**](#getrecentworlds) | **GET** /worlds/recent | List Recent Worlds|
|[**getWorld**](#getworld) | **GET** /worlds/{worldId} | Get World by ID|
|[**getWorldInstance**](#getworldinstance) | **GET** /worlds/{worldId}/{instanceId} | Get World Instance|
|[**getWorldMetadata**](#getworldmetadata) | **GET** /worlds/{worldId}/metadata | Get World Metadata|
|[**getWorldPublishStatus**](#getworldpublishstatus) | **GET** /worlds/{worldId}/publish | Get World Publish Status|
|[**publishWorld**](#publishworld) | **PUT** /worlds/{worldId}/publish | Publish World|
|[**searchWorlds**](#searchworlds) | **GET** /worlds | Search All Worlds|
|[**unpublishWorld**](#unpublishworld) | **DELETE** /worlds/{worldId}/publish | Unpublish World|
|[**updateWorld**](#updateworld) | **PUT** /worlds/{worldId} | Update World|

# **checkUserPersistenceExists**
> checkUserPersistenceExists()

Checks whether the user has persistence data for a given world

### Example

```typescript
import {
    WorldsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorldsApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)
let worldId: string; //Must be a valid world ID. (default to undefined)

const { status, data } = await apiInstance.checkUserPersistenceExists(
    userId,
    worldId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|
| **worldId** | [**string**] | Must be a valid world ID. | defaults to undefined|


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
|**200** | The user has persistence data for the given world. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | The user does not have persistence data for the given world. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWorld**
> World createWorld()

Create a new world. This endpoint requires `assetUrl` to be a valid File object with `.vrcw` file extension, and `imageUrl` to be a valid File object with an image file extension.

### Example

```typescript
import {
    WorldsApi,
    Configuration,
    CreateWorldRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WorldsApi(configuration);

let createWorldRequest: CreateWorldRequest; // (optional)

const { status, data } = await apiInstance.createWorld(
    createWorldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWorldRequest** | **CreateWorldRequest**|  | |


### Return type

**World**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single World object. |  -  |
|**400** | Error response when trying create a world without having the neccesary Trust rank yet. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteUserPersistence**
> deleteUserPersistence()

Deletes the user\'s persistence data for a given world

### Example

```typescript
import {
    WorldsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorldsApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)
let worldId: string; //Must be a valid world ID. (default to undefined)

const { status, data } = await apiInstance.deleteUserPersistence(
    userId,
    worldId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|
| **worldId** | [**string**] | Must be a valid world ID. | defaults to undefined|


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
|**200** | The user\&#39;s persistence data for the given world is deleted. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | The user does not have persistence data for the given world. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWorld**
> deleteWorld()

Delete a world. Notice a world is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The WorldID is permanently reserved.

### Example

```typescript
import {
    WorldsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorldsApi(configuration);

let worldId: string; //Must be a valid world ID. (default to undefined)

const { status, data } = await apiInstance.deleteWorld(
    worldId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **worldId** | [**string**] | Must be a valid world ID. | defaults to undefined|


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
|**200** | OK |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to show information about a non-existent world. Sometimes returns with &#x60;model &lt;worldId&gt; not found&#x60; instead of &#x60;World &lt;worldId not found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getActiveWorlds**
> Array<LimitedWorld> getActiveWorlds()

Search and list currently Active worlds by query filters.

### Example

```typescript
import {
    WorldsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorldsApi(configuration);

let featured: boolean; //Filters on featured results. (optional) (default to undefined)
let sort: SortOption; //The sort order of the results. (optional) (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let order: OrderOption; //Result ordering (optional) (default to undefined)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)
let search: string; //Filters by world name. (optional) (default to undefined)
let tag: string; //Tags to include (comma-separated). Any of the tags needs to be present. (optional) (default to undefined)
let notag: string; //Tags to exclude (comma-separated). (optional) (default to undefined)
let releaseStatus: ReleaseStatus; //Filter by ReleaseStatus. (optional) (default to undefined)
let maxUnityVersion: string; //The maximum Unity version supported by the asset. (optional) (default to undefined)
let minUnityVersion: string; //The minimum Unity version supported by the asset. (optional) (default to undefined)
let platform: string; //The platform the asset supports. (optional) (default to undefined)

const { status, data } = await apiInstance.getActiveWorlds(
    featured,
    sort,
    n,
    order,
    offset,
    search,
    tag,
    notag,
    releaseStatus,
    maxUnityVersion,
    minUnityVersion,
    platform
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **featured** | [**boolean**] | Filters on featured results. | (optional) defaults to undefined|
| **sort** | **SortOption** | The sort order of the results. | (optional) defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **order** | **OrderOption** | Result ordering | (optional) defaults to undefined|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|
| **search** | [**string**] | Filters by world name. | (optional) defaults to undefined|
| **tag** | [**string**] | Tags to include (comma-separated). Any of the tags needs to be present. | (optional) defaults to undefined|
| **notag** | [**string**] | Tags to exclude (comma-separated). | (optional) defaults to undefined|
| **releaseStatus** | **ReleaseStatus** | Filter by ReleaseStatus. | (optional) defaults to undefined|
| **maxUnityVersion** | [**string**] | The maximum Unity version supported by the asset. | (optional) defaults to undefined|
| **minUnityVersion** | [**string**] | The minimum Unity version supported by the asset. | (optional) defaults to undefined|
| **platform** | [**string**] | The platform the asset supports. | (optional) defaults to undefined|


### Return type

**Array<LimitedWorld>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of LimitedWorld objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFavoritedWorlds**
> Array<FavoritedWorld> getFavoritedWorlds()

Search and list favorited worlds by query filters.

### Example

```typescript
import {
    WorldsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorldsApi(configuration);

let featured: boolean; //Filters on featured results. (optional) (default to undefined)
let sort: SortOption; //The sort order of the results. (optional) (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let order: OrderOption; //Result ordering (optional) (default to undefined)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)
let search: string; //Filters by world name. (optional) (default to undefined)
let tag: string; //Tags to include (comma-separated). Any of the tags needs to be present. (optional) (default to undefined)
let notag: string; //Tags to exclude (comma-separated). (optional) (default to undefined)
let releaseStatus: ReleaseStatus; //Filter by ReleaseStatus. (optional) (default to undefined)
let maxUnityVersion: string; //The maximum Unity version supported by the asset. (optional) (default to undefined)
let minUnityVersion: string; //The minimum Unity version supported by the asset. (optional) (default to undefined)
let platform: string; //The platform the asset supports. (optional) (default to undefined)
let userId: string; //Target user to see information on, admin-only. (optional) (default to undefined)

const { status, data } = await apiInstance.getFavoritedWorlds(
    featured,
    sort,
    n,
    order,
    offset,
    search,
    tag,
    notag,
    releaseStatus,
    maxUnityVersion,
    minUnityVersion,
    platform,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **featured** | [**boolean**] | Filters on featured results. | (optional) defaults to undefined|
| **sort** | **SortOption** | The sort order of the results. | (optional) defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **order** | **OrderOption** | Result ordering | (optional) defaults to undefined|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|
| **search** | [**string**] | Filters by world name. | (optional) defaults to undefined|
| **tag** | [**string**] | Tags to include (comma-separated). Any of the tags needs to be present. | (optional) defaults to undefined|
| **notag** | [**string**] | Tags to exclude (comma-separated). | (optional) defaults to undefined|
| **releaseStatus** | **ReleaseStatus** | Filter by ReleaseStatus. | (optional) defaults to undefined|
| **maxUnityVersion** | [**string**] | The maximum Unity version supported by the asset. | (optional) defaults to undefined|
| **minUnityVersion** | [**string**] | The minimum Unity version supported by the asset. | (optional) defaults to undefined|
| **platform** | [**string**] | The platform the asset supports. | (optional) defaults to undefined|
| **userId** | [**string**] | Target user to see information on, admin-only. | (optional) defaults to undefined|


### Return type

**Array<FavoritedWorld>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of FavoritedWorld objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**403** | Error response when trying to see favourited worlds of another user without sufficient admin permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRecentWorlds**
> Array<LimitedWorld> getRecentWorlds()

Search and list recently visited worlds by query filters.

### Example

```typescript
import {
    WorldsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorldsApi(configuration);

let featured: boolean; //Filters on featured results. (optional) (default to undefined)
let sort: SortOption; //The sort order of the results. (optional) (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let order: OrderOption; //Result ordering (optional) (default to undefined)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)
let search: string; //Filters by world name. (optional) (default to undefined)
let tag: string; //Tags to include (comma-separated). Any of the tags needs to be present. (optional) (default to undefined)
let notag: string; //Tags to exclude (comma-separated). (optional) (default to undefined)
let releaseStatus: ReleaseStatus; //Filter by ReleaseStatus. (optional) (default to undefined)
let maxUnityVersion: string; //The maximum Unity version supported by the asset. (optional) (default to undefined)
let minUnityVersion: string; //The minimum Unity version supported by the asset. (optional) (default to undefined)
let platform: string; //The platform the asset supports. (optional) (default to undefined)
let userId: string; //Target user to see information on, admin-only. (optional) (default to undefined)

const { status, data } = await apiInstance.getRecentWorlds(
    featured,
    sort,
    n,
    order,
    offset,
    search,
    tag,
    notag,
    releaseStatus,
    maxUnityVersion,
    minUnityVersion,
    platform,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **featured** | [**boolean**] | Filters on featured results. | (optional) defaults to undefined|
| **sort** | **SortOption** | The sort order of the results. | (optional) defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **order** | **OrderOption** | Result ordering | (optional) defaults to undefined|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|
| **search** | [**string**] | Filters by world name. | (optional) defaults to undefined|
| **tag** | [**string**] | Tags to include (comma-separated). Any of the tags needs to be present. | (optional) defaults to undefined|
| **notag** | [**string**] | Tags to exclude (comma-separated). | (optional) defaults to undefined|
| **releaseStatus** | **ReleaseStatus** | Filter by ReleaseStatus. | (optional) defaults to undefined|
| **maxUnityVersion** | [**string**] | The maximum Unity version supported by the asset. | (optional) defaults to undefined|
| **minUnityVersion** | [**string**] | The minimum Unity version supported by the asset. | (optional) defaults to undefined|
| **platform** | [**string**] | The platform the asset supports. | (optional) defaults to undefined|
| **userId** | [**string**] | Target user to see information on, admin-only. | (optional) defaults to undefined|


### Return type

**Array<LimitedWorld>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of LimitedWorld objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**403** | Error response when trying to see recently visited worlds of another user without sufficient admin permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWorld**
> World getWorld()

Get information about a specific World. Works unauthenticated but when so will always return `0` for certain fields.

### Example

```typescript
import {
    WorldsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorldsApi(configuration);

let worldId: string; //Must be a valid world ID. (default to undefined)

const { status, data } = await apiInstance.getWorld(
    worldId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **worldId** | [**string**] | Must be a valid world ID. | defaults to undefined|


### Return type

**World**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single World object. |  -  |
|**404** | Error response when trying to show information about a non-existent world. Sometimes returns with &#x60;model &lt;worldId&gt; not found&#x60; instead of &#x60;World &lt;worldId not found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWorldInstance**
> Instance getWorldInstance()

Returns a worlds instance.

### Example

```typescript
import {
    WorldsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorldsApi(configuration);

let worldId: string; //Must be a valid world ID. (default to undefined)
let instanceId: string; //Must be a valid instance ID. (default to undefined)

const { status, data } = await apiInstance.getWorldInstance(
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

# **getWorldMetadata**
> WorldMetadata getWorldMetadata()

Return a worlds custom metadata. This is currently believed to be unused. Metadata can be set with `updateWorld` and can be any arbitrary object.

### Example

```typescript
import {
    WorldsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorldsApi(configuration);

let worldId: string; //Must be a valid world ID. (default to undefined)

const { status, data } = await apiInstance.getWorldMetadata(
    worldId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **worldId** | [**string**] | Must be a valid world ID. | defaults to undefined|


### Return type

**WorldMetadata**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Error response when trying to show information about a non-existent world. Sometimes returns with &#x60;model &lt;worldId&gt; not found&#x60; instead of &#x60;World &lt;worldId not found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWorldPublishStatus**
> WorldPublishStatus getWorldPublishStatus()

Returns a worlds publish status.

### Example

```typescript
import {
    WorldsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorldsApi(configuration);

let worldId: string; //Must be a valid world ID. (default to undefined)

const { status, data } = await apiInstance.getWorldPublishStatus(
    worldId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **worldId** | [**string**] | Must be a valid world ID. | defaults to undefined|


### Return type

**WorldPublishStatus**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single WorldPublishStatus object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to show information about a non-existent world. Sometimes returns with &#x60;model &lt;worldId&gt; not found&#x60; instead of &#x60;World &lt;worldId not found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publishWorld**
> publishWorld()

Publish a world. You can only publish one world per week.

### Example

```typescript
import {
    WorldsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorldsApi(configuration);

let worldId: string; //Must be a valid world ID. (default to undefined)

const { status, data } = await apiInstance.publishWorld(
    worldId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **worldId** | [**string**] | Must be a valid world ID. | defaults to undefined|


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
|**200** | TODO |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to show information about a non-existent world. Sometimes returns with &#x60;model &lt;worldId&gt; not found&#x60; instead of &#x60;World &lt;worldId not found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchWorlds**
> Array<LimitedWorld> searchWorlds()

Search and list any worlds by query filters.

### Example

```typescript
import {
    WorldsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorldsApi(configuration);

let featured: boolean; //Filters on featured results. (optional) (default to undefined)
let sort: SortOption; //The sort order of the results. (optional) (default to undefined)
let user: 'me'; //Set to `me` for searching own worlds. (optional) (default to undefined)
let userId: string; //Filter by UserID. (optional) (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let order: OrderOption; //Result ordering (optional) (default to undefined)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)
let search: string; //Filters by world name. (optional) (default to undefined)
let tag: string; //Tags to include (comma-separated). Any of the tags needs to be present. (optional) (default to undefined)
let notag: string; //Tags to exclude (comma-separated). (optional) (default to undefined)
let releaseStatus: ReleaseStatus; //Filter by ReleaseStatus. (optional) (default to undefined)
let maxUnityVersion: string; //The maximum Unity version supported by the asset. (optional) (default to undefined)
let minUnityVersion: string; //The minimum Unity version supported by the asset. (optional) (default to undefined)
let platform: string; //The platform the asset supports. (optional) (default to undefined)
let fuzzy: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchWorlds(
    featured,
    sort,
    user,
    userId,
    n,
    order,
    offset,
    search,
    tag,
    notag,
    releaseStatus,
    maxUnityVersion,
    minUnityVersion,
    platform,
    fuzzy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **featured** | [**boolean**] | Filters on featured results. | (optional) defaults to undefined|
| **sort** | **SortOption** | The sort order of the results. | (optional) defaults to undefined|
| **user** | [**&#39;me&#39;**]**Array<&#39;me&#39;>** | Set to &#x60;me&#x60; for searching own worlds. | (optional) defaults to undefined|
| **userId** | [**string**] | Filter by UserID. | (optional) defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **order** | **OrderOption** | Result ordering | (optional) defaults to undefined|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|
| **search** | [**string**] | Filters by world name. | (optional) defaults to undefined|
| **tag** | [**string**] | Tags to include (comma-separated). Any of the tags needs to be present. | (optional) defaults to undefined|
| **notag** | [**string**] | Tags to exclude (comma-separated). | (optional) defaults to undefined|
| **releaseStatus** | **ReleaseStatus** | Filter by ReleaseStatus. | (optional) defaults to undefined|
| **maxUnityVersion** | [**string**] | The maximum Unity version supported by the asset. | (optional) defaults to undefined|
| **minUnityVersion** | [**string**] | The minimum Unity version supported by the asset. | (optional) defaults to undefined|
| **platform** | [**string**] | The platform the asset supports. | (optional) defaults to undefined|
| **fuzzy** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**Array<LimitedWorld>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of LimitedWorld objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unpublishWorld**
> unpublishWorld()

Unpublish a world.

### Example

```typescript
import {
    WorldsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorldsApi(configuration);

let worldId: string; //Must be a valid world ID. (default to undefined)

const { status, data } = await apiInstance.unpublishWorld(
    worldId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **worldId** | [**string**] | Must be a valid world ID. | defaults to undefined|


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
|**200** | OK |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to show information about a non-existent world. Sometimes returns with &#x60;model &lt;worldId&gt; not found&#x60; instead of &#x60;World &lt;worldId not found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWorld**
> World updateWorld()

Update information about a specific World.

### Example

```typescript
import {
    WorldsApi,
    Configuration,
    UpdateWorldRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WorldsApi(configuration);

let worldId: string; //Must be a valid world ID. (default to undefined)
let updateWorldRequest: UpdateWorldRequest; // (optional)

const { status, data } = await apiInstance.updateWorld(
    worldId,
    updateWorldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateWorldRequest** | **UpdateWorldRequest**|  | |
| **worldId** | [**string**] | Must be a valid world ID. | defaults to undefined|


### Return type

**World**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single World object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to show information about a non-existent world. Sometimes returns with &#x60;model &lt;worldId&gt; not found&#x60; instead of &#x60;World &lt;worldId not found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

