import { uint } from 'tsbuffer-schema';
import { TsrpcErrorType } from './TsrpcError';

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
    /** Short link apiRes don't need (known in session) */
    serviceId?: uint,

    // 二选一
    buffer?: Uint8Array,
    error?: ErrorData,

    /** Short link don't need */
    sn?: uint
}

export interface ErrorData {
    message: string,
    code?: string,
    type?: TsrpcErrorType,

    [key: string]: any
}