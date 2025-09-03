# UserSubscription



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**transactionId** | **string** |  | [default to undefined]
**store** | **string** | Which \&quot;Store\&quot; it came from. Right now only Stores are \&quot;Steam\&quot; and \&quot;Admin\&quot;. | [default to undefined]
**steamItemId** | **string** |  | [optional] [default to undefined]
**amount** | **number** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**period** | [**SubscriptionPeriod**](SubscriptionPeriod.md) |  | [default to undefined]
**tier** | **number** |  | [default to undefined]
**active** | **boolean** |  | [default to true]
**status** | [**TransactionStatus**](TransactionStatus.md) |  | [default to undefined]
**starts** | **string** |  | [optional] [default to undefined]
**expires** | **string** |  | [default to undefined]
**created_at** | **string** |  | [default to undefined]
**updated_at** | **string** |  | [default to undefined]
**licenseGroups** | **Array&lt;string&gt;** |  | [default to undefined]
**isGift** | **boolean** |  | [default to false]
**isBulkGift** | **boolean** |  | [default to false]

## Example

```typescript
import { UserSubscription } from './api';

const instance: UserSubscription = {
    id,
    transactionId,
    store,
    steamItemId,
    amount,
    description,
    period,
    tier,
    active,
    status,
    starts,
    expires,
    created_at,
    updated_at,
    licenseGroups,
    isGift,
    isBulkGift,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
