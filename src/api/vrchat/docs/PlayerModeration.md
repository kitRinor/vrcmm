# PlayerModeration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**sourceDisplayName** | **string** |  | [default to undefined]
**sourceUserId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]
**targetDisplayName** | **string** |  | [default to undefined]
**targetUserId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]
**type** | [**PlayerModerationType**](PlayerModerationType.md) |  | [default to undefined]

## Example

```typescript
import { PlayerModeration } from './api';

const instance: PlayerModeration = {
    created,
    id,
    sourceDisplayName,
    sourceUserId,
    targetDisplayName,
    targetUserId,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
