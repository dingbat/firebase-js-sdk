/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  Component,
  ComponentContainer,
  ComponentType,
  InstanceFactory
} from '@firebase/component';
import { ERROR_FACTORY, ErrorCode } from '../util/errors';
import { isSwSupported, isWindowSupported } from '../api/isSupported';

import { MessagingService } from '../messaging-service';
import { _registerComponent } from '@firebase/app-exp';

const WindowMessagingFactory: InstanceFactory<'messaging-exp'> = (
  container: ComponentContainer
) => {
  // Conscious decision to make this async check non-blocking during the messaging instance
  // initialization phase for performance consideration. An error would be thrown latter for
  // developer's information. Developers can then choose to import and call `isSupported` for
  // special handling.
  isWindowSupported()
    .then(isSupported => {
      if (!isSupported) {
        throw ERROR_FACTORY.create(ErrorCode.UNSUPPORTED_BROWSER);
      }
    })
    .catch(_ => {
      throw ERROR_FACTORY.create(ErrorCode.INDEXED_DB_UNSUPPORTED);
    });

  return new MessagingService(
    container.getProvider('app-exp').getImmediate(),
    container.getProvider('installations-exp-internal').getImmediate(),
    container.getProvider('analytics-internal')
  );
};

const SwMessagingFactory: InstanceFactory<'messaging-exp'> = (
  container: ComponentContainer
) => {
  // Conscious decision to make this async check non-blocking during the messaging instance
  // initialization phase for performance consideration. An error would be thrown latter for
  // developer's information. Developers can then choose to import and call `isSupported` for
  // special handling.
  isSwSupported()
    .then(isSupported => {
      if (!isSupported) {
        throw ERROR_FACTORY.create(ErrorCode.UNSUPPORTED_BROWSER);
      }
    })
    .catch(_ => {
      throw ERROR_FACTORY.create(ErrorCode.INDEXED_DB_UNSUPPORTED);
    });

  return new MessagingService(
    container.getProvider('app-exp').getImmediate(),
    container.getProvider('installations-exp-internal').getImmediate(),
    container.getProvider('analytics-internal')
  );
};

export function registerMessagingInWindow(): void {
  _registerComponent(
    new Component('messaging-exp', WindowMessagingFactory, ComponentType.PUBLIC)
  );
}

export function registerMessagingInSw(): void {
  _registerComponent(
    new Component('messaging-exp', SwMessagingFactory, ComponentType.PUBLIC)
  );
}
