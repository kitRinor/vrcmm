# CreateInstanceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**worldId** | **string** | WorldID be \&quot;offline\&quot; on User profiles if you are not friends with that user. | [default to undefined]
**type** | [**InstanceType**](InstanceType.md) |  | [default to undefined]
**region** | [**InstanceRegion**](InstanceRegion.md) |  | [default to undefined]
**ownerId** | **string** | A groupId if the instance type is \&quot;group\&quot;, null if instance type is public, or a userId otherwise | [optional] [default to undefined]
**roleIds** | **Array&lt;string&gt;** | Group roleIds that are allowed to join if the type is \&quot;group\&quot; and groupAccessType is \&quot;member\&quot; | [optional] [default to undefined]
**groupAccessType** | [**GroupAccessType**](GroupAccessType.md) |  | [optional] [default to undefined]
**queueEnabled** | **boolean** |  | [optional] [default to false]
**closedAt** | **string** | The time after which users won\&#39;t be allowed to join the instance. This doesn\&#39;t work for public instances. | [optional] [default to undefined]
**canRequestInvite** | **boolean** | Only applies to invite type instances to make them invite+ | [optional] [default to false]
**hardClose** | **boolean** | Currently unused, but will eventually be a flag to set if the closing of the instance should kick people. | [optional] [default to false]
**inviteOnly** | **boolean** |  | [optional] [default to false]
**ageGate** | **boolean** |  | [optional] [default to false]
**instancePersistenceEnabled** | **boolean** |  | [optional] [default to undefined]
**displayName** | **string** |  | [optional] [default to undefined]
**contentSettings** | [**InstanceContentSettings**](InstanceContentSettings.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateInstanceRequest } from './api';

const instance: CreateInstanceRequest = {
    worldId,
    type,
    region,
    ownerId,
    roleIds,
    groupAccessType,
    queueEnabled,
    closedAt,
    canRequestInvite,
    hardClose,
    inviteOnly,
    ageGate,
    instancePersistenceEnabled,
    displayName,
    contentSettings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
