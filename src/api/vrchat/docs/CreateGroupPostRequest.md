# CreateGroupPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | Post title | [default to undefined]
**text** | **string** | Post text | [default to undefined]
**imageId** | **string** |  | [optional] [default to undefined]
**sendNotification** | **boolean** | Send notification to group members. | [default to false]
**roleIds** | **Array&lt;string&gt;** |   | [optional] [default to undefined]
**visibility** | [**GroupPostVisibility**](GroupPostVisibility.md) |  | [default to undefined]

## Example

```typescript
import { CreateGroupPostRequest } from './api';

const instance: CreateGroupPostRequest = {
    title,
    text,
    imageId,
    sendNotification,
    roleIds,
    visibility,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
