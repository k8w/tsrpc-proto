import { TsrpcErrorData, TsrpcErrorType } from "./TransportData";

/**
 * TSRPC Error
 * It means this error would be return to frontend directly
 * If a error is throwed during API, but not TSRPC Error, then another internal server error would be returned
 * 
 * @locale zhCN
 * TsrpcError 与普通 Error 的差异在于，它的错误信息会直接返回给前端，而不是像 Error 那样返回一个 “服务器内部错误”
 * 如此，我们可以通过 `throw new TsrpcError(...)` 和 `throw new Error('...')` 去更灵活的抛出异常
 */
export class TsrpcError implements TsrpcErrorData {
    message!: string;
    type!: TsrpcErrorType;
    code?: string;
    [key: string]: any;

    constructor(data: TsrpcErrorData);
    constructor(message: string, data?: Partial<TsrpcErrorData>);
    constructor(dataOrMessage: TsrpcErrorData | string, data?: Partial<TsrpcErrorData>) {
        if (typeof dataOrMessage === 'string') {
            this.message = dataOrMessage;
            this.type = data?.type ?? TsrpcErrorType.ApiError;
            Object.assign(this, data);
        }
        else {
            Object.assign(this, dataOrMessage);
        }
    }

    toString() {
        return `[TSRPC] ${this.type}: ${this.message}`;
    }
}