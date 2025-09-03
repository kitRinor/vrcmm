# License


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forId** | **string** | Either a AvatarID, LicenseGroupID, PermissionID or ProductID. This depends on the &#x60;forType&#x60; field. | [default to undefined]
**forType** | [**LicenseType**](LicenseType.md) |  | [default to undefined]
**forName** | **string** |  | [default to undefined]
**forAction** | [**LicenseAction**](LicenseAction.md) |  | [default to undefined]

## Example

```typescript
import { License } from './api';

const instance: License = {
    forId,
    forType,
    forName,
    forAction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
