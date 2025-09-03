# APIConfigConstantsGROUPS

Group-related constants

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CAPACITY** | **number** | Maximum group capacity | [optional] [default to 100000]
**GROUP_TRANSFER_REQUIREMENTS** | **Array&lt;string&gt;** | Requirements for transferring group ownership | [optional] [default to undefined]
**MAX_INVITES_REQUESTS** | **number** | Maximum number of invite requests | [optional] [default to 50]
**MAX_JOINED** | **number** | Maximum number of joined groups | [optional] [default to 100]
**MAX_JOINED_PLUS** | **number** | Maximum number of joined groups for VRChat Plus members | [optional] [default to 200]
**MAX_LANGUAGES** | **number** | Maximum number of supported languages | [optional] [default to 10]
**MAX_LINKS** | **number** | Maximum number of group links | [optional] [default to 3]
**MAX_MANAGEMENT_ROLES** | **number** | Maximum number of management roles in a group | [optional] [default to 5]
**MAX_OWNED** | **number** | Maximum number of groups a user can own | [optional] [default to 5]
**MAX_ROLES** | **number** | Maximum number of roles in a group | [optional] [default to 50]

## Example

```typescript
import { APIConfigConstantsGROUPS } from './api';

const instance: APIConfigConstantsGROUPS = {
    CAPACITY,
    GROUP_TRANSFER_REQUIREMENTS,
    MAX_INVITES_REQUESTS,
    MAX_JOINED,
    MAX_JOINED_PLUS,
    MAX_LANGUAGES,
    MAX_LINKS,
    MAX_MANAGEMENT_ROLES,
    MAX_OWNED,
    MAX_ROLES,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
