# CreateGroupGalleryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the gallery. | [default to undefined]
**description** | **string** | Description of the gallery. | [optional] [default to undefined]
**membersOnly** | **boolean** | Whether the gallery is members only. | [optional] [default to false]
**roleIdsToView** | **Array&lt;string&gt;** |   | [optional] [default to undefined]
**roleIdsToSubmit** | **Array&lt;string&gt;** |   | [optional] [default to undefined]
**roleIdsToAutoApprove** | **Array&lt;string&gt;** |   | [optional] [default to undefined]
**roleIdsToManage** | **Array&lt;string&gt;** |   | [optional] [default to undefined]

## Example

```typescript
import { CreateGroupGalleryRequest } from './api';

const instance: CreateGroupGalleryRequest = {
    name,
    description,
    membersOnly,
    roleIdsToView,
    roleIdsToSubmit,
    roleIdsToAutoApprove,
    roleIdsToManage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
