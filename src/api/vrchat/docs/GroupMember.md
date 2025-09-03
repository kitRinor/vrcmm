# GroupMember


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acceptedByDisplayName** | **string** |  | [optional] [default to undefined]
**acceptedById** | **string** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**groupId** | **string** |  | [optional] [default to undefined]
**userId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**isRepresenting** | **boolean** | Whether the user is representing the group. This makes the group show up above the name tag in-game. | [optional] [default to false]
**user** | [**GroupMemberLimitedUser**](GroupMemberLimitedUser.md) |  | [optional] [default to undefined]
**roleIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**mRoleIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**joinedAt** | **string** |  | [optional] [default to undefined]
**membershipStatus** | [**GroupMemberStatus**](GroupMemberStatus.md) |  | [optional] [default to undefined]
**visibility** | **string** |  | [optional] [default to undefined]
**isSubscribedToAnnouncements** | **boolean** |  | [optional] [default to false]
**createdAt** | **string** | Only visible via the /groups/:groupId/members endpoint, **not** when fetching a specific user. | [optional] [default to undefined]
**bannedAt** | **string** | Only visible via the /groups/:groupId/members endpoint, **not** when fetching a specific user. | [optional] [default to undefined]
**managerNotes** | **string** | Only visible via the /groups/:groupId/members endpoint, **not** when fetching a specific user. | [optional] [default to undefined]
**lastPostReadAt** | **string** |  | [optional] [default to undefined]
**hasJoinedFromPurchase** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { GroupMember } from './api';

const instance: GroupMember = {
    acceptedByDisplayName,
    acceptedById,
    id,
    groupId,
    userId,
    isRepresenting,
    user,
    roleIds,
    mRoleIds,
    joinedAt,
    membershipStatus,
    visibility,
    isSubscribedToAnnouncements,
    createdAt,
    bannedAt,
    managerNotes,
    lastPostReadAt,
    hasJoinedFromPurchase,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
