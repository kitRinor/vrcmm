# FavoritedWorld



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]
**authorName** | **string** |  | [default to undefined]
**capacity** | **number** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**recommendedCapacity** | **number** |  | [optional] [default to undefined]
**created_at** | **string** |  | [default to undefined]
**defaultContentSettings** | [**InstanceContentSettings**](InstanceContentSettings.md) |  | [optional] [default to undefined]
**favorites** | **number** |  | [default to 0]
**favoriteGroup** | **string** |  | [default to undefined]
**favoriteId** | **string** |  | [default to undefined]
**featured** | **boolean** |  | [default to false]
**visits** | **number** |  | [optional] [default to 0]
**heat** | **number** |  | [default to 0]
**id** | **string** | WorldID be \&quot;offline\&quot; on User profiles if you are not friends with that user. | [default to undefined]
**imageUrl** | **string** |  | [default to undefined]
**labsPublicationDate** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**occupants** | **number** |  | [default to 0]
**organization** | **string** |  | [default to 'vrchat']
**popularity** | **number** |  | [default to 0]
**previewYoutubeId** | **string** |  | [optional] [default to undefined]
**publicationDate** | **string** |  | [default to undefined]
**releaseStatus** | [**ReleaseStatus**](ReleaseStatus.md) |  | [default to undefined]
**tags** | **Array&lt;string&gt;** |   | [default to undefined]
**thumbnailImageUrl** | **string** |  | [default to undefined]
**unityPackages** | [**Array&lt;UnityPackage&gt;**](UnityPackage.md) |   | [default to undefined]
**updated_at** | **string** |  | [default to undefined]
**urlList** | **Array&lt;string&gt;** |  | [default to undefined]
**udonProducts** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**version** | **number** |  | [default to undefined]

## Example

```typescript
import { FavoritedWorld } from './api';

const instance: FavoritedWorld = {
    authorId,
    authorName,
    capacity,
    description,
    recommendedCapacity,
    created_at,
    defaultContentSettings,
    favorites,
    favoriteGroup,
    favoriteId,
    featured,
    visits,
    heat,
    id,
    imageUrl,
    labsPublicationDate,
    name,
    occupants,
    organization,
    popularity,
    previewYoutubeId,
    publicationDate,
    releaseStatus,
    tags,
    thumbnailImageUrl,
    unityPackages,
    updated_at,
    urlList,
    udonProducts,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
