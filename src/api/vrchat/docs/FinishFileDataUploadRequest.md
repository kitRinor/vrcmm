# FinishFileDataUploadRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etags** | **Set&lt;string&gt;** | Array of ETags uploaded. | [optional] [default to undefined]
**nextPartNumber** | **string** | Always a zero in string form, despite how many parts uploaded. | [default to '0']
**maxParts** | **string** | Always a zero in string form, despite how many parts uploaded. | [default to '0']

## Example

```typescript
import { FinishFileDataUploadRequest } from './api';

const instance: FinishFileDataUploadRequest = {
    etags,
    nextPartNumber,
    maxParts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
