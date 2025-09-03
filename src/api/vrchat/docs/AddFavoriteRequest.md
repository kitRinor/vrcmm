# AddFavoriteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**FavoriteType**](FavoriteType.md) |  | [default to undefined]
**favoriteId** | **string** | Must be either AvatarID, WorldID or UserID. | [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags indicate which group this favorite belongs to. Adding multiple groups makes it show up in all. Removing it from one in that case removes it from all. | [default to undefined]

## Example

```typescript
import { AddFavoriteRequest } from './api';

const instance: AddFavoriteRequest = {
    type,
    favoriteId,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
