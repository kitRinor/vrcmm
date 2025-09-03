# TransactionAgreement

Represents a single Transaction, which is likely between VRChat and Steam.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agreementId** | **string** |  | [default to undefined]
**itemId** | **number** |  | [default to undefined]
**agreement** | **string** |  | [default to undefined]
**status** | **string** | This is NOT TransactionStatus, but whatever Steam return. | [default to undefined]
**period** | **string** |  | [default to undefined]
**frequency** | **number** |  | [default to undefined]
**billingType** | **string** |  | [default to undefined]
**startDate** | **string** |  | [default to undefined]
**endDate** | **string** |  | [default to undefined]
**recurringAmt** | **number** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**timeCreated** | **string** |  | [default to undefined]
**nextPayment** | **string** |  | [default to undefined]
**lastPayment** | **string** |  | [default to undefined]
**lastAmount** | **number** |  | [default to undefined]
**lastAmountVat** | **number** |  | [default to undefined]
**outstanding** | **number** |  | [default to undefined]
**failedAttempts** | **number** |  | [default to undefined]

## Example

```typescript
import { TransactionAgreement } from './api';

const instance: TransactionAgreement = {
    agreementId,
    itemId,
    agreement,
    status,
    period,
    frequency,
    billingType,
    startDate,
    endDate,
    recurringAmt,
    currency,
    timeCreated,
    nextPayment,
    lastPayment,
    lastAmount,
    lastAmountVat,
    outstanding,
    failedAttempts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
