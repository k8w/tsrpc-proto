import { TSBufferProto } from "tsbuffer-schema";
export const TransportDataProto: TSBufferProto = {
    "ServerInputData": {
        "type": "Tuple",
        "elementTypes": [
            {
                "type": "Number",
                "scalarType": "uint"
            },
            {
                "type": "Buffer",
                "arrayType": "Uint8Array"
            },
            {
                "type": "Number",
                "scalarType": "uint"
            }
        ],
        "optionalStartIndex": 2
    },
    "ServerOutputData": {
        "type": "Tuple",
        "elementTypes": [
            {
                "type": "Number",
                "scalarType": "uint"
            },
            {
                "type": "Buffer",
                "arrayType": "Uint8Array"
            },
            {
                "type": "Reference",
                "target": "ApiError"
            },
            {
                "type": "Number",
                "scalarType": "uint"
            }
        ],
        "optionalStartIndex": 1
    },
    "ApiError": {
        "type": "Interface",
        "properties": [
            {
                "id": 0,
                "name": "message",
                "type": {
                    "type": "String"
                }
            },
            {
                "id": 1,
                "name": "info",
                "type": {
                    "type": "Any"
                },
                "optional": true
            }
        ]
    }
};
