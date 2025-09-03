# InventoryTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]
**collections** | **Array&lt;string&gt;** |  | [default to undefined]
**created_at** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**flags** | **Array&lt;string&gt;** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**imageUrl** | **string** |  | [default to undefined]
**itemType** | [**InventoryItemType**](InventoryItemType.md) |  | [default to undefined]
**itemTypeLabel** | **string** |  | [default to undefined]
**metadata** | [**InventoryMetadata**](InventoryMetadata.md) |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**notificationDetails** | [**InventoryNotificationDetails**](InventoryNotificationDetails.md) |  | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [default to undefined]
**updated_at** | **string** |  | [default to undefined]

## Example

```typescript
import { InventoryTemplate } from './api';

const instance: InventoryTemplate = {
    authorId,
    collections,
    created_at,
    description,
    flags,
    id,
    imageUrl,
    itemType,
    itemTypeLabel,
    metadata,
    name,
    notificationDetails,
    status,
    tags,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
