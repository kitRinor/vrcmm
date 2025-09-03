# CurrentUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acceptedTOSVersion** | **number** |  | [default to undefined]
**acceptedPrivacyVersion** | **number** |  | [optional] [default to undefined]
**accountDeletionDate** | **string** |  | [optional] [default to undefined]
**accountDeletionLog** | [**Array&lt;AccountDeletionLog&gt;**](AccountDeletionLog.md) |   | [optional] [default to undefined]
**activeFriends** | **Array&lt;string&gt;** |   | [optional] [default to undefined]
**ageVerificationStatus** | [**AgeVerificationStatus**](AgeVerificationStatus.md) |  | [default to undefined]
**ageVerified** | **boolean** | &#x60;true&#x60; if, user is age verified (not 18+). | [default to undefined]
**allowAvatarCopying** | **boolean** |  | [default to undefined]
**authToken** | **string** | The auth token for NEWLY REGISTERED ACCOUNTS ONLY (/auth/register) | [optional] [default to undefined]
**badges** | [**Array&lt;Badge&gt;**](Badge.md) |   | [optional] [default to undefined]
**bio** | **string** |  | [default to undefined]
**bioLinks** | **Array&lt;string&gt;** |   | [default to undefined]
**contentFilters** | **Array&lt;string&gt;** | These tags begin with &#x60;content_&#x60; and control content gating | [optional] [default to undefined]
**currentAvatar** | **string** |  | [default to undefined]
**currentAvatarImageUrl** | **string** | When profilePicOverride is not empty, use it instead. | [default to undefined]
**currentAvatarThumbnailImageUrl** | **string** | When profilePicOverride is not empty, use it instead. | [default to undefined]
**currentAvatarTags** | **Array&lt;string&gt;** |  | [default to undefined]
**date_joined** | **string** |  | [default to undefined]
**developerType** | [**DeveloperType**](DeveloperType.md) |  | [default to undefined]
**displayName** | **string** |  | [default to undefined]
**emailVerified** | **boolean** |  | [default to undefined]
**fallbackAvatar** | **string** |  | [optional] [default to undefined]
**friendGroupNames** | **Array&lt;string&gt;** | Always empty array. | [default to undefined]
**friendKey** | **string** |  | [default to undefined]
**friends** | **Array&lt;string&gt;** |  | [default to undefined]
**hasBirthday** | **boolean** |  | [default to undefined]
**hideContentFilterSettings** | **boolean** |  | [optional] [default to undefined]
**userLanguage** | **string** |  | [optional] [default to undefined]
**userLanguageCode** | **string** |  | [optional] [default to undefined]
**hasEmail** | **boolean** |  | [default to undefined]
**hasLoggedInFromClient** | **boolean** |  | [default to undefined]
**hasPendingEmail** | **boolean** |  | [default to undefined]
**homeLocation** | **string** | WorldID be \&quot;offline\&quot; on User profiles if you are not friends with that user. | [default to undefined]
**id** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]
**isAdult** | **boolean** |  | [default to undefined]
**isBoopingEnabled** | **boolean** |  | [optional] [default to true]
**isFriend** | **boolean** |  | [default to false]
**last_activity** | **string** |  | [optional] [default to undefined]
**last_login** | **string** |  | [default to undefined]
**last_mobile** | **string** |  | [default to undefined]
**last_platform** | **string** | This can be &#x60;standalonewindows&#x60; or &#x60;android&#x60;, but can also pretty much be any random Unity verison such as &#x60;2019.2.4-801-Release&#x60; or &#x60;2019.2.2-772-Release&#x60; or even &#x60;unknownplatform&#x60;. | [default to undefined]
**obfuscatedEmail** | **string** |  | [default to undefined]
**obfuscatedPendingEmail** | **string** |  | [default to undefined]
**oculusId** | **string** |  | [default to undefined]
**googleId** | **string** |  | [optional] [default to undefined]
**googleDetails** | **object** |  | [optional] [default to undefined]
**picoId** | **string** |  | [optional] [default to undefined]
**viveId** | **string** |  | [optional] [default to undefined]
**offlineFriends** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**onlineFriends** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**pastDisplayNames** | [**Array&lt;PastDisplayName&gt;**](PastDisplayName.md) |   | [default to undefined]
**presence** | [**CurrentUserPresence**](CurrentUserPresence.md) |  | [optional] [default to undefined]
**platform_history** | [**Array&lt;CurrentUserPlatformHistoryInner&gt;**](CurrentUserPlatformHistoryInner.md) |  | [optional] [default to undefined]
**profilePicOverride** | **string** |  | [default to undefined]
**profilePicOverrideThumbnail** | **string** |  | [default to undefined]
**pronouns** | **string** |  | [default to undefined]
**queuedInstance** | **string** |  | [optional] [default to undefined]
**receiveMobileInvitations** | **boolean** |  | [optional] [default to undefined]
**state** | [**UserState**](UserState.md) |  | [default to undefined]
**status** | [**UserStatus**](UserStatus.md) |  | [default to undefined]
**statusDescription** | **string** |  | [default to undefined]
**statusFirstTime** | **boolean** |  | [default to undefined]
**statusHistory** | **Array&lt;string&gt;** |  | [default to undefined]
**steamDetails** | **object** |  | [default to undefined]
**steamId** | **string** |  | [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [default to undefined]
**twoFactorAuthEnabled** | **boolean** |  | [default to undefined]
**twoFactorAuthEnabledDate** | **string** |  | [optional] [default to undefined]
**unsubscribe** | **boolean** |  | [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]
**userIcon** | **string** |  | [default to undefined]
**username** | **string** | -| **DEPRECATED:** VRChat API no longer return usernames of other users. [See issue by Tupper for more information](https://github.com/pypy-vrc/VRCX/issues/429). | [optional] [default to undefined]

## Example

```typescript
import { CurrentUser } from './api';

const instance: CurrentUser = {
    acceptedTOSVersion,
    acceptedPrivacyVersion,
    accountDeletionDate,
    accountDeletionLog,
    activeFriends,
    ageVerificationStatus,
    ageVerified,
    allowAvatarCopying,
    authToken,
    badges,
    bio,
    bioLinks,
    contentFilters,
    currentAvatar,
    currentAvatarImageUrl,
    currentAvatarThumbnailImageUrl,
    currentAvatarTags,
    date_joined,
    developerType,
    displayName,
    emailVerified,
    fallbackAvatar,
    friendGroupNames,
    friendKey,
    friends,
    hasBirthday,
    hideContentFilterSettings,
    userLanguage,
    userLanguageCode,
    hasEmail,
    hasLoggedInFromClient,
    hasPendingEmail,
    homeLocation,
    id,
    isAdult,
    isBoopingEnabled,
    isFriend,
    last_activity,
    last_login,
    last_mobile,
    last_platform,
    obfuscatedEmail,
    obfuscatedPendingEmail,
    oculusId,
    googleId,
    googleDetails,
    picoId,
    viveId,
    offlineFriends,
    onlineFriends,
    pastDisplayNames,
    presence,
    platform_history,
    profilePicOverride,
    profilePicOverrideThumbnail,
    pronouns,
    queuedInstance,
    receiveMobileInvitations,
    state,
    status,
    statusDescription,
    statusFirstTime,
    statusHistory,
    steamDetails,
    steamId,
    tags,
    twoFactorAuthEnabled,
    twoFactorAuthEnabledDate,
    unsubscribe,
    updated_at,
    userIcon,
    username,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
