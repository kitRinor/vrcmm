# PaginatedGroupAuditLogEntryList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**Array&lt;GroupAuditLogEntry&gt;**](GroupAuditLogEntry.md) |   | [optional] [default to undefined]
**totalCount** | **number** | The total number of results that the query would return if there were no pagination. | [optional] [default to undefined]
**hasNext** | **boolean** | Whether there are more results after this page. | [optional] [default to undefined]

## Example

```typescript
import { PaginatedGroupAuditLogEntryList } from './api';

const instance: PaginatedGroupAuditLogEntryList = {
    results,
    totalCount,
    hasNext,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
