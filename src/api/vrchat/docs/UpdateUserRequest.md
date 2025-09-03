# UpdateUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** |  | [optional] [default to undefined]
**unsubscribe** | **boolean** |  | [optional] [default to undefined]
**birthday** | **string** |  | [optional] [default to undefined]
**acceptedTOSVersion** | **number** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |   | [optional] [default to undefined]
**status** | [**UserStatus**](UserStatus.md) |  | [optional] [default to undefined]
**statusDescription** | **string** |  | [optional] [default to undefined]
**bio** | **string** |  | [optional] [default to undefined]
**bioLinks** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**pronouns** | **string** |  | [optional] [default to undefined]
**isBoopingEnabled** | **boolean** |  | [optional] [default to undefined]
**userIcon** | **string** | MUST be a valid VRChat /file/ url. | [optional] [default to undefined]
**contentFilters** | **Array&lt;string&gt;** | These tags begin with &#x60;content_&#x60; and control content gating | [optional] [default to undefined]
**displayName** | **string** | MUST specify currentPassword as well to change display name | [optional] [default to undefined]
**revertDisplayName** | **boolean** | MUST specify currentPassword as well to revert display name | [optional] [default to undefined]
**password** | **string** | MUST specify currentPassword as well to change password | [optional] [default to undefined]
**currentPassword** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateUserRequest } from './api';

const instance: UpdateUserRequest = {
    email,
    unsubscribe,
    birthday,
    acceptedTOSVersion,
    tags,
    status,
    statusDescription,
    bio,
    bioLinks,
    pronouns,
    isBoopingEnabled,
    userIcon,
    contentFilters,
    displayName,
    revertDisplayName,
    password,
    currentPassword,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
