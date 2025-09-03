# InventoryDrop


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorId** | **string** | A users unique ID, usually in the form of &#x60;usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469&#x60;. Legacy players can have old IDs in the form of &#x60;8JoV9XEdpo&#x60;. The ID can never be changed. | [default to undefined]
**created_at** | **string** |  | [default to undefined]
**dropExpiryDate** | **string** |  | [default to undefined]
**endDropDate** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**notificationDetails** | [**InventoryNotificationDetails**](InventoryNotificationDetails.md) |  | [default to undefined]
**startDropDate** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [default to undefined]
**targetGroup** | **string** |  | [default to undefined]
**templateIds** | **Array&lt;string&gt;** |  | [default to undefined]
**updated_at** | **string** |  | [default to undefined]

## Example

```typescript
import { InventoryDrop } from './api';

const instance: InventoryDrop = {
    authorId,
    created_at,
    dropExpiryDate,
    endDropDate,
    id,
    name,
    notificationDetails,
    startDropDate,
    status,
    tags,
    targetGroup,
    templateIds,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
