# APIConfig



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VoiceEnableDegradation** | **boolean** | Unknown, probably voice optimization testing | [default to false]
**VoiceEnableReceiverLimiting** | **boolean** | Unknown, probably voice optimization testing | [default to true]
**accessLogsUrls** | [**APIConfigAccessLogsUrls**](APIConfigAccessLogsUrls.md) |  | [default to undefined]
**address** | **string** | VRChat\&#39;s office address | [default to undefined]
**ageVerificationInviteVisible** | **boolean** |  | [default to undefined]
**ageVerificationP** | **boolean** |  | [default to undefined]
**ageVerificationStatusVisible** | **boolean** |  | [default to undefined]
**analysisMaxRetries** | **number** | Max retries for avatar analysis requests | [default to undefined]
**analysisRetryInterval** | **number** | Interval between retries for avatar analysis requests | [default to undefined]
**announcements** | [**Set&lt;APIConfigAnnouncement&gt;**](APIConfigAnnouncement.md) | Public Announcements | [default to undefined]
**analyticsSegment_NewUI_PctOfUsers** | **number** | Unknown | [default to undefined]
**analyticsSegment_NewUI_Salt** | **string** | Unknown | [default to undefined]
**availableLanguageCodes** | **Array&lt;string&gt;** | List of supported Languages | [default to undefined]
**availableLanguages** | **Array&lt;string&gt;** | List of supported Languages | [default to undefined]
**avatarPerfLimiter** | [**APIConfigAvatarPerfLimiter**](APIConfigAvatarPerfLimiter.md) |  | [default to undefined]
**chatboxLogBufferSeconds** | **number** | Unknown | [default to 40]
**clientApiKey** | **string** | apiKey to be used for all other requests | [default to undefined]
**clientBPSCeiling** | **number** | Unknown | [default to 18432]
**clientDisconnectTimeout** | **number** | Unknown | [default to 30000]
**clientNetDispatchThread** | **boolean** | Unknown | [optional] [default to false]
**clientNetDispatchThreadMobile** | **boolean** | Unknown | [default to true]
**clientNetInThread** | **boolean** | Unknown | [optional] [default to false]
**clientNetInThread2** | **boolean** | Unknown | [optional] [default to false]
**clientNetInThreadMobile** | **boolean** | Unknown | [optional] [default to false]
**clientNetInThreadMobile2** | **boolean** | Unknown | [optional] [default to false]
**clientNetOutThread** | **boolean** | Unknown | [optional] [default to false]
**clientNetOutThread2** | **boolean** | Unknown | [optional] [default to false]
**clientNetOutThreadMobile** | **boolean** | Unknown | [optional] [default to false]
**clientNetOutThreadMobile2** | **boolean** | Unknown | [optional] [default to false]
**clientQR** | **number** | Unknown | [optional] [default to 1]
**clientReservedPlayerBPS** | **number** | Unknown | [default to 7168]
**clientSentCountAllowance** | **number** | Unknown | [default to 15]
**constants** | [**APIConfigConstants**](APIConfigConstants.md) |  | [default to undefined]
**contactEmail** | **string** | VRChat\&#39;s contact email | [default to undefined]
**copyrightEmail** | **string** | VRChat\&#39;s copyright-issues-related email | [default to undefined]
**currentPrivacyVersion** | **number** | Current version number of the Privacy Agreement | [optional] [default to 1]
**currentTOSVersion** | **number** | Current version number of the Terms of Service | [default to undefined]
**defaultAvatar** | **string** |  | [default to undefined]
**defaultStickerSet** | **string** |  | [default to undefined]
**devLanguageCodes** | **Array&lt;string&gt;** | Unknown | [optional] [default to undefined]
**devSdkUrl** | **string** | Link to download the development SDK, use downloadUrls instead | [default to undefined]
**devSdkVersion** | **string** | Version of the development SDK | [default to undefined]
**dis_countdown** | **string** | Unknown, \&quot;dis\&quot; maybe for disconnect? | [default to undefined]
**disableAVProInProton** | **boolean** | Unknown | [optional] [default to false]
**disableAvatarCopying** | **boolean** | Toggles if copying avatars should be disabled | [default to false]
**disableAvatarGating** | **boolean** | Toggles if avatar gating should be disabled. Avatar gating restricts uploading of avatars to people with the &#x60;system_avatar_access&#x60; Tag or &#x60;admin_avatar_access&#x60; Tag | [default to false]
**disableCommunityLabs** | **boolean** | Toggles if the Community Labs should be disabled | [default to false]
**disableCommunityLabsPromotion** | **boolean** | Toggles if promotion out of Community Labs should be disabled | [default to false]
**disableEmail** | **boolean** | Unknown | [default to false]
**disableCaptcha** | **boolean** | Unknown | [optional] [default to true]
**disableEventStream** | **boolean** | Toggles if Analytics should be disabled. | [default to false]
**disableFeedbackGating** | **boolean** | Toggles if feedback gating should be disabled. Feedback gating restricts submission of feedback (reporting a World or User) to people with the &#x60;system_feedback_access&#x60; Tag. | [default to false]
**disableFrontendBuilds** | **boolean** | Unknown, probably toggles compilation of frontend web builds? So internal flag? | [default to false]
**disableGiftDrops** | **boolean** | Toggles if gift drops should be disabled | [default to false]
**disableHello** | **boolean** | Unknown | [default to false]
**disableOculusSubs** | **boolean** | Toggles if signing up for Subscriptions in Oculus is disabled or not. | [default to false]
**disableRegistration** | **boolean** | Toggles if new user account registration should be disabled. | [default to false]
**disableSteamNetworking** | **boolean** | Toggles if Steam Networking should be disabled. VRChat these days uses Photon Unity Networking (PUN) instead. | [default to true]
**disableTwoFactorAuth** | **boolean** | Toggles if 2FA should be disabled. | [default to false]
**disableUdon** | **boolean** | Toggles if Udon should be universally disabled in-game. | [default to false]
**disableUpgradeAccount** | **boolean** | Toggles if account upgrading \&quot;linking with Steam/Oculus\&quot; should be disabled. | [default to false]
**downloadLinkWindows** | **string** | Download link for game on the Oculus Rift website. | [default to undefined]
**downloadUrls** | [**APIConfigDownloadURLList**](APIConfigDownloadURLList.md) |  | [default to undefined]
**dynamicWorldRows** | [**Set&lt;DynamicContentRow&gt;**](DynamicContentRow.md) | Array of DynamicWorldRow objects, used by the game to display the list of world rows | [default to undefined]
**economyPauseEnd** | **string** | Unknown | [optional] [default to undefined]
**economyPauseStart** | **string** | Unknown | [optional] [default to undefined]
**economyState** | **number** | Unknown | [optional] [default to 1]
**events** | [**APIConfigEvents**](APIConfigEvents.md) |  | [default to undefined]
**forceUseLatestWorld** | **boolean** | Unknown | [default to true]
**giftDisplayType** | **string** | Display type of gifts | [default to undefined]
**googleApiClientId** | **string** | Unknown | [default to '827942544393-r2ouvckvouldn9dg9uruseje575e878f.apps.googleusercontent.com']
**homeWorldId** | **string** | WorldID be \&quot;offline\&quot; on User profiles if you are not friends with that user. | [default to undefined]
**homepageRedirectTarget** | **string** | Redirect target if you try to open the base API domain in your browser | [default to 'https://hello.vrchat.com']
**hubWorldId** | **string** | WorldID be \&quot;offline\&quot; on User profiles if you are not friends with that user. | [default to undefined]
**imageHostUrlList** | **Array&lt;string&gt;** | A list of explicitly allowed origins that worlds can request images from via the Udon\&#39;s [VRCImageDownloader#DownloadImage](https://creators.vrchat.com/worlds/udon/image-loading/#downloadimage). | [default to undefined]
**jobsEmail** | **string** | VRChat\&#39;s job application email | [default to undefined]
**minSupportedClientBuildNumber** | [**APIConfigMinSupportedClientBuildNumber**](APIConfigMinSupportedClientBuildNumber.md) |  | [default to undefined]
**minimumUnityVersionForUploads** | **string** | Minimum Unity version required for uploading assets | [default to '2019.0.0f1']
**moderationEmail** | **string** | VRChat\&#39;s moderation related email | [default to undefined]
**notAllowedToSelectAvatarInPrivateWorldMessage** | **string** | Used in-game to notify a user they aren\&#39;t allowed to select avatars in private worlds | [default to undefined]
**offlineAnalysis** | [**APIConfigOfflineAnalysis**](APIConfigOfflineAnalysis.md) |  | [default to undefined]
**photonNameserverOverrides** | **Array&lt;string&gt;** | Unknown | [default to undefined]
**photonPublicKeys** | **Array&lt;string&gt;** | Unknown | [default to undefined]
**reportCategories** | [**APIConfigReportCategories**](APIConfigReportCategories.md) |  | [default to undefined]
**reportFormUrl** | **string** | URL to the report form | [default to 'https://help.vrchat.com/hc/en-us/requests/new?ticket_form_id=1500000182242&tf_360056455174=user_report&tf_360057451993={userId}&tf_1500001445142={reportedId}&tf_subject={reason} {category} By {contentType} {reportedName}&tf_description={description}']
**reportOptions** | [**APIConfigReportOptions**](APIConfigReportOptions.md) |  | [default to undefined]
**reportReasons** | [**APIConfigReportReasons**](APIConfigReportReasons.md) |  | [default to undefined]
**requireAgeVerificationBetaTag** | **boolean** |  | [default to undefined]
**sdkDeveloperFaqUrl** | **string** | Link to the developer FAQ | [default to undefined]
**sdkDiscordUrl** | **string** | Link to the official VRChat Discord | [default to undefined]
**sdkNotAllowedToPublishMessage** | **string** | Used in the SDK to notify a user they aren\&#39;t allowed to upload avatars/worlds yet | [default to undefined]
**sdkUnityVersion** | **string** | Unity version supported by the SDK | [default to undefined]
**stringHostUrlList** | **Array&lt;string&gt;** | A list of explicitly allowed origins that worlds can request strings from via the Udon\&#39;s [VRCStringDownloader.LoadUrl](https://creators.vrchat.com/worlds/udon/string-loading/#ivrcstringdownload). | [default to undefined]
**supportEmail** | **string** | VRChat\&#39;s support email | [default to undefined]
**supportFormUrl** | **string** | VRChat\&#39;s support form | [default to undefined]
**timekeeping** | **boolean** | Unknown | [default to true]
**timeOutWorldId** | **string** | WorldID be \&quot;offline\&quot; on User profiles if you are not friends with that user. | [default to undefined]
**tutorialWorldId** | **string** | WorldID be \&quot;offline\&quot; on User profiles if you are not friends with that user. | [default to undefined]
**updateRateMsMaximum** | **number** | Unknown | [default to undefined]
**updateRateMsMinimum** | **number** | Unknown | [default to undefined]
**updateRateMsNormal** | **number** | Unknown | [default to undefined]
**updateRateMsUdonManual** | **number** | Unknown | [default to undefined]
**uploadAnalysisPercent** | **number** | Unknown | [default to undefined]
**urlList** | **Array&lt;string&gt;** | List of allowed URLs that bypass the \&quot;Allow untrusted URL\&#39;s\&quot; setting in-game | [default to undefined]
**useReliableUdpForVoice** | **boolean** | Unknown | [default to false]
**viveWindowsUrl** | **string** | Download link for game on the Steam website. | [default to undefined]
**whiteListedAssetUrls** | **Array&lt;string&gt;** | List of allowed URLs that are allowed to host avatar assets | [default to undefined]
**player_url_resolver_version** | **string** | Currently used youtube-dl.exe version | [default to undefined]
**player_url_resolver_sha1** | **string** | Currently used youtube-dl.exe hash in SHA1-delimited format | [default to undefined]
**publicKey** | **string** | Public key, hex encoded | [default to undefined]
**websocketMaxFriendsRefreshDelay** | **number** | Unknown | [default to 900]
**websocketQuickReconnectTime** | **number** | Unknown | [default to 2]
**websocketReconnectMaxDelay** | **number** | Unknown | [default to 2]

