# UnityPackage



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**assetUrl** | **string** |  | [optional] [default to undefined]
**assetUrlObject** | **object** |  | [optional] [default to undefined]
**assetVersion** | **number** |  | [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**impostorizerVersion** | **string** |  | [optional] [default to undefined]
**performanceRating** | [**PerformanceRatings**](PerformanceRatings.md) |  | [optional] [default to undefined]
**platform** | **string** | This can be &#x60;standalonewindows&#x60; or &#x60;android&#x60;, but can also pretty much be any random Unity verison such as &#x60;2019.2.4-801-Release&#x60; or &#x60;2019.2.2-772-Release&#x60; or even &#x60;unknownplatform&#x60;. | [default to undefined]
**pluginUrl** | **string** |  | [optional] [default to undefined]
**pluginUrlObject** | **object** |  | [optional] [default to undefined]
**unitySortNumber** | **number** |  | [optional] [default to undefined]
**unityVersion** | **string** |  | [default to '5.3.4p1']
**worldSignature** | **string** |  | [optional] [default to undefined]
**impostorUrl** | **string** |  | [optional] [default to undefined]
**scanStatus** | **string** |  | [optional] [default to undefined]
**variant** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UnityPackage } from './api';

const instance: UnityPackage = {
    id,
    assetUrl,
    assetUrlObject,
    assetVersion,
    created_at,
    impostorizerVersion,
    performanceRating,
    platform,
    pluginUrl,
    pluginUrlObject,
    unitySortNumber,
    unityVersion,
    worldSignature,
    impostorUrl,
    scanStatus,
    variant,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
