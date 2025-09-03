# AuthenticationApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelPending2FA**](#cancelpending2fa) | **DELETE** /auth/twofactorauth/totp/pending | Cancel pending enabling of time-based 2FA codes|
|[**checkUserExists**](#checkuserexists) | **GET** /auth/exists | Check User Exists|
|[**confirmEmail**](#confirmemail) | **GET** /auth/confirmEmail | Confirm Email|
|[**deleteUser**](#deleteuser) | **PUT** /users/{userId}/delete | Delete User|
|[**disable2FA**](#disable2fa) | **DELETE** /auth/twofactorauth | Disable 2FA|
|[**enable2FA**](#enable2fa) | **POST** /auth/twofactorauth/totp/pending | Enable time-based 2FA codes|
|[**getCurrentUser**](#getcurrentuser) | **GET** /auth/user | Login and/or Get Current User Info|
|[**getRecoveryCodes**](#getrecoverycodes) | **GET** /auth/user/twofactorauth/otp | Get 2FA Recovery codes|
|[**logout**](#logout) | **PUT** /logout | Logout|
|[**registerUserAccount**](#registeruseraccount) | **POST** /auth/register | Register User Account|
|[**resendEmailConfirmation**](#resendemailconfirmation) | **POST** /auth/user/resendEmail | Resend Email Confirmation|
|[**verify2FA**](#verify2fa) | **POST** /auth/twofactorauth/totp/verify | Verify 2FA code|
|[**verify2FAEmailCode**](#verify2faemailcode) | **POST** /auth/twofactorauth/emailotp/verify | Verify 2FA email code|
|[**verifyAuthToken**](#verifyauthtoken) | **GET** /auth | Verify Auth Token|
|[**verifyLoginPlace**](#verifyloginplace) | **GET** /auth/verifyLoginPlace | Verify Login Place|
|[**verifyPending2FA**](#verifypending2fa) | **POST** /auth/twofactorauth/totp/pending/verify | Verify Pending 2FA code|
|[**verifyRecoveryCode**](#verifyrecoverycode) | **POST** /auth/twofactorauth/otp/verify | Verify 2FA code with Recovery code|

# **cancelPending2FA**
> Disable2FAResult cancelPending2FA()

Cancels the sequence for enabling time-based 2FA.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.cancelPending2FA();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Disable2FAResult**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkUserExists**
> UserExists checkUserExists()

Checks if a user by a given `username`, `displayName` or `email` exist. This is used during registration to check if a username has already been taken, during change of displayName to check if a displayName is available, and during change of email to check if the email is already used. In the later two cases the `excludeUserId` is used to exclude oneself, otherwise the result would always be true.  It is **REQUIRED** to include **AT LEAST** `username`, `displayName` **or** `email` query parameter. Although they can be combined - in addition with `excludeUserId` (generally to exclude yourself) - to further fine-tune the search.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let email: string; //Filter by email. (optional) (default to undefined)
let displayName: string; //Filter by displayName. (optional) (default to undefined)
let username: string; //Filter by Username. (optional) (default to undefined)
let excludeUserId: string; //Exclude by UserID. (optional) (default to undefined)

const { status, data } = await apiInstance.checkUserExists(
    email,
    displayName,
    username,
    excludeUserId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] | Filter by email. | (optional) defaults to undefined|
| **displayName** | [**string**] | Filter by displayName. | (optional) defaults to undefined|
| **username** | [**string**] | Filter by Username. | (optional) defaults to undefined|
| **excludeUserId** | [**string**] | Exclude by UserID. | (optional) defaults to undefined|


### Return type

**UserExists**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a response if a user exists or not. |  -  |
|**400** | Error response when missing at least 1 of the required parameters. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **confirmEmail**
> confirmEmail()

Confirms the email address for a user

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let id: string; //Target user for which to verify email. (default to undefined)
let verifyEmail: string; //Token to verify email. (default to undefined)

const { status, data } = await apiInstance.confirmEmail(
    id,
    verifyEmail
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Target user for which to verify email. | defaults to undefined|
| **verifyEmail** | [**string**] | Token to verify email. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**302** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteUser**
> CurrentUser deleteUser()

Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.  **VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.  **METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let userId: string; //Must be a valid user ID. (default to undefined)

const { status, data } = await apiInstance.deleteUser(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | Must be a valid user ID. | defaults to undefined|


### Return type

**CurrentUser**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disable2FA**
> Disable2FAResult disable2FA()

Disables 2FA for the currently logged in account

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.disable2FA();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Disable2FAResult**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enable2FA**
> Pending2FAResult enable2FA()

Begins the sequence for enabling time-based 2FA.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.enable2FA();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Pending2FAResult**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCurrentUser**
> CurrentUser getCurrentUser()

This endpoint does the following two operations:   1) Checks if you are already logged in by looking for a valid `auth` cookie. If you are have a valid auth cookie then no additional auth-related actions are taken. If you are **not** logged in then it will log you in with the `Authorization` header and set the `auth` cookie. The `auth` cookie will only be sent once.   2) If logged in, this function will also return the CurrentUser object containing detailed information about the currently logged in user.  The auth string after `Authorization: Basic {string}` is a base64-encoded string of the username and password, both individually url-encoded, and then joined with a colon.    > base64(urlencode(username):urlencode(password))  **WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the `auth` cookie if you are often restarting the program. The provided API libraries automatically save cookies during runtime, but does not persist during restart. While it can be fine to use username/password during development, expect in production to very fast run into the rate-limit and be temporarily blocked from making new sessions until older ones expire. The exact number of simultaneous sessions is unknown/undisclosed.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.getCurrentUser();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CurrentUser**

### Authorization

[authHeader](../README.md#authHeader), [twoFactorAuthCookie](../README.md#twoFactorAuthCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Set-Cookie - Successful authentication returns an &#x60;auth&#x60; cookie. <br>  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRecoveryCodes**
> TwoFactorRecoveryCodes getRecoveryCodes()

Gets the OTP (One Time Password) recovery codes for accounts with 2FA-protection enabled.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.getRecoveryCodes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TwoFactorRecoveryCodes**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns the two factor recovery codes |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logout**
> Success logout()

Invalidates the login session.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.logout();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | OK |  * Set-Cookie - Clears the &#x60;auth&#x60; cookie. <br>  * \0Set-Cookie - Clears the &#x60;age&#x60; cookie. <br>  * \0\0Set-Cookie - Clears the &#x60;tos&#x60; cookie. <br>  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerUserAccount**
> CurrentUser registerUserAccount(registerUserAccountRequest)

~~Register a new user account.~~  **DEPRECATED:** Automated creation of accounts has no legitimate public third-party use case, and would be in violation of ToS §13.2: *By using the Platform, you agree not to: i. [...] use the Platform in a manner inconsistent with individual human usage* This endpoint is documented in the interest of completeness

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    RegisterUserAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let registerUserAccountRequest: RegisterUserAccountRequest; //

const { status, data } = await apiInstance.registerUserAccount(
    registerUserAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerUserAccountRequest** | **RegisterUserAccountRequest**|  | |


### Return type

**CurrentUser**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Set-Cookie - Successful authentication returns an &#x60;auth&#x60; cookie. <br>  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resendEmailConfirmation**
> Success resendEmailConfirmation()

Requests a resend of pending email address confirmation email

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.resendEmailConfirmation();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | OK |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify2FA**
> Verify2FAResult verify2FA(twoFactorAuthCode)

Finishes the login sequence with a normal 2FA-generated code for accounts with 2FA-protection enabled.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    TwoFactorAuthCode
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let twoFactorAuthCode: TwoFactorAuthCode; //

const { status, data } = await apiInstance.verify2FA(
    twoFactorAuthCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **twoFactorAuthCode** | **TwoFactorAuthCode**|  | |


### Return type

**Verify2FAResult**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Set-Cookie - Provides a &#x60;twoFactorAuth&#x60; cookie, which can be used to bypasses the 2FA requirement for future logins on the same device. <br>  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify2FAEmailCode**
> Verify2FAEmailCodeResult verify2FAEmailCode(twoFactorEmailCode)

Finishes the login sequence with an 2FA email code.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    TwoFactorEmailCode
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let twoFactorEmailCode: TwoFactorEmailCode; //

const { status, data } = await apiInstance.verify2FAEmailCode(
    twoFactorEmailCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **twoFactorEmailCode** | **TwoFactorEmailCode**|  | |


### Return type

**Verify2FAEmailCodeResult**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Set-Cookie - Provides a &#x60;twoFactorAuth&#x60; cookie, which can be used to bypasses the 2FA requirement for future logins on the same device. <br>  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyAuthToken**
> VerifyAuthTokenResult verifyAuthToken()

Verify whether the currently provided Auth Token is valid.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.verifyAuthToken();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**VerifyAuthTokenResult**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns wether a provided auth token is valid or not. |  -  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyLoginPlace**
> verifyLoginPlace()

Verifies a login attempt for a user

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let token: string; //Token to verify login attempt. (default to undefined)
let userId: string; //Filter by UserID. (optional) (default to undefined)

const { status, data } = await apiInstance.verifyLoginPlace(
    token,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Token to verify login attempt. | defaults to undefined|
| **userId** | [**string**] | Filter by UserID. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**302** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyPending2FA**
> Verify2FAResult verifyPending2FA(twoFactorAuthCode)

Finishes sequence for enabling time-based 2FA.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    TwoFactorAuthCode
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let twoFactorAuthCode: TwoFactorAuthCode; //

const { status, data } = await apiInstance.verifyPending2FA(
    twoFactorAuthCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **twoFactorAuthCode** | **TwoFactorAuthCode**|  | |


### Return type

**Verify2FAResult**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Set-Cookie - Provides a &#x60;twoFactorAuth&#x60; cookie, which can be used to bypasses the 2FA requirement for future logins on the same device. <br>  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyRecoveryCode**
> Verify2FAResult verifyRecoveryCode(twoFactorAuthCode)

Finishes the login sequence with an OTP (One Time Password) recovery code for accounts with 2FA-protection enabled.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    TwoFactorAuthCode
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let twoFactorAuthCode: TwoFactorAuthCode; //

const { status, data } = await apiInstance.verifyRecoveryCode(
    twoFactorAuthCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **twoFactorAuthCode** | **TwoFactorAuthCode**|  | |


### Return type

**Verify2FAResult**

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Set-Cookie - Provides a &#x60;twoFactorAuth&#x60; cookie, which can be used to bypasses the 2FA requirement for future logins on the same device. <br>  |
|**401** | Error response due to missing auth cookie. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

