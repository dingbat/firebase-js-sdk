<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/database](./database.md) &gt; [DataSnapshot](./database.datasnapshot.md) &gt; [key](./database.datasnapshot.key.md)

## DataSnapshot.key property

The key (last part of the path) of the location of this `DataSnapshot`<!-- -->.

The last token in a Database location is considered its key. For example, "ada" is the key for the /users/ada/ node. Accessing the key on any `DataSnapshot` will return the key for the location that generated it. However, accessing the key on the root URL of a Database will return `null`<!-- -->.

<b>Signature:</b>

```typescript
get key(): string | null;
```
