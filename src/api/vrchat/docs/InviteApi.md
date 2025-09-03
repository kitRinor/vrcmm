# InviteApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getInviteMessage**](#getinvitemessage) | **GET** /message/{userId}/{messageType}/{slot} | Get Invite Message|
|[**getInviteMessages**](#getinvitemessages) | **GET** /message/{userId}/{messageType} | List Invite Messages|
|[**inviteMyselfTo**](#invitemyselfto) | **POST** /invite/myself/to/{worldId}:{instanceId} | Invite Myself To Instance|
|[**inviteUser**](#inviteuser) | **POST** /invite/{userId} | Invite User|
|[**inviteUserWithPhoto**](#inviteuserwithphoto) | **POST** /invite/{userId}/photo | Invite User with photo|
|[**requestInvite**](#requestinvite) | **POST** /requestInvite/{userId} | Request Invite|
|[**requestInviteWithPhoto**](#requestinvitewithphoto) | **POST** /requestInvite/{userId}/photo | Request Invite with photo|
|[**resetInviteMessage**](#resetinvitemessage) | **DELETE** /message/{userId}/{messageType}/{slot} | Reset Invite Message|
|[**respondInvite**](#respondinvite) | **POST** /invite/{notificationId}/response | Respond Invite|
|[**respondInviteWithPhoto**](#respondinvitewithphoto) | **POST** /invite/{notificationId}/response/photo | Respond Invite with photo|
|[**updateInviteMessage**](#updateinvitemessage) | **PUT** /message/{userId}/{messageType}/{slot} | Update Invite Message|

# **getInviteMessage**
> InviteMessage getInviteMessage()

Returns a single Invite Message. This returns the exact same information but less than `getInviteMessages`. Admin Credentials are required to view messages of other users!  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite

### Example

```typescript
import {
    InviteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InviteApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)
let messageType: InviteMessageType; //The type of message to fetch, must be a valid InviteMessageType. (default to undefined)
let slot: number; //The message slot to fetch of a given message type. (default to undefined)

const { status, data } = await apiInstance.getInviteMessage(
    userId,
    messageType,
    slot
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|
| **messageType** | **InviteMessageType** | The type of message to fetch, must be a valid InviteMessageType. | defaults to undefined|
| **slot** | [**number**] | The message slot to fetch of a given message type. | defaults to undefined|


### Return type

**InviteMessage**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single InviteMessage object. |  -  |
|**400** | Error response when trying to get an Invite Message with a negative slot number. |  -  |
|**401** | Error response due to missing authorization to perform that action. |  -  |
|**404** | Error response when trying to get an Invite Message with a too high slot number. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInviteMessages**
> Array<InviteMessage> getInviteMessages()

Returns a list of all the users Invite Messages. Admin Credentials are required to view messages of other users!  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite

### Example

```typescript
import {
    InviteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InviteApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)
let messageType: InviteMessageType; //The type of message to fetch, must be a valid InviteMessageType. (default to undefined)

const { status, data } = await apiInstance.getInviteMessages(
    userId,
    messageType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|
| **messageType** | **InviteMessageType** | The type of message to fetch, must be a valid InviteMessageType. | defaults to undefined|


### Return type

**Array<InviteMessage>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of InviteMessage objects. |  -  |
|**400** | Error response when trying to update an Invite Message with an invalid slot number. |  -  |
|**401** | Error response due to missing authorization to perform that action. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inviteMyselfTo**
> SentNotification inviteMyselfTo()

Sends self an invite to an instance

### Example

```typescript
import {
    InviteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InviteApi(configuration);

let worldId: string; //Must be a valid world ID. (default to undefined)
let instanceId: string; //Must be a valid instance ID. (default to undefined)

const { status, data } = await apiInstance.inviteMyselfTo(
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

**SentNotification**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single SentNotifcation object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response due to non existant instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inviteUser**
> SentNotification inviteUser(inviteRequest)

Sends an invite to a user. Returns the Notification of type `invite` that was sent.

### Example

```typescript
import {
    InviteApi,
    Configuration,
    InviteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InviteApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)
let inviteRequest: InviteRequest; //Slot number of the Invite Message to use when inviting a user.

const { status, data } = await apiInstance.inviteUser(
    userId,
    inviteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inviteRequest** | **InviteRequest**| Slot number of the Invite Message to use when inviting a user. | |
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**SentNotification**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single SentNotifcation object. |  -  |
|**403** | Error response when trying to invite someome whom you are not friends with. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inviteUserWithPhoto**
> SentNotification inviteUserWithPhoto()

Sends an photo invite to a user. Returns the Notification of type `invite` that was sent.

### Example

```typescript
import {
    InviteApi,
    Configuration,
    InviteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InviteApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)
let image: File; //The binary blob of the png file. (default to undefined)
let data: InviteRequest; // (default to undefined)

const { status, data } = await apiInstance.inviteUserWithPhoto(
    userId,
    image,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|
| **image** | [**File**] | The binary blob of the png file. | defaults to undefined|
| **data** | **InviteRequest** |  | defaults to undefined|


### Return type

**SentNotification**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single SentNotifcation object. |  -  |
|**403** | Error response when trying to invite someome whom you are not friends with. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requestInvite**
> Notification requestInvite()

Requests an invite from a user. Returns the Notification of type `requestInvite` that was sent.

### Example

```typescript
import {
    InviteApi,
    Configuration,
    RequestInviteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InviteApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)
let requestInviteRequest: RequestInviteRequest; //Slot number of the Request Message to use when request an invite. (optional)

const { status, data } = await apiInstance.requestInvite(
    userId,
    requestInviteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestInviteRequest** | **RequestInviteRequest**| Slot number of the Request Message to use when request an invite. | |
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**Notification**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Notifcation object. |  -  |
|**403** | Error response when trying to invite someome whom you are not friends with. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requestInviteWithPhoto**
> Notification requestInviteWithPhoto()

Requests with photo an invite from a user. Returns the Notification of type `requestInvite` that was sent.

### Example

```typescript
import {
    InviteApi,
    Configuration,
    RequestInviteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InviteApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)
let image: File; //The binary blob of the png file. (default to undefined)
let data: RequestInviteRequest; // (default to undefined)

const { status, data } = await apiInstance.requestInviteWithPhoto(
    userId,
    image,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|
| **image** | [**File**] | The binary blob of the png file. | defaults to undefined|
| **data** | **RequestInviteRequest** |  | defaults to undefined|


### Return type

**Notification**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Notifcation object. |  -  |
|**403** | Error response when trying to invite someome whom you are not friends with. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resetInviteMessage**
> Array<InviteMessage> resetInviteMessage()

Resets a single Invite Message back to its original message, and then returns a list of all of them. Admin Credentials are required to update messages of other users!  Resetting a message respects the rate-limit, so it is not possible to reset within the 60 minutes countdown. Resetting it does however not set the rate-limit to 60 like when editing it. It is possible to edit it right after resetting it. Trying to edit a message before the cooldown timer expires results in a 429 \"Too Fast Error\".  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite  The DELETE endpoint does not have/require any request body.

### Example

```typescript
import {
    InviteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InviteApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)
let messageType: InviteMessageType; //The type of message to fetch, must be a valid InviteMessageType. (default to undefined)
let slot: number; //The message slot to fetch of a given message type. (default to undefined)

const { status, data } = await apiInstance.resetInviteMessage(
    userId,
    messageType,
    slot
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|
| **messageType** | **InviteMessageType** | The type of message to fetch, must be a valid InviteMessageType. | defaults to undefined|
| **slot** | [**number**] | The message slot to fetch of a given message type. | defaults to undefined|


### Return type

**Array<InviteMessage>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of InviteMessage objects. |  -  |
|**400** | Error response when trying to update an Invite Message with an invalid slot number. |  -  |
|**401** | Error response due to missing authorization to perform that action. |  -  |
|**404** | Error response when trying to reset an Invite Message whos slot doesn\&#39;t exist. |  -  |
|**429** | Error response when trying to update an Invite Message before the cooldown has expired. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **respondInvite**
> Notification respondInvite(inviteResponse)

Respond to an invite or invite request without accepting it. `:notificationId` is the ID of the requesting notification.  In case the notification being replied to is an invite, the `responseSlot` refers to a response message from the the `message` collection. In case the notification is an invite request, it will refer to one from the `requestResponse` collection instead.

### Example

```typescript
import {
    InviteApi,
    Configuration,
    InviteResponse
} from './api';

const configuration = new Configuration();
const apiInstance = new InviteApi(configuration);

let notificationId: string; //Must be a valid notification ID. (default to undefined)
let inviteResponse: InviteResponse; //Slot number of the Response Message to use when responding to a user.

const { status, data } = await apiInstance.respondInvite(
    notificationId,
    inviteResponse
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inviteResponse** | **InviteResponse**| Slot number of the Response Message to use when responding to a user. | |
| **notificationId** | [**string**] | Must be a valid notification ID. | defaults to undefined|


### Return type

**Notification**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Notifcation object. |  -  |
|**400** | Error response when trying to respond to an invite and something went wrong. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **respondInviteWithPhoto**
> Notification respondInviteWithPhoto()

Respond with photo to an invite or invite request without accepting it. `:notificationId` is the ID of the requesting notification.  In case the notification being replied to is an invite, the `responseSlot` refers to a response message from the the `message` collection. In case the notification is an invite request, it will refer to one from the `requestResponse` collection instead.\'

### Example

```typescript
import {
    InviteApi,
    Configuration,
    InviteResponse
} from './api';

const configuration = new Configuration();
const apiInstance = new InviteApi(configuration);

let notificationId: string; //Must be a valid notification ID. (default to undefined)
let image: File; //The binary blob of the png file. (default to undefined)
let data: InviteResponse; // (default to undefined)

const { status, data } = await apiInstance.respondInviteWithPhoto(
    notificationId,
    image,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notificationId** | [**string**] | Must be a valid notification ID. | defaults to undefined|
| **image** | [**File**] | The binary blob of the png file. | defaults to undefined|
| **data** | **InviteResponse** |  | defaults to undefined|


### Return type

**Notification**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Notifcation object. |  -  |
|**400** | Error response when trying to respond to an invite and something went wrong. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateInviteMessage**
> Array<InviteMessage> updateInviteMessage()

Updates a single Invite Message and then returns a list of all of them. Admin Credentials are required to update messages of other users!  Updating a message automatically sets the cooldown timer to 60 minutes. Trying to edit a message before the cooldown timer expires results in a 429 \"Too Fast Error\".  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite

### Example

```typescript
import {
    InviteApi,
    Configuration,
    UpdateInviteMessageRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InviteApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)
let messageType: InviteMessageType; //The type of message to fetch, must be a valid InviteMessageType. (default to undefined)
let slot: number; //The message slot to fetch of a given message type. (default to undefined)
let updateInviteMessageRequest: UpdateInviteMessageRequest; //Message of what to set the invite message to. (optional)

const { status, data } = await apiInstance.updateInviteMessage(
    userId,
    messageType,
    slot,
    updateInviteMessageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateInviteMessageRequest** | **UpdateInviteMessageRequest**| Message of what to set the invite message to. | |
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|
| **messageType** | **InviteMessageType** | The type of message to fetch, must be a valid InviteMessageType. | defaults to undefined|
| **slot** | [**number**] | The message slot to fetch of a given message type. | defaults to undefined|


### Return type

**Array<InviteMessage>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of InviteMessage objects. |  -  |
|**400** | Error response when trying to update an Invite Message with an invalid slot number. |  -  |
|**401** | Error response due to missing authorization to perform that action. |  -  |
|**429** | Error response when trying to update an Invite Message before the cooldown has expired. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

