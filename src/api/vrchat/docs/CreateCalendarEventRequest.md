# CreateCalendarEventRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | Event title | [default to undefined]
**startsAt** | **string** | Time the event starts at | [default to undefined]
**description** | **string** |  | [default to undefined]
**endsAt** | **string** | Time the event ends at | [default to undefined]
**category** | **string** |  | [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**isDraft** | **boolean** |  | [optional] [default to undefined]
**imageId** | **string** |  | [optional] [default to undefined]
**roleIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**parentId** | **string** |  | [optional] [default to undefined]
**platforms** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**languages** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**sendCreationNotification** | **boolean** | Send notification to group members. | [default to undefined]
**featured** | **boolean** |  | [optional] [default to undefined]
**hostEarlyJoinMinutes** | **number** |  | [optional] [default to undefined]
**guestEarlyJoinMinutes** | **number** |  | [optional] [default to undefined]
**closeInstanceAfterEndMinutes** | **number** |  | [optional] [default to undefined]
**usesInstanceOverflow** | **boolean** |  | [optional] [default to undefined]
**accessType** | **string** |  | [default to undefined]

## Example

```typescript
import { CreateCalendarEventRequest } from './api';

const instance: CreateCalendarEventRequest = {
    title,
    startsAt,
    description,
    endsAt,
    category,
    tags,
    isDraft,
    imageId,
    roleIds,
    parentId,
    platforms,
    languages,
    sendCreationNotification,
    featured,
    hostEarlyJoinMinutes,
    guestEarlyJoinMinutes,
    closeInstanceAfterEndMinutes,
    usesInstanceOverflow,
    accessType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
