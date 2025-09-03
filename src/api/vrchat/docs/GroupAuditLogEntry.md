# GroupAuditLogEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**groupId** | **string** |  | [optional] [default to undefined]
**actorId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**actorDisplayName** | **string** |  | [optional] [default to undefined]
**targetId** | **string** | Typically a UserID, GroupID, GroupRoleID, or Location, but could be other types of IDs. | [optional] [default to undefined]
**eventType** | **string** | The type of event that occurred. This is a string that is prefixed with the type of object that the event occurred on. For example, a group role update event would be prefixed with &#x60;group.role&#x60;. | [optional] [default to 'group.update']
**description** | **string** | A human-readable description of the event. | [optional] [default to undefined]
**data** | **object** | The data associated with the event. The format of this data is dependent on the event type. | [optional] [default to undefined]

## Example

```typescript
import { GroupAuditLogEntry } from './api';

const instance: GroupAuditLogEntry = {
    id,
    created_at,
    groupId,
    actorId,
    actorDisplayName,
    targetId,
    eventType,
    description,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
