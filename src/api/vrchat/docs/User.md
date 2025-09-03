# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ageVerificationStatus** | [**AgeVerificationStatus**](AgeVerificationStatus.md) |  | [default to undefined]
**ageVerified** | **boolean** | &#x60;true&#x60; if, user is age verified (not 18+). | [default to undefined]
**allowAvatarCopying** | **boolean** |  | [default to true]
**badges** | [**Array&lt;Badge&gt;**](Badge.md) |   | [optional] [default to undefined]
**bio** | **string** |  | [default to undefined]
**bioLinks** | **Array&lt;string&gt;** |  | [default to undefined]
**currentAvatarImageUrl** | **string** | When profilePicOverride is not empty, use it instead. | [default to undefined]
**currentAvatarThumbnailImageUrl** | **string** | When profilePicOverride is not empty, use it instead. | [default to undefined]
**currentAvatarTags** | **Array&lt;string&gt;** |  | [default to undefined]
**date_joined** | **string** |  | [default to undefined]
**developerType** | [**DeveloperType**](DeveloperType.md) |  | [default to undefined]
**displayName** | **string** | A users visual display name. This is what shows up in-game, and can different from their &#x60;username&#x60;. Changing display name is restricted to a cooldown period. | [default to undefined]
**friendKey** | **string** |  | [default to undefined]
**friendRequestStatus** | **string** |  | [optional] [default to undefined]
**id** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]
**instanceId** | **string** | InstanceID can be \&quot;offline\&quot; on User profiles if you are not friends with that user and \&quot;private\&quot; if you are friends and user is in private instance. | [optional] [default to undefined]
**isFriend** | **boolean** | Either their &#x60;friendKey&#x60;, or empty string if you are not friends. Unknown usage. | [default to undefined]
**last_activity** | **string** | Either a date-time or empty string. | [default to undefined]
**last_login** | **string** | Either a date-time or empty string. | [default to undefined]
**last_mobile** | **string** |  | [optional] [default to undefined]
**last_platform** | **string** | This can be &#x60;standalonewindows&#x60; or &#x60;android&#x60;, but can also pretty much be any random Unity verison such as &#x60;2019.2.4-801-Release&#x60; or &#x60;2019.2.2-772-Release&#x60; or even &#x60;unknownplatform&#x60;. | [default to undefined]
**location** | **string** | WorldID be \&quot;offline\&quot; on User profiles if you are not friends with that user. | [optional] [default to undefined]
**note** | **string** |  | [optional] [default to undefined]
**platform** | **string** |  | [optional] [default to undefined]
**profilePicOverride** | **string** |  | [default to undefined]
**profilePicOverrideThumbnail** | **string** |  | [default to undefined]
**pronouns** | **string** |  | [default to undefined]
**state** | [**UserState**](UserState.md) |  | [default to undefined]
**status** | [**UserStatus**](UserStatus.md) |  | [default to undefined]
**statusDescription** | **string** |  | [default to undefined]
**tags** | **Array&lt;string&gt;** |   | [default to undefined]
**travelingToInstance** | **string** |  | [optional] [default to undefined]
**travelingToLocation** | **string** |  | [optional] [default to undefined]
**travelingToWorld** | **string** |  | [optional] [default to undefined]
**userIcon** | **string** |  | [default to undefined]
**username** | **string** | -| A users unique name, used during login. This is different from &#x60;displayName&#x60; which is what shows up in-game. A users &#x60;username&#x60; can never be changed.\&#39; **DEPRECATED:** VRChat API no longer return usernames of other users. [See issue by Tupper for more information](https://github.com/pypy-vrc/VRCX/issues/429). | [optional] [default to undefined]
**worldId** | **string** | WorldID be \&quot;offline\&quot; on User profiles if you are not friends with that user. | [optional] [default to undefined]

## Example

```typescript
import { User } from './api';

const instance: User = {
    ageVerificationStatus,
    ageVerified,
    allowAvatarCopying,
    badges,
    bio,
    bioLinks,
    currentAvatarImageUrl,
    currentAvatarThumbnailImageUrl,
    currentAvatarTags,
    date_joined,
    developerType,
    displayName,
    friendKey,
    friendRequestStatus,
    id,
    instanceId,
    isFriend,
    last_activity,
    last_login,
    last_mobile,
    last_platform,
    location,
    note,
    platform,
    profilePicOverride,
    profilePicOverrideThumbnail,
    pronouns,
    state,
    status,
    statusDescription,
    tags,
    travelingToInstance,
    travelingToLocation,
    travelingToWorld,
    userIcon,
    username,
    worldId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