## Example

```typescript
import { APIConfig } from './api';

const instance: APIConfig = {
    VoiceEnableDegradation,
    VoiceEnableReceiverLimiting,
    accessLogsUrls,
    address,
    ageVerificationInviteVisible,
    ageVerificationP,
    ageVerificationStatusVisible,
    analysisMaxRetries,
    analysisRetryInterval,
    announcements,
    analyticsSegment_NewUI_PctOfUsers,
    analyticsSegment_NewUI_Salt,
    availableLanguageCodes,
    availableLanguages,
    avatarPerfLimiter,
    chatboxLogBufferSeconds,
    clientApiKey,
    clientBPSCeiling,
    clientDisconnectTimeout,
    clientNetDispatchThread,
    clientNetDispatchThreadMobile,
    clientNetInThread,
    clientNetInThread2,
    clientNetInThreadMobile,
    clientNetInThreadMobile2,
    clientNetOutThread,
    clientNetOutThread2,
    clientNetOutThreadMobile,
    clientNetOutThreadMobile2,
    clientQR,
    clientReservedPlayerBPS,
    clientSentCountAllowance,
    constants,
    contactEmail,
    copyrightEmail,
    currentPrivacyVersion,
    currentTOSVersion,
    defaultAvatar,
    defaultStickerSet,
    devLanguageCodes,
    devSdkUrl,
    devSdkVersion,
    dis_countdown,
    disableAVProInProton,
    disableAvatarCopying,
    disableAvatarGating,
    disableCommunityLabs,
    disableCommunityLabsPromotion,
    disableEmail,
    disableCaptcha,
    disableEventStream,
    disableFeedbackGating,
    disableFrontendBuilds,
    disableGiftDrops,
    disableHello,
    disableOculusSubs,
    disableRegistration,
    disableSteamNetworking,
    disableTwoFactorAuth,
    disableUdon,
    disableUpgradeAccount,
    downloadLinkWindows,
    downloadUrls,
    dynamicWorldRows,
    economyPauseEnd,
    economyPauseStart,
    economyState,
    events,
    forceUseLatestWorld,
    giftDisplayType,
    googleApiClientId,
    homeWorldId,
    homepageRedirectTarget,
    hubWorldId,
    imageHostUrlList,
    jobsEmail,
    minSupportedClientBuildNumber,
    minimumUnityVersionForUploads,
    moderationEmail,
    notAllowedToSelectAvatarInPrivateWorldMessage,
    offlineAnalysis,
    photonNameserverOverrides,
    photonPublicKeys,
    reportCategories,
    reportFormUrl,
    reportOptions,
    reportReasons,
    requireAgeVerificationBetaTag,
    sdkDeveloperFaqUrl,
    sdkDiscordUrl,
    sdkNotAllowedToPublishMessage,
    sdkUnityVersion,
    stringHostUrlList,
    supportEmail,
    supportFormUrl,
    timekeeping,
    timeOutWorldId,
    tutorialWorldId,
    updateRateMsMaximum,
    updateRateMsMinimum,
    updateRateMsNormal,
    updateRateMsUdonManual,
    uploadAnalysisPercent,
    urlList,
    useReliableUdpForVoice,
    viveWindowsUrl,
    whiteListedAssetUrls,
    player_url_resolver_version,
    player_url_resolver_sha1,
    publicKey,
    websocketMaxFriendsRefreshDelay,
    websocketQuickReconnectTime,
    websocketReconnectMaxDelay,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
