# GroupRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**groupId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**isSelfAssignable** | **boolean** |  | [optional] [default to false]
**permissions** | [**Array&lt;GroupPermissions&gt;**](GroupPermissions.md) |  | [optional] [default to undefined]
**isManagementRole** | **boolean** |  | [optional] [default to false]
**requiresTwoFactor** | **boolean** |  | [optional] [default to false]
**requiresPurchase** | **boolean** |  | [optional] [default to false]
**order** | **number** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GroupRole } from './api';

const instance: GroupRole = {
    id,
    groupId,
    name,
    description,
    isSelfAssignable,
    permissions,
    isManagementRole,
    requiresTwoFactor,
    requiresPurchase,
    order,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
