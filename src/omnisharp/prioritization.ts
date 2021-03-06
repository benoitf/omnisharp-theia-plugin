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

import * as protocol from './protocol';

const priorityCommands = [
    protocol.Requests.ChangeBuffer,
    protocol.Requests.FormatAfterKeystroke,
    protocol.Requests.FormatRange,
    protocol.Requests.UpdateBuffer
];

const normalCommands = [
    protocol.Requests.AutoComplete,
    protocol.Requests.FilesChanged,
    protocol.Requests.FindSymbols,
    protocol.Requests.FindUsages,
    protocol.Requests.GetCodeActions,
    protocol.Requests.GoToDefinition,
    protocol.Requests.RunCodeAction,
    protocol.Requests.SignatureHelp,
    protocol.Requests.TypeLookup
];

const prioritySet = new Set<string>(priorityCommands);
const normalSet = new Set<string>(normalCommands);
const deferredSet = new Set<string>();

const nonDeferredSet = new Set<string>();

for (let command of priorityCommands) {
    nonDeferredSet.add(command);
}

for (let command of normalCommands) {
    nonDeferredSet.add(command);
}

export function isPriorityCommand(command: string) {
    return prioritySet.has(command);
}

export function isNormalCommand(command: string) {
    return normalSet.has(command);
}

export function isDeferredCommand(command: string) {
    if (deferredSet.has(command)) {
        return true;
    }

    if (nonDeferredSet.has(command)) {
        return false;
    }

    deferredSet.add(command);
    return true;
}