# LimitedGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**shortCode** | **string** |  | [optional] [default to undefined]
**discriminator** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**iconUrl** | **string** |  | [optional] [default to undefined]
**bannerUrl** | **string** |  | [optional] [default to undefined]
**ownerId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**rules** | **string** |  | [optional] [default to undefined]
**iconId** | **string** |  | [optional] [default to undefined]
**bannerId** | **string** |  | [optional] [default to undefined]
**memberCount** | **number** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |   | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**membershipStatus** | [**GroupMemberStatus**](GroupMemberStatus.md) |  | [optional] [default to undefined]
**isSearchable** | **boolean** |  | [optional] [default to undefined]
**galleries** | [**Array&lt;GroupGallery&gt;**](GroupGallery.md) |   | [optional] [default to undefined]

## Example

```typescript
import { LimitedGroup } from './api';

const instance: LimitedGroup = {
    id,
    name,
    shortCode,
    discriminator,
    description,
    iconUrl,
    bannerUrl,
    ownerId,
    rules,
    iconId,
    bannerId,
    memberCount,
    tags,
    createdAt,
    membershipStatus,
    isSearchable,
    galleries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
