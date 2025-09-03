# Transaction



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**userId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**userDisplayName** | **string** |  | [optional] [default to undefined]
**status** | [**TransactionStatus**](TransactionStatus.md) |  | [default to undefined]
**subscription** | [**Subscription**](Subscription.md) |  | [default to undefined]
**sandbox** | **boolean** |  | [default to false]
**created_at** | **string** |  | [default to undefined]
**updated_at** | **string** |  | [default to undefined]
**steam** | [**TransactionSteamInfo**](TransactionSteamInfo.md) |  | [optional] [default to undefined]
**agreement** | [**TransactionAgreement**](TransactionAgreement.md) |  | [optional] [default to undefined]
**error** | **string** |  | [default to undefined]
**isGift** | **boolean** |  | [optional] [default to false]
**isTokens** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { Transaction } from './api';

const instance: Transaction = {
    id,
    userId,
    userDisplayName,
    status,
    subscription,
    sandbox,
    created_at,
    updated_at,
    steam,
    agreement,
    error,
    isGift,
    isTokens,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
