# PaginatedCalendarEventList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**Array&lt;CalendarEvent&gt;**](CalendarEvent.md) |   | [optional] [default to undefined]
**totalCount** | **number** | The total number of results that the query would return if there were no pagination. | [optional] [default to undefined]
**hasNext** | **boolean** | Whether there are more results after this page. | [optional] [default to undefined]

## Example

```typescript
import { PaginatedCalendarEventList } from './api';

const instance: PaginatedCalendarEventList = {
    results,
    totalCount,
    hasNext,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
