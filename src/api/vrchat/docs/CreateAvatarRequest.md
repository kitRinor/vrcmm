# CreateAvatarRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assetUrl** | **string** |  | [optional] [default to undefined]
**assetVersion** | **string** |  | [optional] [default to undefined]
**platform** | **string** | This can be &#x60;standalonewindows&#x60; or &#x60;android&#x60;, but can also pretty much be any random Unity verison such as &#x60;2019.2.4-801-Release&#x60; or &#x60;2019.2.2-772-Release&#x60; or even &#x60;unknownplatform&#x60;. | [optional] [default to undefined]
**created_at** | **string** | A date and time of the pattern &#x60;M/d/yyyy h:mm:ss tt&#x60; (see C Sharp &#x60;System.DateTime&#x60;) | [optional] [default to undefined]
**updated_at** | **string** | A date and time of the pattern &#x60;M/d/yyyy h:mm:ss tt&#x60; (see C Sharp &#x60;System.DateTime&#x60;) | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |   | [optional] [default to undefined]
**imageUrl** | **string** |  | [default to undefined]
**thumbnailImageUrl** | **string** |  | [optional] [default to undefined]
**releaseStatus** | [**ReleaseStatus**](ReleaseStatus.md) |  | [optional] [default to undefined]
**version** | **number** |  | [optional] [default to 1]
**unityPackageUrl** | **string** |  | [optional] [default to undefined]
**unityVersion** | **string** |  | [optional] [default to '5.3.4p1']

## Example

```typescript
import { CreateAvatarRequest } from './api';

const instance: CreateAvatarRequest = {
    assetUrl,
    assetVersion,
    platform,
    created_at,
    updated_at,
    id,
    name,
    description,
    tags,
    imageUrl,
    thumbnailImageUrl,
    releaseStatus,
    version,
    unityPackageUrl,
    unityVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
