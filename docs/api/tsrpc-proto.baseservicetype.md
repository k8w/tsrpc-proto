<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [tsrpc-proto](./tsrpc-proto.md) &gt; [BaseServiceType](./tsrpc-proto.baseservicetype.md)

## BaseServiceType interface

API service request and response type, and Msg service type. For coding auto hint.

<b>Signature:</b>

```typescript
export interface BaseServiceType 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [api](./tsrpc-proto.baseservicetype.api.md) | { \[apiName: string\]: { req: any; res: any; }; } | Send a request, and wait for a response |
|  [msg](./tsrpc-proto.baseservicetype.msg.md) | { \[msgName: string\]: any; } | Msg service, listen or send one-way msg without response |

