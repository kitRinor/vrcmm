# PropUnityPackage



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assetUrl** | **string** |  | [default to undefined]
**assetVersion** | **number** |  | [default to undefined]
**propSignature** | **string** |  | [default to undefined]
**platform** | **string** | This can be &#x60;standalonewindows&#x60; or &#x60;android&#x60;, but can also pretty much be any random Unity verison such as &#x60;2019.2.4-801-Release&#x60; or &#x60;2019.2.2-772-Release&#x60; or even &#x60;unknownplatform&#x60;. | [default to undefined]
**unityVersion** | **string** |  | [default to '2022.3.22f1']
**variant** | **string** |  | [default to undefined]

## Example

```typescript
import { PropUnityPackage } from './api';

const instance: PropUnityPackage = {
    assetUrl,
    assetVersion,
    propSignature,
    platform,
    unityVersion,
    variant,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
