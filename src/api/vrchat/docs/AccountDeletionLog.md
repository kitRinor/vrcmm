# AccountDeletionLog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | Typically \&quot;Deletion requested\&quot; or \&quot;Deletion canceled\&quot;. Other messages like \&quot;Deletion completed\&quot; may exist, but are these are not possible to see as a regular user. | [optional] [default to 'Deletion requested']
**deletionScheduled** | **string** | When the deletion is scheduled to happen, standard is 14 days after the request. | [optional] [default to undefined]
**dateTime** | **string** | Date and time of the deletion request. | [optional] [default to undefined]

## Example

```typescript
import { AccountDeletionLog } from './api';

const instance: AccountDeletionLog = {
    message,
    deletionScheduled,
    dateTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
