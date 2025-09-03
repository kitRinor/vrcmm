# FavoritesApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addFavorite**](#addfavorite) | **POST** /favorites | Add Favorite|
|[**clearFavoriteGroup**](#clearfavoritegroup) | **DELETE** /favorite/group/{favoriteGroupType}/{favoriteGroupName}/{userId} | Clear Favorite Group|
|[**getFavoriteGroup**](#getfavoritegroup) | **GET** /favorite/group/{favoriteGroupType}/{favoriteGroupName}/{userId} | Show Favorite Group|
|[**getFavoriteGroups**](#getfavoritegroups) | **GET** /favorite/groups | List Favorite Groups|
|[**getFavoriteLimits**](#getfavoritelimits) | **GET** /auth/user/favoritelimits | Get Favorite Limits|
|[**getFavorites**](#getfavorites) | **GET** /favorites | List Favorites|
|[**removeFavorite**](#removefavorite) | **DELETE** /favorites/{favoriteId} | Remove Favorite|
|[**updateFavoriteGroup**](#updatefavoritegroup) | **PUT** /favorite/group/{favoriteGroupType}/{favoriteGroupName}/{userId} | Update Favorite Group|

# **addFavorite**
> Favorite addFavorite()

Add a new favorite.  Friend groups are named `group_0` through `group_3`. Avatar and World groups are named `avatars1` to `avatars4` and `worlds1` to `worlds4`.  You cannot add people whom you are not friends with to your friends list. Destroying a friendship removes the person as favorite on both sides.

### Example

```typescript
import {
    FavoritesApi,
    Configuration,
    AddFavoriteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FavoritesApi(configuration);

let addFavoriteRequest: AddFavoriteRequest; // (optional)

const { status, data } = await apiInstance.addFavorite(
    addFavoriteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addFavoriteRequest** | **AddFavoriteRequest**|  | |


### Return type

**Favorite**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Favorite object. |  -  |
|**400** | Error response when trying favorite someone or something when already having it/them favorited. |  -  |
|**403** | Error response when trying favorite someone whom you are not friends with. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clearFavoriteGroup**
> Success clearFavoriteGroup()

Clear ALL contents of a specific favorite group.

### Example

```typescript
import {
    FavoritesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FavoritesApi(configuration);

let favoriteGroupType: 'world' | 'friend' | 'avatar'; //The type of group to fetch, must be a valid FavoriteType. (default to undefined)
let favoriteGroupName: string; //The name of the group to fetch, must be a name of a FavoriteGroup. (default to undefined)
let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.clearFavoriteGroup(
    favoriteGroupType,
    favoriteGroupName,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **favoriteGroupType** | [**&#39;world&#39; | &#39;friend&#39; | &#39;avatar&#39;**]**Array<&#39;world&#39; &#124; &#39;friend&#39; &#124; &#39;avatar&#39;>** | The type of group to fetch, must be a valid FavoriteType. | defaults to undefined|
| **favoriteGroupName** | [**string**] | The name of the group to fetch, must be a name of a FavoriteGroup. | defaults to undefined|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**Success**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success response after clearing a favorite group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFavoriteGroup**
> FavoriteGroup getFavoriteGroup()

Fetch information about a specific favorite group.

### Example

```typescript
import {
    FavoritesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FavoritesApi(configuration);

let favoriteGroupType: 'world' | 'friend' | 'avatar'; //The type of group to fetch, must be a valid FavoriteType. (default to undefined)
let favoriteGroupName: string; //The name of the group to fetch, must be a name of a FavoriteGroup. (default to undefined)
let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.getFavoriteGroup(
    favoriteGroupType,
    favoriteGroupName,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **favoriteGroupType** | [**&#39;world&#39; | &#39;friend&#39; | &#39;avatar&#39;**]**Array<&#39;world&#39; &#124; &#39;friend&#39; &#124; &#39;avatar&#39;>** | The type of group to fetch, must be a valid FavoriteType. | defaults to undefined|
| **favoriteGroupName** | [**string**] | The name of the group to fetch, must be a name of a FavoriteGroup. | defaults to undefined|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**FavoriteGroup**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single FavoriteGroup object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFavoriteGroups**
> Array<FavoriteGroup> getFavoriteGroups()

Return a list of favorite groups owned by a user. Returns the same information as `getFavoriteGroups`.

### Example

```typescript
import {
    FavoritesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FavoritesApi(configuration);

let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)
let userId: string; //Target user to see information on, admin-only. (optional) (default to undefined)
let ownerId: string; //The owner of whoms favorite groups to return. Must be a UserID. (optional) (default to undefined)

const { status, data } = await apiInstance.getFavoriteGroups(
    n,
    offset,
    userId,
    ownerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|
| **userId** | [**string**] | Target user to see information on, admin-only. | (optional) defaults to undefined|
| **ownerId** | [**string**] | The owner of whoms favorite groups to return. Must be a UserID. | (optional) defaults to undefined|


### Return type

**Array<FavoriteGroup>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of FavoriteGroup objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFavoriteLimits**
> FavoriteLimits getFavoriteLimits()

Return information about a specific Favorite.

### Example

```typescript
import {
    FavoritesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FavoritesApi(configuration);

const { status, data } = await apiInstance.getFavoriteLimits();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**FavoriteLimits**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single FavoriteLimits object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFavorites**
> Array<Favorite> getFavorites()

Returns a list of favorites.

### Example

```typescript
import {
    FavoritesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FavoritesApi(configuration);

let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)
let type: string; //The type of favorites to return, FavoriteType. (optional) (default to undefined)
let tag: string; //Tags to include (comma-separated). Any of the tags needs to be present. (optional) (default to undefined)

const { status, data } = await apiInstance.getFavorites(
    n,
    offset,
    type,
    tag
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|
| **type** | [**string**] | The type of favorites to return, FavoriteType. | (optional) defaults to undefined|
| **tag** | [**string**] | Tags to include (comma-separated). Any of the tags needs to be present. | (optional) defaults to undefined|


### Return type

**Array<Favorite>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of Favorite objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeFavorite**
> Success removeFavorite()

Remove a favorite from your favorites list.

### Example

```typescript
import {
    FavoritesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FavoritesApi(configuration);

let favoriteId: string; //Must be a valid favorite ID. (default to undefined)

const { status, data } = await apiInstance.removeFavorite(
    favoriteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **favoriteId** | [**string**] | Must be a valid favorite ID. | defaults to undefined|


### Return type

**Success**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success response after removing a favorite. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to show information about a non-existent favorite. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFavoriteGroup**
> updateFavoriteGroup()

Update information about a specific favorite group.

### Example

```typescript
import {
    FavoritesApi,
    Configuration,
    UpdateFavoriteGroupRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FavoritesApi(configuration);

let favoriteGroupType: 'world' | 'friend' | 'avatar'; //The type of group to fetch, must be a valid FavoriteType. (default to undefined)
let favoriteGroupName: string; //The name of the group to fetch, must be a name of a FavoriteGroup. (default to undefined)
let userId: string; //Must be a valid user ID. (default to undefined)
let updateFavoriteGroupRequest: UpdateFavoriteGroupRequest; // (optional)

const { status, data } = await apiInstance.updateFavoriteGroup(
    favoriteGroupType,
    favoriteGroupName,
    userId,
    updateFavoriteGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateFavoriteGroupRequest** | **UpdateFavoriteGroupRequest**|  | |
| **favoriteGroupType** | [**&#39;world&#39; | &#39;friend&#39; | &#39;avatar&#39;**]**Array<&#39;world&#39; &#124; &#39;friend&#39; &#124; &#39;avatar&#39;>** | The type of group to fetch, must be a valid FavoriteType. | defaults to undefined|
| **favoriteGroupName** | [**string**] | The name of the group to fetch, must be a name of a FavoriteGroup. | defaults to undefined|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

