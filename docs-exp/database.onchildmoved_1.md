<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/database](./database.md) &gt; [onChildMoved](./database.onchildmoved_1.md)

## onChildMoved() function

Listens for data changes at a particular location.

This is the primary way to read data from a Database. Your callback will be triggered for the initial data and again whenever the data changes. Invoke the returned unsubscribe callback to stop receiving updates. See [Retrieve Data on the Web](https://firebase.google.com/docs/database/web/retrieve-data) for more details.

An `onChildMoved` event will be triggered when a child's sort order changes such that its position relative to its siblings changes. The `DataSnapshot` passed to the callback will be for the data of the child that has moved. It is also passed a second argument which is a string containing the key of the previous sibling child by sort order, or `null` if it is the first child.

<b>Signature:</b>

```typescript
export declare function onChildMoved(query: Query, callback: (snapshot: DataSnapshot, previousChildName: string | null) => unknown, options: ListenOptions): Unsubscribe;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  query | [Query](./database.query.md) | The query to run. |
|  callback | (snapshot: [DataSnapshot](./database.datasnapshot.md)<!-- -->, previousChildName: string \| null) =&gt; unknown | A callback that fires when the specified event occurs. The callback will be passed a DataSnapshot and a string containing the key of the previous child, by sort order, or <code>null</code> if it is the first child. |
|  options | [ListenOptions](./database.listenoptions.md) | An object that can be used to configure <code>onlyOnce</code>, which then removes the listener after its first invocation. |

<b>Returns:</b>

[Unsubscribe](./database.unsubscribe.md)

A function that can be invoked to remove the listener.

