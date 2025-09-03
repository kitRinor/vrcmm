# FriendsApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteFriendRequest**](#deletefriendrequest) | **DELETE** /user/{userId}/friendRequest | Delete Friend Request|
|[**friend**](#friend) | **POST** /user/{userId}/friendRequest | Send Friend Request|
|[**getFriendStatus**](#getfriendstatus) | **GET** /user/{userId}/friendStatus | Check Friend Status|
|[**getFriends**](#getfriends) | **GET** /auth/user/friends | List Friends|
|[**unfriend**](#unfriend) | **DELETE** /auth/user/friends/{userId} | Unfriend|

# **deleteFriendRequest**
> Success deleteFriendRequest()

Deletes an outgoing pending friend request to another user. To delete an incoming friend request, use the `deleteNotification` endpoint instead.

### Example

```typescript
import {
    FriendsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendsApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.deleteFriendRequest(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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
|**200** | Successful response after cancelling a friend request. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to delete a non-existent friend-request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **friend**
> Notification friend()

Send a friend request to another user.

### Example

```typescript
import {
    FriendsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendsApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.friend(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**Notification**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Notifcation object. |  -  |
|**400** | Bad request error response when sending a friend request |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to send a friend request to a user which doesn\&#39;t exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFriendStatus**
> FriendStatus getFriendStatus()

Retrieve if the user is currently a friend with a given user, if they have an outgoing friend request, and if they have an incoming friend request. The proper way to receive and accept friend request is by checking if the user has an incoming `Notification` of type `friendRequest`, and then accepting that notification.

### Example

```typescript
import {
    FriendsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendsApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.getFriendStatus(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**FriendStatus**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a users Friend Status. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFriends**
> Array<LimitedUserFriend> getFriends()

List information about friends.

### Example

```typescript
import {
    FriendsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendsApi(configuration);

let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let offline: boolean; //Returns *only* offline users if true, returns only online and active users if false (optional) (default to undefined)

const { status, data } = await apiInstance.getFriends(
    offset,
    n,
    offline
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offline** | [**boolean**] | Returns *only* offline users if true, returns only online and active users if false | (optional) defaults to undefined|


### Return type

**Array<LimitedUserFriend>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of LimitedUserFriend objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unfriend**
> Success unfriend()

Unfriend a user by ID.

### Example

```typescript
import {
    FriendsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendsApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.unfriend(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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
|**200** | Successful response after unfriending a user. |  -  |
|**400** | Error response when trying to unfriend someone who is not a friend. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

