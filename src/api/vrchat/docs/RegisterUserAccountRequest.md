# RegisterUserAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **string** | Display Name / Username (Username is a sanitized version) | [default to undefined]
**password** | **string** | Password | [default to undefined]
**email** | **string** | Email address | [default to undefined]
**year** | **string** | Birth year | [default to undefined]
**month** | **string** | Birth month of year | [default to undefined]
**day** | **string** | Birth day of month | [default to undefined]
**captchaCode** | **string** | Captcha code | [default to undefined]
**subscribe** | **boolean** | Whether to recieve promotional emails | [default to undefined]
**acceptedTOSVersion** | **number** | The most recent version of the TOS | [default to undefined]

## Example

```typescript
import { RegisterUserAccountRequest } from './api';

const instance: RegisterUserAccountRequest = {
    username,
    password,
    email,
    year,
    month,
    day,
    captchaCode,
    subscribe,
    acceptedTOSVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
