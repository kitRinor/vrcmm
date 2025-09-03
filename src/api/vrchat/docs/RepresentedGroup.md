# RepresentedGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**shortCode** | **string** |  | [optional] [default to undefined]
**discriminator** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**iconId** | **string** |  | [optional] [default to undefined]
**iconUrl** | **string** |  | [optional] [default to undefined]
**bannerId** | **string** |  | [optional] [default to undefined]
**bannerUrl** | **string** |  | [optional] [default to undefined]
**privacy** | [**GroupPrivacy**](GroupPrivacy.md) |  | [optional] [default to undefined]
**ownerId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**memberCount** | **number** |  | [optional] [default to undefined]
**groupId** | **string** |  | [optional] [default to undefined]
**memberVisibility** | [**GroupUserVisibility**](GroupUserVisibility.md) |  | [optional] [default to undefined]
**isRepresenting** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { RepresentedGroup } from './api';

const instance: RepresentedGroup = {
    name,
    shortCode,
    discriminator,
    description,
    iconId,
    iconUrl,
    bannerId,
    bannerUrl,
    privacy,
    ownerId,
    memberCount,
    groupId,
    memberVisibility,
    isRepresenting,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
