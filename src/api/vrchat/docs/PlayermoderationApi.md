# PlayermoderationApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**clearAllPlayerModerations**](#clearallplayermoderations) | **DELETE** /auth/user/playermoderations | Clear All Player Moderations|
|[**getPlayerModerations**](#getplayermoderations) | **GET** /auth/user/playermoderations | Search Player Moderations|
|[**moderateUser**](#moderateuser) | **POST** /auth/user/playermoderations | Moderate User|
|[**unmoderateUser**](#unmoderateuser) | **PUT** /auth/user/unplayermoderate | Unmoderate User|

# **clearAllPlayerModerations**
> Success clearAllPlayerModerations()

⚠️ **This will delete every single player moderation you\'ve ever made.**

### Example

```typescript
import {
    PlayermoderationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlayermoderationApi(configuration);

const { status, data } = await apiInstance.clearAllPlayerModerations();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | Success response after e.g. clearing all player moderations. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPlayerModerations**
> Array<PlayerModeration> getPlayerModerations()

Returns a list of all player moderations made by **you**.  This endpoint does not have pagination, and will return *all* results. Use query parameters to limit your query if needed.

### Example

```typescript
import {
    PlayermoderationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlayermoderationApi(configuration);

let type: string; //Must be one of PlayerModerationType, except unblock. Unblocking simply removes a block. (optional) (default to undefined)
let targetUserId: string; //Must be valid UserID. (optional) (default to undefined)

const { status, data } = await apiInstance.getPlayerModerations(
    type,
    targetUserId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] | Must be one of PlayerModerationType, except unblock. Unblocking simply removes a block. | (optional) defaults to undefined|
| **targetUserId** | [**string**] | Must be valid UserID. | (optional) defaults to undefined|


### Return type

**Array<PlayerModeration>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of PlayerModeration objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moderateUser**
> PlayerModeration moderateUser(moderateUserRequest)

Moderate a user, e.g. unmute them or show their avatar.  Please see the [Player Moderation docs](https://vrchatapi.github.io/docs/api/#tag--playermoderation) on what playerModerations are, and how they differ from staff moderations.

### Example

```typescript
import {
    PlayermoderationApi,
    Configuration,
    ModerateUserRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PlayermoderationApi(configuration);

let moderateUserRequest: ModerateUserRequest; //

const { status, data } = await apiInstance.moderateUser(
    moderateUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **moderateUserRequest** | **ModerateUserRequest**|  | |


### Return type

**PlayerModeration**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single PlayerModeration object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unmoderateUser**
> Success unmoderateUser(moderateUserRequest)

Removes a player moderation previously added through `moderateUser`. E.g if you previously have shown their avatar, but now want to reset it to default.

### Example

```typescript
import {
    PlayermoderationApi,
    Configuration,
    ModerateUserRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PlayermoderationApi(configuration);

let moderateUserRequest: ModerateUserRequest; //

const { status, data } = await apiInstance.unmoderateUser(
    moderateUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **moderateUserRequest** | **ModerateUserRequest**|  | |


### Return type

**Success**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success response after unmoderating a player moderation. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

