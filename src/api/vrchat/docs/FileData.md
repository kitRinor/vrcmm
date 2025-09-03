# FileData



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **string** |  | [default to CategoryEnum_Queued]
**fileName** | **string** |  | [default to undefined]
**md5** | **string** |  | [optional] [default to undefined]
**sizeInBytes** | **number** |  | [default to undefined]
**status** | [**FileStatus**](FileStatus.md) |  | [default to undefined]
**uploadId** | **string** |  | [default to '']
**url** | **string** |  | [default to undefined]

## Example

```typescript
import { FileData } from './api';

const instance: FileData = {
    category,
    fileName,
    md5,
    sizeInBytes,
    status,
    uploadId,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
