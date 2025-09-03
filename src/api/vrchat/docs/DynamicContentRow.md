# DynamicContentRow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**platform** | **string** | Usually \&quot;ThisPlatformSupported\&quot;, but can also be other values such as \&quot;all\&quot; or platform specific identifiers. | [default to undefined]
**sortHeading** | **string** |  | [default to undefined]
**sortOrder** | **string** |  | [default to undefined]
**sortOwnership** | **string** |  | [default to undefined]
**tag** | **string** | Tag to filter content for this row. | [optional] [default to undefined]
**type** | **string** | Type is not present if it is a world. | [optional] [default to undefined]

## Example

```typescript
import { DynamicContentRow } from './api';

const instance: DynamicContentRow = {
    index,
    name,
    platform,
    sortHeading,
    sortOrder,
    sortOwnership,
    tag,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
