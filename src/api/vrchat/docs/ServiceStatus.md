# ServiceStatus

Status information for a service request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** |  | [default to undefined]
**id** | **string** | The id of this service, NOT the id of the thing this service was requested for. | [default to undefined]
**progress** | **Array&lt;object&gt;** |  | [default to undefined]
**requesterUserId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]
**state** | **string** |  | [default to undefined]
**subjectId** | **string** | The id of the thing this service was requested for. | [default to undefined]
**subjectType** | **string** | The kind of the thing this service was requested for. | [default to undefined]
**type** | **string** | The kind of service that was requested. | [default to undefined]
**updated_at** | **string** |  | [default to undefined]

## Example

```typescript
import { ServiceStatus } from './api';

const instance: ServiceStatus = {
    created_at,
    id,
    progress,
    requesterUserId,
    state,
    subjectId,
    subjectType,
    type,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
