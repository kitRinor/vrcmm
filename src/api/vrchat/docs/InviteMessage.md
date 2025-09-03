# InviteMessage



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canBeUpdated** | **boolean** |  | [default to true]
**id** | **string** |  | [default to undefined]
**message** | **string** |  | [default to undefined]
**messageType** | [**InviteMessageType**](InviteMessageType.md) |  | [default to undefined]
**remainingCooldownMinutes** | **number** | Changes to 60 when updated, although probably server-side configurable. | [default to 0]
**slot** | **number** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { InviteMessage } from './api';

const instance: InviteMessage = {
    canBeUpdated,
    id,
    message,
    messageType,
    remainingCooldownMinutes,
    slot,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
