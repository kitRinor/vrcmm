# AdminAssetBundle



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_created_at** | **string** |  | [default to undefined]
**_updated_at** | **string** |  | [default to undefined]
**assetType** | **string** |  | [default to undefined]
**authorId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]
**authorName** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**imageUrl** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**releaseStatus** | [**ReleaseStatus**](ReleaseStatus.md) |  | [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [default to undefined]
**thumbnailImageUrl** | **string** |  | [default to undefined]
**unityPackageUrl** | **string** |  | [default to undefined]
**unityPackages** | [**Set&lt;AdminUnityPackage&gt;**](AdminUnityPackage.md) |  | [default to undefined]

## Example

```typescript
import { AdminAssetBundle } from './api';

const instance: AdminAssetBundle = {
    _created_at,
    _updated_at,
    assetType,
    authorId,
    authorName,
    description,
    imageUrl,
    name,
    releaseStatus,
    tags,
    thumbnailImageUrl,
    unityPackageUrl,
    unityPackages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
