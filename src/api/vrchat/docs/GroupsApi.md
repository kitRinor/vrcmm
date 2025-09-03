# GroupsApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addGroupGalleryImage**](#addgroupgalleryimage) | **POST** /groups/{groupId}/galleries/{groupGalleryId}/images | Add Group Gallery Image|
|[**addGroupMemberRole**](#addgroupmemberrole) | **PUT** /groups/{groupId}/members/{userId}/roles/{groupRoleId} | Add Role to GroupMember|
|[**addGroupPost**](#addgrouppost) | **POST** /groups/{groupId}/posts | Create a post in a Group|
|[**banGroupMember**](#bangroupmember) | **POST** /groups/{groupId}/bans | Ban Group Member|
|[**cancelGroupRequest**](#cancelgrouprequest) | **DELETE** /groups/{groupId}/requests | Cancel Group Join Request|
|[**createGroup**](#creategroup) | **POST** /groups | Create Group|
|[**createGroupAnnouncement**](#creategroupannouncement) | **POST** /groups/{groupId}/announcement | Create Group Announcement|
|[**createGroupGallery**](#creategroupgallery) | **POST** /groups/{groupId}/galleries | Create Group Gallery|
|[**createGroupInvite**](#creategroupinvite) | **POST** /groups/{groupId}/invites | Invite User to Group|
|[**createGroupRole**](#creategrouprole) | **POST** /groups/{groupId}/roles | Create GroupRole|
|[**deleteGroup**](#deletegroup) | **DELETE** /groups/{groupId} | Delete Group|
|[**deleteGroupAnnouncement**](#deletegroupannouncement) | **DELETE** /groups/{groupId}/announcement | Delete Group Announcement|
|[**deleteGroupGallery**](#deletegroupgallery) | **DELETE** /groups/{groupId}/galleries/{groupGalleryId} | Delete Group Gallery|
|[**deleteGroupGalleryImage**](#deletegroupgalleryimage) | **DELETE** /groups/{groupId}/galleries/{groupGalleryId}/images/{groupGalleryImageId} | Delete Group Gallery Image|
|[**deleteGroupInvite**](#deletegroupinvite) | **DELETE** /groups/{groupId}/invites/{userId} | Delete User Invite|
|[**deleteGroupPost**](#deletegrouppost) | **DELETE** /groups/{groupId}/posts/{notificationId} | Delete a Group post|
|[**deleteGroupRole**](#deletegrouprole) | **DELETE** /groups/{groupId}/roles/{groupRoleId} | Delete Group Role|
|[**getGroup**](#getgroup) | **GET** /groups/{groupId} | Get Group by ID|
|[**getGroupAnnouncements**](#getgroupannouncements) | **GET** /groups/{groupId}/announcement | Get Group Announcement|
|[**getGroupAuditLogs**](#getgroupauditlogs) | **GET** /groups/{groupId}/auditLogs | Get Group Audit Logs|
|[**getGroupBans**](#getgroupbans) | **GET** /groups/{groupId}/bans | Get Group Bans|
|[**getGroupGalleryImages**](#getgroupgalleryimages) | **GET** /groups/{groupId}/galleries/{groupGalleryId} | Get Group Gallery Images|
|[**getGroupInstances**](#getgroupinstances) | **GET** /groups/{groupId}/instances | Get Group Instances|
|[**getGroupInvites**](#getgroupinvites) | **GET** /groups/{groupId}/invites | Get Group Invites Sent|
|[**getGroupMember**](#getgroupmember) | **GET** /groups/{groupId}/members/{userId} | Get Group Member|
|[**getGroupMembers**](#getgroupmembers) | **GET** /groups/{groupId}/members | List Group Members|
|[**getGroupPermissions**](#getgrouppermissions) | **GET** /groups/{groupId}/permissions | List Group Permissions|
|[**getGroupPosts**](#getgroupposts) | **GET** /groups/{groupId}/posts | Get posts from a Group|
|[**getGroupRequests**](#getgrouprequests) | **GET** /groups/{groupId}/requests | Get Group Join Requests|
|[**getGroupRoleTemplates**](#getgrouproletemplates) | **GET** /groups/roleTemplates | Get Group Role Templates|
|[**getGroupRoles**](#getgrouproles) | **GET** /groups/{groupId}/roles | Get Group Roles|
|[**joinGroup**](#joingroup) | **POST** /groups/{groupId}/join | Join Group|
|[**kickGroupMember**](#kickgroupmember) | **DELETE** /groups/{groupId}/members/{userId} | Kick Group Member|
|[**leaveGroup**](#leavegroup) | **POST** /groups/{groupId}/leave | Leave Group|
|[**removeGroupMemberRole**](#removegroupmemberrole) | **DELETE** /groups/{groupId}/members/{userId}/roles/{groupRoleId} | Remove Role from GroupMember|
|[**respondGroupJoinRequest**](#respondgroupjoinrequest) | **PUT** /groups/{groupId}/requests/{userId} | Respond Group Join request|
|[**searchGroups**](#searchgroups) | **GET** /groups | Search Group|
|[**unbanGroupMember**](#unbangroupmember) | **DELETE** /groups/{groupId}/bans/{userId} | Unban Group Member|
|[**updateGroup**](#updategroup) | **PUT** /groups/{groupId} | Update Group|
|[**updateGroupGallery**](#updategroupgallery) | **PUT** /groups/{groupId}/galleries/{groupGalleryId} | Update Group Gallery|
|[**updateGroupMember**](#updategroupmember) | **PUT** /groups/{groupId}/members/{userId} | Update Group Member|
|[**updateGroupPost**](#updategrouppost) | **PUT** /groups/{groupId}/posts/{notificationId} | Edits a Group post|
|[**updateGroupRepresentation**](#updategrouprepresentation) | **PUT** /groups/{groupId}/representation | Update Group Representation|
|[**updateGroupRole**](#updategrouprole) | **PUT** /groups/{groupId}/roles/{groupRoleId} | Update Group Role|

# **addGroupGalleryImage**
> GroupGalleryImage addGroupGalleryImage(addGroupGalleryImageRequest)

Adds an image to a Group gallery.

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    AddGroupGalleryImageRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let groupGalleryId: string; //Must be a valid group gallery ID. (default to undefined)
let addGroupGalleryImageRequest: AddGroupGalleryImageRequest; //

const { status, data } = await apiInstance.addGroupGalleryImage(
    groupId,
    groupGalleryId,
    addGroupGalleryImageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addGroupGalleryImageRequest** | **AddGroupGalleryImageRequest**|  | |
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **groupGalleryId** | [**string**] | Must be a valid group gallery ID. | defaults to undefined|


### Return type

**GroupGalleryImage**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single GroupGalleryImage object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addGroupMemberRole**
> Array<string> addGroupMemberRole()

Adds a Role to a Group Member

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let userId: string; //Must be a valid user ID. (default to undefined)
let groupRoleId: string; //Must be a valid group role ID. (default to undefined)

const { status, data } = await apiInstance.addGroupMemberRole(
    groupId,
    userId,
    groupRoleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|
| **groupRoleId** | [**string**] | Must be a valid group role ID. | defaults to undefined|


### Return type

**Array<string>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupRoleID objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addGroupPost**
> GroupPost addGroupPost(createGroupPostRequest)

Create a post in a Group.

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    CreateGroupPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let createGroupPostRequest: CreateGroupPostRequest; //

const { status, data } = await apiInstance.addGroupPost(
    groupId,
    createGroupPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGroupPostRequest** | **CreateGroupPostRequest**|  | |
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


### Return type

**GroupPost**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a GroupPost object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **banGroupMember**
> GroupMember banGroupMember(banGroupMemberRequest)

Bans a user from a Group.

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    BanGroupMemberRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let banGroupMemberRequest: BanGroupMemberRequest; //

const { status, data } = await apiInstance.banGroupMember(
    groupId,
    banGroupMemberRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **banGroupMemberRequest** | **BanGroupMemberRequest**|  | |
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


### Return type

**GroupMember**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupMember objects. |  -  |
|**400** | Bad request error response when banning a user |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancelGroupRequest**
> cancelGroupRequest()

Cancels a request sent to join the group.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)

const { status, data } = await apiInstance.cancelGroupRequest(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


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
|**400** | You can\&#39;t cancel a join request if you didn\&#39;t request to join․ |  -  |
|**403** | Error response when trying to perform operations on a group you are not member of. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGroup**
> Group createGroup(createGroupRequest)

Creates a Group and returns a Group object. **Requires VRC+ Subscription.**

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    CreateGroupRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let createGroupRequest: CreateGroupRequest; //

const { status, data } = await apiInstance.createGroup(
    createGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGroupRequest** | **CreateGroupRequest**|  | |


### Return type

**Group**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Group object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGroupAnnouncement**
> GroupAnnouncement createGroupAnnouncement(createGroupAnnouncementRequest)

Creates an Announcement for a Group. Warning: This will also remove all announcements. To make proper announcements, use the posts endpoint instead

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    CreateGroupAnnouncementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let createGroupAnnouncementRequest: CreateGroupAnnouncementRequest; //

const { status, data } = await apiInstance.createGroupAnnouncement(
    groupId,
    createGroupAnnouncementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGroupAnnouncementRequest** | **CreateGroupAnnouncementRequest**|  | |
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


### Return type

**GroupAnnouncement**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single GroupAnnouncement object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGroupGallery**
> GroupGallery createGroupGallery(createGroupGalleryRequest)

Creates a gallery for a Group.

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    CreateGroupGalleryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let createGroupGalleryRequest: CreateGroupGalleryRequest; //

const { status, data } = await apiInstance.createGroupGallery(
    groupId,
    createGroupGalleryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGroupGalleryRequest** | **CreateGroupGalleryRequest**|  | |
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


### Return type

**GroupGallery**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single GroupGallery object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGroupInvite**
> createGroupInvite(createGroupInviteRequest)

Sends an invite to a user to join the group.

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    CreateGroupInviteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let createGroupInviteRequest: CreateGroupInviteRequest; //

const { status, data } = await apiInstance.createGroupInvite(
    groupId,
    createGroupInviteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGroupInviteRequest** | **CreateGroupInviteRequest**|  | |
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


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
|**200** | OK |  -  |
|**400** | Bad request error response when creating a group invite. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**403** | Forbidden error response when creating a group invite. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGroupRole**
> GroupRole createGroupRole(createGroupRoleRequest)

Create a Group role.

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    CreateGroupRoleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let createGroupRoleRequest: CreateGroupRoleRequest; //

const { status, data } = await apiInstance.createGroupRole(
    groupId,
    createGroupRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGroupRoleRequest** | **CreateGroupRoleRequest**|  | |
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


### Return type

**GroupRole**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single GroupRole object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGroup**
> Success deleteGroup()

Deletes a Group.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)

const { status, data } = await apiInstance.deleteGroup(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


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
|**200** | Successful response after deleting a Group. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGroupAnnouncement**
> Success deleteGroupAnnouncement()

Deletes the announcement for a Group.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)

const { status, data } = await apiInstance.deleteGroupAnnouncement(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


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
|**200** | Successful response after deleting/clearing the group announcement. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGroupGallery**
> Success deleteGroupGallery()

Deletes a gallery for a Group.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let groupGalleryId: string; //Must be a valid group gallery ID. (default to undefined)

const { status, data } = await apiInstance.deleteGroupGallery(
    groupId,
    groupGalleryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **groupGalleryId** | [**string**] | Must be a valid group gallery ID. | defaults to undefined|


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
|**200** | Successful response after deleting a group gallery. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGroupGalleryImage**
> Success deleteGroupGalleryImage()

Deletes an image from a Group gallery.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let groupGalleryId: string; //Must be a valid group gallery ID. (default to undefined)
let groupGalleryImageId: string; //Must be a valid group gallery image ID. (default to undefined)

const { status, data } = await apiInstance.deleteGroupGalleryImage(
    groupId,
    groupGalleryId,
    groupGalleryImageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **groupGalleryId** | [**string**] | Must be a valid group gallery ID. | defaults to undefined|
| **groupGalleryImageId** | [**string**] | Must be a valid group gallery image ID. | defaults to undefined|


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
|**200** | Successful response after deleting a group gallery image. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**403** | Error response when trying to delete a submission to a group\&#39;s gallery when the user does not have permission to do so. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGroupInvite**
> deleteGroupInvite()

Deletes an Group invite sent to a User

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.deleteGroupInvite(
    groupId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


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
|**400** | Bad request error response when deleting a group invite |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGroupPost**
> Success deleteGroupPost()

Delete a Group post

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let notificationId: string; //Must be a valid notification ID. (default to undefined)

const { status, data } = await apiInstance.deleteGroupPost(
    groupId,
    notificationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
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
|**200** | Response after deleting a group post. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Response after deleting a group post. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGroupRole**
> Array<GroupRole> deleteGroupRole()

Deletes a Group Role by ID and returns the remaining roles.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let groupRoleId: string; //Must be a valid group role ID. (default to undefined)

const { status, data } = await apiInstance.deleteGroupRole(
    groupId,
    groupRoleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **groupRoleId** | [**string**] | Must be a valid group role ID. | defaults to undefined|


### Return type

**Array<GroupRole>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupRole objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a group you are not member of. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroup**
> Group getGroup()

Returns a single Group by ID.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let includeRoles: boolean; //Include roles for the Group object. Defaults to false. (optional) (default to undefined)

const { status, data } = await apiInstance.getGroup(
    groupId,
    includeRoles
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **includeRoles** | [**boolean**] | Include roles for the Group object. Defaults to false. | (optional) defaults to undefined|


### Return type

**Group**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Group object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupAnnouncements**
> GroupAnnouncement getGroupAnnouncements()

Returns the announcement for a Group. If no announcement has been made, then it returns **empty object**.  If an announcement exists, then it will always return all fields except `imageId` and `imageUrl` which may be null.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)

const { status, data } = await apiInstance.getGroupAnnouncements(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


### Return type

**GroupAnnouncement**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single GroupAnnouncement object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupAuditLogs**
> PaginatedGroupAuditLogEntryList getGroupAuditLogs()

Returns a list of audit logs for a Group.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)
let startDate: string; //The start date of the search range. (optional) (default to undefined)
let endDate: string; //The end date of the search range. (optional) (default to undefined)
let actorIds: string; //The comma-separated actor ids to search for. (optional) (default to undefined)
let eventTypes: string; //The comma-separated event types to search for. (optional) (default to undefined)
let targetIds: string; //The comma-separated target ids to search for. (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupAuditLogs(
    groupId,
    n,
    offset,
    startDate,
    endDate,
    actorIds,
    eventTypes,
    targetIds
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|
| **startDate** | [**string**] | The start date of the search range. | (optional) defaults to undefined|
| **endDate** | [**string**] | The end date of the search range. | (optional) defaults to undefined|
| **actorIds** | [**string**] | The comma-separated actor ids to search for. | (optional) defaults to undefined|
| **eventTypes** | [**string**] | The comma-separated event types to search for. | (optional) defaults to undefined|
| **targetIds** | [**string**] | The comma-separated target ids to search for. | (optional) defaults to undefined|


### Return type

**PaginatedGroupAuditLogEntryList**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupAudit objects, wrapped in new pagination format. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupBans**
> Array<GroupMember> getGroupBans()

Returns a list of banned users for a Group.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupBans(
    groupId,
    n,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|


### Return type

**Array<GroupMember>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupMember objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**403** | Error response due to missing permissions. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupGalleryImages**
> Array<GroupGalleryImage> getGroupGalleryImages()

Returns a list of images for a Group gallery.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let groupGalleryId: string; //Must be a valid group gallery ID. (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)
let approved: boolean; //If specified, only returns images that have been approved or not approved. (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupGalleryImages(
    groupId,
    groupGalleryId,
    n,
    offset,
    approved
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **groupGalleryId** | [**string**] | Must be a valid group gallery ID. | defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|
| **approved** | [**boolean**] | If specified, only returns images that have been approved or not approved. | (optional) defaults to undefined|


### Return type

**Array<GroupGalleryImage>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupGalleryImage objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupInstances**
> Array<GroupInstance> getGroupInstances()

Returns a list of group instances

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)

const { status, data } = await apiInstance.getGroupInstances(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


### Return type

**Array<GroupInstance>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupInstance objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupInvites**
> Array<GroupMember> getGroupInvites()

Returns a list of members that have been invited to the Group.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupInvites(
    groupId,
    n,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|


### Return type

**Array<GroupMember>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupMember objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**403** | Error response when trying to perform operations on a group you are not member of. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupMember**
> GroupLimitedMember getGroupMember()

Returns a LimitedGroup Member.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.getGroupMember(
    groupId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**GroupLimitedMember**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupMember objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**403** | Error response when trying to perform operations on a group you are not member of. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupMembers**
> Array<GroupMember> getGroupMembers()

Returns a List of all **other** Group Members. This endpoint will never return the user calling the endpoint. Information about the user calling the endpoint must be found in the `myMember` field of the Group object.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)
let sort: GroupSearchSort; //The sort order of Group Member results (optional) (default to undefined)
let roleId: string; //Only returns members with a specific groupRoleId (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupMembers(
    groupId,
    n,
    offset,
    sort,
    roleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|
| **sort** | **GroupSearchSort** | The sort order of Group Member results | (optional) defaults to undefined|
| **roleId** | [**string**] | Only returns members with a specific groupRoleId | (optional) defaults to undefined|


### Return type

**Array<GroupMember>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupMember objects. |  -  |
|**400** | Error response when trying to search list of users with an invalid request. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupPermissions**
> Array<GroupPermission> getGroupPermissions()

Returns a List of all possible/available permissions for a Group.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)

const { status, data } = await apiInstance.getGroupPermissions(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


### Return type

**Array<GroupPermission>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupPermission objects. |  -  |
|**400** | Error response when trying to search list of users with an invalid request. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupPosts**
> InlineObject getGroupPosts()

Get posts from a Group

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)
let publicOnly: boolean; //See public posts only. (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupPosts(
    groupId,
    n,
    offset,
    publicOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|
| **publicOnly** | [**boolean**] | See public posts only. | (optional) defaults to undefined|


### Return type

**InlineObject**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a GroupPost Array. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupRequests**
> Array<GroupMember> getGroupRequests()

Returns a list of members that have requested to join the Group.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)
let blocked: boolean; //See blocked join requests (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupRequests(
    groupId,
    n,
    offset,
    blocked
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|
| **blocked** | [**boolean**] | See blocked join requests | (optional) defaults to undefined|


### Return type

**Array<GroupMember>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupMember objects. |  -  |
|**400** | Bad request error response when responding to a group join request |  -  |
|**403** | Error response when trying to perform operations on a group you are not member of. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupRoleTemplates**
> { [key: string]: GroupRoleTemplateValues; } getGroupRoleTemplates()

Obtain predefined templates for group roles

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

const { status, data } = await apiInstance.getGroupRoleTemplates();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: GroupRoleTemplateValues; }**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a dictionary of GroupRoleTemplate objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupRoles**
> Array<GroupRole> getGroupRoles()

Returns a Group Role by ID.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)

const { status, data } = await apiInstance.getGroupRoles(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


### Return type

**Array<GroupRole>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupRole objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **joinGroup**
> GroupMember joinGroup()

Join a Group by ID and returns the member object.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)

const { status, data } = await apiInstance.joinGroup(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


### Return type

**GroupMember**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupMember objects. |  -  |
|**400** | Error response when trying to join a group that the user is already a member of. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kickGroupMember**
> kickGroupMember()

Kicks a Group Member from the Group. The current user must have the \"Remove Group Members\" permission.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.kickGroupMember(
    groupId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


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
|**403** | Error response when trying to perform operations on a group you are not member of. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **leaveGroup**
> leaveGroup()

Leave a group by ID.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)

const { status, data } = await apiInstance.leaveGroup(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


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
|**403** | Error response when trying to perform operations on a group you are not member of. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeGroupMemberRole**
> Array<string> removeGroupMemberRole()

Removes a Role from a Group Member

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let userId: string; //Must be a valid user ID. (default to undefined)
let groupRoleId: string; //Must be a valid group role ID. (default to undefined)

const { status, data } = await apiInstance.removeGroupMemberRole(
    groupId,
    userId,
    groupRoleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|
| **groupRoleId** | [**string**] | Must be a valid group role ID. | defaults to undefined|


### Return type

**Array<string>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupRoleID objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **respondGroupJoinRequest**
> respondGroupJoinRequest(respondGroupJoinRequest)

Responds to a Group Join Request with Accept/Deny

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    RespondGroupJoinRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let userId: string; //Must be a valid user ID. (default to undefined)
let respondGroupJoinRequest: RespondGroupJoinRequest; //

const { status, data } = await apiInstance.respondGroupJoinRequest(
    groupId,
    userId,
    respondGroupJoinRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **respondGroupJoinRequest** | **RespondGroupJoinRequest**|  | |
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


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
|**200** | OK |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchGroups**
> Array<LimitedGroup> searchGroups()

Searches Groups by name or shortCode

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let query: string; //Query to search for, can be either Group Name or Group shortCode (optional) (default to undefined)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)

const { status, data } = await apiInstance.searchGroups(
    query,
    offset,
    n
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] | Query to search for, can be either Group Name or Group shortCode | (optional) defaults to undefined|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|


### Return type

**Array<LimitedGroup>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of LimitedGroup objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unbanGroupMember**
> GroupMember unbanGroupMember()

Unbans a user from a Group.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.unbanGroupMember(
    groupId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**GroupMember**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupMember objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGroup**
> Group updateGroup()

Updates a Group and returns it.

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    UpdateGroupRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let updateGroupRequest: UpdateGroupRequest; // (optional)

const { status, data } = await apiInstance.updateGroup(
    groupId,
    updateGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGroupRequest** | **UpdateGroupRequest**|  | |
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


### Return type

**Group**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Group object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGroupGallery**
> GroupGallery updateGroupGallery()

Updates a gallery for a Group.

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    UpdateGroupGalleryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let groupGalleryId: string; //Must be a valid group gallery ID. (default to undefined)
let updateGroupGalleryRequest: UpdateGroupGalleryRequest; // (optional)

const { status, data } = await apiInstance.updateGroupGallery(
    groupId,
    groupGalleryId,
    updateGroupGalleryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGroupGalleryRequest** | **UpdateGroupGalleryRequest**|  | |
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **groupGalleryId** | [**string**] | Must be a valid group gallery ID. | defaults to undefined|


### Return type

**GroupGallery**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single GroupGallery object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGroupMember**
> GroupLimitedMember updateGroupMember()

Updates a Group Member

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    UpdateGroupMemberRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let userId: string; //Must be a valid user ID. (default to undefined)
let updateGroupMemberRequest: UpdateGroupMemberRequest; // (optional)

const { status, data } = await apiInstance.updateGroupMember(
    groupId,
    userId,
    updateGroupMemberRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGroupMemberRequest** | **UpdateGroupMemberRequest**|  | |
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**GroupLimitedMember**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupMember objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to perform operations on a non-existing group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGroupPost**
> GroupPost updateGroupPost(createGroupPostRequest)

Edits a Group post

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    CreateGroupPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let notificationId: string; //Must be a valid notification ID. (default to undefined)
let createGroupPostRequest: CreateGroupPostRequest; //

const { status, data } = await apiInstance.updateGroupPost(
    groupId,
    notificationId,
    createGroupPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGroupPostRequest** | **CreateGroupPostRequest**|  | |
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **notificationId** | [**string**] | Must be a valid notification ID. | defaults to undefined|


### Return type

**GroupPost**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a GroupPost object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Response after deleting a group post. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGroupRepresentation**
> Success updateGroupRepresentation(updateGroupRepresentationRequest)

Updates whether the user is representing the group.  When `isRepresenting` is set to `true`, this flag will be set to `false` for all other groups

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    UpdateGroupRepresentationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let updateGroupRepresentationRequest: UpdateGroupRepresentationRequest; //

const { status, data } = await apiInstance.updateGroupRepresentation(
    groupId,
    updateGroupRepresentationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGroupRepresentationRequest** | **UpdateGroupRepresentationRequest**|  | |
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


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
|**200** | Successful response after updating group representation. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**403** | Error response when trying to perform operations on a group you are not member of. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGroupRole**
> Array<GroupRole> updateGroupRole()

Updates a group role by ID.

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    UpdateGroupRoleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let groupRoleId: string; //Must be a valid group role ID. (default to undefined)
let updateGroupRoleRequest: UpdateGroupRoleRequest; // (optional)

const { status, data } = await apiInstance.updateGroupRole(
    groupId,
    groupRoleId,
    updateGroupRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGroupRoleRequest** | **UpdateGroupRoleRequest**|  | |
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **groupRoleId** | [**string**] | Must be a valid group role ID. | defaults to undefined|


### Return type

**Array<GroupRole>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of GroupRole objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

