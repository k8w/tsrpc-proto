import { uint } from 'tsbuffer-schema';

/**
 * 基础的数据传输单元
 */
export interface ServerInputData {
    serviceId: uint,
    buffer: Uint8Array,

    /** Short link don't need */
    sn?: uint
}
/**
 * ApiRes or SendMsg
 */
export interface ServerOutputData {
    // 二选一
    buffer?: Uint8Array,
    error?: TsrpcErrorData,

    /** Short link apiRes don't need (known in session) */
    serviceId?: uint,
    /** Short link don't need */
    sn?: uint
}

export interface TsrpcErrorData {
    message: string,
    type: TsrpcErrorType,
    code?: string,

    [key: string]: any
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