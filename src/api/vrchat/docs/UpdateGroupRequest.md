# UpdateGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**shortCode** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**joinState** | [**GroupJoinState**](GroupJoinState.md) |  | [optional] [default to undefined]
**iconId** | **string** |  | [optional] [default to undefined]
**bannerId** | **string** |  | [optional] [default to undefined]
**languages** | **Array&lt;string&gt;** | 3 letter language code | [optional] [default to undefined]
**links** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**rules** | **string** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |   | [optional] [default to undefined]

## Example

```typescript
import { UpdateGroupRequest } from './api';

const instance: UpdateGroupRequest = {
    name,
    shortCode,
    description,
    joinState,
    iconId,
    bannerId,
    languages,
    links,
    rules,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
