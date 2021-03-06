<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/database](./database.md) &gt; [DataSnapshot](./database.datasnapshot.md)

## DataSnapshot class

A `DataSnapshot` contains data from a Database location.

Any time you read data from the Database, you receive the data as a `DataSnapshot`<!-- -->. A `DataSnapshot` is passed to the event callbacks you attach with `on()` or `once()`<!-- -->. You can extract the contents of the snapshot as a JavaScript object by calling the `val()` method. Alternatively, you can traverse into the snapshot by calling `child()` to return child snapshots (which you could then call `val()` on).

A `DataSnapshot` is an efficiently generated, immutable copy of the data at a Database location. It cannot be modified and will never change (to modify data, you always call the `set()` method on a `Reference` directly).

<b>Signature:</b>

```typescript
export declare class DataSnapshot 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [key](./database.datasnapshot.key.md) |  | string \| null | The key (last part of the path) of the location of this <code>DataSnapshot</code>.<!-- -->The last token in a Database location is considered its key. For example, "ada" is the key for the /users/ada/ node. Accessing the key on any <code>DataSnapshot</code> will return the key for the location that generated it. However, accessing the key on the root URL of a Database will return <code>null</code>. |
|  [priority](./database.datasnapshot.priority.md) |  | string \| number \| null | Gets the priority value of the data in this <code>DataSnapshot</code>.<!-- -->Applications need not use priority but can order collections by ordinary properties (see [Sorting and filtering data](https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data) ). |
|  [ref](./database.datasnapshot.ref.md) |  | [Reference](./database.reference.md) | The location of this DataSnapshot. |
|  [size](./database.datasnapshot.size.md) |  | number | Returns the number of child properties of this <code>DataSnapshot</code>. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [child(path)](./database.datasnapshot.child.md) |  | Gets another <code>DataSnapshot</code> for the location at the specified relative path.<!-- -->Passing a relative path to the <code>child()</code> method of a DataSnapshot returns another <code>DataSnapshot</code> for the location at the specified relative path. The relative path can either be a simple child name (for example, "ada") or a deeper, slash-separated path (for example, "ada/name/first"). If the child location has no data, an empty <code>DataSnapshot</code> (that is, a <code>DataSnapshot</code> whose value is <code>null</code>) is returned. |
|  [exists()](./database.datasnapshot.exists.md) |  | Returns true if this <code>DataSnapshot</code> contains any data. It is slightly more efficient than using <code>snapshot.val() !== null</code>. |
|  [exportVal()](./database.datasnapshot.exportval.md) |  | Exports the entire contents of the DataSnapshot as a JavaScript object.<!-- -->The <code>exportVal()</code> method is similar to <code>val()</code>, except priority information is included (if available), making it suitable for backing up your data. |
|  [forEach(action)](./database.datasnapshot.foreach.md) |  | Enumerates the top-level children in the <code>DataSnapshot</code>.<!-- -->Because of the way JavaScript objects work, the ordering of data in the JavaScript object returned by <code>val()</code> is not guaranteed to match the ordering on the server nor the ordering of <code>onChildAdded()</code> events. That is where <code>forEach()</code> comes in handy. It guarantees the children of a <code>DataSnapshot</code> will be iterated in their query order.<!-- -->If no explicit <code>orderBy*()</code> method is used, results are returned ordered by key (unless priorities are used, in which case, results are returned by priority). |
|  [hasChild(path)](./database.datasnapshot.haschild.md) |  | Returns true if the specified child path has (non-null) data. |
|  [hasChildren()](./database.datasnapshot.haschildren.md) |  | Returns whether or not the <code>DataSnapshot</code> has any non-<code>null</code> child properties.<!-- -->You can use <code>hasChildren()</code> to determine if a <code>DataSnapshot</code> has any children. If it does, you can enumerate them using <code>forEach()</code>. If it doesn't, then either this snapshot contains a primitive value (which can be retrieved with <code>val()</code>) or it is empty (in which case, <code>val()</code> will return <code>null</code>). |
|  [toJSON()](./database.datasnapshot.tojson.md) |  | Returns a JSON-serializable representation of this object. |
|  [val()](./database.datasnapshot.val.md) |  | Extracts a JavaScript value from a <code>DataSnapshot</code>.<!-- -->Depending on the data in a <code>DataSnapshot</code>, the <code>val()</code> method may return a scalar type (string, number, or boolean), an array, or an object. It may also return null, indicating that the <code>DataSnapshot</code> is empty (contains no data). |

