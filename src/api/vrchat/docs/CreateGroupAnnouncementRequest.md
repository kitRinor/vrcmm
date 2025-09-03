# CreateGroupAnnouncementRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | Announcement title | [default to undefined]
**text** | **string** | Announcement text | [optional] [default to undefined]
**imageId** | **string** |  | [optional] [default to undefined]
**sendNotification** | **boolean** | Send notification to group members. | [optional] [default to false]

## Example

```typescript
import { CreateGroupAnnouncementRequest } from './api';

const instance: CreateGroupAnnouncementRequest = {
    title,
    text,
    imageId,
    sendNotification,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
