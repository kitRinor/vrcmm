# UpdateWorldRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assetUrl** | **string** |  | [optional] [default to undefined]
**assetVersion** | **string** |  | [optional] [default to undefined]
**authorId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**authorName** | **string** |  | [optional] [default to undefined]
**capacity** | **number** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**imageUrl** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**platform** | **string** | This can be &#x60;standalonewindows&#x60; or &#x60;android&#x60;, but can also pretty much be any random Unity verison such as &#x60;2019.2.4-801-Release&#x60; or &#x60;2019.2.2-772-Release&#x60; or even &#x60;unknownplatform&#x60;. | [optional] [default to undefined]
**releaseStatus** | [**ReleaseStatus**](ReleaseStatus.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |   | [optional] [default to undefined]
**unityPackageUrl** | **string** |  | [optional] [default to undefined]
**unityVersion** | **string** |  | [optional] [default to '5.3.4p1']

## Example

```typescript
import { UpdateWorldRequest } from './api';

const instance: UpdateWorldRequest = {
    assetUrl,
    assetVersion,
    authorId,
    authorName,
    capacity,
    description,
    imageUrl,
    name,
    platform,
    releaseStatus,
    tags,
    unityPackageUrl,
    unityVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
