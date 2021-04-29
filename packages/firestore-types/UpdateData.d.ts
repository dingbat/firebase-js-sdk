/**
 * @license
 * Copyright 2021 Google LLC
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

type IsObject<T> = T extends object
  ? T extends Array<any>
    ? false
    : true
  : false;

type ObjectKeys<T> = IsObject<T> extends true
  ? {
      [P in keyof T]: IsObject<T[P]> extends true ? P : never;
    }[keyof T]
  : never;
type OnlyObjects<T> = Pick<Required<T>, ObjectKeys<Required<T>>>;

type Concat<A extends string, B extends string> = `${A}.${B}`;
type NestedFields<U extends string & keyof T, T> =
  | Concat<U, keyof Required<T>[U] & string>
  | (ObjectKeys<Required<T[U]>> extends never
      ? never
      : Concat<
          U,
          NestedFields<keyof OnlyObjects<T[U]> & string, OnlyObjects<T[U]>>
        >);

type ConstructPaths<T> = NestedFields<keyof T & string, T>;

type WithDots<T> = { [P in ConstructPaths<OnlyObjects<T>>]: any };

/**
 * Update data (for use with {@link @firebase/firestore/lite#(updateDoc:1)}) consists of field paths (e.g.
 * 'foo' or 'foo.baz') mapped to values. Fields that contain dots reference
 * nested fields within the document.
 */
type UpdateData<T> = Partial<T> & Partial<WithDots<T>>;

export default UpdateData;
