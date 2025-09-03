# UpdateAvatarRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assetUrl** | **string** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |   | [optional] [default to undefined]
**imageUrl** | **string** |  | [optional] [default to undefined]
**releaseStatus** | [**ReleaseStatus**](ReleaseStatus.md) |  | [optional] [default to undefined]
**version** | **number** |  | [optional] [default to 1]
**unityPackageUrl** | **string** |  | [optional] [default to undefined]
**unityVersion** | **string** |  | [optional] [default to '5.3.4p1']

## Example

```typescript
import { UpdateAvatarRequest } from './api';

const instance: UpdateAvatarRequest = {
    assetUrl,
    id,
    name,
    description,
    tags,
    imageUrl,
    releaseStatus,
    version,
    unityPackageUrl,
    unityVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
