# TransactionSteamInfo



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walletInfo** | [**TransactionSteamWalletInfo**](TransactionSteamWalletInfo.md) |  | [default to undefined]
**steamId** | **string** | Steam User ID | [default to undefined]
**orderId** | **string** | Steam Order ID | [default to undefined]
**steamUrl** | **string** | Empty | [default to undefined]
**transId** | **string** | Steam Transaction ID, NOT the same as VRChat TransactionID | [default to undefined]

## Example

```typescript
import { TransactionSteamInfo } from './api';

const instance: TransactionSteamInfo = {
    walletInfo,
    steamId,
    orderId,
    steamUrl,
    transId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
