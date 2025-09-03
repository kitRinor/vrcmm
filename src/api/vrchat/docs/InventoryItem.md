# InventoryItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collections** | **Array&lt;string&gt;** |  | [default to undefined]
**created_at** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**expiryDate** | **string** |  | [default to undefined]
**flags** | **Array&lt;string&gt;** |  | [default to undefined]
**holderId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]
**id** | **string** |  | [default to undefined]
**imageUrl** | **string** |  | [default to undefined]
**isArchived** | **boolean** |  | [default to undefined]
**isSeen** | **boolean** |  | [default to undefined]
**itemType** | [**InventoryItemType**](InventoryItemType.md) |  | [default to undefined]
**itemTypeLabel** | **string** |  | [default to undefined]
**metadata** | [**InventoryMetadata**](InventoryMetadata.md) |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [default to undefined]
**templateId** | **string** |  | [default to undefined]
**template_created_at** | **string** |  | [default to undefined]
**template_updated_at** | **string** |  | [default to undefined]
**updated_at** | **string** |  | [default to undefined]

## Example

```typescript
import { InventoryItem } from './api';

const instance: InventoryItem = {
    collections,
    created_at,
    description,
    expiryDate,
    flags,
    holderId,
    id,
    imageUrl,
    isArchived,
    isSeen,
    itemType,
    itemTypeLabel,
    metadata,
    name,
    tags,
    templateId,
    template_created_at,
    template_updated_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
