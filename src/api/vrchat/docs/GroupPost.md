# GroupPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**groupId** | **string** |  | [optional] [default to undefined]
**authorId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**editorId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**visibility** | [**GroupPostVisibility**](GroupPostVisibility.md) |  | [optional] [default to undefined]
**roleId** | **Array&lt;string&gt;** |   | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**text** | **string** |  | [optional] [default to undefined]
**imageId** | **string** |  | [optional] [default to undefined]
**imageUrl** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GroupPost } from './api';

const instance: GroupPost = {
    id,
    groupId,
    authorId,
    editorId,
    visibility,
    roleId,
    title,
    text,
    imageId,
    imageUrl,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
