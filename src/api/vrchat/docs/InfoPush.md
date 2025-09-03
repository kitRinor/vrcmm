# InfoPush



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**isEnabled** | **boolean** |  | [default to true]
**releaseStatus** | [**ReleaseStatus**](ReleaseStatus.md) |  | [default to undefined]
**priority** | **number** |  | [default to undefined]
**tags** | **Array&lt;string&gt;** |   | [default to undefined]
**data** | [**InfoPushData**](InfoPushData.md) |  | [default to undefined]
**hash** | **string** | Unknown usage, MD5 | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**startDate** | **string** |  | [optional] [default to undefined]
**endDate** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { InfoPush } from './api';

const instance: InfoPush = {
    id,
    isEnabled,
    releaseStatus,
    priority,
    tags,
    data,
    hash,
    createdAt,
    updatedAt,
    startDate,
    endDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
