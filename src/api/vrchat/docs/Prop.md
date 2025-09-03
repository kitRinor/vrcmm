# Prop



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_created_at** | **string** |  | [default to undefined]
**_updated_at** | **string** |  | [default to undefined]
**authorId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]
**authorName** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**imageUrl** | **string** |  | [default to undefined]
**maxCountPerUser** | **number** |  | [default to 1]
**name** | **string** |  | [default to undefined]
**releaseStatus** | [**ReleaseStatus**](ReleaseStatus.md) |  | [default to undefined]
**spawnType** | **number** |  | [default to 0]
**tags** | **Array&lt;string&gt;** |  | [default to undefined]
**thumbnailImageUrl** | **string** |  | [default to undefined]
**unityPackageUrl** | **string** |  | [default to undefined]
**unityPackages** | [**Set&lt;PropUnityPackage&gt;**](PropUnityPackage.md) |  | [default to undefined]
**worldPlacementMask** | **number** |  | [default to 1]

## Example

```typescript
import { Prop } from './api';

const instance: Prop = {
    _created_at,
    _updated_at,
    authorId,
    authorName,
    description,
    id,
    imageUrl,
    maxCountPerUser,
    name,
    releaseStatus,
    spawnType,
    tags,
    thumbnailImageUrl,
    unityPackageUrl,
    unityPackages,
    worldPlacementMask,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
