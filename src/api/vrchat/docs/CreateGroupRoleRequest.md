# CreateGroupRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**isSelfAssignable** | **boolean** |  | [optional] [default to false]
**permissions** | [**Array&lt;GroupPermissions&gt;**](GroupPermissions.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateGroupRoleRequest } from './api';

const instance: CreateGroupRoleRequest = {
    id,
    name,
    description,
    isSelfAssignable,
    permissions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
