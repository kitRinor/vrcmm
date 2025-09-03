# GroupInstance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instanceId** | **string** |  | [default to undefined]
**location** | **string** | InstanceID can be \&quot;offline\&quot; on User profiles if you are not friends with that user and \&quot;private\&quot; if you are friends and user is in private instance. | [default to undefined]
**world** | [**World**](World.md) |  | [default to undefined]
**memberCount** | **number** |  | [default to undefined]

## Example

```typescript
import { GroupInstance } from './api';

const instance: GroupInstance = {
    instanceId,
    location,
    world,
    memberCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
