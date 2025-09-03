# EconomyApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getBalance**](#getbalance) | **GET** /user/{userId}/balance | Get Balance|
|[**getCurrentSubscriptions**](#getcurrentsubscriptions) | **GET** /auth/user/subscription | Get Current Subscriptions|
|[**getLicenseGroup**](#getlicensegroup) | **GET** /licenseGroups/{licenseGroupId} | Get License Group|
|[**getProductListing**](#getproductlisting) | **GET** /listing/{productId} | Get Product Listing|
|[**getProductListings**](#getproductlistings) | **GET** /user/{userId}/listings | Get User Product Listings|
|[**getSteamTransaction**](#getsteamtransaction) | **GET** /Steam/transactions/{transactionId} | Get Steam Transaction|
|[**getSteamTransactions**](#getsteamtransactions) | **GET** /Steam/transactions | List Steam Transactions|
|[**getSubscriptions**](#getsubscriptions) | **GET** /subscriptions | List Subscriptions|
|[**getTiliaStatus**](#gettiliastatus) | **GET** /tilia/status | Get Tilia Status|
|[**getTiliaTos**](#gettiliatos) | **GET** /user/{userId}/tilia/tos | Get Tilia TOS Agreement Status|
|[**getTokenBundles**](#gettokenbundles) | **GET** /tokenBundles | List Token Bundles|

# **getBalance**
> Balance getBalance()

Gets the balance of a user

### Example

```typescript
import {
    EconomyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EconomyApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.getBalance(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**Balance**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Balance object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCurrentSubscriptions**
> Array<UserSubscription> getCurrentSubscriptions()

Get a list of all current user subscriptions.

### Example

```typescript
import {
    EconomyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EconomyApi(configuration);

const { status, data } = await apiInstance.getCurrentSubscriptions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<UserSubscription>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of UserSubscription objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLicenseGroup**
> LicenseGroup getLicenseGroup()

Get a single License Group by given ID.

### Example

```typescript
import {
    EconomyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EconomyApi(configuration);

let licenseGroupId: string; //Must be a valid license group ID. (default to undefined)

const { status, data } = await apiInstance.getLicenseGroup(
    licenseGroupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **licenseGroupId** | [**string**] | Must be a valid license group ID. | defaults to undefined|


### Return type

**LicenseGroup**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single LicenseGroup object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProductListing**
> ProductListing getProductListing()

Gets a product listing

### Example

```typescript
import {
    EconomyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EconomyApi(configuration);

let productId: string; //Must be a valid product ID. (default to undefined)
let hydrate: boolean; //Populates some fields and changes types of others for certain objects. (optional) (default to undefined)

const { status, data } = await apiInstance.getProductListing(
    productId,
    hydrate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | Must be a valid product ID. | defaults to undefined|
| **hydrate** | [**boolean**] | Populates some fields and changes types of others for certain objects. | (optional) defaults to undefined|


### Return type

**ProductListing**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single ProductListing object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProductListings**
> Array<ProductListing> getProductListings()

Gets the product listings of a given user

### Example

```typescript
import {
    EconomyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EconomyApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)
let hydrate: boolean; //Populates some fields and changes types of others for certain objects. (optional) (default to undefined)
let groupId: string; //Must be a valid group ID. (optional) (default to undefined)
let active: boolean; //Filter for users\' listings and inventory bundles. (optional) (default to undefined)

const { status, data } = await apiInstance.getProductListings(
    userId,
    n,
    offset,
    hydrate,
    groupId,
    active
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|
| **hydrate** | [**boolean**] | Populates some fields and changes types of others for certain objects. | (optional) defaults to undefined|
| **groupId** | [**string**] | Must be a valid group ID. | (optional) defaults to undefined|
| **active** | [**boolean**] | Filter for users\&#39; listings and inventory bundles. | (optional) defaults to undefined|


### Return type

**Array<ProductListing>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of ProductListing objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSteamTransaction**
> Transaction getSteamTransaction()

Get a single Steam transactions by ID. This returns the exact same information as `getSteamTransactions`, so no point in using this endpoint.

### Example

```typescript
import {
    EconomyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EconomyApi(configuration);

let transactionId: string; //Must be a valid transaction ID. (default to undefined)

const { status, data } = await apiInstance.getSteamTransaction(
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionId** | [**string**] | Must be a valid transaction ID. | defaults to undefined|


### Return type

**Transaction**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single Transaction object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSteamTransactions**
> Array<Transaction> getSteamTransactions()

Get all own Steam transactions.

### Example

```typescript
import {
    EconomyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EconomyApi(configuration);

const { status, data } = await apiInstance.getSteamTransactions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Transaction>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of Transaction objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSubscriptions**
> Array<Subscription> getSubscriptions()

List all existing Subscriptions. For example, \"vrchatplus-monthly\" and \"vrchatplus-yearly\".

### Example

```typescript
import {
    EconomyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EconomyApi(configuration);

const { status, data } = await apiInstance.getSubscriptions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Subscription>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of Subscription objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTiliaStatus**
> TiliaStatus getTiliaStatus()

Gets the status of Tilia integration

### Example

```typescript
import {
    EconomyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EconomyApi(configuration);

const { status, data } = await apiInstance.getTiliaStatus();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TiliaStatus**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single TiliaStatus object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTiliaTos**
> TiliaTOS getTiliaTos()

Gets the status of the agreement of a user to the Tilia TOS

### Example

```typescript
import {
    EconomyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EconomyApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.getTiliaTos(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**TiliaTOS**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single TiliaTOS object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTokenBundles**
> Array<TokenBundle> getTokenBundles()

Gets the list of token bundles

### Example

```typescript
import {
    EconomyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EconomyApi(configuration);

const { status, data } = await apiInstance.getTokenBundles();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<TokenBundle>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of TokenBundle objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

