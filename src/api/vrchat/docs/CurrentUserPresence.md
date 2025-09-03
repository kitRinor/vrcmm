# CurrentUserPresence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatarThumbnail** | **string** |  | [optional] [default to undefined]
**currentAvatarTags** | **string** |  | [optional] [default to undefined]
**displayName** | **string** |  | [optional] [default to undefined]
**debugflag** | **string** |  | [optional] [default to undefined]
**groups** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**id** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**instance** | **string** |  | [optional] [default to undefined]
**instanceType** | **string** | either an InstanceType or an empty string | [optional] [default to undefined]
**isRejoining** | **string** |  | [optional] [default to undefined]
**platform** | **string** | either a Platform or an empty string | [optional] [default to undefined]
**profilePicOverride** | **string** |  | [optional] [default to undefined]
**status** | **string** | either a UserStatus or empty string | [optional] [default to undefined]
**travelingToInstance** | **string** |  | [optional] [default to undefined]
**travelingToWorld** | **string** | WorldID be \&quot;offline\&quot; on User profiles if you are not friends with that user. | [optional] [default to undefined]
**userIcon** | **string** |  | [optional] [default to undefined]
**world** | **string** | WorldID be \&quot;offline\&quot; on User profiles if you are not friends with that user. | [optional] [default to undefined]

## Example

```typescript
import { CurrentUserPresence } from './api';

const instance: CurrentUserPresence = {
    avatarThumbnail,
    currentAvatarTags,
    displayName,
    debugflag,
    groups,
    id,
    instance,
    instanceType,
    isRejoining,
    platform,
    profilePicOverride,
    status,
    travelingToInstance,
    travelingToWorld,
    userIcon,
    world,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
