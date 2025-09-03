# GroupMyMember


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**groupId** | **string** |  | [optional] [default to undefined]
**userId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**roleIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**acceptedByDisplayName** | **string** |  | [optional] [default to undefined]
**acceptedById** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**managerNotes** | **string** |  | [optional] [default to undefined]
**membershipStatus** | **string** |  | [optional] [default to undefined]
**isSubscribedToAnnouncements** | **boolean** |  | [optional] [default to true]
**visibility** | **string** |  | [optional] [default to undefined]
**isRepresenting** | **boolean** |  | [optional] [default to false]
**joinedAt** | **string** |  | [optional] [default to undefined]
**bannedAt** | **string** |  | [optional] [default to undefined]
**has2FA** | **boolean** |  | [optional] [default to false]
**hasJoinedFromPurchase** | **boolean** |  | [optional] [default to false]
**lastPostReadAt** | **string** |  | [optional] [default to undefined]
**mRoleIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**permissions** | [**Array&lt;GroupPermissions&gt;**](GroupPermissions.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GroupMyMember } from './api';

const instance: GroupMyMember = {
    id,
    groupId,
    userId,
    roleIds,
    acceptedByDisplayName,
    acceptedById,
    createdAt,
    managerNotes,
    membershipStatus,
    isSubscribedToAnnouncements,
    visibility,
    isRepresenting,
    joinedAt,
    bannedAt,
    has2FA,
    hasJoinedFromPurchase,
    lastPostReadAt,
    mRoleIds,
    permissions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
