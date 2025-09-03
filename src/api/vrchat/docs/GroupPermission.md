# GroupPermission

A permission that can be granted to a role in a group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the permission. | [optional] [default to undefined]
**displayName** | **string** | The display name of the permission. | [optional] [default to undefined]
**help** | **string** | Human-readable description of the permission. | [optional] [default to undefined]
**isManagementPermission** | **boolean** | Whether this permission is a \&quot;management\&quot; permission. | [optional] [default to false]
**allowedToAdd** | **boolean** | Whether the user is allowed to add this permission to a role. | [optional] [default to false]

## Example

```typescript
import { GroupPermission } from './api';

const instance: GroupPermission = {
    name,
    displayName,
    help,
    isManagementPermission,
    allowedToAdd,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
