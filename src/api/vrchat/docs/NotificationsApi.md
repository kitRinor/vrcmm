# NotificationsApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acceptFriendRequest**](#acceptfriendrequest) | **PUT** /auth/user/notifications/{notificationId}/accept | Accept Friend Request|
|[**clearNotifications**](#clearnotifications) | **PUT** /auth/user/notifications/clear | Clear All Notifications|
|[**deleteNotification**](#deletenotification) | **PUT** /auth/user/notifications/{notificationId}/hide | Delete Notification|
|[**getNotification**](#getnotification) | **GET** /auth/user/notifications/{notificationId} | Show notification|
|[**getNotifications**](#getnotifications) | **GET** /auth/user/notifications | List Notifications|
|[**markNotificationAsRead**](#marknotificationasread) | **PUT** /auth/user/notifications/{notificationId}/see | Mark Notification As Read|

# **acceptFriendRequest**
> Success acceptFriendRequest()

Accept a friend request by notification `frq_` ID. Friend requests can be found using the NotificationsAPI `getNotifications` by filtering of type `friendRequest`.

### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let notificationId: string; //Must be a valid notification ID. (default to undefined)

const { status, data } = await apiInstance.acceptFriendRequest(
    notificationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notificationId** | [**string**] | Must be a valid notification ID. | defaults to undefined|


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
|**200** | Successful response after friending a user. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to accept a non-existent friend request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clearNotifications**
> Success clearNotifications()

Clear **all** notifications.

### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

const { status, data } = await apiInstance.clearNotifications();
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
|**200** | Successful response after clearing all notifications. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteNotification**
> Notification deleteNotification()

Delete a notification.

### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let notificationId: string; //Must be a valid notification ID. (default to undefined)

const { status, data } = await apiInstance.deleteNotification(
    notificationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notificationId** | [**string**] | Must be a valid notification ID. | defaults to undefined|


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
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNotification**
> Notification getNotification()

Get a notification by notification `not_` ID.

### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let notificationId: string; //Must be a valid notification ID. (default to undefined)

const { status, data } = await apiInstance.getNotification(
    notificationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notificationId** | [**string**] | Must be a valid notification ID. | defaults to undefined|


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
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing notification. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNotifications**
> Array<Notification> getNotifications()

Retrieve all of the current user\'s notifications.

### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let type: string; //Only send notifications of this type (can use `all` for all). This parameter no longer does anything, and is deprecated. (optional) (default to undefined)
let sent: boolean; //Return notifications sent by the user. Must be false or omitted. (optional) (default to undefined)
let hidden: boolean; //Whether to return hidden or non-hidden notifications. True only allowed on type `friendRequest`. (optional) (default to undefined)
let after: string; //Only return notifications sent after this Date. Ignored if type is `friendRequest`. (optional) (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)

const { status, data } = await apiInstance.getNotifications(
    type,
    sent,
    hidden,
    after,
    n,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] | Only send notifications of this type (can use &#x60;all&#x60; for all). This parameter no longer does anything, and is deprecated. | (optional) defaults to undefined|
| **sent** | [**boolean**] | Return notifications sent by the user. Must be false or omitted. | (optional) defaults to undefined|
| **hidden** | [**boolean**] | Whether to return hidden or non-hidden notifications. True only allowed on type &#x60;friendRequest&#x60;. | (optional) defaults to undefined|
| **after** | [**string**] | Only return notifications sent after this Date. Ignored if type is &#x60;friendRequest&#x60;. | (optional) defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|


### Return type

**Array<Notification>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of Notifcation objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **markNotificationAsRead**
> Notification markNotificationAsRead()

Mark a notification as seen.

### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let notificationId: string; //Must be a valid notification ID. (default to undefined)

const { status, data } = await apiInstance.markNotificationAsRead(
    notificationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notificationId** | [**string**] | Must be a valid notification ID. | defaults to undefined|


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
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

