# UsersApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addTags**](#addtags) | **POST** /users/{userId}/addTags | Add User Tags|
|[**checkUserPersistenceExists**](#checkuserpersistenceexists) | **GET** /users/{userId}/{worldId}/persist/exists | Check User Persistence Exists|
|[**deleteUserPersistence**](#deleteuserpersistence) | **DELETE** /users/{userId}/{worldId}/persist | Delete User Persistence|
|[**getUser**](#getuser) | **GET** /users/{userId} | Get User by ID|
|[**getUserByName**](#getuserbyname) | **GET** /users/{username}/name | Get User by Username|
|[**getUserFeedback**](#getuserfeedback) | **GET** /users/{userId}/feedback | Get User Feedback|
|[**getUserGroupInstances**](#getusergroupinstances) | **GET** /users/{userId}/instances/groups | Get User Group Instances|
|[**getUserGroupRequests**](#getusergrouprequests) | **GET** /users/{userId}/groups/requested | Get User Group Requests|
|[**getUserGroups**](#getusergroups) | **GET** /users/{userId}/groups | Get User Groups|
|[**getUserNote**](#getusernote) | **GET** /userNotes/{userNoteId} | Get User Note|
|[**getUserNotes**](#getusernotes) | **GET** /userNotes | Get User Notes|
|[**getUserRepresentedGroup**](#getuserrepresentedgroup) | **GET** /users/{userId}/groups/represented | Get user\&#39;s current represented group|
|[**removeTags**](#removetags) | **POST** /users/{userId}/removeTags | Remove User Tags|
|[**searchUsers**](#searchusers) | **GET** /users | Search All Users|
|[**updateBadge**](#updatebadge) | **PUT** /users/{userId}/badges/{badgeId} | Update User Badge|
|[**updateUser**](#updateuser) | **PUT** /users/{userId} | Update User Info|
|[**updateUserNote**](#updateusernote) | **POST** /userNotes | Update User Note|

# **addTags**
> CurrentUser addTags(changeUserTagsRequest)

Adds tags to the user\'s profile

### Example

```typescript
import {
    UsersApi,
    Configuration,
    ChangeUserTagsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)
let changeUserTagsRequest: ChangeUserTagsRequest; //

const { status, data } = await apiInstance.addTags(
    userId,
    changeUserTagsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeUserTagsRequest** | **ChangeUserTagsRequest**|  | |
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**CurrentUser**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single CurrentUser object. |  -  |
|**400** | Error response when a user attempts to add an invalid, restricted, or duplicate tag to their profile, attempts to add tags above the limit for their profile, or attempts to remove invalid, restricted, or absent tag from their profile. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkUserPersistenceExists**
> checkUserPersistenceExists()

Checks whether the user has persistence data for a given world

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

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

# **deleteUserPersistence**
> deleteUserPersistence()

Deletes the user\'s persistence data for a given world

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

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

# **getUser**
> User getUser()

Get public user information about a specific user using their ID.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.getUser(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**User**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single User object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserByName**
> User getUserByName()

~~Get public user information about a specific user using their name.~~  **DEPRECATED:** VRChat API no longer return usernames of other users. [See issue by Tupper for more information](https://github.com/pypy-vrc/VRCX/issues/429). This endpoint now require Admin Credentials.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let username: string; //Username of the user (default to undefined)

const { status, data } = await apiInstance.getUserByName(
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] | Username of the user | defaults to undefined|


### Return type

**User**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single User object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserFeedback**
> Array<Feedback> getUserFeedback()

Get user\'s submitted feedback

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)
let contentId: boolean; //Filter for users\' previously submitted feedback, e.g., a groupId, userId, avatarId, etc. (optional) (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)

const { status, data } = await apiInstance.getUserFeedback(
    userId,
    contentId,
    n,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|
| **contentId** | [**boolean**] | Filter for users\&#39; previously submitted feedback, e.g., a groupId, userId, avatarId, etc. | (optional) defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|


### Return type

**Array<Feedback>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of Feedback objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserGroupInstances**
> InlineObject1 getUserGroupInstances()

Returns a list of group instances for a user

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.getUserGroupInstances(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**InlineObject1**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of Instance objects with a fetched at time. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**403** | Error response when trying get group instances of another user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserGroupRequests**
> Array<Group> getUserGroupRequests()

Returns a list of Groups the user has requested to be invited into.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.getUserGroupRequests(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**Array<Group>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of Group objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserGroups**
> Array<LimitedUserGroups> getUserGroups()

Get user\'s public groups

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.getUserGroups(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**Array<LimitedUserGroups>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of LimitedUserGroups objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserNote**
> UserNote getUserNote()

Get a particular user note

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userNoteId: string; //Must be a valid user note ID. (default to undefined)

const { status, data } = await apiInstance.getUserNote(
    userNoteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNoteId** | [**string**] | Must be a valid user note ID. | defaults to undefined|


### Return type

**UserNote**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single UserNote object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserNotes**
> Array<UserNote> getUserNotes()

Get recently updated user notes

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)

const { status, data } = await apiInstance.getUserNotes(
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

**Array<UserNote>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of UserNote objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserRepresentedGroup**
> RepresentedGroup getUserRepresentedGroup()

Returns the current group that the user is currently representing

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.getUserRepresentedGroup(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**RepresentedGroup**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeTags**
> CurrentUser removeTags(changeUserTagsRequest)

Removes tags from the user\'s profile

### Example

```typescript
import {
    UsersApi,
    Configuration,
    ChangeUserTagsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)
let changeUserTagsRequest: ChangeUserTagsRequest; //

const { status, data } = await apiInstance.removeTags(
    userId,
    changeUserTagsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeUserTagsRequest** | **ChangeUserTagsRequest**|  | |
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**CurrentUser**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single CurrentUser object. |  -  |
|**400** | Error response when a user attempts to add an invalid, restricted, or duplicate tag to their profile, attempts to add tags above the limit for their profile, or attempts to remove invalid, restricted, or absent tag from their profile. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchUsers**
> Array<LimitedUserSearch> searchUsers()

Search and list any users by text query

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let search: string; //Searches by `displayName`. Will return empty array if search query is empty or missing. (optional) (default to undefined)
let developerType: string; //Active user by developer type, none for normal users and internal for moderators (optional) (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)

const { status, data } = await apiInstance.searchUsers(
    search,
    developerType,
    n,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **search** | [**string**] | Searches by &#x60;displayName&#x60;. Will return empty array if search query is empty or missing. | (optional) defaults to undefined|
| **developerType** | [**string**] | Active user by developer type, none for normal users and internal for moderators | (optional) defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|


### Return type

**Array<LimitedUserSearch>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of LimitedUserSearch objects. |  -  |
|**400** | Error response when trying to search list of users with an invalid request. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateBadge**
> updateBadge(updateUserBadgeRequest)

Updates a user\'s badge

### Example

```typescript
import {
    UsersApi,
    Configuration,
    UpdateUserBadgeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)
let badgeId: string; //Must be a valid badge ID. (default to undefined)
let updateUserBadgeRequest: UpdateUserBadgeRequest; //

const { status, data } = await apiInstance.updateBadge(
    userId,
    badgeId,
    updateUserBadgeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserBadgeRequest** | **UpdateUserBadgeRequest**|  | |
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|
| **badgeId** | [**string**] | Must be a valid badge ID. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The user\&#39;s badge is updated. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**403** | Error response when trying get group instances of another user. |  -  |
|**404** | The user does not have the badge. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUser**
> CurrentUser updateUser()

Update a users information such as the email and birthday.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    UpdateUserRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)
let updateUserRequest: UpdateUserRequest; // (optional)

const { status, data } = await apiInstance.updateUser(
    userId,
    updateUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserRequest** | **UpdateUserRequest**|  | |
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**CurrentUser**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single CurrentUser object. |  -  |
|**400** | Error response when a user attempts to change a property without supplying their current password. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserNote**
> UserNote updateUserNote(updateUserNoteRequest)

Updates the currently authenticated user\'s note on a user

### Example

```typescript
import {
    UsersApi,
    Configuration,
    UpdateUserNoteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let updateUserNoteRequest: UpdateUserNoteRequest; //

const { status, data } = await apiInstance.updateUserNote(
    updateUserNoteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserNoteRequest** | **UpdateUserNoteRequest**|  | |


### Return type

**UserNote**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single UserNote object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

