# GroupMemberLimitedUser

Only visible via the /groups/:groupId/members endpoint, **not** when fetching a specific user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**displayName** | **string** |  | [optional] [default to undefined]
**thumbnailUrl** | **string** |  | [optional] [default to undefined]
**iconUrl** | **string** |  | [optional] [default to undefined]
**profilePicOverride** | **string** |  | [optional] [default to undefined]
**currentAvatarThumbnailImageUrl** | **string** |  | [optional] [default to undefined]
**currentAvatarTags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { GroupMemberLimitedUser } from './api';

const instance: GroupMemberLimitedUser = {
    id,
    displayName,
    thumbnailUrl,
    iconUrl,
    profilePicOverride,
    currentAvatarThumbnailImageUrl,
    currentAvatarTags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
