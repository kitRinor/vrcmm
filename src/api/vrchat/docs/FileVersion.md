# FileVersion



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** |  | [default to undefined]
**deleted** | **boolean** | Usually only present if &#x60;true&#x60; | [optional] [default to true]
**delta** | [**FileData**](FileData.md) |  | [optional] [default to undefined]
**file** | [**FileData**](FileData.md) |  | [optional] [default to undefined]
**signature** | [**FileData**](FileData.md) |  | [optional] [default to undefined]
**status** | [**FileStatus**](FileStatus.md) |  | [default to undefined]
**version** | **number** | Incremental version counter, can only be increased. | [default to 0]

## Example

```typescript
import { FileVersion } from './api';

const instance: FileVersion = {
    created_at,
    deleted,
    delta,
    file,
    signature,
    status,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
