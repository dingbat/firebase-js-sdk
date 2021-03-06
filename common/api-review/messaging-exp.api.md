## API Report File for "@firebase/messaging-exp"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { FirebaseApp } from '@firebase/app-exp';
import { NextFn } from '@firebase/util';
import { Observer } from '@firebase/util';
import { Unsubscribe } from '@firebase/util';

// @public
export function deleteToken(messaging: FirebaseMessaging): Promise<boolean>;

// @public
export interface FcmOptions {
    analyticsLabel?: string;
    link?: string;
}

// @public
export interface FirebaseMessaging {
}

// @internal (undocumented)
export type _FirebaseMessagingName = 'messaging';

// @public
export function getMessaging(app?: FirebaseApp): FirebaseMessaging;

// @public
export function getToken(messaging: FirebaseMessaging, options?: {
    vapidKey?: string;
    swReg?: ServiceWorkerRegistration;
}): Promise<string>;

// @public
export function isSupported(): Promise<boolean>;

// @public
export interface MessagePayload {
    collapseKey: string;
    data?: {
        [key: string]: string;
    };
    fcmOptions?: FcmOptions;
    from: string;
    notification?: NotificationPayload;
}

export { NextFn }

// @public
export interface NotificationPayload {
    body?: string;
    image?: string;
    title?: string;
}

export { Observer }

// Warning: (ae-internal-missing-underscore) The name "onBackgroundMessage" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export function onBackgroundMessage(messaging: FirebaseMessaging, nextOrObserver: NextFn<MessagePayload> | Observer<MessagePayload>): Unsubscribe;

// @public
export function onMessage(messaging: FirebaseMessaging, nextOrObserver: NextFn<MessagePayload> | Observer<MessagePayload>): Unsubscribe;

export { Unsubscribe }


```
