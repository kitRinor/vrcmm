# ModelFile



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**animationStyle** | **string** |  | [optional] [default to undefined]
**maskTag** | **string** |  | [optional] [default to undefined]
**extension** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**mimeType** | [**MIMEType**](MIMEType.md) |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**ownerId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]
**tags** | **Array&lt;string&gt;** |   | [default to undefined]
**versions** | [**Set&lt;FileVersion&gt;**](FileVersion.md) |   | [default to undefined]

## Example

```typescript
import { ModelFile } from './api';

const instance: ModelFile = {
    animationStyle,
    maskTag,
    extension,
    id,
    mimeType,
    name,
    ownerId,
    tags,
    versions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
