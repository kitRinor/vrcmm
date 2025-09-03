# Avatar



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledgements** | **string** |  | [optional] [default to undefined]
**assetUrl** | **string** | Not present from general search &#x60;/avatars&#x60;, only on specific requests &#x60;/avatars/{avatarId}&#x60;. | [optional] [default to undefined]
**assetUrlObject** | **object** | Not present from general search &#x60;/avatars&#x60;, only on specific requests &#x60;/avatars/{avatarId}&#x60;. **Deprecation:** &#x60;Object&#x60; has unknown usage/fields, and is always empty. Use normal &#x60;Url&#x60; field instead. | [optional] [default to undefined]
**authorId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]
**authorName** | **string** |  | [default to undefined]
**created_at** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**featured** | **boolean** |  | [default to false]
**highestPrice** | **number** |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**imageUrl** | **string** |  | [default to undefined]
**lock** | **boolean** |  | [optional] [default to undefined]
**lowestPrice** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**performance** | [**AvatarPerformance**](AvatarPerformance.md) |  | [default to undefined]
**productId** | **string** |  | [optional] [default to undefined]
**publishedListings** | [**Array&lt;AvatarPublishedListingsInner&gt;**](AvatarPublishedListingsInner.md) |  | [optional] [default to undefined]
**releaseStatus** | [**ReleaseStatus**](ReleaseStatus.md) |  | [default to undefined]
**searchable** | **boolean** |  | [optional] [default to false]
**styles** | [**AvatarStyles**](AvatarStyles.md) |  | [default to undefined]
**tags** | **Array&lt;string&gt;** |   | [default to undefined]
**thumbnailImageUrl** | **string** |  | [default to undefined]
**unityPackageUrl** | **string** |  | [default to undefined]
**unityPackageUrlObject** | [**AvatarUnityPackageUrlObject**](AvatarUnityPackageUrlObject.md) |  | [default to undefined]
**unityPackages** | [**Set&lt;UnityPackage&gt;**](UnityPackage.md) |  | [default to undefined]
**updated_at** | **string** |  | [default to undefined]
**version** | **number** |  | [default to 0]

## Example

```typescript
import { Avatar } from './api';

const instance: Avatar = {
    acknowledgements,
    assetUrl,
    assetUrlObject,
    authorId,
    authorName,
    created_at,
    description,
    featured,
    highestPrice,
    id,
    imageUrl,
    lock,
    lowestPrice,
    name,
    performance,
    productId,
    publishedListings,
    releaseStatus,
    searchable,
    styles,
    tags,
    thumbnailImageUrl,
    unityPackageUrl,
    unityPackageUrlObject,
    unityPackages,
    updated_at,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
