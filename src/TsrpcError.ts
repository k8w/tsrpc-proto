import { ErrorData } from "./TransportData";

/**
 * TSRPC Error
 * It means this error would be return to frontend directly
 * If a error is throwed during API, but not TSRPC Error, then another internal server error would be returned
 * 
 * @locale zhCN
 * TsrpcError 与普通 Error 的差异在于，它的错误信息会直接返回给前端，而不是像 Error 那样返回一个 “服务器内部错误”
 * 如此，我们可以通过 `throw new TsrpcError(...)` 和 `throw new Error('...')` 去更灵活的抛出异常
 */
export class TsrpcError extends Error {

    readonly info?: TsrpcErrorInfo;

    /** 默认为 ApiError */
    get type() {
        return this.info?.type || TsrpcErrorType.ApiError;
    }

    get code() {
        return this.info?.code;
    }

    get data(): ErrorData {
        return {
            ...this.info,
            type: this.type,
            message: this.message
        }
    }

    constructor(data: ErrorData);
    constructor(message: string, info?: TsrpcErrorInfo);
    constructor(dataOrMessage: ErrorData | string, info?: TsrpcErrorInfo) {
        if (typeof dataOrMessage === 'string') {
            super(dataOrMessage);
            this.info = info;
        }
        else {
            super(dataOrMessage.message);
            let { message, ...errInfo } = dataOrMessage;
            this.info = errInfo;
        }

        // if ((Object as any).setPrototypeOf) {
        //     (Object as any).setPrototypeOf(this, TsrpcError.prototype);
        // }
        // else {
        //     (this as any).__proto__ = TsrpcError.prototype;
        // }
    }
}

/** 明确错误类型 */
export enum TsrpcErrorType {
    /** 网络错误 */
    NetworkError = 'NetworkError',
    /** 服务器内部异常（不适宜抛给客户端的错误信息） */
    ServerError = 'ServerError',
    /** 客户端异常（如解析服务端返回失败等） */
    ClientError = 'ClientError',
    /** 业务错误（API中返回的） */
    ApiError = 'ApiError',
}

export type TsrpcErrorInfo = {
    /** 用于识别特定错误 */
    code?: string,
    /** 
     * 用于客户端判断错误类型
     * 例如：ApiError可直接显示错误信息，其它错误统一显示 “网络错误”
     */
    type?: TsrpcErrorType,
    /** 自定义扩展错误信息 */
    [key: string]: any
};