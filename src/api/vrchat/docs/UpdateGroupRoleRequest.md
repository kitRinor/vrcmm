# UpdateGroupRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**isSelfAssignable** | **boolean** |  | [optional] [default to false]
**permissions** | [**Array&lt;GroupPermissions&gt;**](GroupPermissions.md) |  | [optional] [default to undefined]
**order** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateGroupRoleRequest } from './api';

const instance: UpdateGroupRoleRequest = {
    name,
    description,
    isSelfAssignable,
    permissions,
    order,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
