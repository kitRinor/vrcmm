# CreateGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**shortCode** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**joinState** | [**GroupJoinState**](GroupJoinState.md) |  | [optional] [default to undefined]
**iconId** | **string** |  | [optional] [default to undefined]
**bannerId** | **string** |  | [optional] [default to undefined]
**privacy** | [**GroupPrivacy**](GroupPrivacy.md) |  | [optional] [default to undefined]
**roleTemplate** | [**GroupRoleTemplate**](GroupRoleTemplate.md) |  | [default to undefined]

## Example

```typescript
import { CreateGroupRequest } from './api';

const instance: CreateGroupRequest = {
    name,
    shortCode,
    description,
    joinState,
    iconId,
    bannerId,
    privacy,
    roleTemplate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
