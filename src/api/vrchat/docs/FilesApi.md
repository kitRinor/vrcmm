# FilesApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createFile**](#createfile) | **POST** /file | Create File|
|[**createFileVersion**](#createfileversion) | **POST** /file/{fileId} | Create File Version|
|[**deleteFile**](#deletefile) | **DELETE** /file/{fileId} | Delete File|
|[**deleteFileVersion**](#deletefileversion) | **DELETE** /file/{fileId}/{versionId} | Delete File Version|
|[**downloadFileVersion**](#downloadfileversion) | **GET** /file/{fileId}/{versionId} | Download File Version|
|[**finishFileDataUpload**](#finishfiledataupload) | **PUT** /file/{fileId}/{versionId}/{fileType}/finish | Finish FileData Upload|
|[**getAdminAssetBundle**](#getadminassetbundle) | **GET** /adminassetbundles/{adminAssetBundleId} | Get AdminAssetBundle|
|[**getFile**](#getfile) | **GET** /file/{fileId} | Show File|
|[**getFileAnalysis**](#getfileanalysis) | **GET** /analysis/{fileId}/{versionId} | Get File Version Analysis|
|[**getFileAnalysisSecurity**](#getfileanalysissecurity) | **GET** /analysis/{fileId}/{versionId}/security | Get File Version Analysis Security|
|[**getFileAnalysisStandard**](#getfileanalysisstandard) | **GET** /analysis/{fileId}/{versionId}/standard | Get File Version Analysis Standard|
|[**getFileDataUploadStatus**](#getfiledatauploadstatus) | **GET** /file/{fileId}/{versionId}/{fileType}/status | Check FileData Upload Status|
|[**getFiles**](#getfiles) | **GET** /files | List Files|
|[**startFileDataUpload**](#startfiledataupload) | **PUT** /file/{fileId}/{versionId}/{fileType}/start | Start FileData Upload|
|[**uploadGalleryImage**](#uploadgalleryimage) | **POST** /gallery | Upload gallery image|
|[**uploadIcon**](#uploadicon) | **POST** /icon | Upload icon|
|[**uploadImage**](#uploadimage) | **POST** /file/image | Upload gallery image, icon, emoji or sticker|

# **createFile**
> any createFile()

Creates a new File object

### Example

```typescript
import {
    FilesApi,
    Configuration,
    CreateFileRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let createFileRequest: CreateFileRequest; // (optional)

const { status, data } = await apiInstance.createFile(
    createFileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFileRequest** | **CreateFileRequest**|  | |


### Return type

**any**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single File object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFileVersion**
> any createFileVersion()

Creates a new FileVersion. Once a Version has been created, proceed to the `/file/{fileId}/{versionId}/file/start` endpoint to start a file upload.

### Example

```typescript
import {
    FilesApi,
    Configuration,
    CreateFileVersionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; //Must be a valid file ID. (default to undefined)
let createFileVersionRequest: CreateFileVersionRequest; // (optional)

const { status, data } = await apiInstance.createFileVersion(
    fileId,
    createFileVersionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFileVersionRequest** | **CreateFileVersionRequest**|  | |
| **fileId** | [**string**] | Must be a valid file ID. | defaults to undefined|


### Return type

**any**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single File object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFile**
> any deleteFile()

Deletes a File object.

### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; //Must be a valid file ID. (default to undefined)

const { status, data } = await apiInstance.deleteFile(
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | Must be a valid file ID. | defaults to undefined|


### Return type

**any**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single File object. |  -  |
|**404** | Error response when trying to delete a non-existent file. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFileVersion**
> any deleteFileVersion()

Delete a specific version of a file. You can only delete the latest version.

### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; //Must be a valid file ID. (default to undefined)
let versionId: number; //Version ID of the asset. (default to undefined)

const { status, data } = await apiInstance.deleteFileVersion(
    fileId,
    versionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | Must be a valid file ID. | defaults to undefined|
| **versionId** | [**number**] | Version ID of the asset. | defaults to undefined|


### Return type

**any**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single File object. |  -  |
|**400** | Error response when trying to delete the initial version of a file. Delete the main File object instead. |  -  |
|**500** | Error response when trying to delete any version of a file that is not the last one. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadFileVersion**
> File downloadFileVersion()

Downloads the file with the provided version number.  **Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.  **Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the `extension` field when neccesary.

### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; //Must be a valid file ID. (default to undefined)
let versionId: number; //Version ID of the asset. (default to undefined)

const { status, data } = await apiInstance.downloadFileVersion(
    fileId,
    versionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | Must be a valid file ID. | defaults to undefined|
| **versionId** | [**number**] | Version ID of the asset. | defaults to undefined|


### Return type

**File**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Raw file |  -  |
|**404** | Error response when trying to show information about a non-existent file. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **finishFileDataUpload**
> any finishFileDataUpload()

Finish an upload of a FileData. This will mark it as \"complete\". After uploading the `file` for Avatars and Worlds you then have to upload a `signature` file.

### Example

```typescript
import {
    FilesApi,
    Configuration,
    FinishFileDataUploadRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; //Must be a valid file ID. (default to undefined)
let versionId: number; //Version ID of the asset. (default to undefined)
let fileType: 'file' | 'signature' | 'delta'; //Type of file. (default to undefined)
let finishFileDataUploadRequest: FinishFileDataUploadRequest; //Please see documentation on ETag\'s: [https://teppen.io/2018/06/23/aws_s3_etags/](https://teppen.io/2018/06/23/aws_s3_etags/)  ETag\'s should NOT be present when uploading a `signature`. (optional)

const { status, data } = await apiInstance.finishFileDataUpload(
    fileId,
    versionId,
    fileType,
    finishFileDataUploadRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **finishFileDataUploadRequest** | **FinishFileDataUploadRequest**| Please see documentation on ETag\&#39;s: [https://teppen.io/2018/06/23/aws_s3_etags/](https://teppen.io/2018/06/23/aws_s3_etags/)  ETag\&#39;s should NOT be present when uploading a &#x60;signature&#x60;. | |
| **fileId** | [**string**] | Must be a valid file ID. | defaults to undefined|
| **versionId** | [**number**] | Version ID of the asset. | defaults to undefined|
| **fileType** | [**&#39;file&#39; | &#39;signature&#39; | &#39;delta&#39;**]**Array<&#39;file&#39; &#124; &#39;signature&#39; &#124; &#39;delta&#39;>** | Type of file. | defaults to undefined|


### Return type

**any**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single File object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAdminAssetBundle**
> AdminAssetBundle getAdminAssetBundle()

Returns an AdminAssetBundle

### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let adminAssetBundleId: string; //Must be a valid admin asset bundle ID. (default to undefined)

const { status, data } = await apiInstance.getAdminAssetBundle(
    adminAssetBundleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminAssetBundleId** | [**string**] | Must be a valid admin asset bundle ID. | defaults to undefined|


### Return type

**AdminAssetBundle**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single AdminAssetBundle object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFile**
> any getFile()

Shows general information about the \"File\" object. Each File can have several \"Version\"\'s, and each Version can have multiple real files or \"Data\" blobs.

### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; //Must be a valid file ID. (default to undefined)

const { status, data } = await apiInstance.getFile(
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | Must be a valid file ID. | defaults to undefined|


### Return type

**any**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single File object. |  -  |
|**404** | Error response when trying to show information about a non-existent file. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileAnalysis**
> FileAnalysis getFileAnalysis()

Get the performance analysis for the uploaded assets of an avatar

### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; //Must be a valid file ID. (default to undefined)
let versionId: number; //Version ID of the asset. (default to undefined)

const { status, data } = await apiInstance.getFileAnalysis(
    fileId,
    versionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | Must be a valid file ID. | defaults to undefined|
| **versionId** | [**number**] | Version ID of the asset. | defaults to undefined|


### Return type

**FileAnalysis**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single FileAnalysis object. |  -  |
|**202** | Error response when requesting file Analysis that is not yet available. |  -  |
|**404** | Error response when trying to show information about a non-existent file. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileAnalysisSecurity**
> FileAnalysis getFileAnalysisSecurity()

Get the security performance analysis for the uploaded assets of an avatar

### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; //Must be a valid file ID. (default to undefined)
let versionId: number; //Version ID of the asset. (default to undefined)

const { status, data } = await apiInstance.getFileAnalysisSecurity(
    fileId,
    versionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | Must be a valid file ID. | defaults to undefined|
| **versionId** | [**number**] | Version ID of the asset. | defaults to undefined|


### Return type

**FileAnalysis**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single FileAnalysis object. |  -  |
|**202** | Error response when requesting file Analysis that is not yet available. |  -  |
|**404** | Error response when trying to show information about a non-existent file. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileAnalysisStandard**
> FileAnalysis getFileAnalysisStandard()

Get the standard performance analysis for the uploaded assets of an avatar

### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; //Must be a valid file ID. (default to undefined)
let versionId: number; //Version ID of the asset. (default to undefined)

const { status, data } = await apiInstance.getFileAnalysisStandard(
    fileId,
    versionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | Must be a valid file ID. | defaults to undefined|
| **versionId** | [**number**] | Version ID of the asset. | defaults to undefined|


### Return type

**FileAnalysis**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single FileAnalysis object. |  -  |
|**202** | Error response when requesting file Analysis that is not yet available. |  -  |
|**404** | Error response when trying to show information about a non-existent file. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileDataUploadStatus**
> FileVersionUploadStatus getFileDataUploadStatus()

Retrieves the upload status for file upload. Can currently only be accessed when `status` is `waiting`. Trying to access it on a file version already uploaded currently times out.

### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; //Must be a valid file ID. (default to undefined)
let versionId: number; //Version ID of the asset. (default to undefined)
let fileType: 'file' | 'signature' | 'delta'; //Type of file. (default to undefined)

const { status, data } = await apiInstance.getFileDataUploadStatus(
    fileId,
    versionId,
    fileType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | Must be a valid file ID. | defaults to undefined|
| **versionId** | [**number**] | Version ID of the asset. | defaults to undefined|
| **fileType** | [**&#39;file&#39; | &#39;signature&#39; | &#39;delta&#39;**]**Array<&#39;file&#39; &#124; &#39;signature&#39; &#124; &#39;delta&#39;>** | Type of file. | defaults to undefined|


### Return type

**FileVersionUploadStatus**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Current FileVersion upload status. Contains the uploadId needed for uploading, as well as the already uploaded parts. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFiles**
> Array<any> getFiles()

Returns a list of files

### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let tag: string; //Tag, for example \"icon\" or \"gallery\", not included by default. (optional) (default to undefined)
let userId: string; //UserID, will always generate a 500 permission error. (optional) (default to undefined)
let n: number; //The number of objects to return. (optional) (default to 60)
let offset: number; //A zero-based offset from the default object sorting from where search results start. (optional) (default to undefined)

const { status, data } = await apiInstance.getFiles(
    tag,
    userId,
    n,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tag** | [**string**] | Tag, for example \&quot;icon\&quot; or \&quot;gallery\&quot;, not included by default. | (optional) defaults to undefined|
| **userId** | [**string**] | UserID, will always generate a 500 permission error. | (optional) defaults to undefined|
| **n** | [**number**] | The number of objects to return. | (optional) defaults to 60|
| **offset** | [**number**] | A zero-based offset from the default object sorting from where search results start. | (optional) defaults to undefined|


### Return type

**Array<any>**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a list of File objects. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startFileDataUpload**
> FileUploadURL startFileDataUpload()

Starts an upload of a specific FilePart. This endpoint will return an AWS URL which you can PUT data to. You need to call this and receive a new AWS API URL for each `partNumber`. Please see AWS\'s REST documentation on \"PUT Object to S3\" on how to upload. Once all parts has been uploaded, proceed to `/finish` endpoint.  **Note:** `nextPartNumber` seems like it is always ignored. Despite it returning 0, first partNumber is always 1.

### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; //Must be a valid file ID. (default to undefined)
let versionId: number; //Version ID of the asset. (default to undefined)
let fileType: 'file' | 'signature' | 'delta'; //Type of file. (default to undefined)
let partNumber: number; //The part number to start uploading. If not provided, the first part will be started. (optional) (default to undefined)

const { status, data } = await apiInstance.startFileDataUpload(
    fileId,
    versionId,
    fileType,
    partNumber
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | Must be a valid file ID. | defaults to undefined|
| **versionId** | [**number**] | Version ID of the asset. | defaults to undefined|
| **fileType** | [**&#39;file&#39; | &#39;signature&#39; | &#39;delta&#39;**]**Array<&#39;file&#39; &#124; &#39;signature&#39; &#124; &#39;delta&#39;>** | Type of file. | defaults to undefined|
| **partNumber** | [**number**] | The part number to start uploading. If not provided, the first part will be started. | (optional) defaults to undefined|


### Return type

**FileUploadURL**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | See [https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html](AWS REST docs - PUT Object) |  -  |
|**400** | Error response when trying to start an upload against a FileVersion that is already marked as  &#x60;complete&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadGalleryImage**
> any uploadGalleryImage()

Upload a gallery image

### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let file: File; //The binary blob of the png file. (default to undefined)

const { status, data } = await apiInstance.uploadGalleryImage(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] | The binary blob of the png file. | defaults to undefined|


### Return type

**any**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single File object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadIcon**
> any uploadIcon()

Upload an icon

### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let file: File; //The binary blob of the png file. (default to undefined)

const { status, data } = await apiInstance.uploadIcon(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] | The binary blob of the png file. | defaults to undefined|


### Return type

**any**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single File object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadImage**
> any uploadImage()

Upload an image, which can be an icon, gallery image, sticker or emoji

### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let file: File; //The binary blob of the png file. (default to undefined)
let tag: string; //Needs to be either icon, gallery, sticker, emoji, or emojianimated (default to undefined)
let frames: number; //Required for emojianimated. Total number of frames to be animated (2-64) (optional) (default to undefined)
let framesOverTime: number; //Required for emojianimated. Animation frames per second (1-64) (optional) (default to undefined)
let animationStyle: string; //Animation style for sticker, required for emoji. (optional) (default to undefined)
let maskTag: string; //Mask of the sticker, optional for emoji. (optional) (default to undefined)

const { status, data } = await apiInstance.uploadImage(
    file,
    tag,
    frames,
    framesOverTime,
    animationStyle,
    maskTag
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] | The binary blob of the png file. | defaults to undefined|
| **tag** | [**string**] | Needs to be either icon, gallery, sticker, emoji, or emojianimated | defaults to undefined|
| **frames** | [**number**] | Required for emojianimated. Total number of frames to be animated (2-64) | (optional) defaults to undefined|
| **framesOverTime** | [**number**] | Required for emojianimated. Animation frames per second (1-64) | (optional) defaults to undefined|
| **animationStyle** | [**string**] | Animation style for sticker, required for emoji. | (optional) defaults to undefined|
| **maskTag** | [**string**] | Mask of the sticker, optional for emoji. | (optional) defaults to undefined|


### Return type

**any**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a single File object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

