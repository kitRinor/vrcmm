# UserNote


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**note** | **string** |  | [default to undefined]
**targetUser** | [**UserNoteTargetUser**](UserNoteTargetUser.md) |  | [optional] [default to undefined]
**targetUserId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]
**userId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]

## Example

```typescript
import { UserNote } from './api';

const instance: UserNote = {
    createdAt,
    id,
    note,
    targetUser,
    targetUserId,
    userId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
