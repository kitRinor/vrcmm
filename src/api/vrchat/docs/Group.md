# Group


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ageVerificationSlotsAvailable** | **boolean** |  | [optional] [default to undefined]
**ageVerificationBetaCode** | **string** |  | [optional] [default to undefined]
**ageVerificationBetaSlots** | **number** |  | [optional] [default to undefined]
**badges** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**shortCode** | **string** |  | [optional] [default to undefined]
**discriminator** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**iconUrl** | **string** |  | [optional] [default to undefined]
**bannerUrl** | **string** |  | [optional] [default to undefined]
**privacy** | [**GroupPrivacy**](GroupPrivacy.md) |  | [optional] [default to undefined]
**ownerId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**rules** | **string** |  | [optional] [default to undefined]
**links** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**languages** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**iconId** | **string** |  | [optional] [default to undefined]
**bannerId** | **string** |  | [optional] [default to undefined]
**memberCount** | **number** |  | [optional] [default to undefined]
**memberCountSyncedAt** | **string** |  | [optional] [default to undefined]
**isVerified** | **boolean** |  | [optional] [default to false]
**joinState** | [**GroupJoinState**](GroupJoinState.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**transferTargetId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**galleries** | [**Array&lt;GroupGallery&gt;**](GroupGallery.md) |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**lastPostCreatedAt** | **string** |  | [optional] [default to undefined]
**onlineMemberCount** | **number** |  | [optional] [default to undefined]
**membershipStatus** | [**GroupMemberStatus**](GroupMemberStatus.md) |  | [optional] [default to undefined]
**myMember** | [**GroupMyMember**](GroupMyMember.md) |  | [optional] [default to undefined]
**roles** | [**Array&lt;GroupRole&gt;**](GroupRole.md) | Only returned if ?includeRoles&#x3D;true is specified. | [optional] [default to undefined]

## Example

```typescript
import { Group } from './api';

const instance: Group = {
    ageVerificationSlotsAvailable,
    ageVerificationBetaCode,
    ageVerificationBetaSlots,
    badges,
    id,
    name,
    shortCode,
    discriminator,
    description,
    iconUrl,
    bannerUrl,
    privacy,
    ownerId,
    rules,
    links,
    languages,
    iconId,
    bannerId,
    memberCount,
    memberCountSyncedAt,
    isVerified,
    joinState,
    tags,
    transferTargetId,
    galleries,
    createdAt,
    updatedAt,
    lastPostCreatedAt,
    onlineMemberCount,
    membershipStatus,
    myMember,
    roles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
