/*
 * Copyright (c) 2012-2019 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export enum EventType {
    OmnisharpStart = 0,
    TelemetryEvent = 1,
    TelemetryEventWithMeasures = 2,
    OmnisharpDelayTrackerEventMeasures = 3,
    OmnisharpInitialisation = 4,
    OmnisharpLaunch = 5,
    PackageInstallStart = 6,
    PackageInstallation = 7,
    LogPlatformInfo = 8,
    InstallationStart = 9,
    InstallationFailure = 10,
    DownloadProgress = 11,
    OmnisharpFailure = 12,
    OmnisharpRequestMessage = 13,
    TestExecutionCountReport = 14,
    OmnisharpServerOnError = 15,
    OmnisharpServerMsBuildProjectDiagnostics = 16,
    OmnisharpServerUnresolvedDependencies = 17,
    OmnisharpServerEnqueueRequest = 18,
    OmnisharpServerProcessRequestStart = 19,
    OmnisharpEventPacketReceived = 20,
    OmnisharpServerOnServerError = 21,
    OmnisharpOnMultipleLaunchTargets = 22,
    WorkspaceInformationUpdated = 23,
    EventWithMessage = 24,
    DownloadStart = 25,
    DownloadFallBack = 26,
    DownloadSizeObtained = 27,
    ZipError = 28,
    ReportDotNetTestResults = 29,
    DotNetTestRunStart = 30,
    DotNetTestDebugStart = 31,
    DotNetTestDebugProcessStart = 32,
    DotNetTestsInClassRunStart = 33,
    DotNetTestsInClassDebugStart = 34,
    DocumentSynchronizationFailure = 35,
    OpenURL = 36,
    IntegrityCheckFailure = 37,
    IntegrityCheckSuccess = 38,
    RazorPluginPathSpecified = 39,
    RazorPluginPathDoesNotExist = 40,
    DebuggerPrerequisiteFailure = 41,
    CommandDotNetRestoreProgress = 42,
    DownloadValidation = 43,
    DotNetTestDebugComplete = 44,
    LatestBuildDownloadStart = 45,
    ActiveTextEditorChanged = 46,
    OmnisharpOnBeforeServerStart = 47,
    ProjectJsonDeprecatedWarning = 48,
    OmnisharpServerProcessRequestComplete = 49,
    InstallationSuccess = 50,
    CommandDotNetRestoreStart = 51,
    DebuggerNotInstalledFailure = 52,
    ShowOmniSharpChannel = 53,
    ActivationFailure = 54,
    ProjectModified = 55,
    RazorDevModeActive = 56,
    DotNetTestDebugStartFailure = 57,
    DotNetTestDebugWarning = 58,
    DotNetTestRunFailure = 59,
    DotNetTestMessage = 60,
    OmnisharpServerVerboseMessage = 61,
    OmnisharpServerMessage = 62,
    OmnisharpServerOnStdErr = 63,
    DownloadFailure = 64,
    DownloadSuccess = 65,
    CommandDotNetRestoreSucceeded = 66,
    DebuggerPrerequisiteWarning = 67,
    CommandDotNetRestoreFailed = 68,
    OmnisharpRestart = 69,
    OmnisharpServerDequeueRequest = 70,
    OmnisharpServerOnStop = 71,
    OmnisharpServerOnStart = 72,
    OmnisharpOnBeforeServerInstall = 73,
    ProjectConfigurationReceived = 74,
}