# World



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]
**authorName** | **string** |  | [default to undefined]
**capacity** | **number** |  | [default to undefined]
**recommendedCapacity** | **number** |  | [default to undefined]
**created_at** | **string** |  | [default to undefined]
**defaultContentSettings** | [**InstanceContentSettings**](InstanceContentSettings.md) |  | [optional] [default to undefined]
**description** | **string** |  | [default to undefined]
**favorites** | **number** |  | [optional] [default to 0]
**featured** | **boolean** |  | [default to false]
**heat** | **number** |  | [default to 0]
**id** | **string** | WorldID be \&quot;offline\&quot; on User profiles if you are not friends with that user. | [default to undefined]
**imageUrl** | **string** |  | [default to undefined]
**instances** | **Array&lt;Array&lt;any&gt;&gt;** | Will always be an empty list when unauthenticated. | [optional] [default to undefined]
**labsPublicationDate** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**namespace** | **string** |  | [optional] [default to undefined]
**occupants** | **number** | Will always be &#x60;0&#x60; when unauthenticated. | [optional] [default to 0]
**organization** | **string** |  | [default to 'vrchat']
**popularity** | **number** |  | [default to 0]
**previewYoutubeId** | **string** |  | [optional] [default to undefined]
**privateOccupants** | **number** | Will always be &#x60;0&#x60; when unauthenticated. | [optional] [default to 0]
**publicOccupants** | **number** | Will always be &#x60;0&#x60; when unauthenticated. | [optional] [default to 0]
**publicationDate** | **string** |  | [default to undefined]
**releaseStatus** | [**ReleaseStatus**](ReleaseStatus.md) |  | [default to undefined]
**storeId** | **string** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |   | [default to undefined]
**thumbnailImageUrl** | **string** |  | [default to undefined]
**unityPackages** | [**Array&lt;UnityPackage&gt;**](UnityPackage.md) | Empty if unauthenticated. | [optional] [default to undefined]
**updated_at** | **string** |  | [default to undefined]
**urlList** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**version** | **number** |  | [default to 0]
**visits** | **number** |  | [default to 0]
**udonProducts** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { World } from './api';

const instance: World = {
    authorId,
    authorName,
    capacity,
    recommendedCapacity,
    created_at,
    defaultContentSettings,
    description,
    favorites,
    featured,
    heat,
    id,
    imageUrl,
    instances,
    labsPublicationDate,
    name,
    namespace,
    occupants,
    organization,
    popularity,
    previewYoutubeId,
    privateOccupants,
    publicOccupants,
    publicationDate,
    releaseStatus,
    storeId,
    tags,
    thumbnailImageUrl,
    unityPackages,
    updated_at,
    urlList,
    version,
    visits,
    udonProducts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
