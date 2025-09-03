# AvatarsApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAvatar**](#createavatar) | **POST** /avatars | Create Avatar|
|[**deleteAvatar**](#deleteavatar) | **DELETE** /avatars/{avatarId} | Delete Avatar|
|[**deleteImpostor**](#deleteimpostor) | **DELETE** /avatars/{avatarId}/impostor | Delete generated Impostor|
|[**enqueueImpostor**](#enqueueimpostor) | **POST** /avatars/{avatarId}/impostor/enqueue | Enqueue Impostor generation|
|[**getAvatar**](#getavatar) | **GET** /avatars/{avatarId} | Get Avatar|
|[**getAvatarStyles**](#getavatarstyles) | **GET** /avatarStyles | Get Avatar Styles|
|[**getFavoritedAvatars**](#getfavoritedavatars) | **GET** /avatars/favorites | List Favorited Avatars|
|[**getImpostorQueueStats**](#getimpostorqueuestats) | **GET** /avatars/impostor/queue/stats | Get Impostor Queue Stats|
|[**getLicensedAvatars**](#getlicensedavatars) | **GET** /avatars/licensed | List Licensed Avatars|
|[**getOwnAvatar**](#getownavatar) | **GET** /users/{userId}/avatar | Get Own Avatar|
|[**searchAvatars**](#searchavatars) | **GET** /avatars | Search Avatars|
|[**selectAvatar**](#selectavatar) | **PUT** /avatars/{avatarId}/select | Select Avatar|
|[**selectFallbackAvatar**](#selectfallbackavatar) | **PUT** /avatars/{avatarId}/selectFallback | Select Fallback Avatar|
|[**updateAvatar**](#updateavatar) | **PUT** /avatars/{avatarId} | Update Avatar|

# **createAvatar**
> Avatar createAvatar()

Create an avatar. It\'s possible to optionally specify a ID if you want a custom one. Attempting to create an Avatar with an already claimed ID will result in a DB error.

### Example

```typescript
import {
    AvatarsApi,
    Configuration,
    CreateAvatarRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarsApi(configuration);

let createAvatarRequest: CreateAvatarRequest; // (optional)

const { status, data } = await apiInstance.createAvatar(
    createAvatarRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAvatarRequest** | **CreateAvatarRequest**|  | |


### Return type

**Avatar**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Avatar object. |  -  |
|**400** | Error response due to missing permissions. |  -  |
|**401** | Error response when set featured to true without being an admin. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAvatar**
> Avatar deleteAvatar()

Delete an avatar. Notice an avatar is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The AvatarID is permanently reserved.

### Example

```typescript
import {
    AvatarsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarsApi(configuration);

let avatarId: string; //Must be a valid avatar ID. (default to undefined)

const { status, data } = await apiInstance.deleteAvatar(
    avatarId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **avatarId** | [**string**] | Must be a valid avatar ID. | defaults to undefined|


### Return type

**Avatar**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Avatar object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to show information about a non-existent avatar. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteImpostor**
> deleteImpostor()

Delete generated Impostor for that avatar.

### Example

```typescript
import {
    AvatarsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarsApi(configuration);

let avatarId: string; //Must be a valid avatar ID. (default to undefined)

const { status, data } = await apiInstance.deleteImpostor(
    avatarId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **avatarId** | [**string**] | Must be a valid avatar ID. | defaults to undefined|


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
|**200** | The Impostors generated for that avatar are deleted. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to show information about a non-existent avatar. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enqueueImpostor**
> ServiceStatus enqueueImpostor()

Enqueue Impostor generation for that avatar.

### Example

```typescript
import {
    AvatarsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarsApi(configuration);

let avatarId: string; //Must be a valid avatar ID. (default to undefined)

const { status, data } = await apiInstance.enqueueImpostor(
    avatarId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **avatarId** | [**string**] | Must be a valid avatar ID. | defaults to undefined|


### Return type

**ServiceStatus**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a Service Status. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to show information about a non-existent avatar. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAvatar**
> Avatar getAvatar()

Get information about a specific Avatar.

### Example

```typescript
import {
    AvatarsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarsApi(configuration);

let avatarId: string; //Must be a valid avatar ID. (default to undefined)

const { status, data } = await apiInstance.getAvatar(
    avatarId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **avatarId** | [**string**] | Must be a valid avatar ID. | defaults to undefined|


### Return type

**Avatar**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Avatar object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to show information about a non-existent avatar. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAvatarStyles**
> Array<AvatarStyle> getAvatarStyles()

List avatar styles.

### Example

```typescript
import {
    AvatarsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarsApi(configuration);

const { status, data } = await apiInstance.getAvatarStyles();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AvatarStyle>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of AvatarStyle objects. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFavoritedAvatars**
> Array<Avatar> getFavoritedAvatars()

Search and list favorited avatars by query filters.

### Example

```typescript
import {
    AvatarsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarsApi(configuration);

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

const { status, data } = await apiInstance.getFavoritedAvatars(
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

**Array<Avatar>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of Avatar objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**403** | Error response when trying to see favourited avatars of another user without sufficient admin permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getImpostorQueueStats**
> ServiceQueueStats getImpostorQueueStats()

Gets service stats for queued impostor.

### Example

```typescript
import {
    AvatarsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarsApi(configuration);

const { status, data } = await apiInstance.getImpostorQueueStats();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ServiceQueueStats**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a Service Queue Stats. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLicensedAvatars**
> Array<Avatar> getLicensedAvatars()

List licensed avatars.

### Example

```typescript
import {
    AvatarsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarsApi(configuration);

let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)

const { status, data } = await apiInstance.getLicensedAvatars(
    n,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|


### Return type

**Array<Avatar>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of Avatar objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOwnAvatar**
> Avatar getOwnAvatar()

Get the current avatar for the user. This will return an error for any other user than the one logged in.

### Example

```typescript
import {
    AvatarsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarsApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.getOwnAvatar(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**Avatar**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Avatar object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**403** | Error response when trying to see another users current avatar without sufficient admin permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchAvatars**
> Array<Avatar> searchAvatars()

Search and list avatars by query filters. You can only search your own or featured avatars. It is not possible as a normal user to search other peoples avatars.

### Example

```typescript
import {
    AvatarsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarsApi(configuration);

let featured: boolean; //Filters on featured results. (optional) (default to undefined)
let sort: SortOption; //The sort order of the results. (optional) (default to undefined)
let user: 'me'; //Set to `me` for searching own avatars. (optional) (default to undefined)
let userId: string; //Filter by UserID. (optional) (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let order: OrderOption; //Result ordering (optional) (default to undefined)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)
let tag: string; //Tags to include (comma-separated). Any of the tags needs to be present. (optional) (default to undefined)
let notag: string; //Tags to exclude (comma-separated). (optional) (default to undefined)
let releaseStatus: ReleaseStatus; //Filter by ReleaseStatus. (optional) (default to undefined)
let maxUnityVersion: string; //The maximum Unity version supported by the asset. (optional) (default to undefined)
let minUnityVersion: string; //The minimum Unity version supported by the asset. (optional) (default to undefined)
let platform: string; //The platform the asset supports. (optional) (default to undefined)

const { status, data } = await apiInstance.searchAvatars(
    featured,
    sort,
    user,
    userId,
    n,
    order,
    offset,
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
| **user** | [**&#39;me&#39;**]**Array<&#39;me&#39;>** | Set to &#x60;me&#x60; for searching own avatars. | (optional) defaults to undefined|
| **userId** | [**string**] | Filter by UserID. | (optional) defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **order** | **OrderOption** | Result ordering | (optional) defaults to undefined|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|
| **tag** | [**string**] | Tags to include (comma-separated). Any of the tags needs to be present. | (optional) defaults to undefined|
| **notag** | [**string**] | Tags to exclude (comma-separated). | (optional) defaults to undefined|
| **releaseStatus** | **ReleaseStatus** | Filter by ReleaseStatus. | (optional) defaults to undefined|
| **maxUnityVersion** | [**string**] | The maximum Unity version supported by the asset. | (optional) defaults to undefined|
| **minUnityVersion** | [**string**] | The minimum Unity version supported by the asset. | (optional) defaults to undefined|
| **platform** | [**string**] | The platform the asset supports. | (optional) defaults to undefined|


### Return type

**Array<Avatar>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of Avatar objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **selectAvatar**
> CurrentUser selectAvatar()

Switches into that avatar.

### Example

```typescript
import {
    AvatarsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarsApi(configuration);

let avatarId: string; //Must be a valid avatar ID. (default to undefined)

const { status, data } = await apiInstance.selectAvatar(
    avatarId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **avatarId** | [**string**] | Must be a valid avatar ID. | defaults to undefined|


### Return type

**CurrentUser**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single CurrentUser object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to show information about a non-existent avatar. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **selectFallbackAvatar**
> CurrentUser selectFallbackAvatar()

Switches into that avatar as your fallback avatar.

### Example

```typescript
import {
    AvatarsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarsApi(configuration);

let avatarId: string; //Must be a valid avatar ID. (default to undefined)

const { status, data } = await apiInstance.selectFallbackAvatar(
    avatarId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **avatarId** | [**string**] | Must be a valid avatar ID. | defaults to undefined|


### Return type

**CurrentUser**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single CurrentUser object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**403** | Error response when trying to select a fallback avatar that is missing the fallback tag. |  -  |
|**404** | Error response when trying to show information about a non-existent avatar. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAvatar**
> Avatar updateAvatar()

Update information about a specific avatar.

### Example

```typescript
import {
    AvatarsApi,
    Configuration,
    UpdateAvatarRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarsApi(configuration);

let avatarId: string; //Must be a valid avatar ID. (default to undefined)
let updateAvatarRequest: UpdateAvatarRequest; // (optional)

const { status, data } = await apiInstance.updateAvatar(
    avatarId,
    updateAvatarRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAvatarRequest** | **UpdateAvatarRequest**|  | |
| **avatarId** | [**string**] | Must be a valid avatar ID. | defaults to undefined|


### Return type

**Avatar**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Avatar object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to show information about a non-existent avatar. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

