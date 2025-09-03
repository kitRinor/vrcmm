# LimitedUserSearch

User object received when searching

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bio** | **string** |  | [optional] [default to undefined]
**bioLinks** | **Array&lt;string&gt;** |   | [optional] [default to undefined]
**currentAvatarImageUrl** | **string** | When profilePicOverride is not empty, use it instead. | [default to undefined]
**currentAvatarThumbnailImageUrl** | **string** | When profilePicOverride is not empty, use it instead. | [default to undefined]
**currentAvatarTags** | **Array&lt;string&gt;** |  | [default to undefined]
**developerType** | [**DeveloperType**](DeveloperType.md) |  | [default to undefined]
**displayName** | **string** |  | [default to undefined]
**id** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]
**isFriend** | **boolean** |  | [default to undefined]
**last_platform** | **string** | This can be &#x60;standalonewindows&#x60; or &#x60;android&#x60;, but can also pretty much be any random Unity verison such as &#x60;2019.2.4-801-Release&#x60; or &#x60;2019.2.2-772-Release&#x60; or even &#x60;unknownplatform&#x60;. | [default to undefined]
**profilePicOverride** | **string** |  | [default to undefined]
**pronouns** | **string** |  | [optional] [default to undefined]
**status** | [**UserStatus**](UserStatus.md) |  | [default to undefined]
**statusDescription** | **string** |  | [default to undefined]
**tags** | **Array&lt;string&gt;** | &lt;- Always empty. | [default to undefined]
**userIcon** | **string** |  | [default to undefined]

## Example

```typescript
import { LimitedUserSearch } from './api';

const instance: LimitedUserSearch = {
    bio,
    bioLinks,
    currentAvatarImageUrl,
    currentAvatarThumbnailImageUrl,
    currentAvatarTags,
    developerType,
    displayName,
    id,
    isFriend,
    last_platform,
    profilePicOverride,
    pronouns,
    status,
    statusDescription,
    tags,
    userIcon,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
