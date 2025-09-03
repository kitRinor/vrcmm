# Instance

* `hidden` field is only present if InstanceType is `hidden` aka \"Friends+\", and is instance creator. * `friends` field is only present if InstanceType is `friends` aka \"Friends\", and is instance creator. * `private` field is only present if InstanceType is `private` aka \"Invite\" or \"Invite+\", and is instance creator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** |  | [default to true]
**ageGate** | **boolean** |  | [optional] [default to undefined]
**canRequestInvite** | **boolean** |  | [default to true]
**capacity** | **number** |  | [default to undefined]
**clientNumber** | **string** | Always returns \&quot;unknown\&quot;. | [default to undefined]
**contentSettings** | [**InstanceContentSettings**](InstanceContentSettings.md) |  | [default to undefined]
**displayName** | **string** |  | [default to undefined]
**full** | **boolean** |  | [default to false]
**gameServerVersion** | **number** |  | [optional] [default to undefined]
**id** | **string** | InstanceID can be \&quot;offline\&quot; on User profiles if you are not friends with that user and \&quot;private\&quot; if you are friends and user is in private instance. | [default to undefined]
**instanceId** | **string** |  | [default to undefined]
**instancePersistenceEnabled** | **string** |  | [default to undefined]
**location** | **string** | InstanceID can be \&quot;offline\&quot; on User profiles if you are not friends with that user and \&quot;private\&quot; if you are friends and user is in private instance. | [default to undefined]
**n_users** | **number** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**ownerId** | **string** | A groupId if the instance type is \&quot;group\&quot;, null if instance type is public, or a userId otherwise | [optional] [default to undefined]
**permanent** | **boolean** |  | [default to false]
**photonRegion** | [**Region**](Region.md) |  | [default to undefined]
**platforms** | [**InstancePlatforms**](InstancePlatforms.md) |  | [default to undefined]
**playerPersistenceEnabled** | **boolean** |  | [default to undefined]
**region** | [**InstanceRegion**](InstanceRegion.md) |  | [default to undefined]
**secureName** | **string** |  | [default to undefined]
**shortName** | **string** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | The tags array on Instances usually contain the language tags of the people in the instance.  | [default to undefined]
**type** | [**InstanceType**](InstanceType.md) |  | [default to undefined]
**worldId** | **string** | WorldID be \&quot;offline\&quot; on User profiles if you are not friends with that user. | [default to undefined]
**hidden** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**friends** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**_private** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [optional] [default to undefined]
**queueEnabled** | **boolean** |  | [default to undefined]
**queueSize** | **number** |  | [default to undefined]
**recommendedCapacity** | **number** |  | [default to undefined]
**roleRestricted** | **boolean** |  | [optional] [default to undefined]
**strict** | **boolean** |  | [default to undefined]
**userCount** | **number** |  | [default to undefined]
**world** | [**World**](World.md) |  | [default to undefined]
**users** | [**Array&lt;LimitedUserInstance&gt;**](LimitedUserInstance.md) | The users field is present on instances created by the requesting user. | [optional] [default to undefined]
**groupAccessType** | [**GroupAccessType**](GroupAccessType.md) |  | [optional] [default to undefined]
**hasCapacityForYou** | **boolean** |  | [optional] [default to undefined]
**nonce** | **string** |  | [optional] [default to undefined]
**closedAt** | **string** |  | [optional] [default to undefined]
**hardClose** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { Instance } from './api';

const instance: Instance = {
    active,
    ageGate,
    canRequestInvite,
    capacity,
    clientNumber,
    contentSettings,
    displayName,
    full,
    gameServerVersion,
    id,
    instanceId,
    instancePersistenceEnabled,
    location,
    n_users,
    name,
    ownerId,
    permanent,
    photonRegion,
    platforms,
    playerPersistenceEnabled,
    region,
    secureName,
    shortName,
    tags,
    type,
    worldId,
    hidden,
    friends,
    _private,
    queueEnabled,
    queueSize,
    recommendedCapacity,
    roleRestricted,
    strict,
    userCount,
    world,
    users,
    groupAccessType,
    hasCapacityForYou,
    nonce,
    closedAt,
    hardClose,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
