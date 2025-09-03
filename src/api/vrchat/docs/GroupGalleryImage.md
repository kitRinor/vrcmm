# GroupGalleryImage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**groupId** | **string** |  | [optional] [default to undefined]
**galleryId** | **string** |  | [optional] [default to undefined]
**fileId** | **string** |  | [optional] [default to undefined]
**imageUrl** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**submittedByUserId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**approved** | **boolean** |  | [optional] [default to false]
**approvedByUserId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**approvedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GroupGalleryImage } from './api';

const instance: GroupGalleryImage = {
    id,
    groupId,
    galleryId,
    fileId,
    imageUrl,
    createdAt,
    submittedByUserId,
    approved,
    approvedByUserId,
    approvedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
