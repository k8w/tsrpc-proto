import { TSBufferSchema } from "tsbuffer-schema";

export const TransportDataProto: {
  ServerInputData: TSBufferSchema,
  ServerOutputData: TSBufferSchema,
  [key: string]: TSBufferSchema
} = {
  "ServerInputData": {
    "type": "Interface",
    "properties": [
      {
        "id": 0,
        "name": "serviceId",
        "type": {
          "type": "Number",
          "scalarType": "uint"
        }
      },
      {
        "id": 1,
        "name": "buffer",
        "type": {
          "type": "Buffer",
          "arrayType": "Uint8Array"
        }
      },
      {
        "id": 2,
        "name": "sn",
        "type": {
          "type": "Number",
          "scalarType": "uint"
        },
        "optional": true
      }
    ]
  },
  "ServerOutputData": {
    "type": "Interface",
    "properties": [
      {
        "id": 0,
        "name": "buffer",
        "type": {
          "type": "Buffer",
          "arrayType": "Uint8Array"
        },
        "optional": true
      },
      {
        "id": 1,
        "name": "error",
        "type": {
          "type": "Reference",
          "target": "TsrpcErrorData"
        },
        "optional": true
      },
      {
        "id": 2,
        "name": "serviceId",
        "type": {
          "type": "Number",
          "scalarType": "uint"
        },
        "optional": true
      },
      {
        "id": 3,
        "name": "sn",
        "type": {
          "type": "Number",
          "scalarType": "uint"
        },
        "optional": true
      }
    ]
  },
  "TsrpcErrorData": {
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
        "name": "type",
        "type": {
          "type": "Reference",
          "target": "TsrpcErrorType"
        }
      },
      {
        "id": 2,
        "name": "code",
        "type": {
          "type": "String"
        },
        "optional": true
      }
    ],
    "indexSignature": {
      "keyType": "String",
      "type": {
        "type": "Any"
      }
    }
  },
  "TsrpcErrorType": {
    "type": "Enum",
    "members": [
      {
        "id": 0,
        "value": "NetworkError"
      },
      {
        "id": 1,
        "value": "ServerError"
      },
      {
        "id": 2,
        "value": "ClientError"
      },
      {
        "id": 3,
        "value": "ApiError"
      }
    ]
  }
};