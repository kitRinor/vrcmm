# Print

Info about a print

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]
**authorName** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**files** | [**PrintFiles**](PrintFiles.md) |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**note** | **string** |  | [default to undefined]
**ownerId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**timestamp** | **string** |  | [default to undefined]
**worldId** | **string** | WorldID be \&quot;offline\&quot; on User profiles if you are not friends with that user. | [default to undefined]
**worldName** | **string** |  | [default to undefined]

## Example

```typescript
import { Print } from './api';

const instance: Print = {
    authorId,
    authorName,
    createdAt,
    files,
    id,
    note,
    ownerId,
    timestamp,
    worldId,
    worldName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
