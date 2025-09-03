# CalendarApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createGroupCalendarEvent**](#creategroupcalendarevent) | **POST** /calendar/{groupId}/event | Create a calendar event|
|[**deleteGroupCalendarEvent**](#deletegroupcalendarevent) | **DELETE** /calendar/{groupId}/{calendarId} | Delete a calendar event|
|[**followGroupCalendarEvent**](#followgroupcalendarevent) | **POST** /calendar/{groupId}/{calendarId}/follow | Follow a calendar event|
|[**getCalendarEvents**](#getcalendarevents) | **GET** /calendar | List calendar events|
|[**getFeaturedCalendarEvents**](#getfeaturedcalendarevents) | **GET** /calendar/featured | List featured calendar events|
|[**getFollowedCalendarEvents**](#getfollowedcalendarevents) | **GET** /calendar/following | List followed calendar events|
|[**getGroupCalendarEvent**](#getgroupcalendarevent) | **GET** /calendar/{groupId}/{calendarId} | Get a calendar event|
|[**getGroupCalendarEventICS**](#getgroupcalendareventics) | **GET** /calendar/{groupId}/{calendarId}.ics | Download calendar event as ICS|
|[**getGroupCalendarEvents**](#getgroupcalendarevents) | **GET** /calendar/{groupId} | List a group\&#39;s calendar events|
|[**updateGroupCalendarEvent**](#updategroupcalendarevent) | **PUT** /calendar/{groupId}/{calendarId}/event | Update a calendar event|

# **createGroupCalendarEvent**
> CalendarEvent createGroupCalendarEvent(createCalendarEventRequest)

Creates an event for a group on the calendar

### Example

```typescript
import {
    CalendarApi,
    Configuration,
    CreateCalendarEventRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let createCalendarEventRequest: CreateCalendarEventRequest; //

const { status, data } = await apiInstance.createGroupCalendarEvent(
    groupId,
    createCalendarEventRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCalendarEventRequest** | **CreateCalendarEventRequest**|  | |
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|


### Return type

**CalendarEvent**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single CalendarEvent object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGroupCalendarEvent**
> Success deleteGroupCalendarEvent()

Delete a group calendar event

### Example

```typescript
import {
    CalendarApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let calendarId: string; //Must be a valid calendar ID. (default to undefined)

const { status, data } = await apiInstance.deleteGroupCalendarEvent(
    groupId,
    calendarId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **calendarId** | [**string**] | Must be a valid calendar ID. | defaults to undefined|


### Return type

**Success**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response after deleting a calendar event. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followGroupCalendarEvent**
> CalendarEvent followGroupCalendarEvent(followCalendarEventRequest)

Follow or unfollow an event on a group\'s calendar

### Example

```typescript
import {
    CalendarApi,
    Configuration,
    FollowCalendarEventRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let calendarId: string; //Must be a valid calendar ID. (default to undefined)
let followCalendarEventRequest: FollowCalendarEventRequest; //

const { status, data } = await apiInstance.followGroupCalendarEvent(
    groupId,
    calendarId,
    followCalendarEventRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **followCalendarEventRequest** | **FollowCalendarEventRequest**|  | |
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **calendarId** | [**string**] | Must be a valid calendar ID. | defaults to undefined|


### Return type

**CalendarEvent**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single CalendarEvent object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCalendarEvents**
> PaginatedCalendarEventList getCalendarEvents()

Get a list of a user\'s calendar events for the month in ?date

### Example

```typescript
import {
    CalendarApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let date: string; //The month to search in. (optional) (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)

const { status, data } = await apiInstance.getCalendarEvents(
    date,
    n,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | The month to search in. | (optional) defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|


### Return type

**PaginatedCalendarEventList**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of CalendarEvent objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFeaturedCalendarEvents**
> PaginatedCalendarEventList getFeaturedCalendarEvents()

Get a list of a featured calendar events for the month in ?date

### Example

```typescript
import {
    CalendarApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let date: string; //The month to search in. (optional) (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)

const { status, data } = await apiInstance.getFeaturedCalendarEvents(
    date,
    n,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | The month to search in. | (optional) defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|


### Return type

**PaginatedCalendarEventList**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of CalendarEvent objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFollowedCalendarEvents**
> PaginatedCalendarEventList getFollowedCalendarEvents()

Get a list of a followed calendar events for the month in ?date

### Example

```typescript
import {
    CalendarApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let date: string; //The month to search in. (optional) (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)

const { status, data } = await apiInstance.getFollowedCalendarEvents(
    date,
    n,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | The month to search in. | (optional) defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|


### Return type

**PaginatedCalendarEventList**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of CalendarEvent objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupCalendarEvent**
> CalendarEvent getGroupCalendarEvent()

Get a group calendar event

### Example

```typescript
import {
    CalendarApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let calendarId: string; //Must be a valid calendar ID. (default to undefined)

const { status, data } = await apiInstance.getGroupCalendarEvent(
    groupId,
    calendarId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **calendarId** | [**string**] | Must be a valid calendar ID. | defaults to undefined|


### Return type

**CalendarEvent**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single CalendarEvent object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupCalendarEventICS**
> File getGroupCalendarEventICS()

Returns the specified calendar in iCalendar (ICS) format.

### Example

```typescript
import {
    CalendarApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let calendarId: string; //Must be a valid calendar ID. (default to undefined)

const { status, data } = await apiInstance.getGroupCalendarEventICS(
    groupId,
    calendarId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **calendarId** | [**string**] | Must be a valid calendar ID. | defaults to undefined|


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/calendar, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | iCalendar file download |  -  |
|**401** | Error response due to missing auth cookie. |  -  |
|**404** | Error response when trying to download ICS calendar of a non-existent calendar entry. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupCalendarEvents**
> PaginatedCalendarEventList getGroupCalendarEvents()

Get a list of a group\'s calendar events

### Example

```typescript
import {
    CalendarApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let date: string; //The month to search in. (optional) (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupCalendarEvents(
    groupId,
    date,
    n,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **date** | [**string**] | The month to search in. | (optional) defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|


### Return type

**PaginatedCalendarEventList**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of CalendarEvent objects. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGroupCalendarEvent**
> CalendarEvent updateGroupCalendarEvent(updateCalendarEventRequest)

Updates an event for a group on the calendar

### Example

```typescript
import {
    CalendarApi,
    Configuration,
    UpdateCalendarEventRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let groupId: string; //Must be a valid group ID. (default to undefined)
let calendarId: string; //Must be a valid calendar ID. (default to undefined)
let updateCalendarEventRequest: UpdateCalendarEventRequest; //

const { status, data } = await apiInstance.updateGroupCalendarEvent(
    groupId,
    calendarId,
    updateCalendarEventRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCalendarEventRequest** | **UpdateCalendarEventRequest**|  | |
| **groupId** | [**string**] | Must be a valid group ID. | defaults to undefined|
| **calendarId** | [**string**] | Must be a valid calendar ID. | defaults to undefined|


### Return type

**CalendarEvent**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single CalendarEvent object. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

